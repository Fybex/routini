import React from 'react'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogTitle from '@mui/material/DialogTitle'
import Button from '@mui/material/Button'

export default function DialogComponent({ 
    openState, 
    onClose, 
    onSuccessClose, 
    message 
}) {

    return (
        <>
            <Dialog
                open={openState}
                onClose={onClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {message}
                </DialogTitle>
                <DialogActions>
                    <Button onClick={onClose}>Ні</Button>
                    <Button onClick={onSuccessClose} autoFocus>
                        Так
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}
