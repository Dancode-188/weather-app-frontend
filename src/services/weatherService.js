import api from './api';

export const getWeatherByLocation = async (latitude, longitude) => {
  try {
    const response = await api.get('/weather', {
      params: {
        lat: latitude,
        lon: longitude,
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
    const response = await api.get('/forecast', {
      params: {
        lat: latitude,
        lon: longitude,
        units: 'metric',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching forecast data:', error);
    throw error;
  }
};
