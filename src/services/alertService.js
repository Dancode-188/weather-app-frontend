// src/services/alertService.js
import api from './api';

export const getAlerts = async () => {
  try {
    const response = await api.get('/alerts');
    return response.data;
  } catch (error) {
    console.error('Error fetching alerts:', error);
    throw error;
  }
};

export const getAlertTypes = async () => {
  try {
    const response = await api.get('/alerts/types');
    return response.data;
  } catch (error) {
    console.error('Error fetching alert types:', error);
    throw error;
  }
};

export const getAlertSeverities = async () => {
  try {
    const response = await api.get('/alerts/severities');
    return response.data;
  } catch (error) {
    console.error('Error fetching alert severities:', error);
    throw error;
  }
};

export const getAlertLocations = async () => {
  try {
    const response = await api.get('/alerts/locations');
    return response.data;
  } catch (error) {
    console.error('Error fetching alert locations:', error);
    throw error;
  }
};
