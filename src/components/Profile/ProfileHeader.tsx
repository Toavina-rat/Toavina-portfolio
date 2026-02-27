
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

interface SocialLink {
  icon: JSX.Element;
  url: string;
  label: string;
}

const ProfileHeader: React.FC = () => {
  const socialLinks: SocialLink[] = [
    { icon: <FaGithub />, url: 'https://github.com/Toavina-rat', label: 'GitHub' },
    { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/toavina-ratovoarimanana-6b2902326/', label: 'LinkedIn' }
  ];

  return (
    <div className="min-vh-100 d-flex flex-column">
      {/* Main Content - Centered */}
      <motion.div 
        className="flex-grow-1 d-flex align-items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              {/* Badge Disponible */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                className="mb-4"
              >
                <span className="badge bg-success bg-opacity-10 text-success px-4 py-2 rounded-pill">
                  <span className="me-2">●</span>
                  Disponible
                </span>
              </motion.div>

              {/* Image de profil */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
                className="mb-4"
              >
                <div className="position-relative d-inline-block">
                  <img 
                    src="images/pdp.png" 
                    alt="John Doe" 
                    className="rounded-circle border border-4 border-primary"
                    width="150"
                    height="150"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </motion.div>

              {/* Nom et titre */}
              <motion.h1 
                className="display-3 fw-bold mb-3"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Toavina RATOVOARIMANANA
              </motion.h1>

              <motion.h2 
                className="h3 text-primary mb-4"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                Développeur Full Stack
              </motion.h2>

              {/* Bio */}
              <motion.p 
                className="lead text-muted mb-5 mx-auto"
                style={{ maxWidth: '700px' }}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                Passionné par la création d'expériences numériques innovantes.
                Spécialisé en React, Node.js et design d'interfaces modernes.
              </motion.p>

              {/* Bouton CV */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mb-5"
              >
                <motion.button 
                  className="btn btn-primary btn-lg px-5 py-3 rounded-pill"
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(13, 110, 253, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.open('/cv/CV Toavina.pdf', '_blank')}
                >
                  <FaDownload className="me-2" /> Télécharger CV
                </motion.button>
              </motion.div>

              {/* Réseaux sociaux */}
              <motion.div 
                className="d-flex justify-content-center gap-3"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.9 }}
              >
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-primary rounded-circle p-3 d-inline-flex align-items-center justify-content-center"
                    style={{ width: '50px', height: '50px' }}
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={link.label}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProfileHeader;