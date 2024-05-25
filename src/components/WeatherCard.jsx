import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getWeatherByLocation } from '../services/weatherService';
import './WeatherCard.scss';

const WeatherCard = ({ latitude, longitude }) => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const data = await getWeatherByLocation(latitude, longitude);
        setWeather(data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeather();
  }, [latitude, longitude]);

  if (!weather) {
    return <div>Loading...</div>;
  }

  const { name: location, main: { temp: temperature, humidity }, wind: { speed: windSpeed }, weather: [{ description, icon }] } = weather;

  return (
    <div className="weather-card">
      <div className="location">{location}</div>
      <div className="temperature">{temperature}°C</div>
      <div className="description">{description}</div>
      <div className="humidity">Humidity: {humidity}%</div>
      <div className="wind-speed">Wind Speed: {windSpeed} m/s</div>
      <img src={`http://openweathermap.org/img/w/${icon}.png`} alt="Weather Icon" />
    </div>
  );
};

WeatherCard.propTypes = {
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired,
};

export default WeatherCard;