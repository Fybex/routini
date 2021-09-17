import React from 'react';

import { Drawer, Box, Toolbar, CssBaseline, List, ListItem, ListItemText, ListItemIcon, ListItemButton, Collapse, Divider, AppBar, Typography, Button } from '@mui/material';
import NotesIcon from '@mui/icons-material/Notes';
import NoteIcon from '@mui/icons-material/Note';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';

import './sidebar.css';

const drawerWidth = 240;

const Sidebar = (props) => {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [open, setOpen] = React.useState(true);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleClick = () => {
        setOpen(!open);
    };

    const drawer = (
        <div>
            <Typography sx={{ fontWeight: 'bold', pl: 2, pt: 5 }} variant='h5'>routini</Typography>
            <List sx={{my: 5}}>
                <ListItem button key='id-notes'>
                    <ListItemIcon>
                        <NotesIcon/>
                    </ListItemIcon>
                    <ListItemText primary='Всі задачі'/>
                </ListItem>
            </List>
            <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                <NoteIcon />
                </ListItemIcon>
                <ListItemText primary="Папки" />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                        <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary="Школа" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                        <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary="Література" />
                </ListItemButton>
                </List>
            </Collapse>
            <Button variant='outlined' sx={{ml: 2, mt: 3}}>Додати папку</Button>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>

        </Box>
    );
}

export default Sidebar;