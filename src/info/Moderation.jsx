import ReactMarkdown from 'react-markdown';
import moderation from '!!raw-loader!./moderation.md';

const Moderation = () => {
  return (
    <div>
      <ReactMarkdown>{moderation}</ReactMarkdown>
    </div>
  );
};

export default Moderation;