import api from './api';

export const getLeaderboard = async () => {
  try {
    const response = await api.get('/leaderboard');
    return response.data;
  } catch (error) {
    console.error('Error retrieving leaderboard:', error);
    throw error;
  }
};
