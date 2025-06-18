import React, { useState } from 'react';
import { Send } from 'lucide-react';

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


  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-primary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-space mb-4 sm:mb-6">
            WORK <span className="text-secondary">WITH US</span>
          </h2>
          <p className="text-base sm:text-xl text-gray-400 max-w-3xl mx-auto px-4">
            Join our mission to revolutionize aerospace technology. 
            We're looking for exceptional talent to shape the future of autonomous flight.
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          {/* Contact Form */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold font-space mb-6 sm:mb-8 flex items-center gap-3 justify-center sm:justify-start">
              <Send className="w-6 h-6 sm:w-8 sm:h-8 text-secondary" />
              GET IN TOUCH
            </h3>
            
            <form onSubmit={handleSubmit} className="terminal-window rounded-lg p-4 sm:p-6 pt-12 space-y-6">
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
                    className="w-full bg-transparent border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-secondary focus:outline-none transition-colors font-mono text-sm sm:text-base"
                    required
                  />
                </div>
                
                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-transparent border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-secondary focus:outline-none transition-colors font-mono text-sm sm:text-base"
                    required
                  />
                </div>
                
                <div>
                  <input
                    type="text"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    className="w-full bg-transparent border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-secondary focus:outline-none transition-colors font-mono text-sm sm:text-base"
                    required
                  />
                </div>
                
                <div>
                  <textarea
                    placeholder="Your Message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full bg-transparent border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-secondary focus:outline-none transition-colors font-mono resize-none text-sm sm:text-base"
                    required
                  />
                </div>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-secondary text-primary py-3 rounded-lg font-bold font-mono hover:bg-secondary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 text-sm sm:text-base"
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