import PropTypes from 'prop-types';
import './LeaderboardTable.scss';

const LeaderboardTable = ({ leaderboardData }) => {
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
          <tr key={index}>
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
      user: PropTypes.string.isRequired,
      points: PropTypes.number.isRequired,
      badges: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default LeaderboardTable;