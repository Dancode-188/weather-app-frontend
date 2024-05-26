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

export const getFriendRequests = async () => {
  try {
    const response = await api.get('/friend-requests');
    return response.data;
  } catch (error) {
    console.error('Error retrieving friend requests:', error);
    throw error;
  }
};

export const acceptFriendRequest = async (requestId) => {
  try {
    await api.post(`/friend-requests/${requestId}/accept`);
  } catch (error) {
    console.error('Error accepting friend request:', error);
    throw error;
  }
};

export const declineFriendRequest = async (requestId) => {
  try {
    await api.post(`/friend-requests/${requestId}/decline`);
  } catch (error) {
    console.error('Error declining friend request:', error);
    throw error;
  }
};

export const getSuggestedFriends = async () => {
  try {
    const response = await api.get('/suggested-friends');
    return response.data;
  } catch (error) {
    console.error('Error retrieving suggested friends:', error);
    throw error;
  }
};

export const sendFriendInvite = async (friendId) => {
  try {
    await api.post(`/friends/${friendId}/invite`);
  } catch (error) {
    console.error('Error sending friend invite:', error);
    throw error;
  }
};

export const getInvites = async () => {
  try {
    const response = await api.get('/invites');
    return response.data;
  } catch (error) {
    console.error('Error retrieving invites:', error);
    throw error;
  }
};
