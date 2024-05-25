export const formatDate = (date) => {
  // Implement date formatting logic
  return date.toLocaleDateString();
};

export const truncateString = (str, length) => {
  // Implement string truncation logic
  return str.length > length ? str.slice(0, length) + '...' : str;
};

export const calculateAverage = (numbers) => {
  // Implement average calculation logic
  return numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
};

export const capitalize = (str) => {
  // Capitalize the first letter of a string
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const generateRandomId = () => {
  // Generate a random unique identifier
  return Math.random().toString(36).substr(2, 9);
};

export const deepClone = (obj) => {
  // Create a deep clone of an object
  return JSON.parse(JSON.stringify(obj));
};

export const groupBy = (arr, key) => {
  // Group an array of objects by a specific key
  return arr.reduce((result, item) => {
    (result[item[key]] = result[item[key]] || []).push(item);
    return result;
  }, {});
};
