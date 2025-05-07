import { useState, useEffect } from 'react';
import { Search, Menu, X } from 'lucide-react';
import { categories } from '../data/mockData';
import Logo_wide from '../assets/logo_wide.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    
    // Close search when menu is opened
    if (!isMenuOpen) {
      setSearchOpen(false);
    }
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
    
    // Close menu when search is opened
    if (!searchOpen) {
      setIsMenuOpen(false);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
    // In a real app, implement actual search functionality
    setSearchQuery('');
    setSearchOpen(false);
  };

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo-container">
          <a href="/" className="logo">
            <img src={Logo_wide} alt="The Drone Post" className="logo-image" />
            {/* <img src={Logo_white_bg} alt="The Drone Post" className="logo-image" /> */}
          </a>
        </div>
        
        <div className="header-actions">
          <button 
            className="search-toggle" 
            onClick={toggleSearch}
            aria-label="Toggle search"
          >
            <Search size={20} />
          </button>
          
          <button 
            className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        <nav className={`main-navigation ${isMenuOpen ? 'open' : ''}`}>
          <ul className="nav-list">
            {categories.map((category) => (
              <li key={category.id} className="nav-item">
                <a href={`/category/${category.slug}`} className="nav-link">
                  {category.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      
      <div className={`search-container ${searchOpen ? 'open' : ''}`}>
        <form onSubmit={handleSearch} className="search-form">
          <input
            type="text"
            placeholder="Search for articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          <button type="submit" className="search-button">
            <Search size={18} />
          </button>
        </form>
      </div>
    </header>
  );
};

export default Header;