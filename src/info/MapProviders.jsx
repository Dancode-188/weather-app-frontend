import ReactMarkdown from 'react-markdown';
import mapProviders from '!!raw-loader!./mapProviders.md';

const MapProviders = () => {
  return (
    <div>
      <ReactMarkdown>{mapProviders}</ReactMarkdown>
    </div>
  );
};

export default MapProviders;