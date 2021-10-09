import React, { useState } from 'react';

import { Drawer, Box, CssBaseline, Typography, Button } from '@mui/material';
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';


const drawerWidth = 240;

const Sidebar = ({ folders, setActiveFile }) => {

    const createFolder = () => {

    }

    const elements = folders.map(folder => {
        const { id, title } = folder;
        return (
            <TreeItem sx={{ p: 0.5 }} nodeId={`${id}`} label={title} onClick={() => setActiveFile(id)} />
        )
    })

    return (
        <>
            <CssBaseline />
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    <Box sx={{ ml: 2, mt: 5 }}>
                        <Typography sx={{ fontWeight: 'bold' }} variant='h5'>routini</Typography>
                        <TreeView
                            aria-label="multi-select"
                            defaultCollapseIcon={<ExpandMoreIcon />}
                            defaultExpandIcon={<ChevronRightIcon />}
                            multiSelect
                            sx={{ overflowY: 'auto', my: 3 }}
                        >
                            <TreeItem nodeId="1" label="Замітки">
                                {elements}
                            </TreeItem>
                        </TreeView>
                        <Button variant='outlined' onClick={createFolder} >Додати папку</Button>
                    </Box>
                </Drawer>
            </Box>
        </>
    );
}

export default Sidebar;