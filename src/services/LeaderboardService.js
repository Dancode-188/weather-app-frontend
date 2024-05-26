// src/services/LeaderboardService.js
import api from './api';

export const getLeaderboard = async (leaderboardType) => {
  try {
    const response = await api.get(`/leaderboard?type=${leaderboardType}`);
    return response.data;
  } catch (error) {
    console.error('Error retrieving leaderboard:', error);
    throw error;
  }
};
