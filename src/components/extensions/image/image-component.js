import React, { useState } from 'react'
import { NodeViewWrapper } from '@tiptap/react'
import ReactFileReader from 'react-file-reader'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import CancelIcon from '@mui/icons-material/Cancel';

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
  const [visible, setVisible] = useState(true)

  const [tabValue, setTabValue] = useState('1');
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  }

  const [input, setInput] = useState('');
  const handleInputChange = (event) => {
    setInput(event.target.value);
  }

  const handleFileInput = (file) => {
    props.editor.commands.setImage({ src: file.base64 })
    props.deleteNode()
  }

  const handleURLInput = () => {
    props.editor.commands.setImage({ src: input })
    props.deleteNode()
  }

  return (
    <NodeViewWrapper>
      <Box sx={{ borderColor: 'primary.main', border: 1, borderRadius: 4, p: 2, position: 'relative' }}>
        <IconButton sx={{ position: 'absolute', top: 0, right: 0, zIndex: 100 }} onClick={() => props.deleteNode()}>
          <CancelIcon/>
        </IconButton>
        <TabContext value={tabValue}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleTabChange} aria-label="lab API tabs example">
              <Tab label="Завантажити" value="1" />
              <Tab label="Посилання" value="2" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <ReactFileReader handleFiles={handleFileInput} base64={true} multipleFiles={false}>
              <Button
                variant="contained"
                component="label"
              >
                Вибрати картинку
              </Button>
            </ReactFileReader>
          </TabPanel>
          <TabPanel value="2">
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <TextField
                label="Посилання"
                value={input}
                onChange={handleInputChange}
                sx={{ mb: 2 }}
              />
              <Button
                variant="contained"
                component="label"
                onClick={handleURLInput}
              >
                Вставити
              </Button>
            </Box>
          </TabPanel>
        </TabContext>
      </Box>
    </NodeViewWrapper>
  )
}