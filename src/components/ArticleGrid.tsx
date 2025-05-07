import { Article } from '../types';

interface ArticleGridProps {
  articles: Article[];
}

const ArticleGrid = ({ articles }: ArticleGridProps) => {
  if (!articles.length) return <p>No articles found.</p>;

  return (
    <div className="article-grid">
      {articles.map((article) => (
        <article key={article.id} className="article-card">
          <a href={`/article/${article.id}`} className="article-image-link">
            <div className="article-image-container">
              <img 
                src={article.image} 
                alt={article.title} 
                className="article-image"
                loading="lazy"
              />
              <span className="article-category">{article.category}</span>
            </div>
          </a>
          
          <div className="article-content">
            <h3 className="article-title">
              <a href={`/article/${article.id}`}>{article.title}</a>
            </h3>
            
            <p className="article-excerpt">{article.excerpt}</p>
            
            <div className="article-meta">
              <div className="article-author">
                <img 
                  src={article.author.avatar} 
                  alt={article.author.name}
                  className="author-avatar"
                  loading="lazy"
                />
                <span>{article.author.name}</span>
              </div>
              <time className="article-date">{article.date}</time>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};

export default ArticleGrid;