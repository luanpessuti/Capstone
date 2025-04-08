import { motion } from 'framer-motion';

const RetroBox = ({ children, className = '', onClick }) => (
  <motion.div
    className={`retro-box ${className}`}
    onClick={onClick}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    whileHover={{ 
      boxShadow: '0 0 15px var(--text-secondary)',
      transition: { duration: 0.2 }
    }}
  >
    <div className="retro-box-inner">
      {children}
      <div className="retro-box-corners">
        <span className="corner tl">┌</span>
        <span className="corner tr">┐</span>
        <span className="corner bl">└</span>
        <span className="corner br">┘</span>
      </div>
    </div>
  </motion.div>
);

export default RetroBox;