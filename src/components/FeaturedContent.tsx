import React, { useRef } from 'react';
import { ArrowLeft, ArrowRight, Clock, ExternalLink } from 'lucide-react';

const FeaturedContent: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const articles = [
    {
      title: 'AI-Powered Flight Autonomy',
      excerpt: 'Breakthrough in machine learning algorithms enables fully autonomous navigation in complex environments.',
      readTime: '8 min read',
      category: 'Technology',
      date: '2024-01-15'
    },
    {
      title: 'Military Applications & Defense',
      excerpt: 'Exploring tactical advantages of next-generation UAV systems in modern warfare scenarios.',
      readTime: '12 min read',
      category: 'Defense',
      date: '2024-01-10'
    },
    {
      title: 'Environmental Impact Assessment',
      excerpt: 'How UAV technology is revolutionizing ecological monitoring and climate research initiatives.',
      readTime: '6 min read',
      category: 'Environment',
      date: '2024-01-05'
    },
    {
      title: 'Commercial Aviation Integration',
      excerpt: 'Regulatory frameworks and safety protocols for UAV operations in commercial airspace.',
      readTime: '10 min read',
      category: 'Aviation',
      date: '2024-01-01'
    },
    {
      title: 'Search and Rescue Operations',
      excerpt: 'Case studies demonstrating life-saving capabilities of autonomous drone systems in emergency scenarios.',
      readTime: '7 min read',
      category: 'Emergency',
      date: '2023-12-28'
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-gradient-to-b from-accent to-primary">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 sm:mb-16 gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-space mb-4">
              FEATURED <span className="text-secondary">CONTENT</span>
            </h2>
            <p className="text-gray-400 text-base sm:text-lg">
              Latest insights and developments in UAV technology
            </p>
          </div>
          
          <div className="flex gap-4">
            <button
              onClick={() => scroll('left')}
              className="p-3 rounded-lg border border-secondary/30 hover:border-secondary hover:bg-secondary/10 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-secondary" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-3 rounded-lg border border-secondary/30 hover:border-secondary hover:bg-secondary/10 transition-colors"
            >
              <ArrowRight className="w-5 h-5 text-secondary" />
            </button>
          </div>
        </div>

        <div 
          ref={scrollRef}
          className="flex gap-6 sm:gap-8 overflow-x-auto scroll-container pb-4"
          style={{ scrollbarWidth: 'thin' }}
        >
          {articles.map((article, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-72 sm:w-80 terminal-window rounded-lg p-4 sm:p-6 pt-12 group cursor-pointer"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs">
                  <span className="px-2 py-1 bg-secondary/20 text-secondary rounded font-mono">
                    {article.category}
                  </span>
                  <span className="text-gray-500 font-mono">{article.date}</span>
                </div>
                
                <h3 className="text-lg sm:text-xl font-bold font-space leading-tight group-hover:text-secondary transition-colors">
                  {article.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                  <div className="flex items-center gap-2 text-gray-500 text-xs">
                    <Clock className="w-4 h-4" />
                    <span>{article.readTime}</span>
                  </div>
                  
                  <button className="flex items-center gap-2 text-secondary hover:text-white transition-colors text-sm font-mono">
                    Read More
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="group bg-secondary text-primary px-6 py-3 rounded-lg font-bold hover:bg-secondary/90 transition-colors inline-flex items-center gap-2">
            <span>Subscribe for Updates</span>
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
              <ArrowRight className="w-4 h-4" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedContent;