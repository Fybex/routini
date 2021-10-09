import React, { useState } from 'react';
import { Box } from '@mui/system';


import Sidebar from '../sidebar/sidebar';
import Editor from '../editor/editor';

const App = () => {
    const [folders, setFolder] = useState([{ id: 2, title: 'Школа', text: '<p>Hello World! 🌎️</p>' }, { id: 3, title: 'Література', text: '<h3>Literature!</h3>' }]);
    const [activeFile, setActiveFile] = useState(1);
    

    const getActiveFile = () => {
        // console.log(folders.find(folder => folder.id === activeFolder));
        if(folders.find(folder => folder.id === activeFile)) {
            return folders.find(folder => folder.id === activeFile)
        }   else {
            return false;
        }
    }

    const onUpdateNote = (updatedNote) => {
        const updatedFoldersArr = folders.map(folder => {
            if(folder.id === updatedNote.id) {
                return updatedNote;
            }
            return folder;
        });
        setFolder(updatedFoldersArr);
    }

    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <Sidebar folders={folders} setActiveFile={setActiveFile} />
                <Editor activeFile={getActiveFile()} onUpdateNote={onUpdateNote} />
            </Box>

        </>
    )
}

export default App;