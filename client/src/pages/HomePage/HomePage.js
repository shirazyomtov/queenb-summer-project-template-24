import React from 'react';
import styles from './Home.module.css';
// import RandomDuck from '../../components/RandomDuck/RandomDuck';
import ShowAttractions from '../../components/ShowAttractions/ShowAttractions';


const Home = () => {
  return (
    <div className={styles.home}>
      <h1 className={styles.headline}>Duck It</h1>
      <ShowAttractions />
    </div>
  );
};

export default Home;
