import React, { createContext, useState } from "react";
import api from "../services/api";
import qs from "qs";

const AttractionContext = createContext();

const AttractionProvider = ({ children }) => {
  const [attractions, setAttractions] = useState([]);

  // Function to fetch filtered attractions
  const filterAttractions = async (cont, cate) => {
    try {
      // Construct the query string with parameters
      const queryParams = qs.stringify({
        continent: cont, // Default to empty string if not provided
        category: cate,
      });
      const response = await api.get(`/attractions/filter?${queryParams}`);
      setAttractions(response.data);
    } catch (error) {
      console.error("Error fetching attractions:", error);
      console.error("Error fetching attractions:", error);
    }
  };

  return (
    <AttractionContext.Provider value={{ attractions, filterAttractions }}>
      {children}
    </AttractionContext.Provider>
  );
};
export { AttractionContext, AttractionProvider };
