import { Article } from '../types';

interface SidebarProps {
  trendingArticles: Article[];
}

const Sidebar = ({ trendingArticles }: SidebarProps) => {
  return (
    <aside className="sidebar">
      <div className="sidebar-section trending">
        <h3 className="sidebar-title">Trending Now</h3>
        
        <div className="trending-articles">
          {trendingArticles.map((article, index) => (
            <div key={article.id} className="trending-article">
              <span className="trending-number">{index + 1}</span>
              <div className="trending-content">
                <a href={`/article/${article.id}`} className="trending-title">
                  {article.title}
                </a>
                <span className="trending-category">{article.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="sidebar-section categories">
        <h3 className="sidebar-title">Categories</h3>
        <ul className="category-list">
          <li><a href="/category/latest-news">Latest News</a></li>
          <li><a href="/category/aviation">Aviation</a></li>
          <li><a href="/category/robotics">Robotics</a></li>
          <li><a href="/category/reviews">Reviews</a></li>
          <li><a href="/category/technology">Technology</a></li>
        </ul>
      </div>
      
      <div className="sidebar-section tags">
        <h3 className="sidebar-title">Popular Tags</h3>
        <div className="tag-cloud">
          <a href="/tag/drones" className="tag">Drones</a>
          <a href="/tag/technology" className="tag">Technology</a>
          <a href="/tag/reviews" className="tag">Reviews</a>
          <a href="/tag/regulations" className="tag">Regulations</a>
          <a href="/tag/photography" className="tag">Photography</a>
          <a href="/tag/innovation" className="tag">Innovation</a>
          <a href="/tag/aviation" className="tag">Aviation</a>
          <a href="/tag/delivery" className="tag">Delivery</a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;