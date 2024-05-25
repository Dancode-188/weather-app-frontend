// MapView.js

import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './MapView.scss';
import { getCurrentLocation } from '../services/locationService';

const MapView = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    const initializeMap = async () => {
      try {
        const location = await getCurrentLocation();
        const { latitude, longitude } = location;

        const map = L.map(mapRef.current).setView([latitude, longitude], 13);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(map);

        // Add map layers and controls as needed
        // Example:
        // L.marker([latitude, longitude]).addTo(map);
      } catch (error) {
        console.error('Error initializing map:', error);
      }
    };

    initializeMap();
  }, []);

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