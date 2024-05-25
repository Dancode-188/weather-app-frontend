import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './MapView.scss';

const MapView = ({ latitude, longitude }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    const map = L.map(mapRef.current).setView([latitude, longitude], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Add map layers and controls as needed
    // Example:
    // L.marker([latitude, longitude]).addTo(map);

    return () => {
      map.remove();
    };
  }, [latitude, longitude]);

  return (
    <div className="map-view">
      <div className="map-container" ref={mapRef}></div>
      <div className="map-controls">
        <button>Radar</button>
        <button>Satellite</button>
        <button>Temperature</button>
      </div>
    </div>
  );
};

export default MapView;