import React, { useState } from 'react';
import { Box } from '@mui/system';
import { styled, useTheme, createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

import Sidebar from '../sidebar/sidebar';
import Editor from '../editor/editor';

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

const App = () => {
    const [papers, setPaper] = useState([
        { id: 2, title: 'Школа', text: '<p>Hello World! 🌎️</p>' }, 
        { id: 3, title: 'Література', text: '<h3>Literature!</h3>' }
    ]);
    const [activeFile, setActiveFile] = useState(1);
    const [open, setOpen] = useState(true);

    const handleDrawerOpen = () => {
        setOpen(true);
    };
    
      const handleDrawerClose = () => {
        setOpen(false);
    };

    const getActiveFile = () => {
        if(papers.find(folder => folder.id === activeFile)) {
            return papers.find(folder => folder.id === activeFile)
        }   else {
            return false;
        }
    }

    const onUpdateNote = (updatedNote) => {
        const updatedFoldersArr = papers.map(folder => {
            if(folder.id === updatedNote.id) {
                return updatedNote;
            }
            return folder;
        });
        setPaper(updatedFoldersArr);
    }

    const onAddPaper = () => {
        
    }

    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline/>
                <Sidebar folders={papers} setActiveFile={setActiveFile} open={open} handleDrawerOpen={handleDrawerOpen} handleDrawerClose={handleDrawerClose} onAddPaper={onAddPaper} />
                <Editor activeFile={getActiveFile()} onUpdateNote={onUpdateNote} open={open} />
                
            </Box>
        </>
    )
}

export default App;