import React, { useState, useEffect } from 'react';
import { CheckCircle, Terminal, Zap } from 'lucide-react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);

  // Cursor blinking effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate subscription process
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubscribed(true);
    setEmail('');
    
    // Reset success state after 5 seconds
    setTimeout(() => setIsSubscribed(false), 5000);
  };

  return (
    <section className="py-24 px-6 bg-gradient-to-r from-primary via-accent to-primary">
      <div className="max-w-4xl mx-auto">
        <div className="terminal-window rounded-lg p-12 pt-16 text-center">
          {!isSubscribed ? (
            <>
              <div className="mb-8">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <Terminal className="w-12 h-12 text-secondary" />
                  <h2 className="text-4xl font-bold font-space">
                    STAY <span className="text-secondary">CONNECTED</span>
                  </h2>
                </div>
                
                <p className="text-gray-400 text-lg font-mono max-w-2xl mx-auto leading-relaxed">
                  Get exclusive access to UAV technology insights, industry updates, 
                  and breakthrough announcements. Join our community of aerospace professionals.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="text-secondary font-mono text-sm text-left mb-4">
                  $ newsletter --subscribe --priority=high --encryption=enabled
                </div>
                
                <div className="max-w-lg mx-auto">
                  <div className={`terminal-input-wrapper ${isFocused ? 'focused' : ''}`}>
                    <div className="terminal-line">
                      <span className="terminal-prompt">user@thedronepost:~$</span>
                      <span className="terminal-command">subscribe --email=</span>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        className="terminal-email-input"
                        placeholder="your.email@domain.com"
                        required
                      />
                      <span className={`terminal-cursor ${cursorVisible && isFocused ? 'visible' : ''}`}>█</span>
                    </div>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full mt-6 bg-secondary text-primary px-8 py-4 rounded-lg font-bold font-mono hover:bg-secondary/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 hover:shadow-lg hover:shadow-secondary/20"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-primary/30 border-t-primary rounded-full animate-spin"></div>
                        <span className="typing-animation">PROCESSING</span>
                      </>
                    ) : (
                      <>
                        <Zap className="w-5 h-5" />
                        EXECUTE SUBSCRIPTION
                      </>
                    )}
                  </button>
                </div>
                
                <div className="text-xs text-gray-500 font-mono space-y-1">
                  <div>* Encrypted transmission protocol active</div>
                  <div>* No spam algorithms deployed</div>
                  <div>* Unsubscribe command available anytime</div>
                </div>
              </form>
            </>
          ) : (
            <div className="space-y-6">
              <div className="flex items-center justify-center gap-4 mb-6">
                <CheckCircle className="w-16 h-16 text-secondary animate-pulse" />
                <div className="text-left">
                  <h3 className="text-2xl font-bold text-secondary font-space">SUCCESS</h3>
                  <p className="text-gray-400 font-mono">Connection established</p>
                </div>
              </div>
              
              <div className="font-mono text-sm space-y-2 text-gray-300">
                <div className="text-secondary">$ subscription_confirmed --status=active</div>
                <div>{'>'} Welcome to the TheDronePost network</div>
                <div>{'>'} Weekly updates: ENABLED</div>
                <div>{'>'} Priority notifications: ACTIVE</div>
                <div>{'>'} Encryption level: MAXIMUM</div>
                <div className="text-secondary animate-pulse">connection_status: SECURED</div>
              </div>
              
              <div className="mt-8 p-4 bg-secondary/10 rounded-lg border border-secondary/20">
                <p className="text-secondary font-mono text-sm">
                  Confirmation packet transmitted. Check your inbox for verification.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;