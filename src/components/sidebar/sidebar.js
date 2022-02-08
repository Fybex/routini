import React, { useState } from 'react';
import { Drawer, IconButton } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import StyledTreeItem from './styled-tree-item';
import DialogComponent from '../dialog'
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import NotesIcon from '@mui/icons-material/Notes';

const minDrawerWidth = 180;
const maxDrawerWidth = 500;

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end'
}));

const DragDiv = styled('div')(({ theme }) => ({
    width: "5px",
    cursor: "ew-resize",
    padding: "4px 0 0",
    borderTop: "1px solid #ddd",
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    zIndex: 100,
    '&:hover': {
        backgroundColor: "#ddd",
        transition: "all 0.4s ease"
    },
}))

const Sidebar = ({
    papers,
    addPaper,
    deletePaper,
    activeFile,
    setActiveFile,
    getActiveFile,
    open,
    handleDrawerClose,
    drawerWidth,
    setDrawerWidth,
    expanded,
    handleExpandClick,
    onUpdateNote
}) => {
    const theme = useTheme()

    const handleMouseDown = event => {
        document.addEventListener("mouseup", handleMouseUp, true);
        document.addEventListener("mousemove", handleMouseMove, true);
    };

    const handleMouseUp = () => {
        document.removeEventListener("mouseup", handleMouseUp, true);
        document.removeEventListener("mousemove", handleMouseMove, true);
    };

    const handleMouseMove = (event => {
        const newWidth = event.clientX;
        if (newWidth > minDrawerWidth && newWidth < maxDrawerWidth) {
            setDrawerWidth(newWidth);
            localStorage.setItem("drawerWidth", JSON.stringify(newWidth))
        }
    });

    const [openDialog, setOpenDialog] = useState(false);

    const handleClickOpen = () => {
        setOpenDialog(true);
    };

    const [lastClickedDelete, setLastClickedDelete] = useState(false)

    const elements = (treeItems) => {
        return treeItems ? treeItems.map(treeItemData => {
            const { id } = treeItemData;
            const icon = treeItemData.id !== 1 ? null : NotesIcon;
            return (
                <StyledTreeItem
                    key={id}
                    nodeId={`${id}`}
                    label={treeItemData.title}
                    ContentProps={{
                        activeFile: activeFile,
                        addPaper: () => addPaper(treeItemData.id),
                        deletePaper: () => {
                            setLastClickedDelete(id)
                            handleClickOpen();
                        },
                        getActiveFile: getActiveFile,
                        onUpdateNote: onUpdateNote,
                        expand: () => handleExpandClick(`${treeItemData.id}`),
                        labelIcon: icon,
                    }}
                >
                    {treeItemData.children && treeItemData.children.length !== 0 ?
                        elements(treeItemData.children) : null}
                </StyledTreeItem>
            );
        }) : null

    };

    const onDialogDeletePaper = () => {
        setOpenDialog(false)
        deletePaper(lastClickedDelete)
    }

    const onDialogClose = () => {
        setOpenDialog(false)
    }

    return (
        <>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    transition: "all 0.1s ease-out",
                    userSelect: "none",
                    [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box', transition: "all 0.1s ease-out" },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DragDiv onMouseDown={event => handleMouseDown(event)} />
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </DrawerHeader>
                <TreeView
                    aria-label="multi-select"
                    defaultCollapseIcon={<ExpandMoreIcon />}
                    defaultExpandIcon={<ChevronRightIcon />}
                    multiSelect
                    expanded={expanded}
                    sx={{ overflowY: 'auto', my: 3 }}
                    onNodeSelect={(event, nodeIds) => setActiveFile(nodeIds[0])}
                >
                    <StyledTreeItem nodeId="tasks" label="Задачі" ContentProps={{ labelIcon: TaskAltIcon }} />
                    {elements(papers)}
                </TreeView>
            </Drawer>
            <DialogComponent
                openState={openDialog}
                onClose={onDialogClose}
                onSuccessClose={onDialogDeletePaper}
                message={"Ви впевнені, що хочете видалити файл?"}
            />
        </>
    );
}

export default Sidebar;