import FriendList from '../components/FriendList';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FriendsSidebar from '../components/FriendsSidebar';
import FriendsSearchBar from '../components/FriendsSearchBar';
import './Friends.scss';

const Friends = () => {
  return (
    <div className="friends-page">
      <Header />
      <div className="container">
        <div className="main-content">
          <h2>Friends</h2>
          <FriendsSearchBar />
          <FriendList />
        </div>
        <FriendsSidebar />
      </div>
      <Footer />
    </div>
  );
};

export default Friends;