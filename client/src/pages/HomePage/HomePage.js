import React from 'react';
import styles from './Home.module.css';
import ShowAttractions from '../../components/ShowAttractions/ShowAttractions';
import FilterAttractions from '../../components/FilterAttractions/FilterAttractions';

const Home = () => {
  
  return (
    <div className={styles.home}>
      <h1 className={styles.headline}>Attractions</h1>
      <ShowAttractions />
      <FilterAttractions />
    </div>
  );
};

export default Home;