import React, {useState, useEffect} from 'react';
import styles from './Home.module.css';
import ShowAttractions from '../../components/Attractions/ShowAttractions/ShowAttractions';
import FilterAttractions from '../../components/Attractions/FilterAttractions/FilterAttractions';

const Home = () => {
  const [ToShowAttractions, setToShowAttractions] = useState (true)
  const [selectedOptions, setSelectedOptions] = useState({
    continents_selected: [],
    categories_selected: []
  });


  // Initial data fetching when component mounts
  useEffect(() => {
    // This effect ensures that attractions are fetched initially
    // and whenever selectedOptions change
    setToShowAttractions(true);
  }, []);

  const handleSubmit = (selectedOp) => {
    setSelectedOptions(selectedOp)
    console.log("new options to submit: ", selectedOptions)
    setToShowAttractions(false); // Temporarily set to false to trigger a re-render
    setTimeout(() => setToShowAttractions(true), 0); // Trigger ShowAttractions again
  }

  return (
    <div className={styles.home}>
      <h1 className={styles.headline}>Attractions</h1>
      <FilterAttractions onSubmit={handleSubmit}/>
      {ToShowAttractions && (
      <ShowAttractions 
        continent={selectedOptions.continents_selected} 
        category={selectedOptions.categories_selected}
      />
      )}
      
    </div>
  );
};

export default Home;