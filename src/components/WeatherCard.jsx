// WeatherCard.js

import PropTypes from 'prop-types';
import './WeatherCard.scss';

const WeatherCard = ({ location, temperature, humidity, windSpeed, description, icon }) => {
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
  location: PropTypes.string.isRequired,
  temperature: PropTypes.number.isRequired,
  humidity: PropTypes.number.isRequired,
  windSpeed: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default WeatherCard;