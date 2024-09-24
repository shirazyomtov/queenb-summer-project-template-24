import React, { useEffect, useState, useContext } from 'react';
import styles from './ShowAttractions.module.css'; 
import styles_pagination from '../../Pagination.module.css'; 
import { AttractionContext } from '../../../context/AttractionContext';
import SingleAttraction from '../SingleAttraction/SingleAttraction'; 
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

// present the attraction in home page, according to the filters
const ShowAttractions = () => {
  const { filterValuesAttractions, getAttractions, chosenSort } = useContext(AttractionContext);
  const [loading, setLoading] = useState(true);
  
  // pagination: 
  let currAttractions = getAttractions();
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(4);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  // Records to be displayed on the current page
  const currentRecords = currAttractions.slice(indexOfFirstRecord, 
                                    indexOfLastRecord);
  // console.log('currentRecords changed ' + JSON.stringify(currAttractions, null, 2));
  const nPages = Math.ceil(currAttractions.length / recordsPerPage)

  useEffect(() => {
    
    const fetchAttractions = async () => {
      try {
        setLoading(true); // Start loading
        currAttractions = getAttractions();
        setCurrentPage(1) // every time the filters/sorting changes - go to the first page
      } catch (error) {
        console.error('Error fetching attractions:', error);
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchAttractions();
  }, [filterValuesAttractions, chosenSort]);

  const handleChange = (event, value) => {
    setCurrentPage(value);
  };

  if (loading) {
    return <div>Loading attractions...</div>; // Display loading message
  }
  if (!currAttractions || currAttractions.length === 0) return <div>No attractions available</div>;

  return (
    <div >
      <div className={styles.container}>
        {currentRecords.map((attraction) => (
            <SingleAttraction key={attraction._id} attraction={attraction} />
          ))}
      </div>
      <div style={{ height: '100px' }}></div> {/* Spacer */}

      <div className={styles_pagination.paginationWrapper}>
        <Stack spacing={2}>
          <Pagination
            count={nPages}
            variant="outlined" 
            shape="rounded"
            page={currentPage}
            onChange={handleChange}
            color="primary"
          />
        </Stack>
      </div>
    </div>
    
  );
};


export default ShowAttractions;
