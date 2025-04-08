import './SkillBadge.css'; // Importação do CSS

const SkillBadge = ({ name, macStyle }) => {
  if (macStyle) {
    return (
      <div className="mac-skill-badge">
        {name}
      </div>
    );
  }

  // Mantenha sua versão original como fallback se ainda for usada em outros lugares
  return (
    <div className="skill-badge">
      {name}
    </div>
  );
};

export default SkillBadge;