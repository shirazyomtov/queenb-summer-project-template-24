import React, { useEffect, useState, useContext } from 'react';
import styles from './ShowAttractions.module.css'; 
import { AttractionContext } from '../../context/AttractionContext';
import SingleAttraction from '../SingleAttraction/SingleAttraction'; 

// present the attraction in home page, according to the filters
const ShowAttractions = ({ continent, category }) => {
  const { attractions, filterAttractions } = useContext(AttractionContext);
  const [loading, setLoading] = useState(true);
  const [ attractionsChanged, setAttractionsChanged] = useState(true)
  
  useEffect(() => {
    
    const fetchAttractions = async () => {
      try {
        setLoading(true); // Start loading
        // Fetch without filters on the first mount
        if (!continent && !category) {
          await filterAttractions(null, null);
        } else {
          // Fetch with filters
          await filterAttractions(continent, category);
          setAttractionsChanged(false)
          setTimeout(() => setAttractionsChanged(true), 1);
        }
      } catch (error) {
        console.error('Error fetching attractions:', error);
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchAttractions();
  }, [continent, category]); //continent, category, filterAttractions


  if (loading) {
    return <div>Loading attractions...</div>; // Display loading message
  }
  if (!attractions || attractions.length === 0) return <div>No attractions available</div>;

  return (
    <div className={styles.container}>
        {attractionsChanged && (
        attractions.map((attraction) => (
            <SingleAttraction key={attraction._id} attraction={attraction} />
          ))
        )}
    </div>
  );
};


export default ShowAttractions;
