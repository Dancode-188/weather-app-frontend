// src/components/LeaderboardTable.jsx
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './LeaderboardTable.scss';
import { getLeaderboard } from '../services/LeaderboardService';
import { getCurrentUserId } from '../services/authService';

const LeaderboardTable = ({ leaderboardType }) => {
    const [leaderboardData, setLeaderboardData] = useState([]);
    const [currentUserId, setCurrentUserId] = useState(null);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const leaderboard = await getLeaderboard(leaderboardType);
        setLeaderboardData(leaderboard);
      } catch (error) {
        console.error('Error retrieving leaderboard:', error);
      }
    };
    fetchLeaderboard();
  }, [leaderboardType]);

  useEffect(() => {
    const fetchCurrentUserId = async () => {
      try {
        const userId = await getCurrentUserId();
        setCurrentUserId(userId);
      } catch (error) {
        console.error('Error retrieving current user ID:', error);
      }
    };
    fetchCurrentUserId();
  }, []);

  const handleUserProfileClick = (userId) => {
    // Navigate to user profile page
    console.log('Navigate to user profile:', userId);
  };

  return (
    <table className="leaderboard-table">
      <thead>
        <tr>
          <th>Rank</th>
          <th>User</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>
        {leaderboardData.map((entry, index) => (
          <tr
            key={entry.id}
            className={entry.userId === currentUserId ? 'current-user' : ''}
          >
            <td>{index + 1}</td>
            <td>
              <div className="user-info" onClick={() => handleUserProfileClick(entry.userId)}>
                <img src={entry.profilePicture} alt={entry.name} className="profile-picture" />
                <span>{entry.name}</span>
              </div>
            </td>
            <td>{entry.score}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

LeaderboardTable.propTypes = {
  leaderboardType: PropTypes.string.isRequired,
};

export default LeaderboardTable;