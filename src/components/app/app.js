import React, {
    createContext,
    useMemo,
    useState,
    useEffect
} from 'react'
import {
    HashRouter,
    Route,
    Routes,
    Navigate,
    Link
} from 'react-router-dom'
import { AuthContextProvider, useAuthState } from '../../utils/firebase'
import Main from '../../pages/main'
import SignIn from '../../pages/sign-in'
import SignUp from '../../pages/sign-up'
import {
    Box,
    CssBaseline
} from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles'

export const PapersContext = createContext();

const AuthenticatedRoute = ({ children }) => {
    const { isAuthenticated } = useAuthState()
    console.log(`AuthenticatedRoute: ${isAuthenticated}`)

    return isAuthenticated ? children : <Navigate to="/login" />
}

const UnauthenticatedRoute = ({ children }) => {
    const { isAuthenticated } = useAuthState()
    console.log(`UnauthenticatedRoute: ${isAuthenticated}`)

    return !isAuthenticated ? children : <Navigate to="/1" />

}

export const ColorModeContext = createContext();

export default function App() {
    const [mode, setMode] = useState(localStorage.mode ? JSON.parse(localStorage.mode) : 'light');

    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => {
                const currentMode = localStorage.mode ? JSON.parse(localStorage.mode) === 'light' ? 'dark' : 'light' : mode === 'light' ? 'dark' : 'light'

                setMode(() => (currentMode))
                localStorage.setItem('mode', JSON.stringify(currentMode))
                
            },
        }),
        [],
    )

    useEffect(() => {

    }, [])

    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                },
            }),
        [mode],
    )

    return (
        <AuthContextProvider>
            <HashRouter>
                <ThemeProvider theme={theme}>
                    <CssBaseline enableColorScheme />
                    <Box sx={{ display: 'none' }}>
                        <Link to="/">Home</Link> | <Link to="/login">Login</Link> |{' '}
                        <Link to="/signup">SignUp</Link>
                    </Box>
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <AuthenticatedRoute>
                                    <Main />
                                </AuthenticatedRoute>
                            }
                        >
                        </Route>

                        <Route path=":key" element={
                            <AuthenticatedRoute>
                                <Main showEditor={true} />
                            </AuthenticatedRoute>

                        } />

                        <Route path="tasks" element={
                            <AuthenticatedRoute>
                                <Main showTasks={true} />
                            </AuthenticatedRoute>

                        } />

                        <Route path="settings" element={
                            <AuthenticatedRoute>
                                <ColorModeContext.Provider value={colorMode}>
                                    <Main showSettings={true} />
                                </ColorModeContext.Provider>
                            </AuthenticatedRoute>
                        } />

                        <Route
                            path="/signup"
                            element={
                                <UnauthenticatedRoute>
                                    <SignUp />
                                </UnauthenticatedRoute>
                            }
                        />

                        <Route
                            path="/login"
                            element={
                                <UnauthenticatedRoute >
                                    <SignIn />
                                </UnauthenticatedRoute>
                            }
                        />
                    </Routes>
                </ThemeProvider>
            </HashRouter>
        </AuthContextProvider>
    )
}
