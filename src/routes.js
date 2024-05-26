import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Forecast from './pages/Forecast';
import Maps from './pages/Maps';
import Alerts from './pages/Alerts';
import SocialFeedPage from './pages/SocialFeedPage';
import UserProfile from './pages/UserProfile';
import Friends from './pages/Friends';
import Leaderboards from './pages/Leaderboards';
import Education from './pages/Education';
import Settings from './pages/Settings';
import Guidelines from './info/Guidelines';
import Moderation from './info/Moderation';
import Terms from './info/Terms';
import Privacy from './info/Privacy';
import About from './info/About';
import Contact from './info/Contact';
import Sources from './info/Sources';
import MapProviders from './info/MapProviders';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/forecast" element={<Forecast />} />
      <Route path="/maps" element={<Maps />} />
      <Route path="/alerts" element={<Alerts />} />
      <Route path="/social-feed" element={<SocialFeedPage />} />
      <Route path="/profile" element={<UserProfile />} />
      <Route path="/friends" element={<Friends />} />
      <Route path="/leaderboards" element={<Leaderboards />} />
      <Route path="/education" element={<Education />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/info/guidelines" element={<Guidelines />} />
      <Route path="/info/moderation" element={<Moderation />} />
      <Route path="/info/terms" element={<Terms />} />
      <Route path="/info/privacy" element={<Privacy />} />
      <Route path="/info/about" element={<About />} />
      <Route path="/info/contact" element={<Contact />} />
      <Route path="/info/sources" element={<Sources />} />
      <Route path="/info/maps" element={<MapProviders />} />
    </Routes>
  );
};

export default AppRoutes;
