import React from 'react';
import BlogList from './BlogList';

const FeaturedContent: React.FC = () => {
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
        </div>

        <BlogList limit={6} showNavigation={true} />

        <div className="text-center mt-12">
          <button className="group bg-secondary text-primary px-6 py-3 rounded-lg font-bold hover:bg-secondary/90 transition-colors inline-flex items-center gap-2">
            <span>View All Blogs</span>
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedContent;