import React, { useState, useEffect }from 'react';
import styles from './Home.module.css';
// import RandomDuck from '../../components/RandomDuck/RandomDuck';
import ShowAttractions from '../../components/ShowAttractions/ShowAttractions';


const Home = () => {
  // useEffect(() => {
  //   const fetchAttractions = async () => {
  //     const res = await fetch(process.env.REACT_APP_API_URL)
  //   }

  //   }
  // )
  
  return (
    <div className={styles.home}>
      <h1 className={styles.headline}>Duck It</h1>
      <ShowAttractions />
    </div>
  );
};

export default Home;
