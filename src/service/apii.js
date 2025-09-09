// src/utils/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000', // Replace with your actual backend URL
});

export default api;
