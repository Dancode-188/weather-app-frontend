import './SettingsForm.scss';

const SettingsForm = () => {
  return (
    <form className="settings-form">
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" />
      </div>
      <div className="form-group">
        <label htmlFor="location">Location</label>
        <input type="text" id="location" name="location" />
      </div>
      <div className="form-group">
        <label htmlFor="notifications">Notifications</label>
        <div className="checkbox-group">
          <label>
            <input type="checkbox" name="notifications[]" value="weather" />
            Weather Alerts
          </label>
          <label>
            <input type="checkbox" name="notifications[]" value="social" />
            Social Updates
          </label>
        </div>
      </div>
      <button type="submit">Save Settings</button>
    </form>
  );
};

export default SettingsForm;