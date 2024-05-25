export const isValidEmail = (email) => {
  // Implement email validation logic
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export const isValidPassword = (password) => {
  // Implement password validation logic
  return password.length >= 8;
};

export const validateApiResponse = (response) => {
  // Implement API response validation logic
  return response && response.status === 200;
};

export const isValidPhoneNumber = (phoneNumber) => {
  // Implement phone number validation logic
  return /^\d{10}$/.test(phoneNumber);
};

export const isValidDate = (date) => {
  // Implement date validation logic
  return date instanceof Date && !isNaN(date);
};

export const isValidURL = (url) => {
  // Implement URL validation logic
  return /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/.test(url);
};

export const isValidJSON = (jsonString) => {
  // Implement JSON validation logic
  try {
    JSON.parse(jsonString);
    return true;
  } catch (error) {
    return false;
  }
};
