import React, {useState, useEffect} from 'react';
import styles from './FilterAttractions.module.css'; // Adjust the path if needed
// import CheckBox from '../common/FirstCheckBox/CheckBox';
import FilterType from './FilterType';
import api from '../../services/api';
// import ShowAttractions from '../ShowAttractions/ShowAttractions';

const FilterAttractions = ({ onFilterChange, onSubmit }) => {
    const [selectedOptions, setSelectedOptions] = useState({
        continents_selected: [],
        categories_selected: []
    });
    const [continents, setContinents] = useState([]);
    const [categories, setCategories] = useState([]);
    // const [filters, setFilters] = useState({
    //     continents_filters: [],
    //     categories_filters: [],
    // })

    const getValues = async () => {
        try {
            const [continentsResponse, categoriesResponse] = await Promise.all([
                api.get(`/attractions/unique/continent`),
                api.get(`/attractions/unique/category`)
            ]);

            setContinents(continentsResponse.data);
            setCategories(categoriesResponse.data);

        } catch (error) {
            console.error('Error fetching filter values:', error);
        }
    }

    useEffect(() => {
        getValues()
    }, []);

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
            console.log("in filter com - update home selectedOptions with", checkBoxName, ": ", updatedOptions)
            // onFilterChange(updatedOptions)
            return updatedOptions;
        });
        // console.log("in filter com - update home selectedOptions with", checkBoxName, ": ", selectedOptions)
        // onFilterChange(selectedOptions)

    };


  return (
    <div className={styles.filtersContainer}>
        <h2 className={styles.filtersTitle}>Filters:</h2>
        {continents.length > 0 && (
            <FilterType 
            type="continents" 
            options={continents}
            selectedOptions={selectedOptions}
            handleChange={handleChange}
            />
        )}
        {categories.length > 0 && (
            <FilterType 
                type="categories"
                options={categories}
                selectedOptions={selectedOptions}
                handleChange={handleChange}
            />
        )}
        <button onClick={() => onSubmit(selectedOptions)}>Done</button>
        {/* <ShowAttractions continent={filters.continent} category={filters.category} /> */}

    </div>
  );
};

export default FilterAttractions;
