import React, { useState } from 'react';
import { Bone as Drone, Camera, MapPin, Shield, Zap, Radio, Satellite, Database, ArrowRight } from 'lucide-react';

const ToolsSolutions: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const solutions = [
    {
      icon: <Drone className="w-8 h-8" />,
      title: 'Surveillance Systems',
      description: 'Advanced reconnaissance with 4K imaging and thermal detection',
      details: 'Military-grade surveillance capabilities with real-time threat assessment and automated patrol patterns.'
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: 'Aerial Photography',
      description: 'Professional cinematography with stabilized camera systems',
      details: 'Cinema-quality aerial footage with gimbal stabilization and automated flight paths for perfect shots.'
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: 'Mapping & Survey',
      description: 'Precision mapping with centimeter-level accuracy',
      details: 'High-resolution topographical mapping using LIDAR and photogrammetry for construction and surveying.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Security Patrol',
      description: 'Autonomous perimeter monitoring and threat detection',
      details: 'AI-powered security systems with facial recognition and automated alert protocols for critical infrastructure.'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Power Line Inspection',
      description: 'Infrastructure monitoring with thermal imaging',
      details: 'Automated power grid inspection detecting faults, wear, and potential failures before they occur.'
    },
    {
      icon: <Radio className="w-8 h-8" />,
      title: 'Communication Relay',
      description: 'Emergency communication networks in remote areas',
      details: 'Deployable communication nodes providing connectivity in disaster zones and remote operations.'
    },
    {
      icon: <Satellite className="w-8 h-8" />,
      title: 'Environmental Monitoring',
      description: 'Climate data collection and environmental analysis',
      details: 'Comprehensive environmental sensing including air quality, temperature, and ecosystem monitoring.'
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Data Analytics',
      description: 'Real-time processing and intelligent insights',
      details: 'Advanced data processing platforms turning aerial data into actionable intelligence and reports.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Search & Rescue',
      description: 'Life-saving operations with thermal and night vision',
      details: 'Emergency response systems with heat signature detection and GPS coordination for rescue operations.'
    }
  ];

  return (
    <section className="py-24 px-6 bg-primary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold font-space mb-6">
            TOOLS & <span className="text-secondary">SOLUTIONS</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive UAV solutions engineered for mission-critical applications 
            across defense, commercial, and industrial sectors.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="group relative terminal-window rounded-lg p-8 pt-12 cursor-pointer transition-all duration-300 hover:scale-105"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 rounded-lg border-2 border-secondary/20 group-hover:border-secondary transition-colors">
                  <div className="text-secondary group-hover:scale-110 transition-transform">
                    {solution.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold font-space">{solution.title}</h3>
                
                <p className="text-gray-400 text-sm leading-relaxed">
                  {solution.description}
                </p>
                
                <div className={`overflow-hidden transition-all duration-500 ${
                  hoveredCard === index ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="pt-4 border-t border-secondary/20">
                    <p className="text-xs text-gray-500 font-mono leading-relaxed">
                      {solution.details}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Neon glow effect on hover */}
              <div className={`absolute inset-0 rounded-lg transition-opacity duration-300 ${
                hoveredCard === index ? 'opacity-100 neon-glow' : 'opacity-0'
              }`}></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="group bg-gradient-to-r from-secondary to-secondary/80 text-primary px-8 py-4 rounded-lg font-bold text-lg particle-effect inline-flex items-center gap-3 hover:scale-105 transition-transform">
            Explore More Solutions
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ToolsSolutions;