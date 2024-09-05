import React from 'react';
import styles from '../ShowAttractions/ShowAttractions.module.css'; // Adjust the path if needed

const SingleAttraction = ({ attraction }) => {
  if (!attraction) return null;

  return (
    <div className={styles.duck}>

      {attraction.imageUrl && (
        <img
          src={attraction.imageUrl}
          alt={attraction.title}
          className={styles.img}
        />
      )}
      <h2 className={styles.duckName}>{attraction.title}</h2>
      <p className={styles.duckCity}>{attraction.city}</p>

    </div>
  );
};

export default SingleAttraction;
