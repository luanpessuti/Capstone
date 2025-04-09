import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import './Hero.css';

const Hero = () => {
  // Estados
  const [view, setView] = useState('title-entry');
  const [titlePosition, setTitlePosition] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [showStartButton, setShowStartButton] = useState(false);

  // Sequência de inicialização
  useEffect(() => {
    const bootSequence = async () => {
      // Animação do título subindo
      for (let i = 0; i <= 100; i += 2) {
        await new Promise(resolve => setTimeout(resolve, 20));
        setTitlePosition(i);
      }

      // Efeito de digitação
      const targetText = "Mac OS";
      for (let i = 0; i <= targetText.length; i++) {
        await new Promise(resolve => setTimeout(resolve, 150));
        setTypedText(targetText.substring(0, i));
      }

      setShowStartButton(true);
    };

    bootSequence();
  }, []);

  const handleStart = async () => {
    setShowStartButton(false);
    setView('loading-screen');

    // Animação de loading
    for (let i = 0; i <= 100; i += 5) {
      await new Promise(resolve => setTimeout(resolve, 100));
      setLoadingProgress(i);
    }

    setView('os');
  };

  // Componente MacWindow
  const MacWindow = ({ title, children, onClose }) => (
    <motion.div
      className="mac-window"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      style={{ zIndex: 10 }}
    >
      <div className="mac-window-header">
        <div className="mac-window-controls">
          <button className="mac-close-btn" onClick={onClose} />
          <button className="mac-minimize-btn" />
          <button className="mac-zoom-btn" />
        </div>
        <div className="mac-window-title">{title}</div>
      </div>
      <div className="mac-window-content">
        {children}
      </div>
    </motion.div>
  );

  // Componente OSMenu (Desktop Mac)
  const OSMenu = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="mac-os-container"
    >
      {/* Barra de menu superior */}
      <div className="mac-menu-bar">
        <img 
          className="mac-apple-icon" 
          src="/assets/mac-apple-icon.png" 
          alt="Apple Icon" 
        />
        <span className="mac-menu-item">File</span>
        <span className="mac-menu-item">Edit</span>
        <span className="mac-menu-item">View</span>
        <span className="mac-menu-item">Special</span>
        <span className="mac-menu-time">
          {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </span>
      </div>

      {/* Área de desktop */}
      <motion.div 
        className="mac-desktop"
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {/* Ícones de pastas */}
        <div className="mac-icons-grid">
          {['About Me', 'Projects', 'Contact'].map((item) => (
            <motion.div
              key={item}
              className="mac-folder-icon"
              whileHover={{ y: -5 }}
              onClick={() => setView(item.toLowerCase().replace(' ', '-'))}
            >
              <div className="mac-folder-img" />
              <span className="mac-folder-label">{item}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
  
  return (
    <section className="hero">
      <img src="/assets/template/hero-bg.png" alt="Macintosh" className="hero-bg" />
  
      <div className="crt-screen mac-theme">
        <div className="crt-content">
          <div className="crt-effect" />
  
          <AnimatePresence mode="wait">
            {/* Tela de entrada */}
            {view === 'title-entry' && (
              <motion.div
                key="title-entry"
                className="boot-screen mac-theme"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.div
                  className="title-container"
                  style={{ y: `${-titlePosition}%` }}
                >
                  <div className="retro-text-container">
                    <h1 className="retro-text">
                      {typedText}
                      <span className="blinking-cursor">_</span>
                    </h1>
                  </div>
                </motion.div>

                {showStartButton && (
                  <motion.button
                    className="mac-start-button"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onClick={handleStart}
                  >
                    Start
                  </motion.button>
                )}
              </motion.div>
            )}
  
            {/* Tela de Loading */}
            {view === 'loading-screen' && (
              <motion.div
                key="loading-screen"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="mac-loading-screen"
              >
                <div className="mac-progress-container">
                  <div 
                    className="mac-progress-bar" 
                    style={{ width: `${loadingProgress}%` }}
                  />
                  <div className="mac-progress-text">
                    {loadingProgress >= 100 ? 'Ready' : 'Loading system files...'}
                  </div>
                </div>
              </motion.div>
            )}
  
            {/* Desktop */}
            {view === 'os' && <OSMenu key="os" />}
  
            {/* Janelas de conteúdo */}
            {view === 'about-me' && (
              <MacWindow 
                title="About Me" 
                onClose={() => setView('os')}
                key="about-me"
              >
                <About onBack={() => setView('os')} />
              </MacWindow>
            )}
  
            {view === 'projects' && (
              <MacWindow 
                title="Projects" 
                onClose={() => setView('os')}
                key="projects"
              >
                <Projects onBack={() => setView('os')} />
              </MacWindow>
            )}
  
            {view === 'contact' && (
              <MacWindow 
                title="Contact" 
                onClose={() => setView('os')}
                key="contact"
              >
                <Contact onBack={() => setView('os')} />
              </MacWindow>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Hero;