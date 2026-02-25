import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaHome, FaChartBar, FaCode, FaImages, FaEnvelope } from 'react-icons/fa';
import styles from '../../styles/Profile.module.css';  // ✅ Chemin corrigé

interface NavigationProps {
  activeSection: string;
}

interface NavItem {
  id: string;
  icon: JSX.Element;
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
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.navContainer}>
        <div className={styles.logo}>
          <span className={styles.logoText}>Toavina RAT.</span>
        </div>

        <ul className={styles.navMenu}>
          {navItems.map(item => (
            <motion.li 
              key={item.id}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <button
                onClick={() => scrollToSection(item.id)}
                className={`${styles.navLink} ${activeSection === item.id ? styles.active : ''}`}
              >
                <span className={styles.navIcon}>{item.icon}</span>
                <span className={styles.navLabel}>{item.label}</span>
              </button>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navigation;