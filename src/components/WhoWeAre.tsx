import React, { useState } from 'react';
import { CheckCircle, Zap, Shield, Target, Cpu } from 'lucide-react';

const WhoWeAre: React.FC = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Advanced Propulsion',
      detail: 'Cutting-edge electric motors with 40% improved efficiency'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Military-Grade Security',
      detail: 'End-to-end encryption with quantum-resistant protocols'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Precision Navigation',
      detail: 'Sub-centimeter accuracy using advanced LIDAR systems'
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: 'AI-Powered Intelligence',
      detail: 'Real-time decision making with neural network processing'
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-primary to-accent">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Mission Statement */}
          <div>
            <h2 className="text-5xl font-bold font-space mb-8">
              <span className="text-secondary">WHO</span> WE ARE
            </h2>
            
            <div className="terminal-window rounded-lg p-8 pt-12">
              <div className="font-mono text-sm space-y-4">
                <div className="text-secondary">$ cat mission.txt</div>
                <div className="text-gray-300 leading-relaxed">
                  We are aerospace pioneers developing autonomous systems that redefine 
                  what's possible in unmanned flight. Our mission combines decades of 
                  engineering expertise with breakthrough AI technology.
                </div>
                
                <div className="text-secondary mt-6">$ list --capabilities</div>
                <div className="space-y-2 mt-4">
                  <div className="flex items-center gap-3 text-gray-300">
                    <span className="text-secondary">{'>'}</span>
                    Autonomous flight systems
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <span className="text-secondary">{'>'}</span>
                    Advanced sensor fusion
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <span className="text-secondary">{'>'}</span>
                    Real-time data processing
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <span className="text-secondary">{'>'}</span>
                    Mission-critical reliability
                  </div>
                </div>
                
                <div className="text-secondary mt-6 typing-animation">
                  status: operational_excellence_achieved
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Checklist */}
          <div>
            <h3 className="text-3xl font-bold font-space mb-8 text-center">
              CORE <span className="text-secondary">TECHNOLOGIES</span>
            </h3>
            
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group relative p-6 rounded-lg border border-gray-700 hover:border-secondary transition-all duration-300 cursor-pointer"
                  onMouseEnter={() => setHoveredItem(index)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 p-3 rounded-lg bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-primary transition-colors">
                      {feature.icon}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <CheckCircle className="w-5 h-5 text-secondary" />
                        <h4 className="font-semibold text-lg">{feature.title}</h4>
                      </div>
                      
                      <div className={`overflow-hidden transition-all duration-300 ${
                        hoveredItem === index ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'
                      }`}>
                        <p className="text-gray-400 font-mono text-sm">
                          {feature.detail}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;