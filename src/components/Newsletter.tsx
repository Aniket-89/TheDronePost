import { useState } from 'react';
import { Send } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setMessage('Please enter your email address');
      setIsError(true);
      return;
    }
    
    if (!consent) {
      setMessage('Please agree to the privacy terms');
      setIsError(true);
      return;
    }
    
    // In a real application, this would submit to a backend/API
    console.log('Newsletter subscription:', { email, consent });
    
    // Show success message
    setMessage('Thank you for subscribing to our newsletter!');
    setIsError(false);
    setEmail('');
    setConsent(false);
    
    // Clear success message after 5 seconds
    setTimeout(() => {
      setMessage('');
    }, 5000);
  };

  return (
    <section className="newsletter-section">
      <div className="newsletter-container">
        <div className="newsletter-content">
          <h2 className="newsletter-title">Stay Up-to-Date With Drone News</h2>
          <p className="newsletter-description">
            Get weekly updates on aviation, robotics, and the latest drone technology delivered straight to your inbox.
          </p>
        </div>
        
        <form className="newsletter-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="newsletter-input"
              aria-label="Email address for newsletter"
            />
            <button type="submit" className="newsletter-button">
              <span>Subscribe</span>
              <Send size={16} />
            </button>
          </div>
          
          <div className="consent-group">
            <label className="consent-label">
              <input
                type="checkbox"
                checked={consent}
                onChange={() => setConsent(!consent)}
                className="consent-checkbox"
              />
              <span>
                I agree to receive emails from The Drone Post and accept the
                <a href="/privacy-policy"> privacy policy</a>.
              </span>
            </label>
          </div>
          
          {message && (
            <div className={`message ${isError ? 'error' : 'success'}`}>
              {message}
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Newsletter;