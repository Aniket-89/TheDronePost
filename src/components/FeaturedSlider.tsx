import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Article } from '../types';

interface FeaturedSliderProps {
  articles: Article[];
}

const FeaturedSlider = ({ articles }: FeaturedSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance the slider
  useEffect(() => {
    let intervalId: number;

    if (isAutoPlaying && articles.length > 0) {
      intervalId = window.setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % articles.length);
      }, 6000);
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [isAutoPlaying, articles.length]);

  // Pause auto-play on hover
  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? articles.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % articles.length
    );
  };

  if (!articles.length) return null;

  return (
    <section 
      className="featured-slider"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="slider-container">
        {articles.map((article, index) => (
          <div 
            key={article.id}
            className={`slide ${index === currentIndex ? 'active' : ''}`}
            style={{ 
              transform: `translateX(${(index - currentIndex) * 100}%)`,
              backgroundImage: `url(${article.image})`
            }}
          >
            <div className="slide-content">
              <span className="article-category">{article.category}</span>
              <h2 className="article-title">
                <a href={`/article/${article.id}`}>{article.title}</a>
              </h2>
              <p className="article-excerpt">{article.excerpt}</p>
              <div className="article-meta">
                <span className="article-author">By {article.author.name}</span>
                <span className="article-date">{article.date}</span>
              </div>
              <a href={`/article/${article.id}`} className="read-more">
                Read Full Article
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="slider-controls">
        <button 
          className="slider-arrow prev"
          onClick={goToPrevious}
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>
        
        <div className="slider-dots">
          {articles.map((_, index) => (
            <button
              key={index}
              className={`slider-dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
        <button 
          className="slider-arrow next"
          onClick={goToNext}
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
};

export default FeaturedSlider;