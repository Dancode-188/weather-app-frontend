import api from './api';

export const getCurrentLocation = async () => {
  try {
    const response = await api.get('/location');
    return response.data;
  } catch (error) {
    console.error('Error getting current location:', error);
    throw error;
  }
};
