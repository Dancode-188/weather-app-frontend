export const getCurrentLocation = () => {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          resolve({ latitude, longitude });
        },
        (error) => {
          console.error('Error getting current location:', error);
          reject(error);
        }
      );
    } else {
      console.error('Geolocation is not supported');
      reject(new Error('Geolocation is not supported'));
    }
  });
};
