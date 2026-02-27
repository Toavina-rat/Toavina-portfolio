import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaProjectDiagram, FaUsers, FaAward, FaUserGraduate, FaHeart } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

interface Stat {
  icon: React.ReactElement;
  value: string;
  label: string;
}

const ProfileStats: React.FC = () => {
  const stats: Stat[] = [
    { icon: <FaCode size={40} />, value: '2', label: "Années d'expérience" },
    { icon: <FaProjectDiagram size={40} />, value: '2', label: 'Projets réalisés' },
    { icon: <FaUsers size={40} />, value: '1', label: 'Clients satisfaits' },
    { icon: <FaAward size={40} />, value: '1', label: 'Certifications' }
  ];

  return (
    <div className="py-5">
      {/* Introduction */}
      <motion.div 
        className="text-center mb-5"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="mb-4"
        >
          <span className="badge bg-primary bg-opacity-10 text-primary px-4 py-2 rounded-pill">
            <FaUserGraduate className="me-2" />
            Qui suis-je ?
          </span>
        </motion.div>

        <motion.h2 
          className="display-5 fw-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          Découvrez mon{' '}
          <span style={{ 
            background: 'linear-gradient(45deg, #6c5ce7, #a8a4e6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            parcours
          </span>
        </motion.h2>

        <motion.div 
          className="row justify-content-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="col-lg-8">
            <div className="card border-0 bg-transparent">
              <div className="card-body p-4">
                <p className="lead text-muted mb-4" style={{ fontSize: '1.2rem', lineHeight: '1.8' }}>
                  Développeur Full Stack passionné par la création d'applications web innovantes et intuitives. 
                  Mon parcours est marqué par une constante recherche d'excellence et d'apprentissage continu.
                </p>
                
                <div className="d-flex flex-wrap justify-content-center gap-3 mb-4">
                  <motion.div 
                    className="d-flex align-items-center"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="bg-primary bg-opacity-10 rounded-circle p-2 me-2">
                      <FaHeart className="text-primary" size={16} />
                    </div>
                    <span className="text-muted">Passionné</span>
                  </motion.div>
                  
                  <motion.div 
                    className="d-flex align-items-center"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="bg-primary bg-opacity-10 rounded-circle p-2 me-2">
                      <FaCode className="text-primary" size={16} />
                    </div>
                    <span className="text-muted">Créatif</span>
                  </motion.div>
                  
                  <motion.div 
                    className="d-flex align-items-center"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="bg-primary bg-opacity-10 rounded-circle p-2 me-2">
                      <FaUsers className="text-primary" size={16} />
                    </div>
                    <span className="text-muted">Collaboratif</span>
                  </motion.div>
                </div>

                <motion.div
                  className="position-relative"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="progress" style={{ height: '4px', backgroundColor: 'rgba(108, 92, 231, 0.1)' }}>
                    <motion.div 
                      className="progress-bar" 
                      style={{ width: '75%', backgroundColor: '#6c5ce7' }}
                      initial={{ width: 0 }}
                      whileInView={{ width: '75%' }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.8, duration: 1.5 }}
                    />
                  </div>
                  <div className="d-flex justify-content-between mt-2">
                    <small className="text-muted">Débutant</small>
                    <small className="text-primary fw-bold">Expert</small>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.hr 
          className="my-5 w-50 mx-auto"
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: '50%', opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          style={{ 
            height: '2px',
            background: 'linear-gradient(90deg, transparent, #6c5ce7, transparent)',
            border: 'none'
          }}
        />
      </motion.div>

      {/* Section Statistiques */}
      <motion.h3 
        className="text-center mb-5"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
      >
        Mes <span className="text-primary">Statistiques</span>
      </motion.h3>

      <div className="container">
        <div className="row g-4">
          {stats.map((stat, index) => (
            <div key={index} className="col-md-3 col-6">
              <motion.div 
                className="card text-center p-4 h-100 border-0 shadow-sm"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + (index * 0.1) }}
                whileHover={{ y: -10, boxShadow: '0 15px 30px rgba(108, 92, 231, 0.2)' }}
              >
                <motion.div 
                  className="text-primary mb-3"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {stat.icon}
                </motion.div>
                <motion.div 
                  className="display-4 fw-bold"
                  style={{ 
                    background: 'linear-gradient(45deg, #6c5ce7, #a8a4e6)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 + (index * 0.1), type: "spring" }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-muted">{stat.label}</div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Petit message supplémentaire */}
      <motion.div 
        className="text-center mt-5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1.2 }}
      >
        <p className="text-muted fst-italic">
          "Chaque chiffre représente une histoire, un défi relevé et une passion partagée."
        </p>
      </motion.div>
    </div>
  );
};

export default ProfileStats;