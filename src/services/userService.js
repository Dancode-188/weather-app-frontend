import api from './api';

export const getUserProfile = async (userId) => {
  try {
    const response = await api.get(`/users/${userId}`);
    return response.data;
  } catch (error) {
    console.error('Error retrieving user profile:', error);
    throw error;
  }
};

export const updateUserProfile = async (userId, profileData) => {
  try {
    const response = await api.put(`/users/${userId}`, profileData);
    return response.data;
  } catch (error) {
    console.error('Error updating user profile:', error);
    throw error;
  }
};

export const getUserStats = async (userId) => {
  try {
    const response = await api.get(`/users/${userId}/stats`);
    return response.data;
  } catch (error) {
    console.error('Error retrieving user stats:', error);
    throw error;
  }
};

export const getUserAchievements = async (userId) => {
  try {
    const response = await api.get(`/users/${userId}/achievements`);
    return response.data;
  } catch (error) {
    console.error('Error retrieving user achievements:', error);
    throw error;
  }
};