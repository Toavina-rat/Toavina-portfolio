import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaComments, FaHandshake, FaRocket } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

interface ContactInfo {
  icon: JSX.Element;
  text: string;
  link: string;
}

interface FormData {
  name: string;
  email: string;
  message: string;
}

type SubmitStatus = 'success' | null;

const ProfileContact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>(null);

  const contactInfo: ContactInfo[] = [
    { icon: <FaEnvelope />, text: 'toavinaratovoarimanana@gmail.com', link: 'toavinaratovoarimanana@gmail.com' },
    { icon: <FaPhone />, text: '+261 33 81 359 17', link: 'tel:+261338135917' },
    { icon: <FaMapMarkerAlt />, text: 'Antananarivo, MADAGASCAR', link: '#' }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitStatus(null), 3000);
    }, 1500);
  };

  return (
    <div className="py-5 bg-light">
      <motion.h3 
        className="text-center mb-3"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        Contact
      </motion.h3>

      {/* Introduction ajoutée ici */}
      <motion.div 
        className="text-center mb-5"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        <motion.p 
          className="lead text-muted mx-auto"
          style={{ maxWidth: '600px' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <FaComments className="text-primary me-2" />
          Vous avez un projet en tête ? Une question ? N'hésitez pas à me contacter, 
          je serais ravi d'échanger avec vous !
        </motion.p>

        <motion.div 
          className="d-flex justify-content-center gap-3 mt-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2">
            <FaRocket className="me-1" /> Projets
          </span>
          <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2">
            <FaHandshake className="me-1" /> Collaboration
          </span>
        </motion.div>
      </motion.div>

      <div className="container">
        <div className="row">
          <div className="col-md-5 mb-4 mb-md-0">
            <motion.div 
              className="bg-white p-4 rounded-3 shadow-sm h-100"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h4 className="mb-4">Informations</h4>
              
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  className="d-flex align-items-center text-decoration-none text-dark mb-4"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="bg-primary bg-opacity-10 p-3 rounded-circle me-3 text-primary">
                    {info.icon}
                  </span>
                  <span>{info.text}</span>
                </motion.a>
              ))}

              <div className="d-flex align-items-center mt-4">
                <div className="bg-success bg-opacity-10 p-2 rounded-circle me-2">
                  <div className="bg-success rounded-circle" style={{ width: '12px', height: '12px' }}></div>
                </div>
                <span className="text-muted">Disponible pour missions freelance</span>
              </div>
            </motion.div>
          </div>

          <div className="col-md-7">
            <motion.form 
              className="bg-white p-4 rounded-3 shadow-sm"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h4 className="mb-4">Envoyer un message</h4>
              
              <div className="mb-3">
                <input
                  type="text"
                  name="name"
                  placeholder="Votre nom"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-control form-control-lg"
                />
              </div>

              <div className="mb-3">
                <input
                  type="email"
                  name="email"
                  placeholder="Votre email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-control form-control-lg"
                />
              </div>

              <div className="mb-4">
                <textarea
                  name="message"
                  placeholder="Votre message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="form-control form-control-lg"
                />
              </div>

              <motion.button
                type="submit"
                className="btn btn-primary btn-lg w-100"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isSubmitting ? (
                  <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                ) : (
                  <FaPaperPlane className="me-2" />
                )}
                {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
              </motion.button>

              {submitStatus === 'success' && (
                <motion.div 
                  className="alert alert-success mt-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  Message envoyé avec succès !
                </motion.div>
              )}
            </motion.form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileContact;