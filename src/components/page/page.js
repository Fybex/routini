import React, { useState } from 'react';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import TextFieldsIcon from '@mui/icons-material/TextFields';

import './page.css';
import { Box } from '@mui/system';

const Page = () => {
    const [notesTextArea, setNotesTextArea] = useState([]);

    const handleChange = (e) => {
        setNotesTextArea([e.target.value]);
    }

    const [formats, setFormats] = useState(() => []);

    const handleFormat = (e, newFormats) => {
        setFormats(newFormats);
    };

    const changeTextToHeader = (e) => {
        e.preventDefault();
        document.execCommand('formatBlock', false, 'h1');
    }

    const changeTextToBold = (e) => {
        e.preventDefault();
        document.execCommand('bold');
    }

    const changeTextToItalic = (e) => {
        e.preventDefault();
        document.execCommand('italic');
    }

    return (
        <Box className="editor">
            <ToggleButtonGroup
            value={formats}
            onChange={handleFormat}
            aria-label="text formatting"
            sx={{mb: 4}}
            >
                <ToggleButton value="h1" aria-label="h1" onKeyDown={(e) => {if(e.key === 'Control' && 'Alt' && '1') {changeTextToBold()}}} onMouseDown={changeTextToHeader}>
                    <TextFieldsIcon />
                </ToggleButton>
                <ToggleButton value="bold" aria-label="bold" onKeyDown={(e) => {if(e.key === 'Control' && 'b') {changeTextToBold()}}} onMouseDown={changeTextToBold}>
                    <FormatBoldIcon />
                </ToggleButton>
                <ToggleButton value="italic" aria-label="italic" onKeyDown={(e) => {if(e.key === 'Control' && 'i') {changeTextToItalic()}}} onMouseDown={changeTextToItalic}>
                    <FormatItalicIcon />
                </ToggleButton>
            </ToggleButtonGroup>

            <div 
                contentEditable 
                className="textarea" 
                onChange={handleChange}
                data-placeholder="Type something...">
                    {notesTextArea}
            </div>
        </Box>
    );
}

export default Page;