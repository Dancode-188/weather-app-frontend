import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './SocialFeed.scss';
import { getPosts, likePost, getHashtags, getTopContributors } from '../services/socialService';
import LeaderboardTable from './LeaderboardTable';

const SocialFeed = () => {
  const [posts, setPosts] = useState([]);
  const [hashtags, setHashtags] = useState([]);
  const [contributors, setContributors] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedHashtag, setSelectedHashtag] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedPosts = await getPosts();
        setPosts(fetchedPosts);

        const fetchedHashtags = await getHashtags();
        setHashtags(fetchedHashtags);

        const fetchedContributors = await getTopContributors();
        setContributors(fetchedContributors);
      } catch (error) {
        console.error('Error retrieving data:', error);
      }
    };
    fetchData();
  }, []);

  const handleLike = async (postId) => {
    try {
      await likePost(postId);
      const updatedPosts = posts.map((post) => {
        if (post.id === postId) {
          return { ...post, likes: post.likes + 1 };
        }
        return post;
      });
      setPosts(updatedPosts);
    } catch (error) {
      console.error('Error liking post:', error);
    }
  };

  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
  };

  const handleHashtagChange = (event) => {
    setSelectedHashtag(event.target.value);
  };

  const filteredPosts = posts.filter((post) => {
    const locationMatch = selectedLocation ? post.location === selectedLocation : true;
    const hashtagMatch = selectedHashtag ? post.hashtags.includes(selectedHashtag) : true;
    return locationMatch && hashtagMatch;
  });

  return (
    <div className="social-feed">
      <div className="header">
        <input type="text" placeholder="Search..." />
        <div className="filters">
          <select value={selectedLocation} onChange={handleLocationChange}>
            <option value="">All Locations</option>
            {/* Render location options */}
            {[...new Set(posts.map((post) => post.location))].map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </select>
          <select value={selectedHashtag} onChange={handleHashtagChange}>
            <option value="">All Hashtags</option>
            {/* Render hashtag options */}
            {hashtags.map((hashtag) => (
              <option key={hashtag} value={hashtag}>
                {hashtag}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="content-wrapper">
        <div className="sidebar">
          <h3>Trending Hashtags</h3>
          <ul>
            {hashtags.map((hashtag) => (
              <li key={hashtag}>{hashtag}</li>
            ))}
          </ul>
          <h3>Top Contributors</h3>
          <ul>
            {contributors.map((contributor) => (
              <li key={contributor.id}>{contributor.username}</li>
            ))}
          </ul>
          <h3>Leaderboard</h3>
          <LeaderboardTable />
        </div>
        <div className="main-content">
          {filteredPosts.map((post) => (
            <div key={post.id} className="post">
              <div className="post-header">
                <img src={post.avatar} alt="User Avatar" className="avatar" />
                <div className="username">{post.username}</div>
              </div>
              <div className="post-content">{post.content}</div>
              <div className="post-actions">
                <button onClick={() => handleLike(post.id)}>Like ({post.likes})</button>
                <button>Comment</button>
                <button>Share</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

SocialFeed.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      likes: PropTypes.number.isRequired,
      location: PropTypes.string.isRequired,
      hashtags: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
  hashtags: PropTypes.arrayOf(PropTypes.string).isRequired,
  contributors: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default SocialFeed;