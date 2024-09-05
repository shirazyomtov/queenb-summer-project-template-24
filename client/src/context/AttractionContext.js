import React, { createContext, useState, useEffect } from 'react';
import api from '../services/api';

const AttractionContext = createContext();

const AttractionProvider = ({ children }) => {
    const [attractions, setAttractions] = useState(null);

    const getAllAttractions = async () => {
        try {
            console.log("in context")
            const response = await api.get('/attractions');
            setAttractions(response.data);
        } catch (error) {
            console.error('Error fetching the attraction:', error);
        }
    };

    useEffect(() => {
        getAllAttractions();
    }, []);

    return (
        <AttractionContext.Provider value={{ attractions, getAllAttractions }}>
            {children}
        </AttractionContext.Provider>
    );
};

export { AttractionContext, AttractionProvider };
