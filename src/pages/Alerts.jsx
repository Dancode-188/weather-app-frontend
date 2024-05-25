// src/pages/Alerts.jsx
import AlertNotification from '../components/AlertNotification';

const Alerts = () => {
  return (
    <div className="alerts-page">
        <h2>Weather Alerts</h2>
        <AlertNotification
            message="This is an info notification"
            type="info"
            onClose={() => console.log('Notification closed')}
        />
    </div>
  );
};

export default Alerts;