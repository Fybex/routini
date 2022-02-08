import React, { useState, useEffect } from 'react'
import {
    Box,
    Typography,
    Checkbox,
    IconButton,
} from '@mui/material'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import DatePicker from '@mui/lab/DatePicker'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import CheckDate from '../../utils/check-date'
import { Link } from 'react-router-dom'
import uk from 'date-fns/locale/uk'
import TaskDialog from './task-dialog/task-dialog'
import PriorityColor from '../../utils/index-to-prioritycolor'

export default function TaskItem({
    task,
    onUpdateTask,
    onDeleteTask,
    title = null,
    id = null,
    setActiveFile = null
}) {
    const [showedDate, setShowedDate] = useState()
    const [dialogTaskOpen, setDialogTaskOpen] = useState(false)

    const handleCheckBox = (event) => {
        onUpdateTask({
            ...task,
            checkbox: event.target.checked
        })
    }

    const handleDatePicker = (newValue) => {
        onUpdateTask({
            ...task,
            date: new Date(newValue)
        })

        setShowedDate(CheckDate(newValue))
    }

    const handlePriority = (newValue) => {
        onUpdateTask({
            ...task,
            priority: newValue
        })
    }

    useEffect(() => {
        setShowedDate(CheckDate(task.date))
    }, [])

    useEffect(() => {
        if (task.content === null)
            setDialogTaskOpen(true)
    }, [task.content])

    const onDialogTaskToggle = () => {
        setDialogTaskOpen(!dialogTaskOpen)
    }

    return (
        <>
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '100%', boxShadow: '0 0 2px', my: 2, px: 1, borderRadius: '8px', cursor: 'pointer' }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Checkbox
                        checked={task.checkbox}
                        onChange={handleCheckBox}
                        sx={{
                            color: PriorityColor(task.priority),
                            '&.Mui-checked': {
                                color: PriorityColor(task.priority),
                            },
                        }}
                    />
                    <Box onClick={onDialogTaskToggle} sx={{ py: 2 }}>
                        {task.checkbox ?
                            <Typography
                                sx={{ textDecorationLine: 'line-through', textDecorationColor: PriorityColor(task.priority), textDecorationThickness: 2 }}
                            >
                                {task.content}
                            </Typography>
                            :
                            <Typography>{task.content}</Typography>
                        }
                    </Box>
                </Box>

                <Box onClick={onDialogTaskToggle} sx={{ display: 'flex', flexGrow: 1, p: 3.5 }}/>

                <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                    {title && id &&
                        <Box sx={{ mr: 2 }}>
                            <Link to={`/${id}`} onClick={() => setActiveFile(id)} style={{ color: 'inherit', textDecoration: 'none', textDecorationLine: 'underline' }} >
                                з файлу {title}
                            </Link>
                        </Box>
                    }
                    <LocalizationProvider dateAdapter={AdapterDateFns} locale={uk} >
                        <DatePicker
                            mask="__.__.____"
                            label="Date"
                            value={task.date}

                            onChange={(newValue) => handleDatePicker(newValue)}
                            renderInput={({ inputRef, inputProps, InputProps }) => (
                                <Box sx={{ display: 'flex', alignItems: 'center', }}>
                                    <Box ref={inputRef} {...inputProps} />
                                    {InputProps?.endAdornment}
                                </Box>
                            )}
                        ></DatePicker>
                    </LocalizationProvider>

                    <IconButton onClick={onDialogTaskToggle}>
                        <MoreHorizIcon />
                    </IconButton>
                </Box>
            </Box>

            <TaskDialog
                openState={dialogTaskOpen}
                onClose={onDialogTaskToggle}
                taskInfo={task}
                onUpdateTask={onUpdateTask}
                onDeleteTask={() => onDeleteTask(task)}
            />
        </>
    )
}
