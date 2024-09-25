import React, { createContext, useEffect, useState } from 'react';
import {fetchAttractions} from '../services/utils';
const AttractionContext = createContext();

const AttractionProvider = ({ children }) => {
    const [attractions, setAttractions] = useState([]);
    const [filterValuesAttractions, setFilterValuesAttractions] = useState({});
    const [chosenSort, setChosenSort] = useState("");

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
    
    const getAttractions = () => {
        let res = attractions.filter((attraction) => {
            const { continents = [], categories = [], title = '' } = filterValuesAttractions;

            if (continents.length === 0 && categories.length === 0) {
                return attraction.title.toLowerCase().includes(title.toLowerCase());
            } 
            else {
                return (
                    (!continents.length || continents.includes(attraction.continent)) &&
                    (!categories.length || categories.includes(attraction.category)) &&
                    attraction.title.toLowerCase().includes(title.toLowerCase())
                );
            }
        });
        // sorting
        if (chosenSort === 'title') {
            // Sort by title
            res = res.sort((a, b) => {
                return a.title.localeCompare(b.title);
            });

        } else if (chosenSort === 'country') {
            // Sort by continent
            res = res.sort((a, b) => {
                return a.country.localeCompare(b.country);
            });
        }


        else if (chosenSort === 'rating') {
            // Sort by recommendations, assuming the recommendation is in format "10/10"
            res = res.sort((a, b) => {
                console.log(typeof a.recommendations)
                console.log(a.recommendations)

                const recA = parseInt(a.recommendations[0].split('/')[0], 10); // Extract the number before the slash in a.recommendation[0]
                const recB = parseInt(b.recommendations[0].split('/')[0], 10); // Extract the number before the slash in b.recommendation[0]
                return recB - recA; // Sort in descending order (higher recommendations first)
            });
        }
        
        // else if (chosenSort === 'newest') {
        //     res = res.sort((a, b) =>  b.createdAt - a.createdAt ); // Newest first
        // }
        
        return res;
    };

    return (
        <AttractionContext.Provider value={{ attractions, filterValuesAttractions, setFilterValuesAttractions, getAttractions, chosenSort, setChosenSort }}>
            {children}
        </AttractionContext.Provider>
    );
};
export { AttractionContext, AttractionProvider };
