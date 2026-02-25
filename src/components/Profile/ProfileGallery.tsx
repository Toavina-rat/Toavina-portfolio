import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
}

interface Category {
  id: string;
  label: string;
}

const ProfileGallery: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  const [visibleProjects, setVisibleProjects] = useState<number>(3);
  
  const projects: Project[] = [
    {
      id: 1,
      title: 'CHONO-TÂCHE',
      category: 'vue',
      description: 'Application intuitive de gestion des tâches, conçue pour optimiser le suivi des projets en temps réel.',
      tech: ['Vue.js', 'Laravel', 'Mysql'],
      github: 'https://github.com',
      demo: 'https://demo.com'
    },
    {
      id: 2,
      title: 'SITE E-COMMERCE',
      category: 'react',
      description: 'Plateforme de commerce en ligne moderne, offrant une expérience utilisateur fluide et sécurisée pour les achats en ligne.',
      tech: ['React', 'Node.js', 'MongoDB'],
      github: 'https://github.com',
      demo: 'https://demo.com'
    },
    {
      id: 3,
      title: 'WEB CUP 2024',
      category: 'javascript',
      description: 'Participation à un hackathon national avec un projet innovant visant à résoudre des problématiques numériques actuelles.',
      tech: ['Flask', 'Mysql', 'CSS/HTML/JS'],
      github: 'https://github.com',
      demo: 'https://demo.com'
    },
    {
      id: 4,
      title: 'DASHBOARD ANALYTIQUE',
      category: 'react',
      description: 'Dashboard interactif pour la visualisation de données en temps réel avec graphiques dynamiques.',
      tech: ['React', 'D3.js', 'Express'],
      github: 'https://github.com',
      demo: 'https://demo.com'
    }
  ];

  const categories: Category[] = [
    { id: 'all', label: 'Tous' },
    { id: 'react', label: 'React' },
    { id: 'vue', label: 'Vue.js' },
    { id: 'javascript', label: 'JavaScript' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  const displayedProjects = filteredProjects.slice(0, visibleProjects);

  return (
    <div className="py-5">
      <motion.h3 
        className="text-center mb-5"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        Portfolio
      </motion.h3>

      <div className="container">
        {/* Filtres */}
        <div className="d-flex justify-content-center gap-2 mb-5 flex-wrap">
          {categories.map(cat => (
            <motion.button
              key={cat.id}
              className={`btn ${filter === cat.id ? 'btn-primary' : 'btn-outline-primary'}`}
              onClick={() => {
                setFilter(cat.id);
                setVisibleProjects(3);
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat.label}
            </motion.button>
          ))}
        </div>

        {/* Grille de projets - Style comme dans l'image */}
        <div className="row g-4">
          <AnimatePresence>
            {displayedProjects.map(project => (
              <div key={project.id} className="col-md-6 col-lg-4">
                <motion.div
                  className="card h-100 border-0 shadow-sm"
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ y: -5 }}
                  style={{ 
                    borderRadius: '8px',
                    overflow: 'hidden'
                  }}
                >
                  <div className="card-body p-4">
                    {/* Titre du projet en majuscules */}
                    <h4 className="card-title fw-bold mb-3" style={{ fontSize: '1.5rem' }}>
                      {project.title}
                    </h4>
                    
                    {/* Description */}
                    <p className="card-text text-muted mb-4" style={{ fontSize: '0.95rem', lineHeight: '1.5' }}>
                      {project.description}
                    </p>
                    
                    {/* Technologies sur une ligne */}
                    <div className="d-flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, i) => (
                        <span 
                          key={i} 
                          className="text-muted"
                          style={{ 
                            fontSize: '0.9rem',
                            borderRight: i < project.tech.length - 1 ? '1px solid #dee2e6' : 'none',
                            paddingRight: i < project.tech.length - 1 ? '0.5rem' : '0'
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {/* Liens GitHub et Demo */}
                    <div className="d-flex gap-3">
                      <motion.a 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-dark"
                        whileHover={{ scale: 1.1, color: '#6c5ce7' }}
                        style={{ fontSize: '1.2rem' }}
                        aria-label="GitHub"
                      >
                        <FaGithub />
                      </motion.a>
                      <motion.a 
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-dark"
                        whileHover={{ scale: 1.1, color: '#6c5ce7' }}
                        style={{ fontSize: '1.2rem' }}
                        aria-label="Live Demo"
                      >
                        <FaExternalLinkAlt />
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </AnimatePresence>
        </div>

        {/* Bouton Voir plus */}
        {visibleProjects < filteredProjects.length && (
          <div className="text-center mt-5">
            <motion.button
              className="btn btn-outline-primary px-5"
              onClick={() => setVisibleProjects(prev => prev + 3)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Voir plus
            </motion.button>
          </div>
        )}
      </div>

      <style>{`
        .card {
          transition: all 0.3s ease;
          background: white;
        }
        .card:hover {
          box-shadow: 0 10px 25px rgba(108, 92, 231, 0.15) !important;
        }
      `}</style>
    </div>
  );
};

export default ProfileGallery;