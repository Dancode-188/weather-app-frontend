import { useEffect, useState } from 'react';
import WeatherCard from '../components/WeatherCard';
import ForecastList from '../components/ForecastList';
import MapView from '../components/MapView';
import AlertNotification from '../components/AlertNotification';
import SocialFeed from '../components/SocialFeed';
import { getCurrentLocation } from '../services/locationService';
import { getAirQualityIndexByLocation } from '../services/weatherService';
import './Home.scss';

const Home = () => {
  const [location, setLocation] = useState(null);
  const [airQuality, setAirQuality] = useState(null);
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const currentLocation = await getCurrentLocation();
        setLocation(currentLocation);
      } catch (error) {
        console.error('Error fetching location:', error);
      }
    };

    fetchLocation();
  }, []);

  useEffect(() => {
    const fetchAirQuality = async () => {
      try {
        if (location) {
          const data = await getAirQualityIndexByLocation(location.latitude, location.longitude);
          setAirQuality(data);
        }
      } catch (error) {
        console.error('Error fetching air quality data:', error);
      }
    };

    fetchAirQuality();
  }, [location]);

  const handleAlertClose = (index) => {
    const updatedAlerts = [...alerts];
    updatedAlerts.splice(index, 1);
    setAlerts(updatedAlerts);
  };

  if (!location) {
    return <div>Loading...</div>;
  }

  return (
    <div className="home-page">
      <div className="main-content">
        <div className="widgets-grid">
          <div className="widget">
            <h3>Current Weather</h3>
            <WeatherCard latitude={location.latitude} longitude={location.longitude} />
          </div>
          <div className="widget">
            <h3>Hourly Forecast</h3>
            {/* Add HourlyForecast component */}
          </div>
          <div className="widget">
            <h3>5-Day Forecast</h3>
            <ForecastList latitude={location.latitude} longitude={location.longitude} />
          </div>
          <div className="widget">
            <h3>Weather Map</h3>
            <MapView latitude={location.latitude} longitude={location.longitude} />
          </div>
          <div className="widget">
            <h3>Air Quality Index</h3>
            {airQuality && <div>{airQuality.main.aqi}</div>}
          </div>
          <div className="widget">
            <h3>Weather Alerts</h3>
            {alerts.map((alert, index) => (
              <AlertNotification
                key={index}
                message={alert.message}
                type={alert.type}
                onClose={() => handleAlertClose(index)}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="sidebar">
        <SocialFeed />
      </div>
    </div>
  );
};

export default Home;