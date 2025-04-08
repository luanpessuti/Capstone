// src/sections/Middle.jsx
const Middle = ({ id }) => {
    return (
      <section id={id} style={{ height: '100vh', position: 'relative' }}>
        <img 
          src="/assets/template/midle-bg.png" 
          alt="Cassette Tapes" 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </section>
    );
  };

  export default Middle;