import axios from 'axios';

const api = axios.create({
  baseURL: '', // Use relative paths
});

export default api;
