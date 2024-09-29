import React from 'react';
import styles from './FilterAttractions.module.css'; // Adjust the path if needed
import CheckBox from '../../common/FirstCheckBox/CheckBox';

const FilterType = ({ type, options, selectedOptions, handleChange }) => {

    return(
        <div className={styles.filterType}>
            <h3>{type.charAt(0).toUpperCase() + type.slice(1)}:</h3>
            <div className={styles.checkboxContainer}>

                {options.map((op) => (
                    <CheckBox
                        key={op} // Unique key for each checkbox
                        checkBoxName={op}
                        filterType={`${type}`}
                        selectedOptions={selectedOptions}
                        handleChange={(e)=>handleChange(e, `${type}`, op)}
                    />
                ))}
            </div>
        </div>
    )
}

export default FilterType