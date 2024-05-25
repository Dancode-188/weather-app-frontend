import PropTypes from 'prop-types';
import './ForecastList.scss';

const ForecastList = ({ forecasts }) => {
  return (
    <div className="forecast-list">
      {forecasts.map((forecast, index) => (
        <div key={index} className="forecast-item">
          <div className="date">{forecast.date}</div>
          <div className="temperature">{forecast.temperature}°C</div>
          <div className="description">{forecast.description}</div>
          <img src={`http://openweathermap.org/img/w/${forecast.icon}.png`} alt="Weather Icon" />
        </div>
      ))}
    </div>
  );
};

ForecastList.propTypes = {
  forecasts: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string.isRequired,
      temperature: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ForecastList;