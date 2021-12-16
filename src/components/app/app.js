import React, { createContext } from 'react'
import {
    BrowserRouter,
    Route,
    Routes,
    Navigate,
    Link
} from 'react-router-dom'
import { AuthContextProvider, useAuthState } from '../../utils/firebase'
import Main from '../../pages/main'
import SignIn from '../../pages/sign-in'
import SignUp from '../../pages/sign-up'
import Box from '@mui/material/Box'

export const PapersContext = createContext();

const AuthenticatedRoute = ({ children }) => {
    const { isAuthenticated } = useAuthState()
    console.log(`AuthenticatedRoute: ${isAuthenticated}`)

    return isAuthenticated ? children : <Navigate to="/login" />
}

const UnauthenticatedRoute = ({ children }) => {
    const { isAuthenticated } = useAuthState()
    console.log(`UnauthenticatedRoute: ${isAuthenticated}`)

    return !isAuthenticated ? children : <Navigate to="/routini" />

}

export default function App() {


    return (
        <AuthContextProvider>
            <BrowserRouter>
                <Box sx={{ display: 'none' }}>
                    <Link to="/routini">Home</Link> | <Link to="/routini/login">Login</Link> |{' '}
                    <Link to="/routini/signup">SignUp</Link>
                </Box>
                <Routes>
                    <Route
                        path="/routini/"
                        element={
                            <AuthenticatedRoute>
                                <Main />
                            </AuthenticatedRoute>
                        }
                    >

                    </Route>
                    <Route path="/routini/:key" element={
                        <AuthenticatedRoute>
                            <Main showEditor={true} />
                        </AuthenticatedRoute>

                    } />
                    <Route path="/routini/tasks" element={
                        <AuthenticatedRoute>
                            <Main showTasks={true} />
                        </AuthenticatedRoute>

                    } />
                    <Route
                        path="/routini/signup"
                        element={
                            <UnauthenticatedRoute>
                                <SignUp />
                            </UnauthenticatedRoute>
                        }
                    />
                    <Route
                        path="/routini/login"
                        element={
                            <UnauthenticatedRoute >
                                <SignIn />
                            </UnauthenticatedRoute>
                        }
                    />
                </Routes>
            </BrowserRouter>
        </AuthContextProvider>
    )
}
