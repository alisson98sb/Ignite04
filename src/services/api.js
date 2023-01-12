import axios from 'axios';

const api = axios.create({
  baseURL: 'https://resturant-alisson98sb.vercel.app/api',
});

export default api;
