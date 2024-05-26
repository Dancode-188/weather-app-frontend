// src/pages/Education.jsx
import { useState, useEffect } from 'react';
import EducationArticle from '../components/EducationArticle';
import EducationVideo from '../components/EducationVideo';
import EducationPodcast from '../components/EducationPodcast';
import EducationQuiz from '../components/EducationQuiz';
import EducationForum from '../components/EducationForum';
import { getPopularTopics, getTrendingArticles, getLatestArticles, getFeaturedVideos, getLatestPodcasts, getInteractiveQuizzes, getDiscussionForums, getUserBookmarks } from '../services/educationService';
import './Education.scss';

const Education = () => {
    const [popularTopics, setPopularTopics] = useState([]);
    const [trendingArticles, setTrendingArticles] = useState([]);
    const [latestArticles, setLatestArticles] = useState([]);
    const [featuredVideos, setFeaturedVideos] = useState([]);
    const [latestPodcasts, setLatestPodcasts] = useState([]);
    const [interactiveQuizzes, setInteractiveQuizzes] = useState([]);
    const [discussionForums, setDiscussionForums] = useState([]);
    const [userBookmarks, setUserBookmarks] = useState([]);


  useEffect(() => {
    // Fetch data from educationService
    const fetchData = async () => {
        try {
          const [
            popularTopicsData,
            trendingArticlesData,
            latestArticlesData,
            featuredVideosData,
            latestPodcastsData,
            interactiveQuizzesData,
            discussionForumsData,
            userBookmarksData,
          ] = await Promise.all([
            getPopularTopics(),
            getTrendingArticles(),
            getLatestArticles(),
            getFeaturedVideos(),
            getLatestPodcasts(),
            getInteractiveQuizzes(),
            getDiscussionForums(),
            getUserBookmarks(),
          ]);

          setPopularTopics(popularTopicsData);
          setTrendingArticles(trendingArticlesData);
          setLatestArticles(latestArticlesData);
          setFeaturedVideos(featuredVideosData);
          setLatestPodcasts(latestPodcastsData);
          setInteractiveQuizzes(interactiveQuizzesData);
          setDiscussionForums(discussionForumsData);
          setUserBookmarks(userBookmarksData);
        } catch (error) {
          console.error('Error retrieving education data:', error);
        }
      };

      fetchData();
  }, []);

  return (
    <div className="education-page">
      <header className="education-header">
        <h2>Weather Education</h2>
        <nav>
          <ul>
            <li><a href="/education/articles">Articles</a></li>
            <li><a href="/education/videos">Videos</a></li>
            <li><a href="/education/podcasts">Podcasts</a></li>
            <li><a href="/education/quizzes">Quizzes</a></li>
            <li><a href="/education/forums">Forums</a></li>
          </ul>
        </nav>
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <button>Search</button>
        </div>
      </header>
      <main className="education-content">
        <div className="articles-section">
          <h3>Latest Articles</h3>
          {latestArticles.map((article) => (
            <EducationArticle key={article.id} article={article} />
          ))}
        </div>
        <div className="videos-section">
          <h3>Featured Videos</h3>
          {featuredVideos.map((video) => (
            <EducationVideo key={video.id} video={video} />
          ))}
        </div>
        <div className="podcasts-section">
          <h3>Latest Podcasts</h3>
          {latestPodcasts.map((podcast) => (
            <EducationPodcast key={podcast.id} podcast={podcast} />
          ))}
        </div>
        <div className="quizzes-section">
          <h3>Interactive Quizzes</h3>
          {interactiveQuizzes.map((quiz) => (
            <EducationQuiz key={quiz.id} quiz={quiz} />
          ))}
        </div>
        <div className="forums-section">
          <h3>Discussion Forums</h3>
          {discussionForums.map((forum) => (
            <EducationForum key={forum.id} forum={forum} />
          ))}
        </div>
      </main>
      <aside className="education-sidebar">
        <div className="popular-topics">
          <h3>Popular Topics</h3>
          <ul>
            {popularTopics.map((topic) => (
              <li key={topic.id}><a href={`/education/topics/${topic.id}`}>{topic.name}</a></li>
            ))}
          </ul>
        </div>
        <div className="trending-articles">
          <h3>Trending Articles</h3>
          <ul>
            {trendingArticles.map((article) => (
              <li key={article.id}><a href={`/education/articles/${article.id}`}>{article.title}</a></li>
            ))}
          </ul>
        </div>
        {/* Render user bookmarks */}
        <div className="user-bookmarks">
          <h3>Bookmarks</h3>
          {userBookmarks.map((bookmark) => (
            <div key={bookmark.id}>
              <a href={bookmark.url}>{bookmark.title}</a>
            </div>
          ))}
        </div>
      </aside>
      <footer className="education-footer">
      <div className="attributions">
          <h4>Attributions</h4>
          <p>Some content provided by National Weather Service and OpenWeatherMap.</p>
        </div>
        <div className="sources">
          <h4>Sources</h4>
          <ul>
            <li><a href="https://www.weather.gov">National Weather Service</a></li>
            <li><a href="https://openweathermap.org">OpenWeatherMap</a></li>
          </ul>
        </div>
        <div className="additional-resources">
          <h4>Additional Resources</h4>
          <ul>
            <li><a href="https://www.noaa.gov">NOAA</a></li>
            <li><a href="https://www.metoffice.gov.uk">Met Office</a></li>
            <li><a href="https://www.wmo.int">World Meteorological Organization</a></li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Education;