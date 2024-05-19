import axios from 'axios';

const api = axios.create({
  baseURL: 'https://webv2-backend.appdevclub.com',
});

export default api;
