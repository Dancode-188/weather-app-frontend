import './MapView.scss';

const MapView = () => {
  return (
    <div className="map-view">
      <div className="map-container">
        {/* Add map library component or iframe */}
      </div>
      <div className="map-controls">
        <button>Radar</button>
        <button>Satellite</button>
        <button>Temperature</button>
      </div>
    </div>
  );
};

export default MapView;