import axios from 'axios';

const API_URL = 'http://localhost:3001/api/products/';

export function fetchProducts() {
  return axios.get(API_URL).then((res) => res.data);
}

//  axios.get(apiUrl).then((resp) => {
//       const allPersons = resp.data;
//       setAppState(allPersons);
