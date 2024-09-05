import React, { useEffect, useState, useContext } from 'react';
import styles from './ShowAttractions.module.css'; 
import { AttractionContext } from '../../context/AttractionContext';
import SingleAttraction from '../SingleAttraction/SingleAttraction'; 


const ShowAttractions = () => {
  const { attractions, getAllAttractions } = useContext(AttractionContext);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    console.log("useEffect triggered");

    const fetchAttractions = async () => {
      try {
        setLoading(true); // Start loading
        await getAllAttractions(); // Fetch attractions
      } catch (error) {
        console.error('Error fetching attractions:', error);
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchAttractions();
  }, []);


  if (loading) {
    return <div>Loading attractions...</div>; // Display loading message
  }
  if (!attractions || attractions.length === 0) return <div>No attractions available</div>;

  return (
    <div className={styles.container}>
        {attractions.map((attraction) => (
            <SingleAttraction key={attraction.title} attraction={attraction} />
          ))}
    </div>
  );
};


export default ShowAttractions;
