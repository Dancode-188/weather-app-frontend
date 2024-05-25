// SocialFeed.js

import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './SocialFeed.scss';
import { getPosts, likePost } from '../services/socialService';

const SocialFeed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const fetchedPosts = await getPosts();
        setPosts(fetchedPosts);
      } catch (error) {
        console.error('Error retrieving posts:', error);
      }
    };

    fetchPosts();
  }, []);

  const handleLike = async (postId) => {
    try {
      await likePost(postId);
      // Update the liked post in the local state
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

  return (
    <div className="social-feed">
      {posts.map((post) => (
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
    })
  ).isRequired,
};

export default SocialFeed;