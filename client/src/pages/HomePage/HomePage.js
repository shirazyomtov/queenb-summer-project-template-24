import React from 'react';
import styles from './Home.module.css';
import ShowAttractions from '../../components/Attractions/ShowAttractions/ShowAttractions';
import FilterAttractions from '../../components/Attractions/FilterAttractions/FilterAttractions';
import SearchAttraction from '../../components/Attractions/SearchAttraction/SearchAttraction';
import UploadDataButton from "../../components/UploadData/UploadDataButton";
import SortAttractions from '../../components/Attractions/SortAttractions/SortAttractions';

const Home = () => {
  return (
    <div className={styles.home}>
      <h1 className={styles.headline}>Attractions</h1>
      <SearchAttraction/>
      <SortAttractions/>
      <FilterAttractions/>
      <ShowAttractions/>
      <UploadDataButton />
    </div>
  );
};

export default Home;
