// src/pages/Leaderboards.jsx
import { useState } from 'react';
import LeaderboardTable from '../components/LeaderboardTable';
import LeaderboardSidebar from '../components/LeaderboardSidebar';
import LeaderboardTypeSelector from '../components/LeaderboardTypeSelector';
import './Leaderboards.scss';

const Leaderboards = () => {
  const [leaderboardType, setLeaderboardType] = useState('points');

  const handleLeaderboardTypeChange = (type) => {
    setLeaderboardType(type);
  };

  return (
    <div className="leaderboards-page">
      <h2>Leaderboards</h2>
      <LeaderboardTypeSelector
        leaderboardType={leaderboardType}
        onLeaderboardTypeChange={handleLeaderboardTypeChange}
      />
      <div className="leaderboard-content">
        <LeaderboardTable leaderboardType={leaderboardType} />
        <LeaderboardSidebar />
      </div>
      <footer className="leaderboard-footer">
        <p>Leaderboards are updated daily and reset at the beginning of each month.</p>
      </footer>
    </div>
  );
};

export default Leaderboards;