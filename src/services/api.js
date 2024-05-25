import axios from 'axios';

const API_BASE_URL = 'https://api.example.com'; // Replace with your backend API base URL

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add any default headers or authentication tokens
api.defaults.headers.common['Authorization'] = 'Bearer YOUR_AUTH_TOKEN';

export default api;
