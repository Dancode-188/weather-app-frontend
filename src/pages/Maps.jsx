import MapView from '../components/MapView';
import MapSidebar from '../components/MapSidebar';
import './Maps.scss';

const Maps = () => {
  return (
    <div className="maps-page">
      <h2>Weather Maps</h2>
      <div className="map-container">
        <MapView />
        <MapSidebar />
      </div>
    </div>
  );
};

export default Maps;