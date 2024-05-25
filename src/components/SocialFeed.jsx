import PropTypes from 'prop-types';
import './SocialFeed.scss';

const SocialFeed = ({ posts }) => {
  return (
    <div className="social-feed">
      {posts.map((post, index) => (
        <div key={index} className="post">
          <div className="post-header">
            <img src={post.avatar} alt="User Avatar" className="avatar" />
            <div className="username">{post.username}</div>
          </div>
          <div className="post-content">{post.content}</div>
          <div className="post-actions">
            <button>Like</button>
            <button>Comment</button>
            <button>Share</button>
          </div>
        </div>
      ))}
    </div>
  );
};

SocialFeed.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default SocialFeed;