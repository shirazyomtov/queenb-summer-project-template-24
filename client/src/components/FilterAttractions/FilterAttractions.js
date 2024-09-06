import React, {useState} from 'react';
import styles from './FilterAttractions.module.css'; // Adjust the path if needed
import CheckBox from '../common/FirstCheckBox/CheckBox';
import FilterType from './FilterType';

const FilterAttractions = () => {
    const [selectedOptions, setSelectedOptions] = useState({
        continents_selected: [],
        categories_selected: []
    });

    // Predefined options
    const continents = ['Europe', 'Oceania'];
    const categories = ['Restaurants', 'Sights'];

    const handleChange = (event, filterType, checkBoxName) => {
        const { checked } = event.target;

        // Update selected options based on filter type - 
        // add or delete from the filter type array
        setSelectedOptions(prevOptions => {
            console.log("prevOptions: ", prevOptions)

            // Ensure that prevOptions[filterType] is always an array
            const currentOptions = prevOptions[filterType] || [];
            // Determine the updated options based on whether the checkbox is checked or not
            const updatedOptions = {
                ...prevOptions,
                [filterType]: checked
                    ? [...currentOptions, checkBoxName]  // Add value if checked
                    : currentOptions.filter(option => option !== checkBoxName) // Remove value if unchecked
            };
            console.log("updatedOptions: ", updatedOptions)

            return updatedOptions;
        });
    };


  return (
    <div className={styles.filtersContainer}>
        <h2 className={styles.filtersTitle}>Filters:</h2>
        <FilterType 
            type="continents" 
            options={continents}
            selectedOptions={selectedOptions}
            handleChange={handleChange}
        />

        <FilterType 
            type="category"
            options={categories}
            selectedOptions={selectedOptions}
            handleChange={handleChange}
        />
    </div>
  );
};

export default FilterAttractions;
