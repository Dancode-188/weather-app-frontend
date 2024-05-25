// friendService.js

import api from './api';

export const getFriends = async () => {
  try {
    const response = await api.get('/friends');
    return response.data;
  } catch (error) {
    console.error('Error retrieving friends:', error);
    throw error;
  }
};

export const removeFriend = async (friendId) => {
  try {
    await api.delete(`/friends/${friendId}`);
  } catch (error) {
    console.error('Error removing friend:', error);
    throw error;
  }
};
