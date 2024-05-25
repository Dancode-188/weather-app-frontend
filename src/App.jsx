import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Header, Footer } from './components';
import {
  Home,
  Forecast,
  Maps,
  Alerts,
  SocialFeed,
  UserProfile,
  Friends,
  Leaderboards,
  Education,
  Settings,
} from './pages';
import './App.scss';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/forecast" component={Forecast} />
            <Route path="/maps" component={Maps} />
            <Route path="/alerts" component={Alerts} />
            <Route path="/social-feed" component={SocialFeed} />
            <Route path="/profile" component={UserProfile} />
            <Route path="/friends" component={Friends} />
            <Route path="/leaderboards" component={Leaderboards} />
            <Route path="/education" component={Education} />
            <Route path="/settings" component={Settings} />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
