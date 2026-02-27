import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaHome, FaChartBar, FaCode, FaImages, FaEnvelope } from 'react-icons/fa';
import '../../styles/Profile.module.css';  // Import direct sans styles

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
  };

  return (
    <motion.nav 
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="navContainer">
        <motion.div 
          className="logo"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="logoText">
            Toavina RAT.
          </span>
        </motion.div>

        <ul className="navMenu">
          {navItems.map(item => (
            <motion.li 
              key={item.id}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <button
                onClick={() => scrollToSection(item.id)}
                className={`navLink ${activeSection === item.id ? 'active' : ''}`}
              >
                <span className="navIcon">{item.icon}</span>
                <span className="navLabel">{item.label}</span>
              </button>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navigation;