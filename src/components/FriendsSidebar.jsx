import PropTypes from 'prop-types';
import './FriendsSidebar.scss';

const FriendsSidebar = ({ friendRequests, suggestedFriends, invites, onAcceptFriendRequest, onDeclineFriendRequest, onSendInvite }) => {
  return (
    <div className="sidebar">
      <div className="friend-requests">
        <h3>Friend Requests</h3>
        {friendRequests.map((request) => (
          <div key={request.id} className="friend-request">
            <img src={request.avatar} alt="Friend Avatar" className="avatar" />
            <div className="friend-info">
              <div className="friend-name">{request.name}</div>
              <div className="friend-actions">
                <button onClick={() => onAcceptFriendRequest(request.id)}>Accept</button>
                <button onClick={() => onDeclineFriendRequest(request.id)}>Decline</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="suggested-friends">
        <h3>Suggested Friends</h3>
        {suggestedFriends.map((friend) => (
          <div key={friend.id} className="suggested-friend">
            <img src={friend.avatar} alt="Friend Avatar" className="avatar" />
            <div className="friend-info">
              <div className="friend-name">{friend.name}</div>
              <div className="friend-actions">
                <button onClick={() => onSendInvite(friend.id)}>Send Invite</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="invites">
        <h3>Invites</h3>
        {invites.map((invite) => (
          <div key={invite.id} className="invite">
            <img src={invite.avatar} alt="Friend Avatar" className="avatar" />
            <div className="invite-info">
              <div className="invite-name">{invite.name}</div>
              <div className="invite-message">{invite.message}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

FriendsSidebar.propTypes = {
  friendRequests: PropTypes.array.isRequired,
  suggestedFriends: PropTypes.array.isRequired,
  invites: PropTypes.array.isRequired,
  onAcceptFriendRequest: PropTypes.func.isRequired,
  onDeclineFriendRequest: PropTypes.func.isRequired,
  onSendInvite: PropTypes.func.isRequired,
};

export default FriendsSidebar;