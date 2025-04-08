import { motion } from 'framer-motion';
import './Folder.css';

const Folder = ({ project, onClick, macStyle }) => {
  if (macStyle) {
    return (
      <motion.div 
        className="mac-folder"
        whileHover={{ y: -5 }}
        onClick={onClick}
      >
        <div className="mac-folder-icon">
          <div className="mac-folder-tab" />
        </div>
        <span className="mac-folder-label">{project.name}</span>
      </motion.div>
    );
  }

  // Mantenha sua versão original como fallback
  return (
    <motion.div className="folder" onClick={onClick}>
      {/* ... */}
    </motion.div>
  );
};

export default Folder;