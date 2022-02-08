import React from 'react'
import {
    MenuItem,
    ListItemIcon,
    ListItemText
} from '@mui/material'
import FlagIcon from '@mui/icons-material/Flag'

export default function PriorityItems({ onMenuItemPriorityClick }) {
    return (
        <>
            <MenuItem onClick={() => onMenuItemPriorityClick(1)}>
                <ListItemIcon>
                    <FlagIcon fontSize="small" sx={{ color: 'red' }} />
                </ListItemIcon>
                <ListItemText>Високий пріоритет</ListItemText>
            </MenuItem>
            <MenuItem onClick={() => onMenuItemPriorityClick(2)}>
                <ListItemIcon>
                    <FlagIcon fontSize="small" sx={{ color: 'orange' }} />
                </ListItemIcon>
                <ListItemText>Середній пріоритет</ListItemText>
            </MenuItem>
            <MenuItem onClick={() => onMenuItemPriorityClick(3)}>
                <ListItemIcon>
                    <FlagIcon fontSize="small" sx={{ color: 'green' }} />
                </ListItemIcon>
                <ListItemText>Низький пріоритет</ListItemText>
            </MenuItem>
            <MenuItem onClick={() => onMenuItemPriorityClick(4)}>
                <ListItemIcon>
                    <FlagIcon fontSize="small" sx={{ color: 'gray' }} />
                </ListItemIcon>
                <ListItemText>Відстутній пріоритет</ListItemText>
            </MenuItem>
        </>
    )
}
