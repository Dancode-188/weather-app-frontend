import axios from 'axios';

const BASE_URL = 'https://api.openweathermap.org/data/2.5';
const API_KEY = 'YOUR_API_KEY';

export const getWeatherByLocation = async (latitude, longitude) => {
  try {
    const response = await axios.get(`${BASE_URL}/weather`, {
      params: {
        lat: latitude,
        lon: longitude,
        appid: API_KEY,
        units: 'metric',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
};

export const getForecastByLocation = async (latitude, longitude) => {
  try {
    const response = await axios.get(`${BASE_URL}/forecast`, {
      params: {
        lat: latitude,
        lon: longitude,
        appid: API_KEY,
        units: 'metric',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching forecast data:', error);
    throw error;
  }
};
