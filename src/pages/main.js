import React, { useState, useEffect } from 'react'
import { Box } from '@mui/system'
import { CssBaseline } from '@mui/material'
import Snackbar from '@mui/material/Snackbar'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import Topbar from '../components/topbar/topbar'
import Sidebar from '../components/sidebar/sidebar'
import Editor from './editor'
import Tasks from './tasks'
import Settings from './settings'
import { useAuthState } from '../utils/firebase'
import { doc, updateDoc, getDoc } from 'firebase/firestore'
import { db } from '../utils/firebase'
import uuid from 'react-uuid'
import useEventListener from '../hooks/event-listener'
import { useTheme } from '@mui/material/styles'

export default function Main({ showEditor = false, showTasks = false, showSettings = false }) {
    const { user } = useAuthState()

    const [papers, setPaper] = useState();
    const [tasks, setTasks] = useState([]);

    const [dataGetted, setDataGetted] = useState(false);

    const getDocument = async () => {
        const docSnap = await getDoc(doc(db, `users/${user.uid}`))
        if (docSnap.exists()) {
            console.log("Document data:", JSON.parse(docSnap.data().papers), JSON.parse(docSnap.data().tasks));
            setPaper(JSON.parse(docSnap.data().papers))
            setTasks(JSON.parse(docSnap.data().tasks))
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
        setDataGetted(true)
    }

    useEffect(() => {
        getDocument()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const [open, setOpen] = useState(localStorage.open ? JSON.parse(localStorage.open) : true);

    const handleDrawerOpen = () => {
        setOpen(true);
        localStorage.setItem("open", JSON.stringify(true))
    };

    const handleDrawerClose = () => {
        setOpen(false);
        localStorage.setItem("open", JSON.stringify(false))
    };

    const [activeFile, setActiveFile] = useState(1);

    const getActiveFile = (data = papers, id = activeFile) => {

        let check = false
        if (Array.isArray(data)) {
            data.forEach(dataItem => {
                if (dataItem.id === id) {
                    check = dataItem
                } else if (dataItem.children && dataItem.children.length !== 0) {
                    check = getActiveFile(dataItem.children, id);
                }
            })
        }
        if (!check) {
            return false
        } else {
            return check;
        }
    }

    const getFileId = (id) => {
        return getActiveFile(papers, id)
    }

    const onUpdateNote = (updatedNote, data = papers) => {
        const updatedDataArr = data.map(dataItem => {
            if (dataItem.id === updatedNote.id) {
                return updatedNote;
            } else if (dataItem.children && dataItem.children.length !== 0) {
                return {
                    ...dataItem,
                    children: onUpdateNote(updatedNote, dataItem.children)
                }

            } else {
                return dataItem;
            }
        });

        if (data === papers) {
            setPaper(updatedDataArr)
        } else {
            return updatedDataArr
        }
    }

    const [expanded, setExpanded] = useState(localStorage.expanded ? JSON.parse(localStorage.expanded) : []);

    const handleExpandClick = (nodeId) => {
        const expandArr = expanded.filter(id => id !== nodeId).length === expanded.length ? [...expanded, nodeId] : expanded.filter(id => id !== nodeId)

        setExpanded(expandArr)
        localStorage.setItem("expanded", JSON.stringify(expandArr))
    }

    const addPaper = (id, data = papers) => {
        const paperId = uuid()

        const updatedDataArr = data.map(dataItem => {
            if (dataItem.id === id) {
                handleExpandClick(`${id}`)
                if (dataItem.children && dataItem.children.length !== 0) {
                    return {
                        ...dataItem,
                        children: [
                            ...dataItem.children,
                            {
                                id: paperId,
                                title: 'Untitled',
                                text: '<p></p>'
                            }
                        ]
                    };
                } else {
                    return {
                        ...dataItem,
                        children: [
                            {
                                id: paperId,
                                title: 'Untitled',
                                text: `<p></p>`
                            }
                        ]
                    };
                }

            } else if (dataItem.children && dataItem.children.length !== 0) {
                return {
                    ...dataItem,
                    children: addPaper(id, dataItem.children)
                }

            } else {
                return dataItem;
            }
        });

        if (data === papers) {
            setActiveFile(paperId)
            setPaper(updatedDataArr)
            handleExpandClick(paperId)
        } else {
            return updatedDataArr
        }
    }

    const deletePaper = (id, data = papers) => {
        const updatedDataArr = [];

        for (let i = 0; i < data.length; i++) {
            if (data[i].id === id) {

            } else if (data[i].children && data[i].length !== 0) {
                updatedDataArr.push({
                    ...data[i],
                    children: deletePaper(id, data[i].children)
                })
            } else {
                updatedDataArr.push(data[i])
            }
        }
        if (data === papers) {
            setTasks(tasks.filter(task => task.fileId !== id))
            setPaper(updatedDataArr)
        } else {
            return updatedDataArr
        }
    }

    const onUpdateTask = (newTask) => {
        const arrB = tasks.slice(0, tasks.map(taskItem => taskItem.id).indexOf(newTask.id))
        const arrA = tasks.slice(tasks.map(taskItem => taskItem.id).indexOf(newTask.id) + 1)
        const updatedDataArr = tasks.map(taskItem => taskItem.id).indexOf(newTask.id) !== -1 ? [...arrB, newTask, ...arrA] : [newTask, ...tasks]
        console.log('onUpdate', updatedDataArr)
        setTasks(updatedDataArr.filter(item => Boolean(item.id)))
    }

    const onDeleteTask = (newTask) => {
        const arrB = tasks.slice(0, tasks.map(taskItem => taskItem.id).indexOf(newTask.id))
        const arrA = tasks.slice(tasks.map(taskItem => taskItem.id).indexOf(newTask.id) + 1)
        const updatedDataArr = [...arrB, ...arrA]
        console.log('onDelete', updatedDataArr)
        setTasks(updatedDataArr.filter(item => Boolean(item.id)))
    }

    const defaultDrawerWidth = 240;
    const [drawerWidth, setDrawerWidth] = useState(localStorage.drawerWidth ? JSON.parse(localStorage.drawerWidth) : defaultDrawerWidth);
    const [saveNotification, setSaveNotification] = useState(false)

    const saveData = () => {
        console.log('saving')
        updateDoc(doc(db, `users/${user.uid}`), {
            papers: JSON.stringify(papers),
            tasks: JSON.stringify(tasks)
        })
        return false
    }

    const saveHandler = (event) => {
        if (event.ctrlKey && event.key === 's') {
            console.log('Save notification')
            event.preventDefault()
            saveData()
            setSaveNotification(true)

            return false
        }
    }

    useEventListener('keydown', saveHandler);

    useEffect(() => {
        if (dataGetted) {
            saveData()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [papers, tasks])

    const handleSaveNotificationClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setSaveNotification(false);
    }

    const action = (
        <>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleSaveNotificationClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </>
    )

    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <Topbar
                    papers={papers}
                    setActiveFile={setActiveFile}
                    handleDrawerOpen={handleDrawerOpen}
                />
                <Sidebar
                    papers={papers}
                    activeFile={activeFile}
                    setActiveFile={setActiveFile}
                    getActiveFile={getActiveFile(papers)}
                    onUpdateNote={onUpdateNote}
                    open={open}
                    handleDrawerClose={handleDrawerClose}
                    addPaper={addPaper}
                    deletePaper={deletePaper}
                    drawerWidth={drawerWidth}
                    setDrawerWidth={setDrawerWidth}
                    expanded={expanded}
                    handleExpandClick={handleExpandClick}
                />
                {showEditor && <Editor
                    getActiveFile={getActiveFile(papers)}
                    onUpdateNote={onUpdateNote}
                    onUpdateTask={onUpdateTask}
                    onDeleteTask={onDeleteTask}
                    open={open}
                    drawerWidth={drawerWidth}
                    tasks={tasks}
                />}
                {showTasks && <Tasks
                    tasks={tasks}
                    onUpdateTask={onUpdateTask}
                    onDeleteTask={onDeleteTask}
                    drawerWidth={drawerWidth}
                    open={open}
                    getFileId={getFileId}
                    setActiveFile={setActiveFile}
                />}
                {showSettings && <Settings
                    open={open}
                    drawerWidth={drawerWidth}
                />}
                <Snackbar
                    open={saveNotification}
                    autoHideDuration={6000}
                    onClose={handleSaveNotificationClose}
                    message="Зміни збережено"
                    action={action}
                />
            </Box>
        </>
    )
}
