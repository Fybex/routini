import React, { useEffect, useState, createContext } from 'react'
import { Box } from '@mui/system'
import ContentEditable from 'react-contenteditable'
import { useEditor, EditorContent } from '@tiptap/react'
import Document from '@tiptap/extension-document'
import StarterKit from '@tiptap/starter-kit'
import Placeholder from '@tiptap/extension-placeholder'
import Dropcursor from '@tiptap/extension-dropcursor'
import TextAlign from '@tiptap/extension-text-align'
import Underline from '@tiptap/extension-underline'
import { Toolbar, Typography } from '@mui/material'
import taskItem from '../components/extensions/task-item/task-item-extension'
import BubbleMenuComponent from '../components/extensions/bubble-menu'
import Commands from '../components/extensions/commands/commands'
import getSuggestionItems from '../components/extensions/commands/items'
import renderItems from '../components/extensions/commands/render-items'
// import ImageTools from '../components/extensions/image/resizable-image'
// import ImageResizeWrapper from '../components/extensions/image/image-extension'
import Image from '@tiptap/extension-image'

import '../styles/style.css'

export const TasksContext = createContext()

const Editor = ({ getActiveFile, onUpdateNote, open, drawerWidth, onUpdateTask, onDeleteTask, saveData, tasks }) => {

    const [id, setId] = useState()
    const [content, setContent] = useState()
    const [title, setTitle] = useState()

    const editor = useEditor({
        extensions: [
            StarterKit,
            Commands.configure({
                suggestion: {
                    items: getSuggestionItems,
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
            taskItem.configure({
                tasks: tasks,
                onUpdateTask: onUpdateTask,
                onDeleteTask: onDeleteTask,
                fileId: getActiveFile.id
            }),
            Image,
            Placeholder.configure({
                placeholder: ({ node }) => {
                    return 'Натисність "/" для появи команд'
                },
            }),
        ],
        content: getActiveFile.text,
        onBlur({ editor }) {
            setContent({
                text: editor.getJSON(),
                rawText: editor.getText()
            })
        },
        onCreate({ editor }) {
            editor.commands.setContent(getActiveFile.text, false);
        }
    })

    useEffect(() => {
        if (content) {
            onUpdateNote({
                id: getActiveFile.id,
                children: getActiveFile.children,
                title: title,
                ...content
            })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [content])

    useEffect(() => {
        if (getActiveFile) {
            setTitle(getActiveFile.title)

            if (getActiveFile.id !== id) {
                setId(getActiveFile.id);
                try {
                    editor.commands.setContent(getActiveFile.text, false);
                    editor.commands.focus();
                } catch (event) {
                    return;
                }
            }
        }
    }, [getActiveFile, editor, id]);

    const [lastTask, setLastTask] = useState();

    // useEffect(() => {
    //     console.log('onUpdateTask')
    //     if (editor && lastTask !== editor.storage.taskItem.object) {
    //         if (editor.storage.taskItem.object.delete) {
    //             onDeleteTask({ ...editor.storage.taskItem.object, fileId: getActiveFile.id })
    //         } else {
    //             onUpdateTask({ ...editor.storage.taskItem.object, fileId: getActiveFile.id })
    //         }

    //         setLastTask(editor.storage.taskItem.object)
    //     }
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [editor, lastTask, onUpdateTask])

    const handleTitleChange = (event) => {
        setTitle(event.target.value)

        onUpdateNote({
            ...getActiveFile,
            title: event.target.value
        })
    }

    const handleTitleKeyDown = (event) => {
        if (event.key === 'Enter' || event.key === 'ArrowDown') {
            event.preventDefault()
            editor.commands.focus()
        }
    }

    const check = getActiveFile && getActiveFile.id !== 1 ? (
        <>
            <Box open={open} sx={{ py: 12, px: 20, mr: !open ? `${drawerWidth}px` : '0px', width: '100%' }} className='editarea'><Toolbar />
                <>
                    <ContentEditable
                        className='ProseMirror Title'
                        html={`${title}`}
                        onChange={handleTitleChange}
                        onKeyDown={handleTitleKeyDown}
                    />
                    <EditorContent editor={editor}>
                        <BubbleMenuComponent editor={editor} visible={editor ? !editor.isActive('image') && !editor.isActive('taskItem') : false} />
                    </EditorContent>
                </>
            </Box>
        </>
    ) : (
        <>
            <Box position='absolute' display='flex' justifyContent='center' alignItems='center' height='80vh' width='100%'>
                <Toolbar />
                <Typography variant='h4' align='center' fontWeight='bold' >Немає відкритих файлів</Typography>
            </Box>
        </>
    );

    return (
        <>
            <TasksContext.Provider value={tasks}>
                {check}
            </TasksContext.Provider>
        </>
    )
}

export default Editor;