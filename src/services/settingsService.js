// settingsService.js

import api from './api';

export const getUserSettings = async () => {
  try {
    const response = await api.get('/settings');
    return response.data;
  } catch (error) {
    console.error('Error retrieving user settings:', error);
    throw error;
  }
};

export const updateUserSettings = async (settings) => {
  try {
    await api.put('/settings', settings);
  } catch (error) {
    console.error('Error updating user settings:', error);
    throw error;
  }
};
