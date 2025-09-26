import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || '', // Use relative for same service
});

export default api;
