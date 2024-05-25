// AlertNotification.js

import PropTypes from 'prop-types';
import './AlertNotification.scss';

const AlertNotification = ({ message, type, onClose }) => {
  return (
    <div className={`alert-notification ${type}`}>
      <p>{message}</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

AlertNotification.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['info', 'warning', 'error']).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default AlertNotification;