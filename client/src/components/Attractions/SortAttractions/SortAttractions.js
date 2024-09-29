import React, { useContext } from 'react';
import { AttractionContext } from '../../../context/AttractionContext';
import { Box, FormControl, InputLabel, Select, MenuItem } from '@mui/material';


const SortAttractions = () => {
    const { chosenSort, setChosenSort } = useContext(AttractionContext);

    // Event handler for selecting a sort option
    const handleSortChange = (event) => {
        setChosenSort(event.target.value); // Update the sort option when user selects a new one
    };

    return (
        <div>
            <Box sx={{ display: 'flex', justifyContent: 'flex-start', ml: 120 }}>
                <FormControl sx={{ minWidth: 100 }}>
                <InputLabel id="demo-simple-select-label">Sort By</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={chosenSort}
                    label="Sort By"
                    onChange={handleSortChange}
                >
                    <MenuItem value="rating">Rating (high to low)</MenuItem>
                    <MenuItem value="country">Country Name</MenuItem>
                    <MenuItem value="title">Attraction Name</MenuItem>
                </Select>
                </FormControl>
            </Box>
        </div>
    );
}

export default SortAttractions;
