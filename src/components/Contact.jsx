import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thanks for reaching out! We will get back to you soon.');
    console.log(formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" style={{ padding: '3rem 1.5rem', backgroundColor: '#f9f9f9' }}>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1.5rem', textAlign: 'center' }}>
          Contact Us
        </h2>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{ padding: '0.75rem', borderRadius: '5px', border: '1px solid #ccc' }}
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ padding: '0.75rem', borderRadius: '5px', border: '1px solid #ccc' }}
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            style={{ padding: '0.75rem', borderRadius: '5px', border: '1px solid #ccc' }}
          ></textarea>

          <button
            type="submit"
            style={{
              padding: '0.75rem',
              borderRadius: '5px',
              border: 'none',
              backgroundColor: '#e53e3e',
              color: '#fff',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}
          >
            Send Message
          </button>
        </form>
        {/* Map Section */}
        <div style={{ marginTop: '3rem' }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Find Us Here</h3>
          <iframe
            title="Shah's Kitchen Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.893578682185!2d-73.98762268459337!3d40.75889597932686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855d38eafc9%3A0xc80b8f06e177fe62!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1621111111111"
            width="100%"
            height="300"
            style={{ border: 0, borderRadius: '8px' }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
