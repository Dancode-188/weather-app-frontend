import ReactMarkdown from 'react-markdown';
import contact from '!!raw-loader!./contact.md';

const Contact = () => {
  return (
    <div>
      <ReactMarkdown>{contact}</ReactMarkdown>
    </div>
  );
};

export default Contact;