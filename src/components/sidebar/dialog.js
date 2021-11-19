import React from 'react'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

export default function DialogComponent({ openDialog, setOpenDialog, deletePaper, lastClickedDelete }) {
    const handleClose = () => {
        setOpenDialog(false);
    };

    return (
        <>
            <Dialog
                open={openDialog}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    Ви впевнені, що хочете видалити файл?
                </DialogTitle>
                <DialogActions>
                    <Button onClick={handleClose}>Ні</Button>
                    <Button onClick={() => { handleClose(); deletePaper(lastClickedDelete) }} autoFocus>
                        Так
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}
