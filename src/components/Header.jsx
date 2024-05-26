import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Weather App</div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/forecast">Forecast</Link></li>
          <li><Link to="/maps">Maps</Link></li>
          <li><Link to="/alerts">Alerts</Link></li>
          <li><Link to="/social-feed">Social Feed</Link></li>
          <li className="dropdown">
            <Link to="/profile">Profile</Link>
            <ul className="dropdown-menu">
              <li><Link to="/profile">View Profile</Link></li>
              <li><Link to="/friends">Friends</Link></li>
              <li><Link to="/leaderboards">Leaderboards</Link></li>
              <li><Link to="/education">Education</Link></li>
              <li><Link to="/settings">Settings</Link></li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;