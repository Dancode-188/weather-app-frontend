import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Weather App</div>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/forecast">Forecast</a></li>
          <li><a href="/maps">Maps</a></li>
          <li><a href="/alerts">Alerts</a></li>
          <li><a href="/social-feed">Social Feed</a></li>
          <li><a href="/profile">Profile</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;