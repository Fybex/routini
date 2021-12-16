import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Placeholder from '@tiptap/extension-placeholder'
import Typography from '@mui/material/Typography'
import Checkbox from '@mui/material/Checkbox'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import DatePicker from '@mui/lab/DatePicker'
import CheckDate from '../../utils/check-date'
import { OneLine } from './one-line-extension'
import { Link } from 'react-router-dom'

export default function TaskItem({ task, 
    onUpdateTask, 
    onDeleteTask,
    title = null,
    id = null,
    setActiveFile = null
 }) {
    const [taskInfo, setTaskInfo] = useState(task)
    const [taskContent, setTaskContent] = useState(task.content)
    const [showedDate, setShowedDate] = useState()

    const handleCheckBox = (e) => {
        setTaskInfo({
            ...taskInfo,
            checkbox: e.target.checked
        })
    }

    const handleDatePicker = (newValue) => {
        setTaskInfo({
            ...taskInfo,
            date: new Date(newValue)
        })

        setShowedDate(CheckDate(newValue))
    }

    const handleDeleteTask = (e) => {
        if(e.key === 'Backspace') {
            if(taskContent) {
                if(taskContent.length === 0) {
                    onDeleteTask({...taskInfo, content: taskContent})
                }
                
            }   else {
                onDeleteTask({...taskInfo, content: taskContent})
            }
        }
    }

    useEffect(() => {
        onUpdateTask({...taskInfo, content: taskContent})
    }, [taskInfo])
    

    useEffect(() => {
        setShowedDate(CheckDate(taskInfo.date))
    }, [])

    const editor = useEditor({
        autofocus: true,
        extensions: [
            StarterKit,
            Placeholder.configure({
                placeholder: ({ node }) => {
                    return 'Напишіть задачу'
                },
            }),
            OneLine,
        ],
        content: task.content,
        onUpdate({ editor }) {
            setTaskContent(editor.getText())
        },
    })

    return (
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '100%', justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Checkbox checked={taskInfo.checked} onChange={handleCheckBox} />
                {task.fileId ? <Typography>{task.content}</Typography> : <EditorContent editor={editor} onKeyDown={handleDeleteTask} onBlur={() => onUpdateTask({...taskInfo, content: taskContent})} />}
            </Box>

            <Box sx={{ display: 'flex' }}>
                {title && id && 
                <Box sx={{ mr: 2 }}>
                    <Link to={`/${id}`} onClick={() => setActiveFile(id)} style={{ color: 'inherit', textDecoration: 'none', textDecorationLine: 'underline' }} >
                        з файлу {title}
                    </Link>
            </Box>
                }
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                        label="Date"
                        value={taskInfo.date}
                        onChange={(newValue) => handleDatePicker(newValue)}
                        renderInput={({ inputRef, inputProps, InputProps }) => (
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Box ref={inputRef} {...inputProps} />
                                {InputProps?.endAdornment}
                            </Box>
                        )}
                    ></DatePicker>
                </LocalizationProvider>
            </Box>
        </Box>
    )
}
