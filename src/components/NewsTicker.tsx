import { useState, useEffect, useRef } from 'react';
import { Article } from '../types';

interface NewsTickerProps {
  news: Article[];
}

const NewsTicker = ({ news }: NewsTickerProps) => {
  const [isPaused, setIsPaused] = useState(false);
  const tickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!tickerRef.current || news.length === 0) return;
    
    const tickerContent = tickerRef.current;
    const clone = tickerContent.firstElementChild?.cloneNode(true);
    
    if (clone) {
      tickerContent.appendChild(clone);
    }
  }, [news]);

  if (!news.length) return null;

  return (
    <div 
      className={`news-ticker ${isPaused ? 'paused' : ''}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="ticker-label">
        <span>Breaking News</span>
      </div>
      
      <div className="ticker-wrapper">
        <div className="ticker-content" ref={tickerRef}>
          <div className="ticker-items">
            {news.map((item) => (
              <a 
                key={item.id} 
                href={`/article/${item.id}`} 
                className="ticker-item"
              >
                <span className="ticker-bullet">•</span>
                {item.title}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsTicker;