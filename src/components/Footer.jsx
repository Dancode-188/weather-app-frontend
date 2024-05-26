// Footer.jsx
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Resources</h4>
          <ul>
            <li><a href="/info/guidelines">Content Submission Guidelines</a></li>
            <li><a href="/info/moderation">Moderation Policy</a></li>
            <li><a href="/info/terms">Terms of Service</a></li>
            <li><a href="/info/privacy">Privacy Policy</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>About</h4>
          <ul>
            <li><a href="/info/about">About Us</a></li>
            <li><a href="/info/contact">Contact</a></li>
            <li><a href="/info/sources">Data Sources</a></li>
            <li><a href="/info/maps">Map Providers</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Weather App. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;