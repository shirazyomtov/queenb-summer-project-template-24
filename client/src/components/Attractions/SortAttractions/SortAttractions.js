import React, {useState, useEffect, useContext} from 'react';
// import styles from './SortAttractions.module.css'; // Adjust the path if needed
// import {fetchFilterValues} from '../../../services/utils';
import { AttractionContext } from '../../../context/AttractionContext';
// import Button from "@mui/material/Button";
// import { useEffect, useState, useContext } from 'react';
// import { AttractionContext } from './AttractionContext'; // Assuming your context is defined elsewhere

const SortAttractions = () => {
    const { filterValuesAttractions, setFilterValuesAttractions, getAttractions, chosenSort, setChosenSort } = useContext(AttractionContext);
    // const [chosenSort, setChosenSort] = useState(""); // Use state for selected sort option
    // const currAttractions = getAttractions()

    // // This useEffect will be triggered whenever the chosen sort option changes
    // useEffect(() => {
    //     if (filterValuesAttractions) {

    //         const sortAttractions = async () => {
    //         try {
    //             console.log("type filterValuesAttractions: ", currAttractions.type)
    //             console.log("filterValuesAttractions: ", currAttractions)

    //             if (chosenSort === 'title') {
    //                 // Sort by title
    //                 const sortedByTitle = [...currAttractions].sort((a, b) => {
    //                     return a.title.localeCompare(b.title);
    //                 });
    //                 setFilterValuesAttractions(sortedByTitle);
    //             } else if (chosenSort === 'continent') {
    //                 // Sort by continent
    //                 const sortedByContinent = [...currAttractions].sort((a, b) => {
    //                     return a.continent.localeCompare(b.continent);
    //                 });
    //                 // setFilterValuesAttractions(sortedByContinent);
    //             }
    //         } catch (error) {
    //             console.error('Error sorting attractions:', error);
    //         }
    //         };

    //         sortAttractions();
    //     }
    // }, [chosenSort, filterValuesAttractions, setFilterValuesAttractions]); // Triggers when chosenSort changes

    // Event handler for selecting a sort option
    const handleSortChange = (event) => {
        setChosenSort(event.target.value); // Update the sort option when user selects a new one
    };

    return (
        <div>
            <label>Sort by:</label>
            <select value={chosenSort} onChange={handleSortChange}>
                <option value="">Select</option>
                <option value="title">Title</option>
                <option value="continent">Continent</option>
            </select>
        </div>
    );
}

export default SortAttractions;
