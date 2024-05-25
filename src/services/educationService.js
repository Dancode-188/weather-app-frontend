import api from './api';

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
