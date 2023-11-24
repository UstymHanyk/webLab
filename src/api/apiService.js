import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

const apiService = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
});

export const fetchAllGemstones = () => {
  return apiService.get('/all')
    .then(response => {
      console.log(response.data); // Logging the response data
      return response.data; // Returning the data
    })
    .catch(error => {
      console.error('Error fetching all gemstones:', error);
      throw error;
    });
};

export const fetchFilteredGemstones = (filters) => {
  const { name, type, price, karats, hardness, sort_by, sort_direction } = filters;
  const params = {
    name,
    type,
    price_min: price[0],
    price_max: price[1],
    karats_min: karats[0],
    karats_max: karats[1],
    hardness_min: hardness[0],
    hardness_max: hardness[1],
    sort_by,
    sort_direction,
  };

  console.log(params)
  return apiService.get('/filtered',{params})
    .then(response => {
      console.log(response.data); // Logging the response data
      return response.data; // Returning the data
    })
    .catch(error => {
      console.error('Error fetching filtered gemstones:', error);
      throw error;
    });
};

export default apiService;
