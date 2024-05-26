// src/pages/Settings.jsx
import { useEffect, useState } from 'react';
import SettingsForm from '../components/SettingsForm';
import { getUserSettings, updateUserSettings } from '../services/settingsService';
import { getUserProfile, updateUserProfile } from '../services/userService';
import { logout } from '../services/authService';

const Settings = () => {
  const [settings, setSettings] = useState({
    name: '',
    email: '',
    profilePicture: '',
    bio: '',
    defaultLocation: '',
    favoriteLocations: [],
    notifications: {
      weatherAlerts: false,
      personalizedRecommendations: false,
    },
    units: {
      temperature: 'celsius',
      windSpeed: 'km/h',
    },
    widgets: [],
    connectedDevices: [],
    privacySettings: {
      dataSharing: false,
    },
    accountSecurity: {
      twoFactorAuth: false,
    },
  });

  const [userProfile, setUserProfile] = useState({
    name: '',
    email: '',
    profilePicture: '',
    bio: '',
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

    const fetchUserProfile = async () => {
        try {
          const profile = await getUserProfile();
          setUserProfile(profile);
        } catch (error) {
          console.error('Error retrieving user profile:', error);
        }
    };

    fetchSettings();
    fetchUserProfile();
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

  const handleProfileUpdate = async (updatedProfile) => {
    try {
      await updateUserProfile(updatedProfile);
      setUserProfile(updatedProfile);
      console.log('User profile updated successfully');
    } catch (error) {
      console.error('Error updating user profile:', error);
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

  const handleLogout = async () => {
    try {
      await logout();
      // Redirect to login page or homepage
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <div className="settings-page">
      <main>
        <h2>Settings</h2>
        <SettingsForm
          settings={settings}
          userProfile={userProfile}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          handleProfileUpdate={handleProfileUpdate}
        />
        <button onClick={handleLogout}>Logout</button>
      </main>
    </div>
  );
};

export default Settings;