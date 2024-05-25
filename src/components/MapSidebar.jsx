import { useState } from 'react';
import './MapSidebar.scss';

const MapSidebar = ({ onLayerChange, onLocationSearch }) => {
  const [selectedLayers, setSelectedLayers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleLayerChange = (layer) => {
    const updatedLayers = [...selectedLayers];
    const index = updatedLayers.indexOf(layer);

    if (index > -1) {
      updatedLayers.splice(index, 1);
    } else {
      updatedLayers.push(layer);
    }

    setSelectedLayers(updatedLayers);
    onLayerChange(updatedLayers);
  };

  const handleSearch = () => {
    onLocationSearch(searchQuery);
  };

  return (
    <div className="sidebar">
      <div className="map-legend">
        <h3>Map Legend</h3>
        {/* Add map legend items */}
        <div className="legend-item">
          <span className="legend-color" style={{ backgroundColor: '#ff0000' }}></span>
          <span className="legend-label">Radar</span>
        </div>
        <div className="legend-item">
          <span className="legend-color" style={{ backgroundColor: '#00ff00' }}></span>
          <span className="legend-label">Satellite</span>
        </div>
        <div className="legend-item">
          <span className="legend-color" style={{ backgroundColor: '#0000ff' }}></span>
          <span className="legend-label">Temperature</span>
        </div>
      </div>

      <div className="layer-settings">
        <h3>Layer Settings</h3>
        {/* Add layer checkboxes */}
        <div className="layer-item">
          <input
            type="checkbox"
            id="layerRadar"
            checked={selectedLayers.includes('radar')}
            onChange={() => handleLayerChange('radar')}
          />
          <label htmlFor="layerRadar">Radar</label>
        </div>
        <div className="layer-item">
          <input
            type="checkbox"
            id="layerSatellite"
            checked={selectedLayers.includes('satellite')}
            onChange={() => handleLayerChange('satellite')}
          />
          <label htmlFor="layerSatellite">Satellite</label>
        </div>
        <div className="layer-item">
          <input
            type="checkbox"
            id="layerTemperature"
            checked={selectedLayers.includes('temperature')}
            onChange={() => handleLayerChange('temperature')}
          />
          <label htmlFor="layerTemperature">Temperature</label>
        </div>
      </div>

      <div className="location-search">
        <h3>Location Search</h3>
        {/* Add location search input and button */}
        <input
          type="text"
          placeholder="Enter location"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
};

export default MapSidebar;