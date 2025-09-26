import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'https://your-backend.onrender.com', // Replace with actual backend URL
});

export default api;
