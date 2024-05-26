import ReactMarkdown from 'react-markdown';
import sources from '!!raw-loader!./sources.md';

const Sources = () => {
  return (
    <div>
      <ReactMarkdown>{sources}</ReactMarkdown>
    </div>
  );
};

export default Sources;