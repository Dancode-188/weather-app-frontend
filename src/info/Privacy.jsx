import ReactMarkdown from 'react-markdown';
import privacy from '!!raw-loader!./privacy.md';

const Privacy = () => {
  return (
    <div>
      <ReactMarkdown>{privacy}</ReactMarkdown>
    </div>
  );
};

export default Privacy;