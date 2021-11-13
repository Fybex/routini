import React, { useState } from 'react'
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import SearchResults from './search-results';

const style = {
    position: 'absolute',
    top: '20%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    borderRadius: 2,
    p: 4,
};

const CustomSearch = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(2)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

export default function Search({ papers, search, setSearch, handleSearchOpen, handleSearchClose, setActiveFile }) {
    const [searchField, setSearchField] = useState("");
    const [searchShow, setSearchShow] = useState(false);
    const [results, setResults] = useState(false);


    const filteredResults = (data = papers) => {
        const updatedDataArr = [];

        for (let i = 0; i < data.length; i++) {
            if(data[i].rawText) {
                console.log(data[i])
            }
            
            if (data[i].rawText && data[i].rawText.toLowerCase().includes(searchField)) {
                updatedDataArr.push({
                    ...data[i],
                    resultIndexStart: data[i].rawText.toLowerCase().indexOf(searchField),
                    resultIndexEnd: data[i].rawText.toLowerCase().indexOf(searchField)+searchField.length
                })
            } else if (data[i].children) {
                updatedDataArr.push(...filteredResults(data[i].children))
            }
        }


        if (data === papers) {
            setResults(updatedDataArr)
        } else {
            return updatedDataArr
        }
    }

    const searchResults = (searchShow) ? (<SearchResults results={results} setActiveFile={setActiveFile} setSearch={setSearch} />) : (null)

    return (
        <div>
            <div>
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    open={search}
                    onClose={handleSearchClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <Fade in={search}>
                        <Box sx={style}>
                            <CustomSearch>
                                <SearchIconWrapper>
                                    <SearchIcon />
                                </SearchIconWrapper>
                                <StyledInputBase
                                    placeholder="Search…"
                                    inputProps={{ 'aria-label': 'search' }}
                                    value={searchField}
                                    onChange={(event) => {
                                        if (event) {
                                            setSearchField(event.target.value.toLowerCase())
                                        }
                                        (event.target.value === '') ? (setSearchShow(false)) : (setSearchShow(true))
                                        filteredResults()
                                    }}
                                />
                            </CustomSearch>
                            {searchResults}
                        </Box>
                    </Fade>
                </Modal>
            </div>
        </div>
    )
}
