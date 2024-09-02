import React, { createContext, useState, useEffect } from 'react';
import api from '../services/api';

const AttractionContext = createContext();

const AttractionProvider = ({ children }) => {
    const [attractions, setAttractions] = useState(null);

    const getLastFiveAttractions = async () => {
        try {
            const response = await api.get('/rubberDucks');
            setAttractions(response.data);
        } catch (error) {
            console.error('Error fetching the attraction:', error);
        }
    };

    useEffect(() => {
        getLastFiveAttractions();
    }, []);

    return (
        <AttractionContext.Provider value={{ attractions, getLastFiveAttractions }}>
            {children}
        </AttractionContext.Provider>
    );
};

export { AttractionContext, AttractionProvider };
