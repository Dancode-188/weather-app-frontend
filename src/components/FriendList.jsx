// FriendList.js

import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './FriendList.scss';
import { getFriends, removeFriend } from '../services/friendService';
import { getWeatherByLocation } from '../services/weatherService';

const FriendList = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const fetchFriends = async () => {
      try {
        const friendsData = await getFriends();
        const friendsWithWeather = await Promise.all(
          friendsData.map(async (friend) => {
            const weather = await getWeatherByLocation(friend.location);
            return { ...friend, weather };
          })
        );
        setFriends(friendsWithWeather);
      } catch (error) {
        console.error('Error retrieving friends:', error);
      }
    };
    fetchFriends();
  }, []);

  const handleRemoveFriend = async (friendId) => {
    try {
      await removeFriend(friendId);
      setFriends(friends.filter((friend) => friend.id !== friendId));
    } catch (error) {
      console.error('Error removing friend:', error);
    }
  };

  return (
    <div className="friend-list">
      {friends.map((friend) => (
        <div key={friend.id} className="friend-item">
          <img src={friend.avatar} alt="Friend Avatar" className="avatar" />
          <div className="friend-info">
            <div className="friend-name">{friend.name}</div>
            <div className="friend-location">{friend.location}</div>
            <div className="friend-weather">
              {friend.weather.main.temp}°C, {friend.weather.weather[0].description}
            </div>
          </div>
          <div className="friend-actions">
            <button>View Profile</button>
            <button>Message</button>
            <button onClick={() => handleRemoveFriend(friend.id)}>Remove</button>
          </div>
        </div>
      ))}
    </div>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      weather: PropTypes.shape({
        main: PropTypes.shape({
          temp: PropTypes.number.isRequired,
        }).isRequired,
        weather: PropTypes.arrayOf(
          PropTypes.shape({
            description: PropTypes.string.isRequired,
          })
        ).isRequired,
      }).isRequired,
    })
  ).isRequired,
};

export default FriendList;