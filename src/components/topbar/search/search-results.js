import React from 'react'
import { Box, List, ListItem, Divider, Typography, } from '@mui/material'

export default function SearchResults({ results, setActiveFile, setSearch }) {
    console.log(results)
    const handleClick = (id) => {
        setActiveFile(id)
        setSearch(false);
    }

    const card = (results) ? (results.map(item => {
        let startIndex = item.rawText.indexOf(' ', Math.max(item.resultIndexStart - 15, 0)), endIndex = item.resultIndexStart + 80 < item.rawText.length ? item.rawText.indexOf(' ', item.resultIndexStart + 80) : item.rawText.length

        console.log(startIndex, endIndex)
        return (
            <div>
                <ListItem sx={{ flexDirection: 'column', alignItems: 'flex-start' }} button onClick={() => handleClick(item.id)}>
                    <Typography variant="h6">{item.title}</Typography>
                    <Box sx={{ display: 'inline-block', whiteSpace: 'pre-wrap' }}>
                        <Typography component="span">{startIndex !== 0 ? '...' : ''}{item.rawText.slice(startIndex, item.resultIndexStart)}</Typography>
                        <Typography component="span" fontWeight="bold">{item.rawText.slice(item.resultIndexStart, item.rawText.indexOf(' ', item.resultIndexEnd))}</Typography>
                        <Typography component="span">{item.rawText.slice(item.rawText.indexOf(' ', item.resultIndexEnd), endIndex)}{endIndex !== item.rawText.length ? '...' : ''}</Typography>
                    </Box>
                </ListItem>
                <Divider />
            </div>)
    })) : (<Typography>Результатів не знайдено</Typography>)
    return (
        <div>
            <List sx={{ flexDirection: 'column' }}>
                {card}
            </List>
        </div>
    )
}
