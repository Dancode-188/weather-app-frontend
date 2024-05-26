import SocialFeed from '../components/SocialFeed';
import Footer from '../components/Footer';
import './SocialFeedPage.scss';

const SocialFeedPage = () => {
  return (
    <div className="social-feed-page">
      <h2>Social Feed</h2>
      <SocialFeed />
      <Footer />
    </div>
  );
};

export default SocialFeedPage;