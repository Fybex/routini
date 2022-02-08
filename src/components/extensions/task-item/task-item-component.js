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

  const [showedDate, setShowedDate] = useState()
  const [taskInfo, setTaskInfo] = useState(
    props.extension.options.tasks.filter((task) => task.id === props.node.attrs.id).length > 0
      ?
      props.extension.options.tasks.filter((task) => task.id === props.node.attrs.id)[0]
      :
      {
        checkbox: false,
        id: props.node.attrs.id,
        content: null,
        description: null,
        date: null,
        fileId: false,
        priority: 4,
        fileId: props.extension.options.fileId
      }
  )

  const [dialogTaskOpen, setDialogTaskOpen] = useState(false)

  const onDialogTaskToggle = () => {
    setDialogTaskOpen(!dialogTaskOpen)
  }

  useEffect(() => {
    if (taskInfo.content === null) {
      setDialogTaskOpen(true)
      console.log('open dialog')
    }

  }, [taskInfo.content])

  useEffect(() => {
    setShowedDate(CheckDate(taskInfo.date))
  }, [])

  const handleCheckBox = (event) => {
    setTaskInfo({
      ...taskInfo,
      checkbox: event.target.checked,
    })
  }

  const handleDatePicker = (newValue) => {
    setTaskInfo({
      ...taskInfo,
      date: new Date(newValue)
    })

    setShowedDate(CheckDate(newValue))
  }

  const onUpdateTask = (obj) => {
    setTaskInfo({ ...obj, delete: false })
  }

  const onDeleteTask = () => {
    props.extension.options.onDeleteTask(taskInfo)

    props.deleteNode()
  }

  useEffect(() => {
    props.extension.options.onUpdateTask(taskInfo)
  }, [taskInfo])

  return (
    <>
      <NodeViewWrapper className="taskItem">
        <Box contentEditable={false} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '100%', boxShadow: '0 0 2px', my: 2, px: 1, borderRadius: '8px', cursor: 'pointer' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }} contentEditable={false}>
            <Checkbox
              checked={taskInfo.checkbox}
              onChange={handleCheckBox}
              sx={{
                color: PriorityColor(taskInfo.priority),
                '&.Mui-checked': {
                  color: PriorityColor(taskInfo.priority),
                },
              }}
            />
            <Box sx={{ py: 2 }} onClick={onDialogTaskToggle}>
              {taskInfo.checkbox ?
                <Typography
                  sx={{ textDecorationLine: 'line-through', textDecorationColor: PriorityColor(taskInfo.priority), textDecorationThickness: 2 }}
                >
                  {taskInfo.content}
                </Typography>
                :
                <Typography>{taskInfo.content}</Typography>
              }
            </Box>
          </Box>

          <Box contentEditable={false} onClick={onDialogTaskToggle} sx={{ display: 'flex', flexGrow: 1, p: 3.5 }} />

          <Box contentEditable={false} sx={{ display: 'flex', gap: 2 }}>
            <LocalizationProvider dateAdapter={AdapterDateFns} locale={uk}>
              <DatePicker
                mask="__.__.____"
                label="Date"
                value={taskInfo.date}
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
          taskInfo={taskInfo}
          onUpdateTask={onUpdateTask}
          onDeleteTask={() => onDeleteTask()}
          openInFile={true}
        />
      </NodeViewWrapper>
    </>
  )
}
