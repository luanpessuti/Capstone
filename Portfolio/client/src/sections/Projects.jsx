import { useState } from 'react';
import { motion } from 'framer-motion';
import Folder from './Shared/Folder';
import './Projects.css';

const Projects = ({ onBack }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      name: 'FURIA Live Chat',
      tech: ['React', 'TypeScript', 'Tailwind','Node.js','Next.js', 'API Routes','MongodDB', 'GIT'],
      description: 'Um componente de chat ao vivo desenvolvido para um cenário fictício da equipe de eSports FURIA, combinando transmissão de vídeo, painel de partidas e mensagens em tempo real. O foco foi criar uma experiência visual impactante, responsiva e com layout dinâmico, especialmente adaptado para diferentes tamanhos de tela.',
      year: '2025',
      image: '/assets/projects/case-furiagg.png',
      link: 'https://case01furia.vercel.app/',
    },
    {
      id: 2,
      name: 'DUCK Studio - Landing Page',
      tech: ['Next.js','React', 'TypeScript', 'Tailwind', 'Framer Motion','GIT'],
      description: 'DUCK é uma landing page criativa e conceitual para uma agência fictícia de design e desenvolvimento digital que foi fortemente inspirada na identidade visual da milli.agency',
      year: '2025',
      image: '/assets/projects/DuckProject.png',
      link: 'https://duck-studios.vercel.app/',
    },
    {
      id: 3,
      name: 'Code Café',
      tech: ['REACT','VITE', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Node.js', 'GIT'],
      description: 'O Code Café é um blog técnico temático que mistura programação com a estética de uma cafeteria retrô. O projeto apresenta conceitos de tecnologia e desenvolvimento web de forma leve e criativa, como se fosse um papo entre devs em um café. Possui seções como “Dicas do Barista” e “Receita do Dia”, que entregam conteúdos técnicos com visual personalizado e interativo.',
      year: '2025',
      image: '/assets/projects/codecafe.png',
      link: 'https://code-cafe-lp.vercel.app/',
    },
    {
      id: 4,
      name: 'Ty.Pe Editor',
      tech: ['REACT','HTML','CSS','TIPTAP','EXPRESS','NODEJS','GIT'],
      description: 'Ty.Pe Editor - Um editor de texto rich-text moderno focado em experiência do usuário, oferecendo formatação em tempo real.',
      year: '2025',
      image: '/assets/projects/type-editor.png',
      link: 'https://ty-pe-editor.vercel.app/'
    },
    {
      id: 5,
      name: 'Saimon Game',
      tech: ['HTML','CSS','JAVASCRIPT','JQUERY'],
      description: 'Jogo de memória com sequências de cores e sons, desenvolvido com JavaScript/jQuery.',
      year: '2025',
      image: '/assets/projects/saimon.png',
      link: 'https://luanpessuti.github.io/SimonGame/'
    },
    {
      id: 6,
      name: 'Portfólio',
      tech: ['REACT', 'FRAMER MOTION', 'CSS', 'VITE', 'GIT'],
      description: 'Um portfólio interativo que revive a nostalgia dos computadores dos anos 80/90, com uma interface inspirada no clássico Macintosh.',
      year: '2025',
      image: '/assets/projects/portfolio.png',
      link: 'https://portfolio-luan-pessutis-projects.vercel.app/',
    },
  ];

  return (
    <motion.div
      className="mac-projects-view"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      {!selectedProject ? (
        <>
          <div className="mac-projects-header">
            <h2 className="mac-projects-title">MEUS PROJETOS</h2>
            <div className="mac-window-controls">
            </div>
          </div>

          <div className="mac-folders-grid">
            {projects.map(project => (
              <Folder
                key={project.id}
                project={project}
                onClick={() => setSelectedProject(project)}
                macStyle
              />
            ))}
          </div>
        </>
      ) : (
        <ProjectDetail
          project={selectedProject}
          onBack={() => setSelectedProject(null)}
        />
      )}
    </motion.div>
  );
};

const ProjectDetail = ({ project, onBack }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 10 }}
    transition={{ duration: 0.4, ease: 'easeOut' }}
    className="mac-project-detail"
  >
    <div className="mac-project-header">
      <button className="mac-back-folder" onClick={onBack}>
        ← Voltar
      </button>
      <div className="mac-project-title-container">
        <h3 className="mac-project-title">{project.name}</h3>
        <span className="mac-project-year">{project.year}</span>
      </div>
    </div>

    <div className="mac-project-content">
      {/* Imagem do Projeto */}
      <div className="mac-project-image-container">
        <img
          src={project.image}
          alt={project.name}
          className="mac-project-image"
        />
      </div>

      <div className="mac-project-info">
        {/* Descrição e Link */}
        <div className="mac-project-description">
          <h4 className="mac-section-title">DESCRIÇÃO:</h4>
          <p className="mac-project-text">{project.description}</p>
          <a className='btn-project' href={project.link} target="_blank" rel="noopener noreferrer">Ver projeto</a>
        </div>

        {/* Tecnologias */}
        <div className="mac-project-tech">
          <h4 className="mac-section-title">TECNOLOGIAS:</h4>
          <div className="mac-tech-tags">
            {project.tech.map(tech => (
              <span key={tech} className="mac-tech-tag">{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

export default Projects;