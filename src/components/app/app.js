import React, { useState, useEffect } from 'react';
import { Box } from '@mui/system';
import { CssBaseline } from '@mui/material';

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

    const [paperId, setPaperId] = useState(5);

    const [activeFile, setActiveFile] = useState(localStorage.activeFile ? JSON.parse(localStorage.activeFile) : 1);
    const [open, setOpen] = useState(true);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const getActiveFile = (data, id = activeFile) => {
        let check = false
        if (Array.isArray(data)) {
            data.forEach(dataItem => {
                if (dataItem.id === id) {
                    check = dataItem
                } else if (dataItem.children) {
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
        console.log(updatedNote.rawText)
        const updatedDataArr = data.map(dataItem => {
            if (dataItem.id === updatedNote.id) {
                return updatedNote;
            } else if (dataItem.children) {
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

    const addPaper = (id, data = papers) => {
        const updatedDataArr = data.map(dataItem => {
            if (dataItem.id === id) {
                if (dataItem.children) {
                    return {
                        ...dataItem,
                        children: [
                            ...dataItem.children,
                            {
                                id: paperId,
                                title: 'Untitled',
                                text: '<h1>Untitled</h1>'
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
                                text: `<h1>Untitled ${paperId}</h1>`
                            }
                        ]
                    };
                }

            } else if (dataItem.children) {
                return {
                    ...dataItem,
                    children: addPaper(id, dataItem.children)
                }

            } else {
                return dataItem;
            }
        });

        if (data === papers) {
            setPaperId(paperId + 1);
            setPaper(updatedDataArr)
        } else {
            return updatedDataArr
        }
    }

    const deletePaper = (id, data = papers) => {
        const updatedDataArr = [];

        for (let i = 0; i < data.length; i++) {
            if (data[i].id === id) {

            } else if (data[i].children) {
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

    useEffect(() => {
        localStorage.setItem("papers", JSON.stringify(papers))
        localStorage.setItem("activeFile", JSON.stringify(activeFile))
    }, [papers, activeFile])

    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <Sidebar papers={papers} setActiveFile={setActiveFile} open={open} handleDrawerOpen={handleDrawerOpen} handleDrawerClose={handleDrawerClose} addPaper={addPaper} deletePaper={deletePaper} />
                <Editor getActiveFile={getActiveFile(papers)} onUpdateNote={onUpdateNote} open={open} />

            </Box>
        </>
    )
}

export default App;