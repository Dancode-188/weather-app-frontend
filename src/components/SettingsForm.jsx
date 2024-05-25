// SettingsForm.js

import { useEffect, useState } from 'react';
import './SettingsForm.scss';
import { getUserSettings, updateUserSettings } from '../services/settingsService';

const SettingsForm = () => {
  const [settings, setSettings] = useState({
    name: '',
    email: '',
    location: '',
    notifications: {
      weatherAlerts: false,
      socialUpdates: false,
    },
  });

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const userSettings = await getUserSettings();
        setSettings(userSettings);
      } catch (error) {
        console.error('Error retrieving user settings:', error);
      }
    };

    fetchSettings();
  }, []);

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    if (type === 'checkbox') {
      setSettings((prevSettings) => ({
        ...prevSettings,
        notifications: {
          ...prevSettings.notifications,
          [name]: checked,
        },
      }));
    } else {
      setSettings((prevSettings) => ({
        ...prevSettings,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await updateUserSettings(settings);
      console.log('Settings updated successfully');
    } catch (error) {
      console.error('Error updating user settings:', error);
    }
  };

  return (
    <form className="settings-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={settings.name}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={settings.email}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="location">Location</label>
        <input
          type="text"
          id="location"
          name="location"
          value={settings.location}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label>Notifications</label>
        <div className="checkbox-group">
          <label>
            <input
              type="checkbox"
              name="weatherAlerts"
              checked={settings.notifications.weatherAlerts}
              onChange={handleInputChange}
            />
            Weather Alerts
          </label>
          <label>
            <input
              type="checkbox"
              name="socialUpdates"
              checked={settings.notifications.socialUpdates}
              onChange={handleInputChange}
            />
            Social Updates
          </label>
        </div>
      </div>
      <button type="submit">Save Settings</button>
    </form>
  );
};

export default SettingsForm;