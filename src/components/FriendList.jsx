import PropTypes from 'prop-types';
import './FriendList.scss';

const FriendList = ({ friends }) => {
  return (
    <div className="friend-list">
      {friends.map((friend, index) => (
        <div key={index} className="friend-item">
          <img src={friend.avatar} alt="Friend Avatar" className="avatar" />
          <div className="friend-info">
            <div className="friend-name">{friend.name}</div>
            <div className="friend-location">{friend.location}</div>
          </div>
          <div className="friend-actions">
            <button>Message</button>
            <button>Remove</button>
          </div>
        </div>
      ))}
    </div>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default FriendList;