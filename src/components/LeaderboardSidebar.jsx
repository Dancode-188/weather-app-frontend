// src/components/LeaderboardSidebar.jsx
import { useEffect, useState } from 'react';
import './LeaderboardSidebar.scss';
import { getUserStats, getUserAchievements } from '../services/userService';
import { getCurrentUserId } from '../services/authService';

const LeaderboardSidebar = () => {
  const [userStats, setUserStats] = useState(null);
  const [achievements, setAchievements] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userId = await getCurrentUserId();
        const stats = await getUserStats(userId);
        const userAchievements = await getUserAchievements(userId);
        setUserStats(stats);
        setAchievements(userAchievements);
      } catch (error) {
        console.error('Error retrieving user data:', error);
      }
    };
    fetchUserData();
  }, []);

  if (!userStats) {
    return <div>Loading...</div>;
  }

  return (
    <div className="leaderboard-sidebar">
      <h3>Your Stats</h3>
      <ul>
        <li>Points: {userStats.points}</li>
        <li>Accuracy: {userStats.accuracy}%</li>
        <li>Contributions: {userStats.contributions}</li>
      </ul>
      <h3>Achievements</h3>
      <ul>
        {achievements.map((achievement, index) => (
          <li key={index}>
            <strong>{achievement.name}</strong>
            <p>{achievement.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeaderboardSidebar;