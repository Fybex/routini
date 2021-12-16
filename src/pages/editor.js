import React, { useEffect, useState } from 'react'
import { Box } from '@mui/system'
import { useEditor, EditorContent } from '@tiptap/react'
import Document from '@tiptap/extension-document'
import StarterKit from '@tiptap/starter-kit'
import Placeholder from '@tiptap/extension-placeholder'
import Dropcursor from '@tiptap/extension-dropcursor'
import TextAlign from '@tiptap/extension-text-align'
import Underline from '@tiptap/extension-underline'
import TaskList from '@tiptap/extension-task-list'
import { Toolbar, Typography } from '@mui/material'
import taskItem from '../components/editor/editor-task-item/editor-task-item-extension'
import BubbleMenuComponent from '../components/editor/bubble-menu'
import '../styles/editor.css'

const CustomDocument = Document.extend({
    content: 'heading block*',
})

const Editor = ({ getActiveFile, onUpdateNote, open, drawerWidth, onUpdateTask, onDeleteTask, saveData, tasks }) => {

    const [id, setId] = useState();
    const [content, setContent] = useState()

    const editor = useEditor({
        autofocus: true,
        extensions: [
            CustomDocument,
            StarterKit.configure({
                document: false,
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
            }),
            TaskList,
            Placeholder.configure({
                placeholder: ({ node }) => {
                    if (node.type.name === 'heading') {
                        return 'Без заголовка'
                    }

                    return 'Висловіть свої думки'
                },
            }),
        ],
        content: getActiveFile.text,
        onBlur({ editor }) {
            setContent({
                title: editor.view.dom.children[0].innerText.length !== 1 ? editor.view.dom.children[0].innerText : 'Untitled',
                text: editor.getJSON(),
                rawText: editor.getText()
            })
        },
    })

    useEffect(() => {
        if (content) {
            onUpdateNote({
                id: getActiveFile.id,
                children: getActiveFile.children,
                ...content
            })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [content])

    useEffect(() => {
        if (getActiveFile) {
            if (getActiveFile.id !== id) {
                setId(getActiveFile.id);
                try {
                    editor.commands.setContent(getActiveFile.text, false);
                    editor.commands.focus();
                } catch (e) {
                    return;
                }
            }
        }
    }, [getActiveFile, editor, id]);

    const [lastTask, setLastTask] = useState();

    useEffect(() => {
        if (editor && lastTask !== editor.storage.taskItem.object) {
            if (editor.storage.taskItem.object.delete) {
                onDeleteTask({ ...editor.storage.taskItem.object, fileId: getActiveFile.id })
            } else {
                onUpdateTask({ ...editor.storage.taskItem.object, fileId: getActiveFile.id })
            }

            setLastTask(editor.storage.taskItem.object)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [editor, lastTask, onUpdateTask])

    const check = getActiveFile && getActiveFile.id !== 1 ? (
        <>
            <Box open={open} sx={{ py: 12, px: 20, mr: !open ? `${drawerWidth}px` : '0px', width: '100%' }} className='editarea'><Toolbar />
                <EditorContent editor={editor}>
                    <BubbleMenuComponent editor={editor} />
                </EditorContent>

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
            {check}
        </>
    )
}

export default Editor;