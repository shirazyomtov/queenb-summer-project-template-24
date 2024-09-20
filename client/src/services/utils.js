import api from './api';

export const fetchAttractions = async () => {
  try {
    const response = await api.get(`/attractions`);
    return response.data;
  } catch (error) {
    console.error("Error fetching attractions:", error);
    throw error;
  }
};