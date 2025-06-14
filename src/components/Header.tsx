import React, { useState, useEffect } from 'react';
import { Menu, X, Zap, Book, Radio, Monitor, Activity, Wifi, Satellite } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [uptime, setUptime] = useState(0);
  const [telemetryPulse, setTelemetryPulse] = useState(false);
  const [systemStatus, setSystemStatus] = useState('OPERATIONAL');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Uptime counter
  useEffect(() => {
    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Math.floor((Date.now() - startTime) / 1000);
      setUptime(elapsed);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Telemetry pulse effect
  useEffect(() => {
    const interval = setInterval(() => {
      setTelemetryPulse(true);
      setTimeout(() => setTelemetryPulse(false), 200);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // System status rotation
  useEffect(() => {
    const statuses = ['OPERATIONAL', 'MONITORING', 'SCANNING', 'ACTIVE'];
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % statuses.length;
      setSystemStatus(statuses[index]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const formatUptime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const navItems = [
    { name: 'Solutions', href: '#solutions', icon: <Zap className="w-4 h-4" /> },
    { name: 'Blogs', href: '#technology', icon: <Book className="w-4 h-4" /> },
    { name: 'About', href: '#about', icon: <Monitor className="w-4 h-4" /> },
    // { name: 'Careers', href: '#careers' },
    { name: 'Contact', href: '#contact', icon: <Radio className="w-4 h-4" /> }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-primary/95 backdrop-blur-md border-b border-secondary/20' 
        : 'bg-transparent'
    }`}>
      {/* Telemetry Bar */}
      <div className="bg-accent/50 border-b border-secondary/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-8 text-xs font-mono">
            <div className="flex items-center gap-6 text-gray-400">
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  telemetryPulse ? 'bg-secondary shadow-lg shadow-secondary/50' : 'bg-secondary/50'
                }`}></div>
                <span>TELEMETRY</span>
              </div>
              <div className="flex items-center gap-2">
                <Activity className="w-3 h-3 text-secondary" />
                <span>UPTIME: {formatUptime(uptime)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Wifi className="w-3 h-3 text-secondary" />
                <span>SIGNAL: 98.7%</span>
              </div>
            </div>
            
            <div className="flex items-center gap-6 text-gray-400">
              <div className="flex items-center gap-2">
                <Satellite className="w-3 h-3 text-secondary" />
                <span>GPS: LOCKED</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
                <span className="text-secondary">{systemStatus}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-secondary to-secondary/60 flex items-center justify-center">
              <div className="w-6 h-6 border-2 border-primary rounded rotate-45"></div>
            </div>
            <div>
              <h1 className="text-xl font-bold font-space text-secondary">TheDronePost</h1>
              <div className="text-xs font-mono text-gray-500">UAV_SYSTEMS_v2.1</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="group flex items-center gap-2 text-gray-300 hover:text-secondary transition-colors font-mono text-sm relative"
              >
                {item.icon}
                <span>{item.name}</span>
                <div className="absolute -bottom-2 left-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-300"></div>
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <button className="px-6 py-2 border border-secondary/30 text-secondary hover:bg-secondary hover:text-primary transition-all duration-300 rounded-lg font-mono text-sm hover:shadow-lg hover:shadow-secondary/20">
              Initialize Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-secondary hover:bg-secondary/10 rounded-lg transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-2 border-t border-secondary/20">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-secondary hover:bg-secondary/5 transition-colors font-mono text-sm rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.icon}
                <span>{item.name}</span>
              </a>
            ))}
            <div className="px-4 pt-4">
              <button className="w-full px-6 py-3 border border-secondary/30 text-secondary hover:bg-secondary hover:text-primary transition-colors rounded-lg font-mono text-sm">
                Initialize Contact
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;