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
  // Example: filters could be an object containing filter parameters
  const { name, type, price, karats, hardness, sort_by, sort_direction } = filters;
  const params = {
    name,
    type,
    price_min: price[0], // Pass min price as 'price_min'
    price_max: price[1], // Pass max price as 'price_max'
    karats_min: karats[0], // Pass min karats as 'karats_min'
    karats_max: karats[1], // Pass max karats as 'karats_max'
    hardness_min: hardness[0], // Pass min hardness as 'hardness_min'
    hardness_max: hardness[1], // Pass max hardness as 'hardness_max'
    sort_by,
    sort_direction,
  };
  // const params = new URLSearchParams(filters).toString();
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
