import axios from 'axios';

const api = axios.create({
  baseURL: '', // No base URL to avoid double /api
});

export default api;
