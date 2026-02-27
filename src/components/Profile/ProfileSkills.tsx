
import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';

interface Skill {
  name: string;
  level: number;
}

interface SkillsCategory {
  [key: string]: Skill[];
}

const ProfileSkills: React.FC = () => {
  const skills: SkillsCategory = {
    frontend: [
      { name: 'React', level: 90 },
      { name: 'JavaScript/TypeScript', level: 85 },
      { name: 'HTML5/CSS3', level: 95 },
      { name: 'Next.js', level: 80 },
      { name: 'TailwindCSS', level: 85 }
    ],
    backend: [
      { name: 'Node.js', level: 85 },
      { name: 'Python', level: 75 },
      { name: 'MySQL', level: 80 },
      { name: 'PostgreSQL', level: 75 },
    ],
    POO: [
      { name: 'JAVA', level: 85 },
      { name: 'C#', level: 80 }
    ]
  };

  return (
    <div className="py-5 bg-light">
      <motion.h3 
        className="text-center mb-5"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        Compétences
      </motion.h3>

      <div className="container">
        <div className="row">
          {Object.entries(skills).map(([category, skillList], catIndex) => (
            <div key={category} className="col-md-4 mb-4">
              <motion.div 
                className="card h-100 border-0 shadow-sm"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIndex * 0.2 }}
              >
                <div className="card-body">
                  <h4 className="card-title text-primary mb-4">
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </h4>
                  
                  {skillList.map((skill, index) => (
                    <div key={index} className="mb-3">
                      <div className="d-flex justify-content-between mb-1">
                        <span>{skill.name}</span>
                        <span className="text-primary">{skill.level}%</span>
                      </div>
                      <div className="progress" style={{ height: '8px' }}>
                        <motion.div 
                          className="progress-bar bg-primary"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileSkills;