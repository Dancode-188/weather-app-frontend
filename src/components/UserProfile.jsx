import './UserProfile.scss';

const UserProfile = () => {
  return (
    <div className="user-profile">
      <div className="profile-header">
        <img src="path/to/user/avatar" alt="User Avatar" className="avatar" />
        <h2>Username</h2>
      </div>
      <div className="profile-details">
        <p>Email: user@example.com</p>
        <p>Location: City, Country</p>
      </div>
      <div className="profile-preferences">
        <h3>Preferences</h3>
        {/* Add preference form or display */}
      </div>
      <div className="profile-activity">
        <h3>Activity History</h3>
        {/* Add activity history or display */}
      </div>
    </div>
  );
};

export default UserProfile;