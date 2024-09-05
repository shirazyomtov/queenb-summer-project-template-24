import React from 'react';
// import styles from './SingleAttraction.module.css'; // Adjust the path if needed
import styles from '../ShowAttractions/ShowAttractions.module.css'; // Adjust the path if needed

const SingleAttraction = ({ attraction }) => {
  if (!attraction) return null;

  return (
    <div className={styles.duck}>
      <h2 className={styles.duckName}>{attraction.title}</h2>
      {attraction.imageUrl && (
        <img
          src={attraction.imageUrl}
          alt={attraction.title}
          className={styles.img}
        />
      )}
    </div>
  );
};

export default SingleAttraction;
