import { motion } from 'framer-motion';
import SkillBadge from './Shared/SkillBadge';
import './About.css';

const About = ({ onBack }) => {
  const skills = ['JavaScript', 'React', 'Node.js', 'HTML', 'CSS', 'Git', 'PostgreSQL', 'Express', 'jQuery', 'Vite'];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="mac-content-view"
    >
      <div className="mac-about-scroll-container">
        <div className="mac-about-flex">
          
          <div className="mac-about-bio">
            <h2 className="mac-about-title">SOBRE MIM</h2>
            <div className="mac-about-photo">
            <img
              src="/assets/me.png"
              alt="Minha Foto"
              className="mac-pixel-photo"
              loading="lazy"
              style={{
                border: '2px solid var(--mac-black)',
                boxShadow: '4px 4px 0 var(--mac-gray)'
              }}
            />
          </div>
            <p className="mac-about-text">
              Me chamo Luan Pessuti, estou cursando Engenharia
              de Software e me aperfeiçoando em
              desenvolvimento web full-stack. Sou apaixonado por transformar ideias em interfaces intuitivas e
              visualmente atraentes, onde criatividade e tecnologia se encontram. Estou sempre em busca de
              aprimorar minhas habilidades para criar experiências web que combinem design e funcionalidade de
              forma única. Vamos desenvolver algo incrível juntos?
            </p>

            <div className="mac-skills-box">
              <div className="mac-skills-header">
                <h3 className="mac-skills-title">Skills</h3>
                <div className="mac-window-controls">
                  <button className="mac-close-btn" />
                  <button className="mac-minimize-btn" />
                  <button className="mac-zoom-btn" />
                </div>
              </div>
              <div className="mac-skills-grid">
                {skills.map(skill => (
                  <SkillBadge
                    key={skill}
                    name={skill}
                    macStyle
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        className="mac-back-button"
        onClick={onBack}
        aria-label="Voltar ao Desktop"
      >
        ← Voltar ao Desktop
      </button>
    </motion.div>
  );
};

export default About;