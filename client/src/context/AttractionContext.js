import React, { createContext, useState, useEffect } from 'react';
import api from '../services/api';
import qs from 'qs';
// import querystring from 'querystring';


const AttractionContext = createContext();

const AttractionProvider = ({ children }) => {
    const [attractions, setAttractions] = useState([]);

    // Function to fetch filtered attractions
    const filterAttractions = async (cont, cate) => {
        try {
            console.log("in context: continent: ", cont, "category: ", cate)
            // Construct the query string with parameters
            const queryParams =  qs.stringify({
                continent: cont , // Default to empty string if not provided
                category: cate 
            }, );
            console.log("queryParams: ", queryParams)
            const response = await api.get(`/attractions/filter?${queryParams}`);
            console.log("response: ", response.data)
            setAttractions(response.data);
        } catch (error) {
            console.error('Error fetching attractions:', error);
        }
    };

    // useEffect(() => {
    //     filterAttractions(); // Fetch all attractions on component mount
    // }, []);

    return (
        <AttractionContext.Provider value={{ attractions, filterAttractions }}>
            {children}
        </AttractionContext.Provider>
    );
};
export { AttractionContext, AttractionProvider };
