import axios from "axios";

const api = axios.create({
  baseURL: "/api", // <-- your backend URL
});

export default api;
