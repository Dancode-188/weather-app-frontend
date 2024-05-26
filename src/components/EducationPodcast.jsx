// src/components/EducationPodcast.jsx
import PropTypes from 'prop-types';
import './EducationPodcast.scss';

const EducationPodcast = ({ podcast }) => {
  return (
    <div className="education-podcast">
      <h4>{podcast.title}</h4>
      <audio src={podcast.url} controls />
      <p>{podcast.description}</p>
    </div>
  );
};

EducationPodcast.propTypes = {
  podcast: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default EducationPodcast;