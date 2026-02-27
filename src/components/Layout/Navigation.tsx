import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaHome, FaChartBar, FaCode, FaImages, FaEnvelope } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/Profile.module.css';

interface NavigationProps {
  activeSection: string;
}

interface NavItem {
  id: string;
  icon: React.ReactElement;
  label: string;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection }) => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: NavItem[] = [
    { id: 'home', icon: <FaHome />, label: 'Accueil' },
    { id: 'stats', icon: <FaChartBar />, label: 'Stats' },
    { id: 'skills', icon: <FaCode />, label: 'Compétences' },
    { id: 'portfolio', icon: <FaImages />, label: 'Portfolio' },
    { id: 'contact', icon: <FaEnvelope />, label: 'Contact' }
  ];

  const scrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav 
      className={`navbar navbar-expand-lg fixed-top ${scrolled ? 'navbar-scrolled bg-dark' : 'navbar-transparent'}`}
      style={{ 
        transition: 'all 0.3s ease',
        backgroundColor: scrolled ? 'rgba(26, 26, 46, 0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        boxShadow: scrolled ? '0 10px 30px rgba(0, 0, 0, 0.1)' : 'none'
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container-fluid container-lg">
        {/* Logo avec couleur orange jaunâtre */}
        <motion.div 
          className="navbar-brand d-flex align-items-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scrollToSection('home')}
          style={{ cursor: 'pointer' }}
        >
          <span className="fw-bold fs-3" style={{
            background: 'linear-gradient(135deg, #FFA500, #FFD700)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textShadow: '0 0 10px rgba(255, 165, 0, 0.3)'
          }}>
            Toavina <span style={{ 
              background: 'linear-gradient(135deg, #FF8C00, #FFA500)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>RAT.</span>
          </span>
        </motion.div>

        {/* Bouton menu mobile Bootstrap */}
        <button 
          className="navbar-toggler border-0" 
          type="button" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{ 
            backgroundColor: 'rgba(255, 165, 0, 0.2)',
            padding: '0.5rem 0.75rem'
          }}
        >
          <span className="navbar-toggler-icon" style={{ 
            backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 165, 0, 0.8%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\")"
          }}></span>
        </button>

        {/* Menu de navigation Bootstrap */}
        <div className={`collapse navbar-collapse ${isMobileMenuOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto align-items-center">
            {navItems.map(item => (
              <motion.li 
                key={item.id}
                className="nav-item mx-1"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`nav-link d-flex align-items-center gap-2 px-3 py-2 rounded-3 ${
                    activeSection === item.id ? 'active-nav' : 'text-white'
                  }`}
                  style={{
                    background: activeSection === item.id ? '#FFA500' : 'transparent',
                    color: 'white',
                    border: 'none',
                    transition: 'all 0.3s ease',
                    width: '100%'
                  }}
                  onMouseEnter={(e) => {
                    if (activeSection !== item.id) {
                      e.currentTarget.style.background = 'rgba(255, 165, 0, 0.2)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeSection !== item.id) {
                      e.currentTarget.style.background = 'transparent';
                    }
                  }}
                >
                  <span className="fs-5" style={{ color: activeSection === item.id ? 'white' : '#FFA500' }}>
                    {item.icon}
                  </span>
                  <span className="d-none d-lg-inline">{item.label}</span>
                </button>
              </motion.li>
            ))}
          </ul>

         
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;