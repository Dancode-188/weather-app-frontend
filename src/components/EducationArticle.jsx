import PropTypes from 'prop-types';
import './EducationArticle.scss';

const EducationArticle = ({ article }) => {
  return (
    <div className="education-article">
      <h2>{article.title}</h2>
      <div className="article-meta">
        <span>Author: {article.author}</span>
        <span>Date: {article.date}</span>
      </div>
      <div className="article-content">
        {article.content}
      </div>
      {article.imageUrl && (
        <img src={article.imageUrl} alt="Article" className="article-image" />
      )}
    </div>
  );
};

EducationArticle.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    imageUrl: PropTypes.string,
  }).isRequired,
};

export default EducationArticle;