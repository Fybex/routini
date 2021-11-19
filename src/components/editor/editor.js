import React, { useEffect, useState, useCallback } from 'react'
import { Box } from '@mui/system';
import { useEditor, EditorContent } from '@tiptap/react';
import TaskList from '@tiptap/extension-task-list'
import TaskItem from '@tiptap/extension-task-item'
import Document from '@tiptap/extension-document'
import StarterKit from '@tiptap/starter-kit'
import Placeholder from '@tiptap/extension-placeholder'
import Dropcursor from '@tiptap/extension-dropcursor'
import TextAlign from '@tiptap/extension-text-align'
import Underline from '@tiptap/extension-underline'
import { Toolbar, Typography } from '@mui/material'
// import ReactComponent from './task-item/task-item-extension'
import './editor.css';

import BubbleMenuComponent from './bubble-menu';

const CustomDocument = Document.extend({
    content: 'heading block*',
})

const Editor = ({ getActiveFile, onUpdateNote, open, drawerWidth }) => {
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
            Placeholder.configure({
                placeholder: ({ node }) => {
                    if (node.type.name === 'heading') {
                        return 'Untitled'
                    }

                    return 'Can you add some further context?'
                },
            }),
        ],
        content: getActiveFile.text,
        onUpdate({ editor }) {
            setContent({
                title: editor.view.dom.children[0].innerText.length !== 1 ? editor.view.dom.children[0].innerText : 'Untitled',
                text: editor.getHTML(),
                rawText: editor.getText()
            })
        }
    })

    useEffect(() => {
        if (content) {
            onUpdateNote({
                id: getActiveFile.id,
                children: getActiveFile.children,
                ...content
            })
        }
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

    const check = getActiveFile && getActiveFile.id !== 1 ? (
        <>
            <Box open={open} sx={{ py: 12, px: 18, mr: !open ? `${drawerWidth}px` : '0px', width: '100%' }} className='editarea'><Toolbar />
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
        </>);

    return (
        <>
            {check}
        </>
    )
}

export default Editor;