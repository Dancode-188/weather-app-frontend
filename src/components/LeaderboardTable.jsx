// LeaderboardTable.js

import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './LeaderboardTable.scss';
import { getLeaderboard } from '../services/LeaderboardService';

const LeaderboardTable = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const leaderboard = await getLeaderboard();
        setLeaderboardData(leaderboard);
      } catch (error) {
        console.error('Error retrieving leaderboard:', error);
      }
    };

    fetchLeaderboard();
  }, []);

  return (
    <table className="leaderboard-table">
      <thead>
        <tr>
          <th>Rank</th>
          <th>User</th>
          <th>Points</th>
          <th>Badges</th>
        </tr>
      </thead>
      <tbody>
        {leaderboardData.map((entry, index) => (
          <tr key={entry.id}>
            <td>{index + 1}</td>
            <td>{entry.user}</td>
            <td>{entry.points}</td>
            <td>{entry.badges}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

LeaderboardTable.propTypes = {
  leaderboardData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      user: PropTypes.string.isRequired,
      points: PropTypes.number.isRequired,
      badges: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default LeaderboardTable;