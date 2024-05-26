// src/components/EducationQuiz.jsx
import { useState } from 'react';
import PropTypes from 'prop-types';
import './EducationQuiz.scss';

const EducationQuiz = ({ quiz }) => {
  const [selectedAnswers, setSelectedAnswers] = useState({});

  const handleAnswerChange = (questionId, selectedOption) => {
    setSelectedAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: selectedOption,
    }));
  };

  const handleSubmit = () => {
    // Perform quiz submission logic here
    console.log('Quiz submitted:', selectedAnswers);
  };

  return (
    <div className="education-quiz">
      <h4>{quiz.title}</h4>
      <form onSubmit={handleSubmit}>
        {quiz.questions.map((question) => (
          <div key={question.id} className="quiz-question">
            <p>{question.text}</p>
            {question.options.map((option) => (
              <div key={option.id}>
                <label>
                  <input
                    type="radio"
                    value={option.id}
                    checked={selectedAnswers[question.id] === option.id}
                    onChange={() => handleAnswerChange(question.id, option.id)}
                  />
                  {option.text}
                </label>
              </div>
            ))}
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

EducationQuiz.propTypes = {
  quiz: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    questions: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        options: PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
          })
        ).isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default EducationQuiz;