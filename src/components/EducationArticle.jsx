// EducationArticle.js

import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './EducationArticle.scss';
import { getEducationArticles } from '../services/educationService';

const EducationArticle = ({ articleId }) => {
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const articles = await getEducationArticles();
        const selectedArticle = articles.find((article) => article.id === articleId);
        setArticle(selectedArticle);
      } catch (error) {
        console.error('Error retrieving education articles:', error);
      }
    };

    fetchArticle();
  }, [articleId]);

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <div className="education-article">
      <h2>{article.title}</h2>
      <div className="article-meta">
        <span>Author: {article.author}</span>
        <span>Date: {article.date}</span>
      </div>
      <div className="article-content">{article.content}</div>
      {article.imageUrl && (
        <img src={article.imageUrl} alt="Article" className="article-image" />
      )}
    </div>
  );
};

EducationArticle.propTypes = {
  articleId: PropTypes.string.isRequired,
};

export default EducationArticle;