import React, { useState, useEffect } from 'react';
import { Box } from '@mui/system';
import { CssBaseline } from '@mui/material';

import Topbar from '../topbar/topbar';
import Sidebar from '../sidebar/sidebar';
import Editor from '../editor/editor';

const App = () => {
    const [papers, setPaper] = useState(localStorage.papers ? JSON.parse(localStorage.papers) : [
        {
            id: 1,
            title: 'Замітки',
            children: [
                {
                    id: 2, title: 'Школа',
                    text: '<p>Школа</p>',
                    rawText: 'Школа',
                    children: [
                        { id: 3, title: 'Алгебра', text: '<p>Алгебра</p><p>Теоре́ма Віє́та — формули, названі на честь Франсуа Вієта, що виражають коефіцієнти многочлена через його корені.</p>', rawText: 'Алгебра\n\nТеоре́ма Віє́та — формули, названі на честь Франсуа Вієта, що виражають коефіцієнти многочлена через його корені.' },
                        { id: 4, title: 'Геометрія', text: '<p>Геометрія</p><p>Теоре́ма Піфаго́ра (Пітаго́ра[1]) — одна із засадничих теорем евклідової геометрії, яка встановлює співвідношення між сторонами прямокутного трикутника. Уважається, що її довів грецький математик Піфагор, на чию честь її й названо (є й інші версії, зокрема думка, що цю теорему в загальному вигляді було сформульовано математиком-піфагорійцем Гіппасом).</p>', rawText: 'Геометрія\n\nТеоре́ма Піфаго́ра (Пітаго́ра[1]) — одна із засадничих теорем евклідової геометрії, яка встановлює співвідношення між сторонами прямокутного трикутника. Уважається, що її довів грецький математик Піфагор, на чию честь її й названо (є й інші версії, зокрема думка, що цю теорему в загальному вигляді було сформульовано математиком-піфагорійцем Гіппасом).', }
                    ],

                },
            ]
        }
    ]);

    const [open, setOpen] = useState(localStorage.open ? JSON.parse(localStorage.open) : true);

    const handleDrawerOpen = () => {
        setOpen(true);
        localStorage.setItem("open", JSON.stringify(true))
    };

    const handleDrawerClose = () => {
        setOpen(false);
        localStorage.setItem("open", JSON.stringify(false))
    };

    const [activeFile, setActiveFile] = useState(localStorage.activeFile ? JSON.parse(localStorage.activeFile) : 1);

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

    const [paperId, setPaperId] = useState(localStorage.paperId ? JSON.parse(localStorage.paperId) : 5);

    const [expanded, setExpanded] = useState(localStorage.expanded ? JSON.parse(localStorage.expanded) : []);

    const handleExpandClick = (nodeId) => {
        const expandArr = expanded.filter(id => id !== nodeId).length === expanded.length ? [...expanded, nodeId] : expanded.filter(id => id !== nodeId)

        setExpanded(expandArr)
        localStorage.setItem("expanded", JSON.stringify(expandArr))
    }

    const addPaper = (id, data = papers) => {
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
                                title: `Untitled ${paperId}`,
                                text: ''
                            }
                        ]
                    };
                } else {
                    return {
                        ...dataItem,
                        children: [
                            {
                                id: paperId,
                                title: `Untitled ${paperId}`,
                                text: ``
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
            localStorage.setItem("paperId", JSON.stringify(paperId + 1))
            setPaperId(paperId + 1)
            setPaper(updatedDataArr)
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
            setPaper(updatedDataArr)
        } else {
            return updatedDataArr
        }
    }

    const defaultDrawerWidth = 240;
    const [drawerWidth, setDrawerWidth] = useState(localStorage.drawerWidth ? JSON.parse(localStorage.drawerWidth) : defaultDrawerWidth);

    useEffect(() => {
        localStorage.setItem("papers", JSON.stringify(papers))
        localStorage.setItem("activeFile", JSON.stringify(activeFile))
    }, [papers, activeFile])

    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <Topbar 
                    papers={papers} 
                    setActiveFile={setActiveFile} 
                    handleDrawerOpen={handleDrawerOpen} 
                />
                <Sidebar
                    papers={papers}
                    setActiveFile={setActiveFile}
                    open={open}
                    handleDrawerClose={handleDrawerClose}
                    addPaper={addPaper}
                    deletePaper={deletePaper}
                    drawerWidth={drawerWidth}
                    setDrawerWidth={setDrawerWidth}
                    expanded={expanded}
                    handleExpandClick={handleExpandClick}
                />
                <Editor 
                    getActiveFile={getActiveFile(papers)} 
                    onUpdateNote={onUpdateNote} 
                    open={open} 
                    drawerWidth={drawerWidth} 
                />

            </Box>
        </>
    )
}

export default App;