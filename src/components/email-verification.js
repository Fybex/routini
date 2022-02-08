import React, { useEffect, useState } from 'react'
import { Box, Button } from '@mui/material'
import { useAuthState } from '../utils/firebase'
import { sendEmailVerification } from '@firebase/auth'

export default function EmailVerificationButton() {
    const { user } = useAuthState()

    const [buttonView, setButtonView] = useState('default')

    useEffect(() => {
        if(user.emailVerified) {
            setButtonView('verified')
        }
    }, [])

    const onUserVerification = () => {
        sendEmailVerification(user)
            .then(() => {
                setButtonView('success')
                setTimeout(setButtonView('default', 60000))
            })
            .catch((error) => {
                console.log(error)
                setButtonView('error')
                setTimeout(setButtonView('default', 30000))
            })
    }

    return (
        <>
            <Box sx={{ width: 'fit-content' }}>
                {buttonView === 'default' && <Button variant="contained" onClick={onUserVerification}>Підвердити пошту</Button>}
                {buttonView === 'success' && <Button variant="outlined" color="success">Письмо надіслано</Button>}
                {buttonView === 'error' && <Button variant="outlined" color="error">Сталася помилка</Button>}
                {buttonView === 'verified' && <Button variant="contained" color="success">Пошта підтверджена</Button>}
            </Box>
        </>
    )
}
