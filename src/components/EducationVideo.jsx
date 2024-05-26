// src/components/EducationVideo.jsx
import PropTypes from 'prop-types';
import './EducationVideo.scss';

const EducationVideo = ({ video }) => {
  return (
    <div className="education-video">
      <h4>{video.title}</h4>
      <video src={video.url} controls />
      <p>{video.description}</p>
    </div>
  );
};

EducationVideo.propTypes = {
  video: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default EducationVideo;