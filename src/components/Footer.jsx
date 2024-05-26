import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="content-guidelines">
        <h4>Content Submission Guidelines</h4>
        <p>
          1. All content must be related to weather and appropriate for all ages.
          2. No spam or advertising is allowed.
          3. Please respect others and engage in constructive discussions.
        </p>
      </div>
      <div className="moderation-policy">
        <h4>Moderation Policy</h4>
        <p>
          We reserve the right to remove any content that violates our guidelines or is deemed inappropriate.
          Repeated violations may result in account suspension or termination.
        </p>
      </div>
      <p>© 2023 Weather App. All rights reserved.</p>
      <p>Data sources: National Weather Service, OpenWeatherMap</p>
      <p>Map providers: Google Maps, Mapbox</p>
    </footer>
  );
};

export default Footer;