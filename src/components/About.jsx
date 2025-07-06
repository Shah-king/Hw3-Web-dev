import React from 'react';

const About = () => {
  return (
    <section id="about" style={{ padding: '3rem 1.5rem', backgroundColor: '#fff' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#333', marginBottom: '1.5rem' }}>
          About Shah's Kitchen
        </h2>
        <p style={{ fontSize: '1.1rem', color: '#555', marginBottom: '1.5rem' }}>
          Welcome to Shah's Kitchen, where passion meets flavor! We're dedicated to serving fresh, 
          delicious meals in a warm and welcoming atmosphere.
        </p>
        <p style={{ fontSize: '1.1rem', color: '#555', marginBottom: '2rem' }}>
          Every dish is made with love using quality ingredients—from our signature burgers to our creamy milkshakes.
        </p>
        <img 
          src="/banner.jpg" 
          alt="Shah's Kitchen Interior" 
          style={{ width: '100%', maxHeight: '400px', objectFit: 'cover', borderRadius: '10px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
        />
      </div>
    </section>
  );
};

export default About;
