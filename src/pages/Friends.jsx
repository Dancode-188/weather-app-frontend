import { useEffect, useState } from 'react';
import FriendList from '../components/FriendList';
import FriendsSidebar from '../components/FriendsSidebar';
import FriendsSearchBar from '../components/FriendsSearchBar';
import './Friends.scss';
import { getFriends } from '../services/friendService';
import { getCurrentLocation } from '../services/locationService';

const Friends = () => {
  const [friends, setFriends] = useState([]);
  const [locations, setLocations] = useState([]);
  const [mutualFriendCounts, setMutualFriendCounts] = useState([]);
  const [currentLocation, setCurrentLocation] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedMutualFriends, setSelectedMutualFriends] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const friendsData = await getFriends();
        setFriends(friendsData);

        const locationData = await getCurrentLocation();
        setCurrentLocation(locationData);

        const uniqueLocations = [...new Set(friendsData.map(friend => friend.location))];
        setLocations(uniqueLocations);

        const counts = friendsData.map(friend => friend.mutualFriendCount);
        setMutualFriendCounts(counts);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (searchTerm, selectedLocation, selectedMutualFriends) => {
    setSearchTerm(searchTerm);
    setSelectedLocation(selectedLocation);
    setSelectedMutualFriends(selectedMutualFriends);
  };

  const filteredFriends = friends.filter(friend => {
    const nameMatch = friend.name.toLowerCase().includes(searchTerm.toLowerCase());
    const locationMatch = selectedLocation ? friend.location === selectedLocation : true;
    const mutualFriendsMatch = selectedMutualFriends
      ? friend.mutualFriendCount === parseInt(selectedMutualFriends)
      : true;

    return nameMatch && locationMatch && mutualFriendsMatch;
  });

  return (
    <div className="friends-page">
      <div className="container">
        <div className="main-content">
          <h2>Friends</h2>
          <p>Current Location: {currentLocation}</p>
          <FriendsSearchBar
            locations={locations}
            mutualFriendCounts={mutualFriendCounts}
            onSearch={handleSearch}
          />
          <FriendList friends={filteredFriends} />
        </div>
        <FriendsSidebar />
      </div>
    </div>
  );
};

export default Friends;