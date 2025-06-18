import React, { useEffect, useState } from 'react';
import { ArrowRight, Download } from 'lucide-react';

const HeroSection: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Next-Generation UAV Technology';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        index = 0;
      }
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20">
      {/* Tech Grid Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary/50 z-10"></div>
      
      {/* Tech Grid Overlay */}
      <div className="absolute inset-0 tech-grid opacity-90"></div>
      
      {/* Animated Drone Wireframe */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 opacity-10 animate-float">
          <svg viewBox="0 0 400 400" className="w-full h-full">
            <defs>
              <linearGradient id="droneGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#14F195" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#14F195" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            <g stroke="url(#droneGradient)" strokeWidth="2" fill="none">
              {/* Drone body */}
              <rect x="160" y="160" width="80" height="80" rx="8" />
              {/* Propellers */}
              <circle cx="120" cy="120" r="40" />
              <circle cx="280" cy="120" r="40" />
              <circle cx="120" cy="280" r="40" />
              <circle cx="280" cy="280" r="40" />
              {/* Arms */}
              <line x1="160" y1="160" x2="120" y2="120" />
              <line x1="240" y1="160" x2="280" y2="120" />
              <line x1="160" y1="240" x2="120" y2="280" />
              <line x1="240" y1="240" x2="280" y2="280" />
            </g>
          </svg>
        </div>
      </div>

      <div className="relative z-10 text-center max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-6 sm:mb-8">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-space mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-white to-secondary bg-clip-text text-transparent">
              TheDronePost
            </span>
          </h1>
          <div className="h-8 sm:h-12 flex items-center justify-center">
            <p className="text-lg sm:text-2xl md:text-3xl font-mono text-secondary typing-animation">
              {typedText}
            </p>
          </div>
        </div>

        <p className="text-base sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8 sm:mb-12 px-4">
          Pioneering autonomous flight systems with cutting-edge AI, advanced sensors, and 
          precision engineering. Transforming industries through intelligent aerial solutions.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4">
          <button className="group bg-secondary text-primary px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg neon-glow particle-effect flex items-center gap-3 transition-all duration-300 w-full sm:w-auto justify-center">
            Explore Solutions
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button className="group border-2 border-secondary text-secondary px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-secondary hover:text-primary transition-all duration-300 flex items-center gap-3 w-full sm:w-auto justify-center">
            <Download className="w-5 h-5" />
            Get Free Guide
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;