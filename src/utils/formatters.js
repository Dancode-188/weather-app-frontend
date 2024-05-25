import { format } from 'date-fns';

export const formatTemperature = (temperature, unit) => {
  // Implement temperature formatting logic based on the unit
  return unit === 'celsius' ? `${temperature}°C` : `${temperature}°F`;
};

export const formatCurrency = (amount, currency) => {
  // Implement currency formatting logic
  return new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(
    amount
  );
};

export const formatJSON = (data) => {
  // Implement JSON formatting logic
  return JSON.stringify(data, null, 2);
};

export const formatDate = (date, formatStr) => {
  // Implement date formatting logic based on the specified format
  const formatters = {
    'MM/DD/YYYY': 'MM/dd/yyyy',
    'YYYY-MM-DD': 'yyyy-MM-dd',
    // Add more format options as needed
  };
  return formatStr in formatters
    ? format(date, formatters[formatStr])
    : format(date, 'MM/dd/yyyy');
};

export const formatPhoneNumber = (phoneNumber) => {
  // Implement phone number formatting logic
  // Example: format as (123) 456-7890
  const cleaned = phoneNumber.replace(/\D/g, '');
  return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
};

export const formatPercentage = (value, decimalPlaces = 2) => {
  // Implement percentage formatting logic
  return `${(value * 100).toFixed(decimalPlaces)}%`;
};

export const parseJSON = (jsonString) => {
  // Implement JSON parsing logic
  try {
    return JSON.parse(jsonString);
  } catch (error) {
    console.error('Invalid JSON string:', error);
    return null;
  }
};
