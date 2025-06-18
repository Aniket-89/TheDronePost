import React from 'react';
import { ArrowLeft, ArrowRight, Loader2, AlertCircle } from 'lucide-react';
import { useBlogs } from '../hooks/useBlogs';
import BlogCard from './BlogCard';

interface BlogListProps {
  limit?: number;
  showNavigation?: boolean;
}

const BlogList: React.FC<BlogListProps> = ({ limit, showNavigation = true }) => {
  const { blogs, loading, error } = useBlogs(limit);
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const handleBlogClick = (slug: string) => {
    // For now, just log the slug. You can implement navigation later
    console.log('Navigate to blog:', slug);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="flex items-center gap-3 text-secondary">
          <Loader2 className="w-6 h-6 animate-spin" />
          <span className="font-mono">Loading blogs...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="flex items-center gap-3 text-red-400">
          <AlertCircle className="w-6 h-6" />
          <span className="font-mono">Error: {error}</span>
        </div>
      </div>
    );
  }

  if (blogs.length === 0) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-center">
          <div className="text-gray-400 font-mono mb-4">No blogs found</div>
          <div className="text-sm text-gray-500">Check back later for new content</div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {showNavigation && (
        <div className="flex justify-end gap-4">
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
      )}

      <div 
        ref={scrollRef}
        className="flex gap-6 sm:gap-8 overflow-x-auto scroll-container pb-4"
        style={{ scrollbarWidth: 'thin' }}
      >
        {blogs.map((blog) => (
          <BlogCard
            key={blog.id}
            blog={blog}
            onClick={() => handleBlogClick(blog.slug)}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogList;