// src/services/educationService.js
import api from './api';

export const getPopularTopics = async () => {
  try {
    const response = await api.get('/education/topics/popular');
    return response.data;
  } catch (error) {
    console.error('Error retrieving popular topics:', error);
    throw error;
  }
};

export const getTrendingArticles = async () => {
  try {
    const response = await api.get('/education/articles/trending');
    return response.data;
  } catch (error) {
    console.error('Error retrieving trending articles:', error);
    throw error;
  }
};

export const getLatestArticles = async () => {
  try {
    const response = await api.get('/education/articles/latest');
    return response.data;
  } catch (error) {
    console.error('Error retrieving latest articles:', error);
    throw error;
  }
};

export const getFeaturedVideos = async () => {
  try {
    const response = await api.get('/education/videos/featured');
    return response.data;
  } catch (error) {
    console.error('Error retrieving featured videos:', error);
    throw error;
  }
};

export const getLatestPodcasts = async () => {
  try {
    const response = await api.get('/education/podcasts/latest');
    return response.data;
  } catch (error) {
    console.error('Error retrieving latest podcasts:', error);
    throw error;
  }
};

export const getInteractiveQuizzes = async () => {
  try {
    const response = await api.get('/education/quizzes');
    return response.data;
  } catch (error) {
    console.error('Error retrieving interactive quizzes:', error);
    throw error;
  }
};

export const getDiscussionForums = async () => {
  try {
    const response = await api.get('/education/forums');
    return response.data;
  } catch (error) {
    console.error('Error retrieving discussion forums:', error);
    throw error;
  }
};

export const getUserBookmarks = async () => {
  try {
    const response = await api.get('/user/bookmarks');
    return response.data;
  } catch (error) {
    console.error('Error retrieving user bookmarks:', error);
    throw error;
  }
};

export const getEducationArticles = async () => {
  try {
    const response = await api.get('/education/articles');
    return response.data;
  } catch (error) {
    console.error('Error retrieving education articles:', error);
    throw error;
  }
};

export const getEducationQuiz = async (quizId) => {
  try {
    const response = await api.get(`/education/quizzes/${quizId}`);
    return response.data;
  } catch (error) {
    console.error('Error retrieving education quiz:', error);
    throw error;
  }
};
