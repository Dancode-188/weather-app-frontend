import api from './api';

export const createPost = async (postData) => {
  try {
    const response = await api.post('/posts', postData);
    return response.data;
  } catch (error) {
    console.error('Error creating post:', error);
    throw error;
  }
};

export const getPosts = async () => {
  try {
    const response = await api.get('/posts');
    return response.data;
  } catch (error) {
    console.error('Error retrieving posts:', error);
    throw error;
  }
};

export const likePost = async (postId) => {
  try {
    const response = await api.post(`/posts/${postId}/like`);
    return response.data;
  } catch (error) {
    console.error('Error liking post:', error);
    throw error;
  }
};

export const getHashtags = async () => {
  try {
    const response = await api.get('/hashtags');
    return response.data;
  } catch (error) {
    console.error('Error retrieving hashtags:', error);
    throw error;
  }
};

export const getTopContributors = async () => {
  try {
    const response = await api.get('/contributors');
    return response.data;
  } catch (error) {
    console.error('Error retrieving top contributors:', error);
    throw error;
  }
};
