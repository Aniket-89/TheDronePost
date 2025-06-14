import React, { useState } from 'react';
import { Github, Twitter, Linkedin, Mail, MapPin, Phone, ExternalLink, Coffee, Zap } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [hoveredSwitch, setHoveredSwitch] = useState<string | null>(null);

  const footerSections = [
    {
      title: 'Solutions',
      links: [
        { name: 'Surveillance Systems', href: '#', id: 'surveillance' },
        { name: 'Aerial Photography', href: '#', id: 'photography' },
        { name: 'Mapping & Survey', href: '#', id: 'mapping' },
        { name: 'Security Patrol', href: '#', id: 'security' }
      ]
    },
    {
      title: 'Technology',
      links: [
        { name: 'AI Navigation', href: '#', id: 'ai-nav' },
        { name: 'Sensor Fusion', href: '#', id: 'sensors' },
        { name: 'Flight Control', href: '#', id: 'flight' },
        { name: 'Data Analytics', href: '#', id: 'analytics' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '#', id: 'about' },
        { name: 'Careers', href: '#', id: 'careers' },
        { name: 'Press Kit', href: '#', id: 'press' },
        { name: 'Partners', href: '#', id: 'partners' }
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'Documentation', href: '#', id: 'docs' },
        { name: 'API Reference', href: '#', id: 'api' },
        { name: 'Training', href: '#', id: 'training' },
        { name: 'Contact', href: '#', id: 'contact' }
      ]
    }
  ];

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: '#', label: 'GitHub', id: 'github' },
    { icon: <Twitter className="w-5 h-5" />, href: '#', label: 'Twitter', id: 'twitter' },
    { icon: <Linkedin className="w-5 h-5" />, href: '#', label: 'LinkedIn', id: 'linkedin' },
    { icon: <Mail className="w-5 h-5" />, href: '#', label: 'Email', id: 'email' }
  ];

  return (
    <footer className="bg-gradient-to-b from-accent to-primary border-t border-secondary/20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-6 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-secondary to-secondary/60 flex items-center justify-center">
                  <div className="w-8 h-8 border-2 border-primary rounded rotate-45"></div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-space text-secondary">TheDronePost</h3>
                  <div className="text-xs font-mono text-gray-500">ADVANCED_UAV_SOLUTIONS</div>
                </div>
              </div>
              
              <p className="text-gray-400 font-mono text-sm leading-relaxed mb-6">
                Pioneering the future of autonomous flight with cutting-edge AI technology 
                and precision engineering. Transforming industries through intelligent aerial solutions.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3 text-gray-400">
                  <MapPin className="w-4 h-4 text-secondary" />
                  <span className="font-mono">San Francisco, CA | Remote Operations</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <Phone className="w-4 h-4 text-secondary" />
                  <span className="font-mono">+1 (555) 123-AERO</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <Mail className="w-4 h-4 text-secondary" />
                  <span className="font-mono">contact@TheDronePost.ai</span>
                </div>
              </div>
            </div>

            {/* Footer Links with LED Switch Effects */}
            {footerSections.map((section, index) => (
              <div key={index}>
                <h4 className="text-lg font-bold font-space text-secondary mb-6 flex items-center gap-2">
                  <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-secondary transition-all duration-300 font-mono text-sm flex items-center gap-3 group led-switch"
                        onMouseEnter={() => setHoveredSwitch(link.id)}
                        onMouseLeave={() => setHoveredSwitch(null)}
                      >
                        <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          hoveredSwitch === link.id 
                            ? 'bg-secondary shadow-lg shadow-secondary/50 scale-125' 
                            : 'bg-gray-600'
                        }`}></div>
                        <span className="group-hover:translate-x-1 transition-transform duration-300">
                          {link.name}
                        </span>
                        <ExternalLink className={`w-3 h-3 transition-all duration-300 ${
                          hoveredSwitch === link.id ? 'opacity-100 text-secondary' : 'opacity-0'
                        }`} />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-secondary/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Copyright with Powered By */}
            <div className="text-gray-500 font-mono text-sm flex items-center gap-4">
              <div>
                <span className="text-secondary">$</span> Copyright © {currentYear} TheDronePost Inc.
              </div>
              <div className="flex items-center gap-2 text-xs">
                <span>Powered by</span>
                <div className="flex items-center gap-1">
                  <Zap className="w-3 h-3 text-secondary" />
                  <span className="text-secondary">Velcro</span>
                </div>
                <span>&</span>
                <div className="flex items-center gap-1">
                  <Coffee className="w-3 h-3 text-secondary" />
                  <span className="text-secondary">Coffee</span>
                </div>
              </div>
            </div>

            {/* Social Links with LED Effects */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="relative p-3 rounded-lg border border-secondary/20 text-secondary hover:bg-secondary hover:text-primary transition-all duration-300 group led-button"
                  onMouseEnter={() => setHoveredSwitch(social.id)}
                  onMouseLeave={() => setHoveredSwitch(null)}
                >
                  {social.icon}
                  <div className={`absolute -top-1 -right-1 w-2 h-2 rounded-full transition-all duration-300 ${
                    hoveredSwitch === social.id 
                      ? 'bg-secondary shadow-lg shadow-secondary/50' 
                      : 'bg-gray-600'
                  }`}></div>
                </a>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-6 text-sm font-mono">
              {['Privacy Policy', 'Terms of Service', 'Security'].map((item, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="text-gray-500 hover:text-secondary transition-colors relative group"
                  onMouseEnter={() => setHoveredSwitch(`legal-${index}`)}
                  onMouseLeave={() => setHoveredSwitch(null)}
                >
                  <div className={`absolute -left-3 top-1/2 -translate-y-1/2 w-1 h-1 rounded-full transition-all duration-300 ${
                    hoveredSwitch === `legal-${index}` 
                      ? 'bg-secondary shadow-lg shadow-secondary/50' 
                      : 'bg-transparent'
                  }`}></div>
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Terminal Status Bar */}
        <div className="py-4 border-t border-secondary/10">
          <div className="flex items-center justify-center gap-8 text-xs font-mono text-gray-600">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
              <span>SYSTEMS: ONLINE</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-secondary rounded-full"></div>
              <span>UPTIME: 99.9%</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-secondary rounded-full"></div>
              <span>STATUS: OPERATIONAL</span>
            </div>
            <div className="flex items-center gap-2">
              <Coffee className="w-3 h-3 text-secondary animate-pulse" />
              <span>CAFFEINE: OPTIMAL</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;