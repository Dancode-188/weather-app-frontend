import { Route, Switch } from 'react-router-dom';
import {
  Home,
  Forecast,
  Maps,
  Alerts,
  SocialFeedPage,
  UserProfilePage,
  Friends,
  Leaderboards,
  Education,
  Settings,
} from './pages';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/forecast" component={Forecast} />
      <Route path="/maps" component={Maps} />
      <Route path="/alerts" component={Alerts} />
      <Route path="/social-feed" component={SocialFeedPage} />
      <Route path="/profile" component={UserProfilePage} />
      <Route path="/friends" component={Friends} />
      <Route path="/leaderboards" component={Leaderboards} />
      <Route path="/education" component={Education} />
      <Route path="/settings" component={Settings} />
    </Switch>
  );
};

export default Routes;
