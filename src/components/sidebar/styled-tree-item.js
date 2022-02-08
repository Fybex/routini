import React, { useState, forwardRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import TreeItem, { treeItemClasses, useTreeItem } from '@mui/lab/TreeItem'
import Typography from '@mui/material/Typography'
import AddIcon from '@mui/icons-material/Add'
import DeleteIcon from '@mui/icons-material/Delete'
import IconButton from '@mui/material/IconButton'
import { useSpring, animated } from 'react-spring'
import Collapse from '@mui/material/Collapse'
import { Link } from 'react-router-dom'
import TextField from '@mui/material/TextField'

function TransitionComponent(props) {
    const style = useSpring({
        from: {
            opacity: 0,
        },
        to: {
            opacity: props.in ? 1 : 0,
        },
    });

    return (
        <animated.div style={style}>
            <Collapse {...props} />
        </animated.div>
    );
}

TransitionComponent.propTypes = {
    /**
     * Show the component; triggers the enter or exit states
     */
    in: PropTypes.bool,
};

const StyledTreeItemRoot = styled(TreeItem)(({ theme }) => ({
    [`& .${treeItemClasses.content}`]: {
        // paddingRight: theme.spacing(1),
        // paddingTop: theme.spacing(0.5),
        // paddingBottom: theme.spacing(0.5),
        fontWeight: theme.typography.fontWeightMedium,
        color: theme.palette.text.main,
        '&:hover': {
            backgroundColor: theme.palette.action.hover,
        },
        '&.Mui-focused, &.Mui-selected, &.Mui-selected.Mui-focused, &:hover.Mui-selected': {
            backgroundColor: theme.palette.action.focus
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
        addPaper,
        deletePaper,
        expand,
        labelIcon,
        activeFile,
        getActiveFile,
        onUpdateNote
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
        expand();
    };

    const handleSelectionClick = (event) => {
        handleSelection(event);
    };

    const [isTitleInput, setIsTitleInput] = useState(false)
    const [titleInput, setTitleInput] = useState()

    const handleInputOn = () => {
        setIsTitleInput(true)
        setTitleInput(getActiveFile.title)
    }

    const handleInputOff = (event) => {
        setIsTitleInput(false)
        setTitleInput(event.target.value)
        onUpdateNote({
            ...getActiveFile,
            title: event.target.value
        })
    }

    const handleInputChange = (event) => {
        setTitleInput(event.target.value)
    }

    const [mouse, setMouse] = useState(false);

    useEffect(() => {
        if (activeFile == nodeId) {
            handleSelectionClick(nodeId);
        }
    }, [activeFile])

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
            onMouseEnter={() => setMouse(true)} onMouseLeave={() => setMouse(false)}
            sx={{ display: 'flex', alignItems: 'center', height: 70 }}
        >

            <div onClick={handleExpansionClick}>
                <IconButton size="small" >
                    {icon}
                </IconButton>
            </div>

            {isTitleInput ?
                <Box sx={{ mr: 1 }}>
                    <TextField
                        value={titleInput}
                        onChange={handleInputChange}
                        onBlur={handleInputOff}
                        size='small'
                        variant='standard'
                        autoFocus
                    />
                </Box> :
                <>
                    <Link
                        to={`/${nodeId}`}
                        onClick={handleSelectionClick}
                        onDoubleClick={handleInputOn}
                        style={{ flexGrow: 1, py: 2, display: 'flex', alignItems: 'center', color: 'inherit', textDecoration: 'none', userSelect: 'none' }}
                    >
                        <Box component={labelIcon} sx={{ mr: 1, height: 60 }} />
                        <Typography variant="body1" >
                            {label}
                        </Typography>
                    </Link>


                </>
            }

            {mouse && !isTitleInput && (
                <Box sx={{ display: 'flex', flexDirection: 'row' }} >
                    {nodeId !== '1' && nodeId !== 'tasks' ? (<IconButton size="small" onClick={deletePaper} >
                        <DeleteIcon />
                    </IconButton>) : null}

                    {nodeId !== 'tasks' ? (<IconButton size="small" onClick={addPaper} >
                        <AddIcon />
                    </IconButton>) : null}
                </Box>
            )}
        </Box>
    );
});

const StyledTreeItem = (props) => {
    return (<StyledTreeItemRoot TransitionComponent={TransitionComponent} ContentComponent={CustomContent}  {...props} />);
}


export default StyledTreeItem;