import React, { createContext, useEffect, useState } from 'react';
import {fetchAttractions} from '../services/utils';
const AttractionContext = createContext();

const AttractionProvider = ({ children }) => {
    const [attractions, setAttractions] = useState([]);
    const [filterValuesAttractions, setFilterValuesAttractions] = useState({});
    const [selectedSortingOption , setSelectedSortingOption] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchAttractions();
                setAttractions(data);
            } catch (error) {
            console.error('Error fetching attractions: ', error);
            }
        };
        fetchData();
    }, []);
    
    const getFilteredAttractions = () => {
        let res = attractions
            .filter((attraction) => {
                const { continents = [], categories = [], title = '', ratings = []} = filterValuesAttractions;
                // If no filters are applied
                if (continents.length === 0 && categories.length === 0 && ratings.length === 0) {
                    return attraction.title.toLowerCase().includes(title.toLowerCase());
                } 
                else {
                    return (
                        (!continents.length || continents.includes(attraction.continent)) &&
                        (!categories.length || categories.includes(attraction.category)) &&
                        // (!ratings.length || attraction.recommendations[0].split("/")[0]>=8) &&
                        (!ratings.length || ratings.some(rating => {
                            const minRating = parseInt(rating); // Extract minimum rating value (e.g., 8 from "8 and up")
                            return attraction.recommendations[0].split("/")[0] >= minRating;
                        })) &&
                        attraction.title.toLowerCase().includes(title.toLowerCase())
                    );
                }
            })
            // sorting
            .sort((a,b) => {
                if (selectedSortingOption === 'title') {
                    // Sort by title
                    return a.title.localeCompare(b.title);
                } else if (selectedSortingOption === 'country') {
                    // Sort by continent
                    return a.country.localeCompare(b.country);
                } else if (selectedSortingOption === 'rating') {
                    // Sort by recommendations, assuming the recommendation is in format "10/10"
                    const recA = parseInt(a.recommendations[0].split('/')[0], 10); // Extract the number before the slash in a.recommendation[0]
                    const recB = parseInt(b.recommendations[0].split('/')[0], 10); // Extract the number before the slash in b.recommendation[0]
                    return recB - recA; // Sort in descending order (higher recommendations first)
                }
                return 0;
            });
        return res;
    }
    
    const addNewAttraction = (attraction) => {
        setAttractions([...attractions, attraction]);
    }

    const updateAttraction = (updatedAttraction) => {
        const updatedAttractions = attractions.map((attraction) => {
            if (attraction._id === updatedAttraction._id) {
                return updatedAttraction;
            }
            return attraction;
        });
        setAttractions(updatedAttractions);
    }

    return (
        <AttractionContext.Provider value={{ attractions, filterValuesAttractions, setFilterValuesAttractions, getFilteredAttractions, addNewAttraction, updateAttraction, selectedSortingOption, setSelectedSortingOption }}>
            {children}
        </AttractionContext.Provider>
    );
};
export { AttractionContext, AttractionProvider };
