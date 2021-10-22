import React, { useState, useEffect, forwardRef } from 'react';
import clsx from 'clsx';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import TreeItem, { treeItemClasses, useTreeItem } from '@mui/lab/TreeItem';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';

const StyledTreeItemRoot = styled(TreeItem)(({ theme }) => ({
    [`& .${treeItemClasses.content}`]: {
        height: 60,
        paddingRight: theme.spacing(1),
        paddingTop: theme.spacing(0.5),
        paddingBottom: theme.spacing(0.5),
        fontWeight: theme.typography.fontWeightMedium,
        '&:hover': {
            backgroundColor: theme.palette.action.hover,
        },
        '&.Mui-focused, &.Mui-selected, &.Mui-selected.Mui-focused': {
            backgroundColor: `var(--tree-view-bg-color, ${theme.palette.action.selected})`,
        },
        [`& .${treeItemClasses.label}`]: {
            fontWeight: 'inherit',
            color: 'inherit',
        },
    },
    [`& .${treeItemClasses.group}`]: {
        marginLeft: 0,
        [`& .${treeItemClasses.content}`]: {
            paddingLeft: theme.spacing(4),
        },
    },
}));

const CustomContent = forwardRef(function CustomContent(props, ref) {
    const {
        classes,
        className,
        label,
        nodeId,
        icon: iconProp,
        expansionIcon,
        displayIcon,
    } = props;

    const {
        disabled,
        expanded,
        selected,
        focused,
        handleExpansion,
        handleSelection,
        preventSelection,
    } = useTreeItem(nodeId);

    const icon = iconProp || expansionIcon || displayIcon;

    const handleMouseDown = (event) => {
        preventSelection(event);
    };

    const handleExpansionClick = (event) => {
        handleExpansion(event);
    };

    const handleSelectionClick = (event) => {
        handleSelection(event);
    };

    const [mouse, setMouse] = useState(false);
    const [show, setShow] = useState(false);

    useEffect(() => {
        mouse ? setShow(true) : setShow(false);
    }, [mouse]);

    return (
        <Box
            className={clsx(className, classes.root, {
                [classes.expanded]: expanded,
                [classes.selected]: selected,
                [classes.focused]: focused,
                [classes.disabled]: disabled,
            })}
            onMouseDown={handleMouseDown}
            ref={ref}
            onMouseOver={() => setMouse(true)} onMouseOut={() => setMouse(false)} sx={{ display: 'flex', alignItems: 'center', p: 0.5, pr: 0 }}  >
            <div onClick={handleExpansionClick}>
                <IconButton size="small" >
                    {icon}
                </IconButton>
            </div>
            <Typography onClick={handleSelectionClick} variant="body1" sx={{ fontWeight: 'inherit', flexGrow: 1 }}>
                {label}
            </Typography>
            {show && (
                <Box sx={{ display: 'block' }} >
                    <IconButton size="small">
                        <AddIcon />
                    </IconButton>
                </Box>
            )}
        </Box>
    );
});

const StyledTreeItem = (props) => {
    return (<StyledTreeItemRoot ContentComponent={CustomContent} {...props} />);
}


export default StyledTreeItem;