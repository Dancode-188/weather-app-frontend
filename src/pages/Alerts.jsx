// src/pages/Alerts.jsx
import { useState, useEffect } from 'react';
import AlertNotification from '../components/AlertNotification';
import { getAlerts, getAlertTypes, getAlertSeverities, getAlertLocations } from '../services/alertService';
import './Alerts.scss';

const Alerts = () => {
  const [alerts, setAlerts] = useState([]);
  const [alertTypes, setAlertTypes] = useState([]);
  const [alertSeverities, setAlertSeverities] = useState([]);
  const [alertLocations, setAlertLocations] = useState([]);
  const [selectedType, setSelectedType] = useState('');
  const [selectedSeverity, setSelectedSeverity] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');

  useEffect(() => {
    fetchAlerts();
    fetchAlertTypes();
    fetchAlertSeverities();
    fetchAlertLocations();
  }, []);

  const fetchAlerts = async () => {
    try {
      const data = await getAlerts();
      setAlerts(data);
    } catch (error) {
      console.error('Error fetching alerts:', error);
    }
  };

  const fetchAlertTypes = async () => {
    try {
      const data = await getAlertTypes();
      setAlertTypes(data);
    } catch (error) {
      console.error('Error fetching alert types:', error);
    }
  };

  const fetchAlertSeverities = async () => {
    try {
      const data = await getAlertSeverities();
      setAlertSeverities(data);
    } catch (error) {
      console.error('Error fetching alert severities:', error);
    }
  };

  const fetchAlertLocations = async () => {
    try {
      const data = await getAlertLocations();
      setAlertLocations(data);
    } catch (error) {
      console.error('Error fetching alert locations:', error);
    }
  };

  const handleTypeFilter = (type) => {
    setSelectedType(type);
  };

  const handleSeverityFilter = (severity) => {
    setSelectedSeverity(severity);
  };

  const handleLocationFilter = (location) => {
    setSelectedLocation(location);
  };

  const filteredAlerts = alerts.filter((alert) => {
    const typeMatch = selectedType ? alert.type === selectedType : true;
    const severityMatch = selectedSeverity ? alert.severity === selectedSeverity : true;
    const locationMatch = selectedLocation ? alert.locations.includes(selectedLocation) : true;
    return typeMatch && severityMatch && locationMatch;
  });

  return (
    <div className="alerts-page">
      <main>
        <h2>Weather Alerts</h2>
        <div className="alerts-container">
          <div className="sidebar">
            <h3>Filter Alerts</h3>
            <div>
              <label htmlFor="type-filter">Type:</label>
              <select id="type-filter" value={selectedType} onChange={(e) => handleTypeFilter(e.target.value)}>
                <option value="">All</option>
                {alertTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="severity-filter">Severity:</label>
              <select id="severity-filter" value={selectedSeverity} onChange={(e) => handleSeverityFilter(e.target.value)}>
                <option value="">All</option>
                {alertSeverities.map((severity) => (
                  <option key={severity} value={severity}>
                    {severity}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="location-filter">Location:</label>
              <select id="location-filter" value={selectedLocation} onChange={(e) => handleLocationFilter(e.target.value)}>
                <option value="">All</option>
                {alertLocations.map((location) => (
                  <option key={location} value={location}>
                    {location}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="alerts-list">
            {filteredAlerts.map((alert) => (
              <AlertNotification
                key={alert.id}
                type={alert.severity.toLowerCase()}
                message={
                  <>
                    <h3>{alert.type}</h3>
                    <p>Severity: {alert.severity}</p>
                    <p>Timestamp: {alert.timestamp}</p>
                    <p>Affected Locations: {alert.locations}</p>
                    <p>Duration: {alert.duration}</p>
                    <p>{alert.description}</p>
                    <p>Recommended Actions: {alert.actions}</p>
                  </>
                }
                onClose={() => console.log('Notification closed')}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Alerts;