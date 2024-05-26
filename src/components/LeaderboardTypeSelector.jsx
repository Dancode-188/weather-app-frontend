// src/components/LeaderboardTypeSelector.jsx
import PropTypes from 'prop-types';
import './LeaderboardTypeSelector.scss';

const LeaderboardTypeSelector = ({ leaderboardType, onLeaderboardTypeChange }) => {
  return (
    <div className="leaderboard-type-selector">
      <button
        className={`type-button ${leaderboardType === 'points' ? 'active' : ''}`}
        onClick={() => onLeaderboardTypeChange('points')}
      >
        Points
      </button>
      <button
        className={`type-button ${leaderboardType === 'accuracy' ? 'active' : ''}`}
        onClick={() => onLeaderboardTypeChange('accuracy')}
      >
        Accuracy
      </button>
      <button
        className={`type-button ${leaderboardType === 'contributions' ? 'active' : ''}`}
        onClick={() => onLeaderboardTypeChange('contributions')}
      >
        Contributions
      </button>
    </div>
  );
};

LeaderboardTypeSelector.propTypes = {
  leaderboardType: PropTypes.string.isRequired,
  onLeaderboardTypeChange: PropTypes.func.isRequired,
};

export default LeaderboardTypeSelector;