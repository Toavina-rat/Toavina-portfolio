import React, { useState, useEffect } from 'react';
import ProfileHeader from '../components/Profile/ProfileHeader';
import ProfileStats from '../components/Profile/ProfileStats';
import ProfileGallery from '../components/Profile/ProfileGallery';
import ProfileSkills from '../components/Profile/ProfileSkills';
import ProfileContact from '../components/Profile/ProfileContact';
import Navigation from '../components/Layout/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProfilePage: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
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
    }
  };

  // Ajout de l'animation de spin dans le head
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes spin {
        to { transform: rotate(360deg); }
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
      color: colors.text
    }}>
      <Navigation activeSection={activeSection} />
      
      {/* Pas de conteneur avec largeur fixe, tout est en full width */}
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

      {/* Style global pour éliminer toutes les marges blanches */}
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
        }

        #root {
          width: 100%;
          min-height: 100vh;
          background: ${colors.background};
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