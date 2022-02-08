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
import uk from 'date-fns/locale/uk'
import PriorityColor from '../../../utils/index-to-prioritycolor'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import IconButton from '@mui/material/IconButton'
import TaskDialog from '../../task-item/task-dialog/task-dialog'

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {

  const handleCheckBox = (event) => {
    props.updateAttributes({
      checkbox: event.target.checked,
    })
  }

  const [showedDate, setShowedDate] = useState()
  const [id, setId] = useState()

  const [dialogTaskOpen, setDialogTaskOpen] = useState(false)

  const onDialogTaskToggle = () => {
    setDialogTaskOpen(!dialogTaskOpen)
  }

  useEffect(() => {
    const task = props.extension.options.tasks.filter(task => task.id === props.node.attrs.id)

    if (task[0]) {
      const { date, checkbox, content, priority } = task[0]
      props.updateAttributes({
        date: date,
        checkbox: checkbox,
        content: content,
        priority: priority
      })
      setShowedDate(CheckDate(date))
    }
  }, [id])

  useEffect(() => {
    if (props.node.attrs.content === null) {
      setDialogTaskOpen(true)
      console.log('open dialog')
    }
      
  }, [props.node.attrs.content])

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

  const onUpdateTask = (obj) => {
    if (props.node.attrs.id !== id) {
      setId(props.node.attrs.id)
    }

    props.updateAttributes({ ...obj, delete: false })
  }

  const onDeleteTask = () => {
    console.log('Task was deleted')

    props.updateAttributes({
      delete: true
    })
  }

  useEffect(() => {
    if (props.node.attrs.id !== id) {
      setId(props.node.attrs.id)
    }

    console.log('USEEFFECT', props.node.attrs.delete, props.node.attrs)

    if (props.node.attrs.delete) {
      console.log('node deleted', props.node.attrs)
      props.extension.storage.object = {
        id: props.node.attrs.id,
        content: '',
        delete: props.node.attrs.delete
      }

      props.deleteNode()
    } else {
      props.extension.storage.object = {
        id: props.node.attrs.id,
        checkbox: props.node.attrs.checkbox,
        priority: props.node.attrs.priority,
        date: new Date(props.node.attrs.date),
        content: props.node.attrs.content,
        delete: false
      }
    }
  })

  return (
    <>
      <NodeViewWrapper className="taskItem">
        <Box contentEditable={false} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '100%', boxShadow: '0 0 2px', my: 2, px: 1, borderRadius: '8px', cursor: 'pointer' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }} contentEditable={false}>
            <Checkbox
              checked={props.node.attrs.checkbox}
              onChange={handleCheckBox}
              sx={{
                color: PriorityColor(props.node.attrs.priority),
                '&.Mui-checked': {
                  color: PriorityColor(props.node.attrs.priority),
                },
              }}
            />
            <Box sx={{ py: 2 }} onClick={onDialogTaskToggle}>
              {props.node.attrs.checkbox ?
                <Typography
                  sx={{ textDecorationLine: 'line-through', textDecorationColor: PriorityColor(props.node.attrs.priority), textDecorationThickness: 2 }}
                >
                  {props.node.attrs.content}
                </Typography>
                :
                <Typography>{props.node.attrs.content}</Typography>
              }
            </Box>
          </Box>

          <Box contentEditable={false} onClick={onDialogTaskToggle} sx={{ display: 'flex', flexGrow: 1, p: 3.5 }} />

          <Box contentEditable={false} sx={{ display: 'flex', gap: 2 }}>
            <LocalizationProvider dateAdapter={AdapterDateFns} locale={uk}>
              <DatePicker
                mask="__.__.____"
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

            <IconButton onClick={onDialogTaskToggle}>
              <MoreHorizIcon />
            </IconButton>
          </Box>
        </Box>

        <TaskDialog
          openState={dialogTaskOpen}
          onClose={onDialogTaskToggle}
          taskInfo={props.node.attrs}
          onUpdateTask={onUpdateTask}
          onDeleteTask={() => onDeleteTask()}
        />
      </NodeViewWrapper>
    </>
  )
}
