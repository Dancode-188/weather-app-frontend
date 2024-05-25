import { BrowserRouter as Router } from 'react-router-dom';
import { Header, Footer } from './components';
import Routes from './routes';
import './App.scss';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;