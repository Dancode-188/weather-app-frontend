import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getForecastByLocation } from '../services/weatherService';
import './ForecastList.scss';

const ForecastList = ({ latitude, longitude }) => {
  const [forecasts, setForecasts] = useState([]);

  useEffect(() => {
    const fetchForecast = async () => {
      try {
        const data = await getForecastByLocation(latitude, longitude);
        setForecasts(data.list);
      } catch (error) {
        console.error('Error fetching forecast data:', error);
      }
    };

    fetchForecast();
  }, [latitude, longitude]);

  return (
    <div className="forecast-list">
      {forecasts.map((forecast, index) => (
        <div key={index} className="forecast-item">
          <div className="date">{forecast.dt_txt}</div>
          <div className="temperature">{forecast.main.temp}°C</div>
          <div className="description">{forecast.weather[0].description}</div>
          <img src={`http://openweathermap.org/img/w/${forecast.weather[0].icon}.png`} alt="Weather Icon" />
        </div>
      ))}
    </div>
  );
};

ForecastList.propTypes = {
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired,
};

export default ForecastList;