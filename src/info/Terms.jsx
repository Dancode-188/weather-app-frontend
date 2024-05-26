import ReactMarkdown from 'react-markdown';
import terms from '!!raw-loader!./terms.md';

const Terms = () => {
  return (
    <div>
      <ReactMarkdown>{terms}</ReactMarkdown>
    </div>
  );
};

export default Terms;