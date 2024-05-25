import { WeatherCard, ForecastList } from '../components';

const Home = () => {
  return (
    <div className="home-page">
      <h2>Current Weather</h2>
      <WeatherCard />
      <h2>Forecast</h2>
      <ForecastList />
    </div>
  );
};

export default Home;