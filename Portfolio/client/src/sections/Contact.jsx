import { motion } from 'framer-motion';
import './contact.css'; // Ajuste para o nome real do arquivo

const Contact = ({ onBack }) => {
  const contacts = [
    { 
      type: 'Email', 
      value: 'luanpessuti@gmail.com', 
      icon: '📧',
      action: () => window.location.href = 'mailto:luanpessuti@gmail.com' // Email corrigido
    },
    { 
      type: 'WhatsApp', 
      value: '(41) 99935-6005', 
      icon: '📱',
      action: () => window.open('https://wa.me/+5541999356005', '_blank', 'noopener,noreferrer')
    },
    { 
      type: 'LinkedIn', 
      value: '@luanpessuti', 
      icon: '🔗',
      action: () => window.open('https://www.linkedin.com/in/luanpessuti/', '_blank', 'noopener,noreferrer')
    }
  ];

  return (
    <motion.div
      className="mac-contact-view"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <div className="mac-contact-header">
        <h2 className="mac-contact-title">CONTATO</h2>
        <div className="mac-window-controls">
          <button 
            className="mac-close-btn" 
            onClick={onBack}
            aria-label="Fechar contatos"
          />
          <button 
            className="mac-minimize-btn" 
            aria-label="Minimizar"
          />
          <button 
            className="mac-zoom-btn" 
            aria-label="Maximizar"
          />
        </div>
      </div>

      <div className="mac-contact-box">
        {contacts.map(contact => (
          <motion.div 
            key={contact.type}
            className="mac-contact-item"
            whileHover={{ x: 5 }}
            whileTap={{ x: 5 }} // Para mobile
            onClick={contact.action}
            role="button" // Melhora acessibilidade
            tabIndex={0} // Permite foco via teclado
          >
            <div className="mac-contact-icon">{contact.icon}</div>
            <div className="mac-contact-info">
              <h3 className="mac-contact-type">{contact.type}</h3>
              <p className="mac-contact-value">{contact.value}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mac-contact-footer">
        <p className="mac-contact-message">
          Clique em qualquer contato para iniciar a comunicação
        </p>
      </div>
    </motion.div>
  );
};

export default Contact;