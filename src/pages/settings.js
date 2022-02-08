import React, { useState, createContext, useContext } from 'react'
import {
    Box,
    Grid,
    Toolbar,
    Typography,
    List,
    ListItemButton,
    TextField,
    Avatar,
    Button,
    IconButton,
    ToggleButton,
    ToggleButtonGroup
} from '@mui/material'
import { updateProfile, updateEmail } from 'firebase/auth'
import { useAuthState } from '../utils/firebase'
import EditField from '../components/edit-field'
import FirebaseAvatar from '../components/firebase-avatar'
import EmailVerificationButton from '../components/email-verification'
import DeleteUser from '../components/delete-user'
import ReactFileReader from 'react-file-reader'
import { getStorage, ref, uploadString, getDownloadURL } from 'firebase/storage'
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import { ColorModeContext } from '../components/app/app'

export default function Settings({
    open,
    drawerWidth
}) {
    const { user } = useAuthState()

    console.log(user)

    const [editProfile, setEditProfile] = useState({ displayName: false, email: false, password: false })

    const onDisplayNameChange = () => {
        setEditProfile({ ...editProfile, displayName: !editProfile.displayName })
    }

    const onDisplayNameSave = (newName) => {
        updateProfile(user, { displayName: newName })
            .catch((error) => console.log(error))
    }

    const onEmailChange = () => {
        setEditProfile({ ...editProfile, email: !editProfile.email })
    }

    const onEmailSave = (newEmail) => {
        console.log(newEmail)

        updateEmail(user, newEmail)
            .then(() => console.log('Email updated'))
            .catch((error) => console.log(error))
    }

    const onAvatarUpload = async (photo) => {
        const storage = getStorage()

        const avatarRef = ref(storage, `images/${user.uid}`)
        await uploadString(avatarRef, photo.base64, 'data_url').then((snapshot) => {
            console.log('Uploaded a data_url string!')
        })

        getDownloadURL(ref(storage, `images/${user.uid}`))
            .then((url) => {
                updateProfile(user, { photoURL: url })
                    .then(() => console.log('Avatar updated'))
                    .catch((error) => console.log(error))
            })
            .catch((error) => {
                console.log(error)
            });
    }

    const profileSettings = (
        <Box sx={{ mx: 4, display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <FirebaseAvatar avatarSize={100} />
                <ReactFileReader handleFiles={onAvatarUpload} base64={true} multipleFiles={false}>
                    <Button
                        variant="contained"
                        component="label"
                        sx={{ height: 'fit-content' }}
                    >
                        Завантажити фото
                    </Button>
                </ReactFileReader>
            </Box>

            <EditField
                heading="Ім'я"
                name="name"
                onEditToggle={onDisplayNameChange}
                onSave={onDisplayNameSave}
                defaultValue={user.displayName}
                state={editProfile.displayName}
                label="Відображуване ім'я"
                autoComplete="given-name"
            />

            <Box>
                <EditField
                    heading="Електронна пошта"
                    name="email"
                    onEditToggle={onEmailChange}
                    onSave={onEmailSave}
                    defaultValue={user.email}
                    state={editProfile.email}
                    label="Email"
                    autoComplete="email"
                />

                <EmailVerificationButton />
            </Box>

            <DeleteUser />
        </Box>
    )

    const theme = useTheme()
    const colorMode = useContext(ColorModeContext)
    // const [mode, setMode] = useState(theme.palette.mode)

    const switchThemeMode = (
        <Box>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Тема</Typography>

            <ToggleButtonGroup
                color="primary"
                value={theme.palette.mode}
                exclusive
                sx={{ mt: 1.25 }}
            >
                <ToggleButton value="light" onClick={colorMode.toggleColorMode}><Brightness7Icon sx={{ mr: 1 }} /> Світла</ToggleButton>
                <ToggleButton value="dark" onClick={colorMode.toggleColorMode}><Brightness4Icon sx={{ mr: 1 }} /> Темна</ToggleButton>
            </ToggleButtonGroup>
        </Box>
    )


    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    }

    return (
        <Box open={open} sx={{ py: 12, px: 32, mr: !open ? `${drawerWidth}px` : '0px', width: '100%' }} className='editarea'>
            <Toolbar />
            <Typography variant="h4" fontWeight="bold" sx={{ mb: 3 }}>Налаштування</Typography>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <List>
                        <ListItemButton
                            selected={selectedIndex === 0}
                            onClick={(event) => handleListItemClick(event, 0)}
                        >
                            Профіль
                        </ListItemButton>
                        <ListItemButton
                            selected={selectedIndex === 1}
                            onClick={(event) => handleListItemClick(event, 1)}
                        >
                            Інше
                        </ListItemButton>
                    </List>
                </Grid>
                <Grid item xs={8}>
                    {selectedIndex === 0 ? profileSettings : null}
                    {selectedIndex === 1 ? switchThemeMode : null}
                </Grid>
            </Grid>
        </Box>
    )
}
