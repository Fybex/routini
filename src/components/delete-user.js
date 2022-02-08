import React, { useState } from 'react'
import { Typography, Box, Button } from '@mui/material'
import { useAuthState } from '../utils/firebase'
import { deleteUser } from '@firebase/auth'
import DialogComponent from './dialog'
import { getStorage, ref, deleteObject } from "firebase/storage"

export default function DeleteUser() {
    const { user } = useAuthState()

    const [dialogDeleteUserOpen, setDialogDeleteUserOpen] = useState(false)

    const onDialogDeleteUserToggle = () => {
        setDialogDeleteUserOpen(!dialogDeleteUserOpen)
    }

    const deleteFirebaseUser = () => {
        deleteUser(user).then(() => {
            console.log(`${user.displayName} was successfully deleted!`)
        }).catch((error) => console.log(error))

        const storage = getStorage();

        const avatarRef = ref(storage, `images/${user.uid}`)
        
        deleteObject(avatarRef).then(() => {
            // File deleted successfully
          }).catch((error) => {
            console.log(error)
          });
          
    }

    const onDialogDeleteUserSuccessClose = () => {
        onDialogDeleteUserToggle()
        deleteFirebaseUser()
    }

    return (
        <>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Видалення аккаунту</Typography>
            <Box>
                <Typography>Після того, як ви видалите свій обліковий запис, шляху назад немає. Будь ласка, будьте певні.</Typography>
                <Button variant="contained" color="error" sx={{ width: 'fit-content' }} onClick={onDialogDeleteUserToggle}>Видалити свій аккаунт</Button>
            </Box>

            <DialogComponent
                openState={dialogDeleteUserOpen}
                onClose={onDialogDeleteUserToggle}
                onSuccessClose={onDialogDeleteUserSuccessClose}
                message={"Ви впевнені, що хочете видалити свій аккаунт?"}
            />
        </>
    )
}
