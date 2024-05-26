import api from './api';

export const register = async (userData) => {
  try {
    const response = await api.post('/auth/register', userData);
    return response.data;
  } catch (error) {
    console.error('Error registering user:', error);
    throw error;
  }
};

export const login = async (credentials) => {
  try {
    const response = await api.post('/auth/login', credentials);
    return response.data;
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};

export const logout = async () => {
  try {
    await api.post('/auth/logout');
  } catch (error) {
    console.error('Error logging out:', error);
    throw error;
  }
};

export const getCurrentUserId = async () => {
  try {
    const response = await api.get('/auth/currentUser');
    return response.data.userId;
  } catch (error) {
    console.error('Error retrieving current user ID:', error);
    throw error;
  }
};