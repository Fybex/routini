import React, { useEffect } from 'react';
import { Box } from '@mui/system';
import { useEditor, EditorContent } from '@tiptap/react';
import { Node } from "@tiptap/core";
import StarterKit from '@tiptap/starter-kit';
import Placeholder from '@tiptap/extension-placeholder';
import ContentEditable from 'react-contenteditable';

import './editor.css';


const Editor = ({ activeFile, onUpdateNote }) => {
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

    const check = activeFile ? (<><ContentEditable className='ProseMirror Title' html={activeFile.title} onChange={(e) =>onUpdateNote({
        ...activeFile,
        title: e.target.value
    })} /><EditorContent editor={tiptap} /></>) : (<h2>Немає відкритих файлів</h2>);

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
            <Box sx={{ py: 12, px: 8, width: '100%' }} className='editarea'>
                {check}
            </Box>
        </>
    )
}

export default Editor;