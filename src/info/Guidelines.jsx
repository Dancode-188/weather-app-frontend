import ReactMarkdown from 'react-markdown';
import guidelines from '!!raw-loader!./guidelines.md';

const Guidelines = () => {
  return (
    <div>
      <ReactMarkdown>{guidelines}</ReactMarkdown>
    </div>
  );
};

export default Guidelines;