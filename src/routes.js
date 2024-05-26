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
    </Routes>
  );
};

export default AppRoutes;
