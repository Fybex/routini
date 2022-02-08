import React, { useState, useEffect } from 'react'
import { Box, Typography, IconButton, FormControl, TextField, Button } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import isEmail from 'validator/lib/isEmail'

export default function EditField({
    name,
    state,
    onEditToggle,
    onSave,
    defaultValue,
    label,
    heading,
    autoComplete
}) {
    const [value, setValue] = useState(defaultValue)
    const [isEmailValid, setIsEmailValid] = useState(true)

    const handleSubmit = (event) => {
        event.preventDefault()

        if (name === 'email') {
            if (isEmail(event.target.elements[name].value)) {
                onSave(event.target.elements[name].value)
                setValue(event.target.elements[name].value)
                onEditToggle()
                setIsEmailValid(true)
            } else {
                setIsEmailValid(false)
            }
        } else {
            onSave(event.target.elements[name].value)
            setValue(event.target.elements[name].value)
            onEditToggle()
        }


    }

    return (
        <Box>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{heading}</Typography>

            {state ?
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 1.25 }}>
                    <FormControl>
                        <TextField
                            error={isEmailValid === false}
                            helperText={!isEmailValid && ('Невірний адрес')}
                            id={name}
                            name={name}
                            label={label}
                            defaultValue={value}
                            type={autoComplete}
                        />
                    </FormControl>

                    <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                        <Button variant="outlined" onClick={onEditToggle}>Скасувати</Button>
                        <Button variant="contained" type="submit">Зберегти</Button>
                    </Box>
                </Box>
                :
                <Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Typography>{value}</Typography>
                        <IconButton onClick={onEditToggle}>
                            <EditIcon />
                        </IconButton>
                    </Box>
                </Box>
            }

        </Box>
    )
}
