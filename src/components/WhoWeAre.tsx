import React from 'react';
import { CheckCircle, Zap, Shield, Target, Cpu } from 'lucide-react';

const WhoWeAre: React.FC = () => {

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
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-gradient-to-b from-primary to-accent">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Mission Statement */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-space mb-6 sm:mb-8">
              <span className="text-secondary">WHO</span> WE ARE
            </h2>
            
            <div className="terminal-window rounded-lg p-6 sm:p-8 pt-12">
              <div className="font-mono text-sm space-y-4">
                <div className="text-secondary">$ cat mission.txt</div>
                <div className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  We are aerospace pioneers developing autonomous systems that redefine 
                  what's possible in unmanned flight. Our mission combines decades of 
                  engineering expertise with breakthrough AI technology.
                </div>
                
                <div className="text-secondary mt-6">$ list --capabilities</div>
                <div className="space-y-2 mt-4">
                  <div className="flex items-center gap-3 text-gray-300 text-sm sm:text-base">
                    <span className="text-secondary">{'>'}</span>
                    Autonomous flight systems
                  </div>
                  <div className="flex items-center gap-3 text-gray-300 text-sm sm:text-base">
                    <span className="text-secondary">{'>'}</span>
                    Advanced sensor fusion
                  </div>
                  <div className="flex items-center gap-3 text-gray-300 text-sm sm:text-base">
                    <span className="text-secondary">{'>'}</span>
                    Real-time data processing
                  </div>
                  <div className="flex items-center gap-3 text-gray-300 text-sm sm:text-base">
                    <span className="text-secondary">{'>'}</span>
                    Mission-critical reliability
                  </div>
                </div>
                
                <div className="text-secondary mt-6 typing-animation text-sm sm:text-base">
                  status: operational_excellence_achieved
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Checklist */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold font-space mb-6 sm:mb-8 text-center">
              CORE <span className="text-secondary">TECHNOLOGIES</span>
            </h3>
            
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group relative p-4 sm:p-6 rounded-lg border border-gray-700 hover:border-secondary transition-all duration-300 cursor-pointer"

                >
                  <div className="flex items-start sm:items-center gap-4">
                    <div className="flex-shrink-0 p-2 sm:p-3 rounded-lg bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-primary transition-colors">
                      {feature.icon}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-secondary flex-shrink-0" />
                        <h4 className="font-semibold text-base sm:text-lg">{feature.title}</h4>
                      </div>
                      
                      <div className={`overflow-hidden transition-all duration-300`}>
                        <p className="text-gray-400 font-mono text-xs sm:text-sm leading-relaxed">
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