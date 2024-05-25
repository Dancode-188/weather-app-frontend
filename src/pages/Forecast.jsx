// src/pages/Forecast.jsx
import ForecastList from '../components/ForecastList';

const Forecast = () => {
  return (
    <div className="forecast-page">
      <h2>Detailed Forecast</h2>
      <ForecastList />
    </div>
  );
};

export default Forecast;