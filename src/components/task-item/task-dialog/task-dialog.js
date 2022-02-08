import React, { useEffect, useState } from 'react'
import {
    Box,
    Button,
    Checkbox,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    IconButton,
    Menu
} from '@mui/material'
import FlagIcon from '@mui/icons-material/Flag'
import DeleteIcon from '@mui/icons-material/Delete'
import {
    LocalizationProvider,
    DatePicker
} from '@mui/lab'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Placeholder from '@tiptap/extension-placeholder'
import Paragraph from '@tiptap/extension-paragraph'
import { OneLine } from '../one-line-extension'
import CheckDate from '../../../utils/check-date'
import uk from 'date-fns/locale/uk'
import Dropcursor from '@tiptap/extension-dropcursor'
import TextAlign from '@tiptap/extension-text-align'
import Underline from '@tiptap/extension-underline'
import BubbleMenuComponent from '../../extensions/bubble-menu'
import Commands from '../../extensions/commands/commands'
import getSuggestionItems from '../../extensions/commands/items'
import renderItems from '../../extensions/commands/render-items'
import ImageTools from '../../extensions/image/resizable-image'
import ImageResizeWrapper from '../../extensions/image/image-extension'
import Image from '@tiptap/extension-image'
import PriorityItems from './priority-items'
import DialogComponent from '../../dialog'
import PriorityColor from '../../../utils/index-to-prioritycolor'
import getSuggestionTaskItems from '../../extensions/commands/task-items'

export default function TaskDialog({
    openState,
    onClose,
    taskInfo,
    onUpdateTask,
    onDeleteTask
}) {

    const [localTask, setLocalTask] = useState(taskInfo)
    const [localContent, setLocalContent] = useState(taskInfo.content)
    const [localDescription, setLocalDescription] = useState(taskInfo.description)

    useEffect(() => {
        setLocalTask(taskInfo)
    }, [taskInfo])

    const taskTitleEditor = useEditor({
        autofocus: true,
        extensions: [
            StarterKit.configure({
                paragraph: false,
            }),
            Paragraph.configure({
                HTMLAttributes: {
                    class: 'taskTitle',
                },
            }),
            Placeholder.configure({
                placeholder: ({ node }) => {
                    return 'Напишіть задачу'
                },
            }),
            OneLine,
        ],
        content: localContent,
        onBlur({ editor }) {
            setLocalContent(editor.getText())
        }
    })

    const editor = useEditor({
        extensions: [
            StarterKit,
            Commands.configure({
                suggestion: {
                    items: getSuggestionTaskItems,
                    render: renderItems
                }
            }),
            Dropcursor.configure({
                width: 2,
            }),
            TextAlign.configure({
                types: ['heading', 'paragraph'],
                alignments: ['left', 'center', 'right', 'justify']
            }),
            Underline,
            Image,
            // ImageTools,
            ImageResizeWrapper,
            Placeholder.configure({
                placeholder: ({ node }) => {
                    return 'Додати опис'
                },
            }),
        ],
        content: localDescription,
        onBlur({ editor }) {
            setLocalDescription(editor.getJSON())
        }
    })

    const onCancelClose = () => {
        onClose()
        setLocalTask(taskInfo)

        if (editor && taskTitleEditor) {
            taskTitleEditor.commands.setContent(taskInfo.content)
            editor.commands.setContent(taskInfo.description)
        }
    }

    const onSuccessClose = () => {
        onClose()
        onUpdateTask({
            ...localTask,
            content: localContent,
            description: localDescription
        })
    }

    const [menuPriorityAnchorEl, setMenuPriorityAnchorEl] = useState(null)
    const menuPriorityOpen = Boolean(menuPriorityAnchorEl)

    const onMenuPriorityOpen = (event) => {
        setMenuPriorityAnchorEl(event.currentTarget);
    }

    const onMenuPriorityClose = () => {
        setMenuPriorityAnchorEl(null)
    }

    const onMenuItemPriorityClick = (value) => {
        onMenuPriorityClose()
        setLocalTask({
            ...localTask,
            priority: value
        })
    }

    const onCheckBoxChange = (event) => {
        setLocalTask({
            ...localTask,
            checkbox: event.target.checked
        })
    }

    const onDatePickChange = (newValue) => {
        setLocalTask({
            ...localTask,
            date: new Date(newValue),
            showedDate: CheckDate(newValue)
        })
    }

    const [openDeleteTaskDialog, setOpenDeleteTaskDialog] = useState(false)

    const onDeleteTaskDialogToggle = () => {
        setOpenDeleteTaskDialog(!openDeleteTaskDialog)
    }

    const onDeleteTaskDialogSuccess = () => {
        onClose()
        onDeleteTaskDialogToggle()
        onDeleteTask()
    }

    return (
        <>
            <Dialog
                open={openState}
                onClose={onClose}
                maxWidth="md"
                scroll="body"
            >
                <Box sx={{ width: 640, overflow: 'hidden' }}>
                    <DialogTitle sx={{ pb: 0, px: 1.5 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Checkbox
                                    checked={localTask.checkbox}
                                    onChange={onCheckBoxChange}
                                    sx={{
                                        color: PriorityColor(localTask.priority),
                                        '&.Mui-checked': {
                                            color: PriorityColor(localTask.priority),
                                        },
                                    }}
                                />
                                {localTask.checkbox
                                    ?
                                    <Box sx={{ textDecorationLine: 'line-through', textDecorationColor: PriorityColor(localTask.priority), textDecorationThickness: 2 }}>
                                        <EditorContent editor={taskTitleEditor} />
                                    </Box>
                                    :
                                    <EditorContent editor={taskTitleEditor} />
                                }
                            </Box>

                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.25 }}>
                                <IconButton
                                    onClick={onMenuPriorityOpen}
                                    id="priority-button"
                                    aria-controls={menuPriorityOpen ? 'priority-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={menuPriorityOpen ? 'true' : undefined}>
                                    <FlagIcon sx={{ color: PriorityColor(localTask.priority) }} />
                                </IconButton>

                                <LocalizationProvider dateAdapter={AdapterDateFns} locale={uk} >
                                    <DatePicker
                                        mask="__.__.____"
                                        label="Date"
                                        value={localTask.date}
                                        onChange={(newValue) => onDatePickChange(newValue)}
                                        renderInput={({ inputRef, inputProps, InputProps }) => (
                                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                <Box ref={inputRef} {...inputProps} sx={{ display: 'flex' }} />
                                                <Box sx={{ marginLeft: '-19px' }}>{InputProps?.endAdornment}</Box>

                                            </Box>
                                        )}
                                    ></DatePicker>
                                </LocalizationProvider>

                                {!taskInfo.fileId ?
                                    <IconButton onClick={onDeleteTaskDialogToggle}>
                                        <DeleteIcon />
                                    </IconButton>
                                    : null}
                            </Box>
                        </Box>
                    </DialogTitle>

                    <DialogContent>
                        <EditorContent editor={editor} />
                    </DialogContent>

                    <DialogActions>
                        <Button onClick={onCancelClose} >Скасувати</Button>
                        <Button onClick={onSuccessClose} autoFocus>
                            Зберегти
                        </Button>
                    </DialogActions>
                </Box>
            </Dialog>

            <Menu
                id="priority-menu"
                anchorEl={menuPriorityAnchorEl}
                open={menuPriorityOpen}
                onClose={onMenuPriorityClose}
                MenuListProps={{
                    'aria-labelledby': 'priority-button',
                }}
            >
                <PriorityItems onMenuItemPriorityClick={onMenuItemPriorityClick} />
            </Menu>

            <DialogComponent
                openState={openDeleteTaskDialog}
                onClose={onDeleteTaskDialogToggle}
                onSuccessClose={onDeleteTaskDialogSuccess}
                message={"Ви впевнені, що хочете видалити задачу?"}
            />
        </>
    )
}
