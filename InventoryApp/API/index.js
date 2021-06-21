  import axios from 'axios';

const API = axios.create({ baseURL: 'http://10.0.2.2:5000' });

export const fetchProducts= () => API.get('/products');
export const createProduct = (newProduct) => API.post('/products', newProduct);