import React from 'react'
import Box from '@mui/material/Box'
import TaskItem from '../components/task-item/task-item'
import Add from '@mui/icons-material/Add'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Toolbar from '@mui/material/Toolbar'
import { useTheme } from '@mui/material/styles'
import uuid from 'react-uuid'
import CheckDate from '../utils/check-date'


export default function Tasks({
    tasks,
    onUpdateTask,
    onDeleteTask,
    drawerWidth,
    open,
    getFileId,
    setActiveFile
}) {
    const handleAddTask = () => {
        onUpdateTask({
            checkbox: false,
            id: uuid(),
            content: null,
            description: null,
            date: null,
            fileId: false,
            priority: 4,
        })
    }

    function compareValues(key, order = 'asc') {
        return function innerSort(a, b) {
            if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
                // property doesn't exist on either object
                return 0;
            }

            const varA = (typeof a[key] === 'string')
                ? a[key].toUpperCase() : a[key];
            const varB = (typeof b[key] === 'string')
                ? b[key].toUpperCase() : b[key];

            let comparison = 0;
            if (varA > varB) {
                comparison = 1;
            } else if (varA < varB) {
                comparison = -1;
            }
            return (
                (order === 'desc') ? (comparison * -1) : comparison
            );
        };
    }

    const dates = [...new Set(tasks.sort(compareValues('date')).map(task => task.date ? CheckDate(task.date) : null))]

    const renderedTasks = () => {
        return dates.map(date => {
            if (date) {
                const tasksElements = tasks.sort((a, b) => a.priority - b.priority).filter(task => task.date !== null).map(
                    task => {
                        const tranformedDate = CheckDate(task.date)

                        if (task.id && date === tranformedDate) {
                            if (task.fileId) {
                                const { title, id } = getFileId(task.fileId)
                                return (
                                    <TaskItem key={task.id} title={title} id={id} setActiveFile={setActiveFile} task={task} onUpdateTask={onUpdateTask} onDeleteTask={onDeleteTask} />
                                )
                            }
                            return (
                                <TaskItem key={task.id} task={task} onUpdateTask={onUpdateTask} onDeleteTask={onDeleteTask} />
                            )
                        }
                    }
                )

                return (
                    <Box key={date}>
                        <Typography variant="h6" fontWeight="bold" > {date.charAt(0).toUpperCase() + date.slice(1)}</Typography>
                        {tasksElements}
                    </Box>
                )
            }
        })
    }

    const renderedTasksWithOutDate = () => {
        const tasksElements = tasks.sort((a, b) => a.priority - b.priority).filter(task => task.date === null).map(
            task => {
                if (task.id) {
                    if (task.fileId) {
                        const { title, id } = getFileId(task.fileId)
                        return (
                            <TaskItem key={task.id} title={title} id={id} setActiveFile={setActiveFile} task={task} onUpdateTask={onUpdateTask} onDeleteTask={onDeleteTask} />
                        )
                    }
                    return (
                        <TaskItem key={task.id} task={task} onUpdateTask={onUpdateTask} onDeleteTask={onDeleteTask} />
                    )
                }
            }
        )

        return (
            <Box>
                <Typography variant="h6" fontWeight="bold" >Без дати</Typography>
                {tasksElements}
            </Box>
        )
    }

    return (
        <Box open={open} sx={{ py: 12, px: 24, mr: !open ? `${drawerWidth}px` : '0px', width: '100%' }} className='editarea'><Toolbar />
            <Typography variant="h4" fontWeight="bold" sx={{ mb: 3 }} >Задачі</Typography>
            {renderedTasks()}
            {renderedTasksWithOutDate()}
            <Button onClick={handleAddTask} variant="outlined" startIcon={<Add />} color="inherit" sx={{ mt: 1.5, textTransform: 'none' }} >
                Додати задачу
            </Button>
        </Box>
    )
}
