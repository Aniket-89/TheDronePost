import React, { useState } from 'react';
import { Send, MapPin, Clock, Briefcase } from 'lucide-react';

const WorkWithUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const positions = [
    {
      title: 'Senior Aerospace Engineer',
      department: 'Engineering',
      location: 'Remote / San Francisco',
      type: 'Full-time',
      description: 'Lead development of next-generation UAV propulsion systems and flight control algorithms.'
    },
    {
      title: 'AI Research Scientist',
      department: 'R&D',
      location: 'Remote / Boston',
      type: 'Full-time',
      description: 'Develop machine learning models for autonomous flight decision-making and obstacle avoidance.'
    },
    {
      title: 'Flight Test Engineer',
      department: 'Operations',
      location: 'Nevada Test Site',
      type: 'Full-time',
      description: 'Conduct field testing and validation of UAV systems under various operational conditions.'
    }
  ];

  return (
    <section className="py-24 px-6 bg-primary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold font-space mb-6">
            WORK <span className="text-secondary">WITH US</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Join our mission to revolutionize aerospace technology. 
            We're looking for exceptional talent to shape the future of autonomous flight.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Open Positions */}
          <div>
            <h3 className="text-3xl font-bold font-space mb-8 flex items-center gap-3">
              <Briefcase className="w-8 h-8 text-secondary" />
              OPEN POSITIONS
            </h3>
            
            <div className="space-y-6">
              {positions.map((position, index) => (
                <div key={index} className="terminal-window rounded-lg p-6 pt-12 group hover:border-secondary/50 transition-colors">
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="text-xl font-bold text-secondary mb-2">{position.title}</h4>
                        <div className="space-y-1 text-sm text-gray-400">
                          <div className="flex items-center gap-2">
                            <span className="text-secondary font-mono">$</span>
                            <span>Department: {position.department}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-secondary" />
                            <span>{position.location}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-secondary" />
                            <span>{position.type}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 text-sm leading-relaxed font-mono">
                      {position.description}
                    </p>
                    
                    <button className="text-secondary hover:text-white font-mono text-sm transition-colors">
                      $ apply --position="{position.title.toLowerCase().replace(/\s+/g, '-')}"
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-3xl font-bold font-space mb-8 flex items-center gap-3">
              <Send className="w-8 h-8 text-secondary" />
              GET IN TOUCH
            </h3>
            
            <form onSubmit={handleSubmit} className="terminal-window rounded-lg p-6 pt-12 space-y-6">
              <div className="text-secondary font-mono text-sm mb-4">
                $ contact --establish-connection
              </div>
              
              <div className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-transparent border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-secondary focus:outline-none transition-colors font-mono"
                    required
                  />
                </div>
                
                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-transparent border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-secondary focus:outline-none transition-colors font-mono"
                    required
                  />
                </div>
                
                <div>
                  <input
                    type="text"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    className="w-full bg-transparent border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-secondary focus:outline-none transition-colors font-mono"
                    required
                  />
                </div>
                
                <div>
                  <textarea
                    placeholder="Your Message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full bg-transparent border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-secondary focus:outline-none transition-colors font-mono resize-none"
                    required
                  />
                </div>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-secondary text-primary py-3 rounded-lg font-bold font-mono hover:bg-secondary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-primary/30 border-t-primary rounded-full animate-spin"></div>
                    Transmitting...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkWithUs;