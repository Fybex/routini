import React from 'react'
import { BubbleMenu } from '@tiptap/react'
import { styled } from '@mui/material/styles';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
// import CodeIcon from '@mui/icons-material/Code';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import DoneIcon from '@mui/icons-material/Done';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
// import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
    '& .MuiToggleButtonGroup-grouped': {
        margin: theme.spacing(0.5),
        border: 0,
        '&.Mui-disabled': {
            border: 0,
        },
        '&:not(:first-of-type)': {
            borderRadius: theme.shape.borderRadius,
        },
        '&:first-of-type': {
            borderRadius: theme.shape.borderRadius,
        },
    },
}));

export default function BubbleMenuComponent({ editor, visible }) {

    return (
        <>
            {editor && <BubbleMenu className="bubble-menu" tippyOptions={{ duration: 100, maxWidth: 'none' }} editor={editor}>
                {visible && <Paper
                    elevation={0}
                    sx={{
                        display: 'flex',
                        border: '1px solid #ddd',
                        width: '100%'

                    }}
                >
                    <StyledToggleButtonGroup
                        size="small"
                        sx={{ backgroundColor: 'white' }}
                    >
                        <ToggleButton value="bold" selected={editor.isActive('bold')} aria-label="bold" onClick={() => editor.chain().focus().toggleBold().run()}>
                            <FormatBoldIcon />
                        </ToggleButton>
                        <ToggleButton value="italic" selected={editor.isActive('italic')} aria-label="italic" onClick={() => editor.chain().focus().toggleItalic().run()}>
                            <FormatItalicIcon />
                        </ToggleButton>
                        <ToggleButton value="underline" selected={editor.isActive('underline')} aria-label="underline" onClick={() => editor.chain().focus().toggleUnderline().run()}>
                            <FormatUnderlinedIcon />
                        </ToggleButton>
                        {/* <ToggleButton value="code" selected={editor.isActive('code')} aria-label="code" onClick={() => editor.chain().focus().toggleCode().run()}>
                            <CodeIcon />
                        </ToggleButton> */}
                    </StyledToggleButtonGroup>
                    <Divider flexItem orientation="vertical" sx={{ mx: 0.5, my: 1 }} />
                    <StyledToggleButtonGroup
                        size="small"
                        sx={{ backgroundColor: 'white' }}
                    >
                        <ToggleButton value="h1" selected={editor.isActive('heading', { level: 1 })} onClick={() => editor.isActive('heading', { level: 1 }) ? editor.chain().focus().setParagraph().run() : editor.chain().focus().setHeading({ level: 1 }).run()}>
                            <Typography fontWeight="bold" >H1</Typography>
                        </ToggleButton>
                        <ToggleButton value="h2" selected={editor.isActive('heading', { level: 2 })} onClick={() => editor.isActive('heading', { level: 2 }) ? editor.chain().focus().setParagraph().run() : editor.chain().focus().setHeading({ level: 2 }).run()}>
                            <Typography fontWeight="bold" >H2</Typography>
                        </ToggleButton>
                    </StyledToggleButtonGroup>
                    <Divider flexItem orientation="vertical" sx={{ mx: 0.5, my: 1 }} />
                    <StyledToggleButtonGroup
                        size="small"
                        sx={{ backgroundColor: 'white' }}
                    >
                        <ToggleButton value="bulletList" selected={editor.isActive('bulletList')} onClick={() => editor.chain().focus().toggleBulletList().run()}>
                            <FormatListBulletedIcon />
                        </ToggleButton>
                        {/* <ToggleButton value="taskList" selected={editor.isActive('taskList')} onClick={() => editor.chain().focus().toggleTaskList().run()}>
                            <DoneIcon />
                        </ToggleButton> */}
                        <ToggleButton value="blockquote" selected={editor.isActive('blockquote')} onClick={() => editor.chain().focus().toggleBlockquote().run()}>
                            <FormatQuoteIcon />
                        </ToggleButton>
                    </StyledToggleButtonGroup>
                    <Divider flexItem orientation="vertical" sx={{ mx: 0.5, my: 1 }} />
                    <StyledToggleButtonGroup
                        size="small"
                        sx={{ backgroundColor: 'white' }}
                    >
                        <ToggleButton value="left" selected={editor.isActive({ textAlign: 'left' })} onClick={() => editor.chain().focus().setTextAlign('left').run()}>
                            <FormatAlignLeftIcon />
                        </ToggleButton>
                        <ToggleButton value="center" selected={editor.isActive({ textAlign: 'center' })} onClick={() => editor.chain().focus().setTextAlign('center').run()}>
                            <FormatAlignCenterIcon />
                        </ToggleButton>
                        <ToggleButton value="right" selected={editor.isActive({ textAlign: 'right' })} onClick={() => editor.chain().focus().setTextAlign('right').run()}>
                            <FormatAlignRightIcon />
                        </ToggleButton>
                    </StyledToggleButtonGroup>
                </Paper>}

            </BubbleMenu>}
        </>
    )
}
