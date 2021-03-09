import axios from 'axios';

const API_URL_PRODUCTS = 'http://localhost:3001/api/products/';

export function fetchProducts() {
  return axios.get(API_URL_PRODUCTS).then((res) => res.data);
}

// const API_URL_CATEGORY = 'http://localhost:3001/api/product/categories/';

// export function fetchCategories() {
//   return axios.get(API_URL_CATEGORY).then((res) => res.data);
// }
