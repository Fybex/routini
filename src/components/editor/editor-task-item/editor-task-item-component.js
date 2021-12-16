import React, { useState, useEffect } from 'react'
import { NodeViewWrapper, NodeViewContent } from '@tiptap/react'
import Checkbox from '@mui/material/Checkbox'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import DatePicker from '@mui/lab/DatePicker'
import { getWeek } from 'date-fns'
import { areDayPropsEqual } from '@mui/lab/PickersDay/PickersDay'
import CheckDate from '../../../utils/check-date'

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {

  const handleCheckBox = (e) => {
    props.updateAttributes({
      checkbox: e.target.checked,
    })
  }

  const [showedDate, setShowedDate] = useState()
  const [id, setId] = useState()

  const [rerender, setRerender] = useState(false);


  useEffect(() => {
    const task = props.extension.options.tasks.filter(task => task.id === props.node.attrs.id)
    if (task[0]) {
      const { date, checkbox, content } = task[0]
      props.updateAttributes({
        date: date,
        checkbox: checkbox,
        content: content
      })
      setShowedDate(CheckDate(date))
    }
  }, [id])

  useEffect(() => {
    setShowedDate(CheckDate(props.node.attrs.date))
  }, [])

  const handleDatePicker = (newValue) => {
    props.updateAttributes({
      date: new Date(newValue)
    })
    // setShowedDate(new Date(newValue).toLocaleDateString('uk-UA', { weekday: 'short', month: 'long', day: 'numeric' }));
    setShowedDate(CheckDate(newValue))
    // setShowedDate(getWeek(newValue));
  }

  useEffect(() => {
    if(props.node.attrs.id !== id) {
      setId(props.node.attrs.id)
    }

    props.extension.storage.object = {
      id: props.node.attrs.id,
      checkbox: props.node.attrs.checkbox,
      date: new Date(props.node.attrs.date),
      content: props.node.content.content[0].content.content[0] ? props.node.content.content[0].content.content[0].text : '',
      delete: !props.node.content.content[0].content.content[0] ? true : false
    };
  })

  return (
    <>
      <NodeViewWrapper className="taskItem">
        <Box sx={{ display: 'flex' }}>
          <Checkbox checked={props.node.attrs.checkbox} onChange={handleCheckBox} contentEditable={false} inputProps={{ 'aria-label': 'controlled' }} />
          <NodeViewContent className="content"/>
        </Box>
        <Box contentEditable={false}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Date"
              value={props.node.attrs.date}
              onChange={(newValue) => handleDatePicker(newValue)}
              renderInput={({ inputRef, inputProps, InputProps }) => (
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Box ref={inputRef} {...inputProps} />
                  <Typography fontWeight="bold">{showedDate}</Typography>
                  {InputProps?.endAdornment}
                </Box>
              )}
            ></DatePicker>
          </LocalizationProvider>
        </Box>

      </NodeViewWrapper>
    </>
  )
}