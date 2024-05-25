// UserProfile.js

import { useEffect, useState } from 'react';
import './UserProfile.scss';
import { getUserProfile, updateUserProfile } from '../services/userService';

const UserProfile = () => {
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        // Assuming you have the userId available, e.g., from authentication
        const userId = 'user123'; // Replace with the actual userId
        const profile = await getUserProfile(userId);
        setUserProfile(profile);
      } catch (error) {
        console.error('Error retrieving user profile:', error);
      }
    };

    fetchUserProfile();
  }, []);

  const handleProfileUpdate = async (event) => {
    event.preventDefault();
    // Perform profile update logic
    try {
      const updatedProfile = {
        // Populate the updated profile data from form inputs
        // Example: name: event.target.name.value
      };
      await updateUserProfile(userProfile.id, updatedProfile);
      // Refresh the profile data after successful update
      setUserProfile({ ...userProfile, ...updatedProfile });
    } catch (error) {
      console.error('Error updating user profile:', error);
    }
  };

  if (!userProfile) {
    return <div>Loading...</div>;
  }

  return (
    <div className="user-profile">
      <div className="profile-header">
        <img src={userProfile.avatar} alt="User Avatar" className="avatar" />
        <h2>{userProfile.username}</h2>
      </div>
      <div className="profile-details">
        <p>Email: {userProfile.email}</p>
        <p>Location: {userProfile.location}</p>
      </div>
      <div className="profile-preferences">
        <h3>Preferences</h3>
        {/* Add preference form or display */}
        <form onSubmit={handleProfileUpdate}>
          {/* Add form fields for updating preferences */}
          <button type="submit">Update</button>
        </form>
      </div>
      <div className="profile-activity">
        <h3>Activity History</h3>
        {/* Add activity history or display */}
      </div>
    </div>
  );
};

export default UserProfile;