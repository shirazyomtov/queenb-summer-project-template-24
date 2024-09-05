import React from 'react';
import styles from './Home.module.css';
import ShowAttractions from '../../components/ShowAttractions/ShowAttractions';


const Home = () => {
  
  return (
    <div className={styles.home}>
      <h1 className={styles.headline}>Attractions</h1>
      <ShowAttractions />
    </div>
  );
};

export default Home;
