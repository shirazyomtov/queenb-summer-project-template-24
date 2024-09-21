import React, {useState, useEffect} from 'react';
import styles from './Home.module.css';
import ShowAttractions from '../../components/Attractions/ShowAttractions/ShowAttractions';
import FilterAttractions from '../../components/Attractions/FilterAttractions/FilterAttractions';
import SearchAttraction from '../../components/Attractions/SearchAttraction/SearchAttraction';
import React, { useState, useEffect } from "react";
import styles from "./Home.module.css";
import ShowAttractions from "../../components/Attractions/ShowAttractions/ShowAttractions";
import FilterAttractions from "../../components/Attractions/FilterAttractions/FilterAttractions";
import UploadDataButton from "../../components/UploadData/UploadDataButton";

const Home = () => {
  const [ToShowAttractions, setToShowAttractions] = useState(true);
  const [selectedOptions, setSelectedOptions] = useState({
    continents_selected: [],
    categories_selected: [],
    name_selected: "",
  });

  // Initial data fetching when component mounts
  useEffect(() => {
    // This effect ensures that attractions are fetched initially
    // and whenever selectedOptions change
    setToShowAttractions(true);
  }, []);

  const handleSubmit = (selectedOp) => {
    setSelectedOptions(selectedOp);
    console.log("new options to submit: ", selectedOptions);
    setToShowAttractions(false); // Temporarily set to false to trigger a re-render
    setTimeout(() => setToShowAttractions(true), 0); // Trigger ShowAttractions again
  };

  const handleSearch = (selectedName) => {
    setSelectedOptions({
      continents_selected: [],
      categories_selected: [],
      name_selected: selectedName
    });
    setToShowAttractions(false);
    setTimeout(() => setToShowAttractions(true), 0);
  }

  return (
    <div className={styles.home}>
      <h1 className={styles.headline}>Attractions</h1>
      <SearchAttraction handleSearch={handleSearch}/>
      <FilterAttractions onSubmit={handleSubmit}/>
      {ToShowAttractions && (
      <ShowAttractions
        continent={selectedOptions.continents_selected} 
        category={selectedOptions.categories_selected}
        title={selectedOptions.name_selected}
      />
      )}

      <UploadDataButton />
    </div>
  );
};

export default Home;
