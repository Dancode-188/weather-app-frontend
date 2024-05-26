import ReactMarkdown from 'react-markdown';
import about from '!!raw-loader!./about.md';

const About = () => {
  return (
    <div>
      <ReactMarkdown>{about}</ReactMarkdown>
    </div>
  );
};

export default About;