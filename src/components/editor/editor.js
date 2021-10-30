import React, { useEffect, useState } from 'react';
import { Box } from '@mui/system';
import { styled } from '@mui/material/styles';
import { useEditor, EditorContent } from '@tiptap/react';
import { Node } from "@tiptap/core";
import Document from '@tiptap/extension-document';
import StarterKit from '@tiptap/starter-kit'
import Placeholder from '@tiptap/extension-placeholder';
import ContentEditable from 'react-contenteditable';


import './editor.css';
import { Toolbar, Typography } from '@mui/material';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

const CustomDocument = Document.extend({
    content: 'heading block*',
})

const Editor = ({ getActiveFile, onUpdateNote, open }) => {
    const [id, setId] = useState();

    const editor = useEditor({
        extensions: [
            CustomDocument,
            StarterKit.configure({
                document: false,
            }),
            Placeholder.configure({
                placeholder: ({ node }) => {
                    if (node.type.name === 'heading') {
                        return 'What’s the title?'
                    }

                    return 'Can you add some further context?'
                },
            }),
        ],
        content: getActiveFile.text,
    })

    useEffect(() => {
        if (getActiveFile) {
            if (getActiveFile.id !== id) {
                setId(getActiveFile.id);
                console.log(getActiveFile.id);
                try {
                    editor.commands.setContent(getActiveFile.text);
                } catch (e) {
                    return;
                }
            }
        }
    }, [getActiveFile]);

    const check = getActiveFile ? (
        <>
            <Main open={open} sx={{ py: 12, px: 8, width: '100%' }} className='editarea'><Toolbar />
                {/* <ContentEditable className='ProseMirror Title' html={getActiveFile.title} onChange={(e) => onUpdateNote({
                ...getActiveFile,
                title: e.target.value
            })} /> */}
                <EditorContent editor={editor} onBlur={() => onUpdateNote({
                ...getActiveFile,
                text: editor.getJSON(),
            })} /></Main></>
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