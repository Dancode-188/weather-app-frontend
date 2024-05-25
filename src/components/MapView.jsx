import { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './MapView.scss';

const MapView = ({ latitude, longitude, userGeneratedData }) => {
  const mapRef = useRef(null);
  const [mapType, setMapType] = useState('radar');
  const [map, setMap] = useState(null);
  const [currentLayer, setCurrentLayer] = useState(null);

  useEffect(() => {
    if (!map) {
      const initialMap = L.map(mapRef.current).setView([latitude, longitude], 13);
      setMap(initialMap);
    }
  }, [map, latitude, longitude]);

  useEffect(() => {
    if (map) {
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      // Add zoom and pan controls
      L.control.zoom().addTo(map);

      // Add user-generated content overlay
      if (userGeneratedData) {
        L.geoJSON(userGeneratedData).addTo(map);
      }
    }
  }, [map, userGeneratedData]);

  useEffect(() => {
    if (map) {
      // Remove the current layer if it exists
      if (currentLayer) {
        map.removeLayer(currentLayer);
      }

      // Add the appropriate layer based on the selected map type
      let layer;
      if (mapType === 'radar') {
        layer = L.tileLayer('https://tile.openweathermap.org/map/radar/{z}/{x}/{y}.png?appid=YOUR_API_KEY');
      } else if (mapType === 'satellite') {
        layer = L.tileLayer('https://tile.openweathermap.org/map/satellite/{z}/{x}/{y}.png?appid=YOUR_API_KEY');
      } else if (mapType === 'temperature') {
        layer = L.tileLayer('https://tile.openweathermap.org/map/temp/{z}/{x}/{y}.png?appid=YOUR_API_KEY');
      }

      if (layer) {
        layer.addTo(map);
        setCurrentLayer(layer);
      }
    }
  }, [map, mapType]);

  const handleMapTypeChange = (type) => {
    setMapType(type);
  };

  return (
    <div className="map-view">
      <div className="map-container" ref={mapRef}></div>
      <div className="map-controls">
        <button onClick={() => handleMapTypeChange('radar')}>Radar</button>
        <button onClick={() => handleMapTypeChange('satellite')}>Satellite</button>
        <button onClick={() => handleMapTypeChange('temperature')}>Temperature</button>
      </div>
    </div>
  );
};

export default MapView;