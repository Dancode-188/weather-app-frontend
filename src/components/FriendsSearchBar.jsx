import { useState } from 'react';
import PropTypes from 'prop-types';
import './FriendsSearchBar.scss';

const FriendsSearchBar = ({ onSearch, locations, mutualFriendCounts }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedMutualFriends, setSelectedMutualFriends] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm, selectedLocation, selectedMutualFriends);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search friends..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="filters">
        <select value={selectedLocation} onChange={(e) => setSelectedLocation(e.target.value)}>
          <option value="">Location</option>
          {locations.map((location) => (
            <option key={location} value={location}>
              {location}
            </option>
          ))}
        </select>
        <select value={selectedMutualFriends} onChange={(e) => setSelectedMutualFriends(e.target.value)}>
          <option value="">Mutual Friends</option>
          {mutualFriendCounts.map((count) => (
            <option key={count} value={count}>
              {count}
            </option>
          ))}
        </select>
      </div>
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

FriendsSearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
  locations: PropTypes.array.isRequired,
  mutualFriendCounts: PropTypes.array.isRequired,
};

export default FriendsSearchBar;