import axios from 'axios';

const api = axios.create({
  baseURL: 'https://go-restaurant-six.vercel.app/api',
});

export default api;
