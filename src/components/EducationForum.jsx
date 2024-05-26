// src/components/EducationForum.jsx
import PropTypes from 'prop-types';
import './EducationForum.scss';

const EducationForum = ({ forum }) => {
  return (
    <div className="education-forum">
      <h4>{forum.title}</h4>
      <p>{forum.description}</p>
      <a href={`/education/forums/${forum.id}`}>View Forum</a>
    </div>
  );
};

EducationForum.propTypes = {
  forum: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default EducationForum;