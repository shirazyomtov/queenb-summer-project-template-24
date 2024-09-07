import React, { createContext, useState, useEffect } from 'react';
import api from '../services/api';

const AttractionContext = createContext();

const AttractionProvider = ({ children }) => {
    const [attractions, setAttractions] = useState(null);

    // Function to fetch filtered attractions
    const filterAttractions = async (continent, category) => {
        try {
            // Construct the query string with parameters
            const queryParams = new URLSearchParams({
                continent: continent || '', // Default to empty string if not provided
                category: category || ''
            }).toString();

            const response = await api.get(`/attractions/filter?${queryParams}`);
            setAttractions(response.data);
        } catch (error) {
            console.error('Error fetching attractions:', error);
        }
    };

    useEffect(() => {
        filterAttractions(); // Fetch all attractions on component mount
    }, []);

    return (
        <AttractionContext.Provider value={{ attractions, filterAttractions }}>
            {children}
        </AttractionContext.Provider>
    );
};
export { AttractionContext, AttractionProvider };
