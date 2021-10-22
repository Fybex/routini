import React, { useEffect } from 'react';
import { Box } from '@mui/system';
import { styled } from '@mui/material/styles';
import { useEditor, EditorContent } from '@tiptap/react';
import { Node } from "@tiptap/core";
import StarterKit from '@tiptap/starter-kit';
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

const Editor = ({ activeFile, onUpdateNote, open }) => {
    const data = activeFile.text;

    const tiptap = useEditor({
        extensions: [
            StarterKit,
            Placeholder,
        ],
        content: data,
    });

    if (activeFile) {
        tiptap.on('blur', () => onUpdateNote({
            ...activeFile,
            text: tiptap.getHTML(),
        }))
    };

    const check = activeFile ? (
        <>
            <Main open={open} sx={{ py: 12, px: 8, width: '100%' }} className='editarea'><Toolbar /><ContentEditable className='ProseMirror Title' html={activeFile.title} onChange={(e) => onUpdateNote({
                ...activeFile,
                title: e.target.value
            })} />
            <EditorContent editor={tiptap} /></Main></>
    ) : (
        <>
            <Box position='absolute' display='flex' justifyContent='center' alignItems='center' height='80vh' width='100%'>
                <Toolbar />
                <Typography variant='h4' align='center' fontWeight='bold' >Немає відкритих файлів</Typography>
            </Box>
        </>);

    useEffect(() => {
        if (activeFile) {
            try {
                tiptap.commands.setContent(data);
            } catch (e) {
                return;
            }
        }
    }, [activeFile]);

    return (
        <>
            
                
                {check}
        </>
    )
}

export default Editor;