import React from 'react';
import { Clock, ExternalLink, Calendar } from 'lucide-react';
import { type Blog } from '../lib/supabase';

interface BlogCardProps {
  blog: Blog;
  onClick?: () => void;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog, onClick }) => {
  const formatDate = (dateString: string | null) => {
    if (!dateString) return 'Unknown date';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getReadTime = (content: string | null) => {
    if (!content) return '1 min read';
    const words = content.split(' ').length;
    const readTime = Math.ceil(words / 200); // Average reading speed
    return `${readTime} min read`;
  };

  const getExcerpt = (content: string | null) => {
    if (!content) return 'No preview available...';
    return content.length > 150 ? content.substring(0, 150) + '...' : content;
  };

  return (
    <div
      className="flex-shrink-0 w-72 sm:w-80 terminal-window rounded-lg p-4 sm:p-6 pt-12 group cursor-pointer transition-all duration-300 hover:scale-105"
      onClick={onClick}
    >
      <div className="space-y-4">
        {blog.cover_url && (
          <div className="w-full h-32 sm:h-40 rounded-lg overflow-hidden bg-gray-800">
            <img
              src={blog.cover_url}
              alt={blog.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
              }}
            />
          </div>
        )}
        
        <div className="flex items-center justify-between text-xs">
          <span className="px-2 py-1 bg-secondary/20 text-secondary rounded font-mono">
            BLOG
          </span>
          <div className="flex items-center gap-2 text-gray-500 font-mono">
            <Calendar className="w-3 h-3" />
            <span>{formatDate(blog.created_at)}</span>
          </div>
        </div>
        
        <h3 className="text-lg sm:text-xl font-bold font-space leading-tight group-hover:text-secondary transition-colors line-clamp-2">
          {blog.title}
        </h3>
        
        <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
          {getExcerpt(blog.content)}
        </p>
        
        <div className="flex items-center justify-between pt-4 border-t border-gray-700">
          <div className="flex items-center gap-2 text-gray-500 text-xs">
            <Clock className="w-4 h-4" />
            <span>{getReadTime(blog.content)}</span>
          </div>
          
          <button className="flex items-center gap-2 text-secondary hover:text-white transition-colors text-sm font-mono">
            Read More
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;