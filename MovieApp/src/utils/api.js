// ../utils/api.js dosyası
import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '20a03b8e530cb18232dcb58a7d48fb13';

export const fetchDataFromApi = async (endpoint) => {
  try {
    const response = await axios.get(`${BASE_URL}/${endpoint}`, {
      params: {
        api_key: API_KEY,
      },
      headers: {
        'Authorization': API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching data from API:", error);
    throw error;
  }
};
export default fetchDataFromApi;