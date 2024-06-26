import api from './api';

export const getWeatherByLocation = async (location) => {
  try {
    const response = await api.get('/weather', {
      params: {
        q: location,
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

export const getHourlyForecastByLocation = async (latitude, longitude) => {
  try {
    const response = await api.get('/forecast/hourly', {
      params: {
        lat: latitude,
        lon: longitude,
        units: 'metric',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching hourly forecast data:', error);
    throw error;
  }
};

export const getFiveDayForecastByLocation = async (latitude, longitude) => {
  try {
    const response = await api.get('/forecast/daily', {
      params: {
        lat: latitude,
        lon: longitude,
        cnt: 5,
        units: 'metric',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching 5-day forecast data:', error);
    throw error;
  }
};

export const getAirQualityIndexByLocation = async (latitude, longitude) => {
  try {
    const response = await api.get('/air_pollution', {
      params: {
        lat: latitude,
        lon: longitude,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching air quality index data:', error);
    throw error;
  }
};

export const getForecastData = async (date) => {
  try {
    const response = await api.get('/forecast', {
      params: {
        date: date.toISOString().split('T')[0],
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching forecast data:', error);
    throw error;
  }
};

export const getSunriseSunsetData = async (date) => {
  try {
    const response = await api.get('/sunrise-sunset', {
      params: {
        date: date.toISOString().split('T')[0],
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching sunrise/sunset data:', error);
    throw error;
  }
};

export const getMoonPhaseData = async (date) => {
  try {
    const response = await api.get('/moon-phase', {
      params: {
        date: date.toISOString().split('T')[0],
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching moon phase data:', error);
    throw error;
  }
};

export const getHistoricalAverages = async (date) => {
  try {
    const response = await api.get('/historical-averages', {
      params: {
        date: date.toISOString().split('T')[0],
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching historical averages:', error);
    throw error;
  }
};
