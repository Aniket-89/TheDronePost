import { Facebook, Twitter, Instagram, Youtube, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-container">
          <div className="footer-grid">
            <div className="footer-column about">
              <h3 className="footer-title">About The Drone Post</h3>
              <p className="footer-description">
                The Drone Post is your trusted source for the latest news, reviews,
                and information about drones, aviation technology, and robotics.
              </p>
              <div className="social-links">
                <a href="https://linkedin.com/company/the-drone-post" className="social-link" aria-label="LinkedIn">
                  <Linkedin size={18} />
                </a>
                <a href="https://twitter.com" className="social-link" aria-label="Twitter">
                  <Twitter size={18} />
                </a>
                <a href="https://instagram.com" className="social-link" aria-label="Instagram">
                  <Instagram size={18} />
                </a>
                <a href="https://youtube.com" className="social-link" aria-label="YouTube">
                  <Youtube size={18} />
                </a>
              </div>
            </div>
            
            <div className="footer-column quick-links">
              <h3 className="footer-title">Quick Links</h3>
              <ul className="footer-links">
                <li><a href="/">Home</a></li>
                <li><a href="/latest-news">Latest News</a></li>
                <li><a href="/aviation">Aviation</a></li>
                <li><a href="/robotics">Robotics</a></li>
                <li><a href="/reviews">Reviews</a></li>
                <li><a href="/technology">Technology</a></li>
              </ul>
            </div>
            
            <div className="footer-column important-links">
              <h3 className="footer-title">Important Links</h3>
              <ul className="footer-links">
                <li><a href="/about-us">About Us</a></li>
                <li><a href="/contact">Contact Us</a></li>
                <li><a href="/privacy-policy">Privacy Policy</a></li>
                <li><a href="/terms-of-service">Terms of Service</a></li>
                <li><a href="/advertise">Advertise With Us</a></li>
                <li><a href="/careers">Careers</a></li>
              </ul>
            </div>
            
            <div className="footer-column contact">
              <h3 className="footer-title">Contact Us</h3>
              <ul className="contact-info">
                <li>
                  <Mail size={16} />
                  <a href="mailto:info@thedronepost.com">info@thedronepost.com</a>
                </li>
                <li>
                  <Phone size={16} />
                  <a href="tel:+1-555-123-4567">+1-555-123-4567</a>
                </li>
                <li>
                  <MapPin size={16} />
                  <span>123 Drone Avenue, Tech City, CA 94043, USA</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="footer-container">
          <p className="copyright">
            &copy; {new Date().getFullYear()} The Drone Post. All rights reserved.
          </p>
          <p className="attribution">
            Designed with <span className="heart">♥</span> for drone enthusiasts everywhere
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;