import React from 'react';
import styles from '../ShowAttractions/ShowAttractions.module.css'; // Adjust the path if needed

const SingleAttraction = ({ attraction }) => {
  if (!attraction) return null;

  return (
    <div className={styles.attraction}>
        <div className={styles.attraction}>

      <a href="your-link.html" className={styles.attraction_link}>
        {attraction.imageUrl && (
          <img
            src={attraction.imageUrl}
            alt={attraction.title}
            className={styles.img}
          />
        )}
        <h2 className={styles.attractionName}>{attraction.title}</h2>
        <p className={styles.attractionPlace}>{attraction.city}, {attraction.country}</p>
      </a>
      </div>
    </div>
  );
};

export default SingleAttraction;
