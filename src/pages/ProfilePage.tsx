import React, { useState, useEffect } from 'react';
import ProfileHeader from '../components/Profile/ProfileHeader';
import ProfileStats from '../components/Profile/ProfileStats';
import ProfileGallery from '../components/Profile/ProfileGallery';
import ProfileSkills from '../components/Profile/ProfileSkills';
import ProfileContact from '../components/Profile/ProfileContact';
import Navigation from '../components/Layout/Navigation';
import { motion, AnimatePresence } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProfilePage: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [showWelcome, setShowWelcome] = useState<boolean>(true);
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    // Simuler le chargement initial
    setTimeout(() => setIsLoading(false), 1000);
    
    // Cacher l'animation de bienvenue après 6 secondes (augmenté de 4 à 6)
    const welcomeTimer = setTimeout(() => {
      setShowWelcome(false);
    }, 6000);

    return () => clearTimeout(welcomeTimer);
  }, []);

  // Ajouter une classe pour masquer les éléments de traduction
  useEffect(() => {
    // Masquer les éléments de Google Translate
    const hideTranslateElements = () => {
      // Masquer le bandeau de traduction
      const translateBanner = document.querySelector('.goog-te-banner-frame');
      if (translateBanner) {
        (translateBanner as HTMLElement).style.display = 'none';
      }
      
      // Masquer l'icône de traduction
      const translateIcon = document.querySelector('.goog-te-gadget-icon');
      if (translateIcon) {
        (translateIcon as HTMLElement).style.display = 'none';
      }
      
      // Masquer le texte "Toujours traduire les pages..."
      const translateText = document.querySelector('.goog-te-gadget');
      if (translateText) {
        (translateText as HTMLElement).style.display = 'none';
      }
    };

    // Exécuter après un petit délai
    setTimeout(hideTranslateElements, 500);
    
    // Observer les changements DOM pour masquer les éléments qui pourraient apparaître plus tard
    const observer = new MutationObserver(hideTranslateElements);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

  // Couleurs du thème violet
  const colors = {
    primary: '#6c5ce7',
    primaryLight: '#a8a4e6',
    primaryDark: '#5649c0',
    background: 'linear-gradient(135deg, #1a1a2e, #16213e)',
    cardBg: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(108, 92, 231, 0.2)',
    text: '#ecf0f1',
    textMuted: 'rgba(236, 240, 241, 0.7)'
  };

  // Style inline
  const styles = {
    loader: {
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: colors.background
    },
    spinner: {
      width: '50px',
      height: '50px',
      border: `5px solid ${colors.primaryLight}`,
      borderTopColor: colors.primary,
      borderRadius: '50%',
      animation: 'spin 1s linear infinite'
    },
    section: {
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '4rem 0',
      scrollMarginTop: '80px',
      width: '100%'
    },
    welcomeOverlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: colors.background,
      display: 'flex',
      flexDirection: 'column' as const,
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 9999,
      pointerEvents: 'none' as const
    },
    welcomeText: {
      fontSize: 'clamp(2rem, 8vw, 5rem)',
      fontWeight: 'bold' as const,
      color: colors.text,
      textAlign: 'center' as const,
      padding: '2rem',
      lineHeight: 1.3
    },
    welcomeSubtext: {
      fontSize: 'clamp(1.2rem, 4vw, 2rem)',
      color: colors.primary,
      marginTop: '1rem',
      textAlign: 'center' as const
    }
  };

  // Ajout de l'animation de spin dans le head
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes spin {
        to { transform: rotate(360deg); }
      }
      @keyframes float {
        0% { transform: translateY(0px); }
        50% { transform: translateY(-20px); }
        100% { transform: translateY(0px); }
      }
      @keyframes glow {
        0% { text-shadow: 0 0 10px ${colors.primary}; }
        50% { text-shadow: 0 0 30px ${colors.primary}, 0 0 50px ${colors.primaryLight}; }
        100% { text-shadow: 0 0 10px ${colors.primary}; }
      }
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      /* Masquer définitivement les éléments de traduction */
      .goog-te-banner-frame,
      .goog-te-gadget,
      .goog-te-gadget-icon,
      .goog-te-menu-frame,
      .goog-te-menu2,
      .goog-te-balloon-frame,
      #google_translate_element,
      .skiptranslate,
      .goog-tooltip,
      .goog-tooltip:hover,
      iframe[src*="translate"],
      div[class*="goog-te"],
      frame[src*="translate"] {
        display: none !important;
        visibility: hidden !important;
        opacity: 0 !important;
        height: 0 !important;
        width: 0 !important;
        position: absolute !important;
        top: -9999px !important;
        left: -9999px !important;
        pointer-events: none !important;
        z-index: -9999 !important;
      }
      
      /* Forcer le body à ne pas avoir de marge à cause de la bannière */
      body {
        top: 0 !important;
        margin-top: 0 !important;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  if (isLoading) {
    return (
      <div style={styles.loader}>
        <div style={styles.spinner}></div>
      </div>
    );
  }

  return (
    <div style={{ 
      minHeight: '100vh',
      background: colors.background,
      color: colors.text,
      position: 'relative'
    }}>
      {/* Animation de bienvenue - plus longue (6 secondes) */}
      <AnimatePresence>
        {showWelcome && (
          <motion.div
            style={styles.welcomeOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }} // Transition plus douce
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ 
                duration: 1.2,
                type: "spring",
                stiffness: 80 // Plus souple
              }}
              style={{ textAlign: 'center' }}
            >
              <motion.h1 
                style={styles.welcomeText}
                animate={{ 
                  y: [0, -20, 0],
                  textShadow: [
                    `0 0 10px ${colors.primary}`,
                    `0 0 30px ${colors.primary}, 0 0 50px ${colors.primaryLight}`,
                    `0 0 10px ${colors.primary}`
                  ]
                }}
                transition={{ 
                  duration: 4, // Plus lent
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                Bonjour 👋
              </motion.h1>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 1 }} // Plus de délai
              >
                <motion.h2 
                  style={styles.welcomeSubtext}
                  animate={{ 
                    scale: [1, 1.05, 1],
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                >
                  Bienvenue sur mon portfolio
                </motion.h2>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5, duration: 1 }} // Plus de délai
              >
                <motion.h3 
                  style={{ 
                    ...styles.welcomeSubtext,
                    fontSize: 'clamp(1.5rem, 5vw, 3rem)',
                    color: colors.text,
                    marginTop: '2rem'
                  }}
                  animate={{ 
                    rotateY: [0, 360],
                  }}
                  transition={{ 
                    duration: 3,
                    delay: 2,
                    ease: "easeInOut"
                  }}
                >
                  Toavina RATOVOARIMANANA
                </motion.h3>
              </motion.div>

              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '250px' }} // Plus large
                transition={{ delay: 2.5, duration: 1.5 }} // Plus long
                style={{
                  height: '3px',
                  background: colors.primary,
                  margin: '2.5rem auto',
                  borderRadius: '2px'
                }}
              />

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3, duration: 1.5 }} // Plus de délai
                style={{
                  color: colors.textMuted,
                  fontSize: '1.2rem',
                  maxWidth: '600px',
                  margin: '0 auto',
                  padding: '0 2rem'
                }}
              >
                Découvrez mon parcours, mes compétences et mes réalisations
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Navigation activeSection={activeSection} />
      
      {/* Contenu principal */}
      <div>
        <section id="home" style={styles.section}>
          <div style={{ width: '100%', padding: '0 2rem' }}>
            <ProfileHeader />
          </div>
        </section>

        <section id="stats" style={styles.section}>
          <div style={{ width: '100%', padding: '0 2rem' }}>
            <ProfileStats />
          </div>
        </section>

        <section id="skills" style={styles.section}>
          <div style={{ width: '100%', padding: '0 2rem' }}>
            <ProfileSkills />
          </div>
        </section>

        <section id="portfolio" style={styles.section}>
          <div style={{ width: '100%', padding: '0 2rem' }}>
            <ProfileGallery />
          </div>
        </section>

        <section id="contact" style={styles.section}>
          <div style={{ width: '100%', padding: '0 2rem' }}>
            <ProfileContact />
          </div>
        </section>
      </div>

      {/* Style global */}
      <style>{`
        /* Réinitialisation complète */
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html, body {
          margin: 0 !important;
          padding: 0 !important;
          width: 100% !important;
          max-width: 100% !important;
          overflow-x: hidden !important;
          background: ${colors.background};
          top: 0 !important; /* Éviter le décalage dû à Google Translate */
        }

        #root {
          width: 100%;
          min-height: 100vh;
          background: ${colors.background};
        }

        /* Animation de fondu pour les sections */
        section {
          animation: fadeInUp 0.8s ease-out;
        }

        /* Supprimer toutes les marges des conteneurs Bootstrap */
        .container, .container-fluid, .container-lg, .container-md, .container-sm, .container-xl {
          margin-left: 0 !important;
          margin-right: 0 !important;
          padding-left: 2rem !important;
          padding-right: 2rem !important;
          max-width: 100% !important;
          width: 100% !important;
        }

        .row {
          margin-left: 0 !important;
          margin-right: 0 !important;
          width: 100% !important;
        }

        .col, .col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12,
        .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12,
        .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12,
        .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12,
        .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12 {
          padding-left: 0 !important;
          padding-right: 0 !important;
        }

        /* Personnalisation des classes Bootstrap */
        .btn-primary {
          background-color: ${colors.primary} !important;
          border-color: ${colors.primary} !important;
        }
        
        .btn-primary:hover {
          background-color: ${colors.primaryDark} !important;
          border-color: ${colors.primaryDark} !important;
        }
        
        .btn-outline-primary {
          color: ${colors.primary} !important;
          border-color: ${colors.primary} !important;
        }
        
        .btn-outline-primary:hover {
          background-color: ${colors.primary} !important;
          color: white !important;
        }
        
        .text-primary {
          color: ${colors.primary} !important;
        }
        
        .bg-primary {
          background-color: ${colors.primary} !important;
        }
        
        .border-primary {
          border-color: ${colors.primary} !important;
        }
        
        .badge.bg-primary {
          background-color: ${colors.primary} !important;
        }
        
        /* Personnalisation des cartes et formulaires */
        .card, .bg-white {
          background-color: ${colors.cardBg} !important;
          backdrop-filter: blur(10px);
          border: ${colors.border} !important;
          color: ${colors.text} !important;
        }
        
        .form-control {
          background-color: rgba(255, 255, 255, 0.1) !important;
          border: ${colors.border} !important;
          color: ${colors.text} !important;
        }
        
        .form-control:focus {
          background-color: rgba(255, 255, 255, 0.15) !important;
          border-color: ${colors.primary} !important;
          box-shadow: 0 0 0 0.2rem rgba(108, 92, 231, 0.25) !important;
          color: ${colors.text} !important;
        }
        
        .form-control::placeholder {
          color: ${colors.textMuted} !important;
        }
        
        .text-muted {
          color: ${colors.textMuted} !important;
        }
        
        .bg-light {
          background-color: transparent !important;
        }
        
        /* Personnalisation des alertes */
        .alert {
          background-color: rgba(108, 92, 231, 0.1) !important;
          border-color: ${colors.primary} !important;
          color: ${colors.primary} !important;
        }
        
        /* Personnalisation des badges */
        .badge.bg-light {
          background-color: rgba(108, 92, 231, 0.1) !important;
          color: ${colors.primary} !important;
        }
        
        /* Personnalisation des progress bars */
        .progress {
          background-color: rgba(255, 255, 255, 0.1) !important;
        }
        
        .progress-bar {
          background-color: ${colors.primary} !important;
        }
        
        /* Personnalisation des liens */
        a {
          color: ${colors.text} !important;
        }
        
        a:hover {
          color: ${colors.primary} !important;
        }
        
        /* Personnalisation du texte */
        h1, h2, h3, h4, h5, h6 {
          color: ${colors.text} !important;
        }
        
        .display-4 {
          color: ${colors.text} !important;
        }
        
        .text-dark {
          color: ${colors.text} !important;
        }
        
        /* Personnalisation des icônes */
        .bg-opacity-10 {
          background-color: rgba(108, 92, 231, 0.1) !important;
        }
        
        /* Personnalisation des bordures */
        .border {
          border-color: ${colors.border} !important;
        }
        
        /* Personnalisation des ombres */
        .shadow-sm {
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3) !important;
        }
        
        /* Personnalisation des badges de disponibilité */
        .badge.bg-success {
          background-color: ${colors.primary} !important;
          color: white !important;
        }
        
        /* Personnalisation des cercles de statut */
        .bg-success {
          background-color: ${colors.primary} !important;
        }
        
        .bg-success.bg-opacity-10 {
          background-color: rgba(108, 92, 231, 0.1) !important;
        }
        
        /* Ajustement pour le texte dans les cartes */
        .card-title {
          color: ${colors.primary} !important;
        }
        
        /* Personnalisation du spinner */
        .spinner-border {
          color: ${colors.primary} !important;
        }
        
        /* Animation de fondu pour le texte */
        .fade-in {
          animation: fadeIn 1s ease-in;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        /* Responsive design */
        @media (max-width: 768px) {
          section {
            padding: 2rem 0 !important;
          }
          
          .container, .container-fluid, [style*="padding: 0 2rem"] {
            padding-left: 1rem !important;
            padding-right: 1rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default ProfilePage;