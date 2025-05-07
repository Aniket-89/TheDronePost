import { useState, useEffect } from 'react';
import Header from './components/Header';
import FeaturedSlider from './components/FeaturedSlider';
import NewsTicker from './components/NewsTicker';
import ArticleGrid from './components/ArticleGrid';
import Sidebar from './components/Sidebar';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import { Article } from './types';
import { getMockArticles } from './data/mockData';

function App() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // In a real application, this would be an API call
    const fetchArticles = async () => {
      try {
        const data = getMockArticles();
        setArticles(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching articles:', error);
        setLoading(false);
      }
    };
    
    fetchArticles();
  }, []);

  const featuredArticles = articles.filter(article => article.featured);
  const breakingNews = articles.filter(article => article.breaking).slice(0, 5);
  const trendingArticles = articles.filter(article => article.trending).slice(0, 5);
  const regularArticles = articles.filter(article => !article.featured).slice(0, 8);

  return (
    <div className="app-container">
      <Header />
      
      {loading ? (
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Loading the latest drone news...</p>
        </div>
      ) : (
        <>
          <NewsTicker news={breakingNews} />
          
          <main className="main-content">
            <FeaturedSlider articles={featuredArticles} />
            
            <div className="content-grid">
              <div className="articles-container">
                <h2 className="section-title">Latest Articles</h2>
                <ArticleGrid articles={regularArticles} />
              </div>
              
              <Sidebar trendingArticles={trendingArticles} />
            </div>
            
            <Newsletter />
          </main>
        </>
      )}
      
      <Footer />
    </div>
  );
}

export default App;