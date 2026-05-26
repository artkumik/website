import './Contact.css';

function Contact() {
  const contactInfo = [
    {
      type: 'Email',
      icon: '📧',
      value: 'artkumik@gmail.com',
      link: 'mailto:artkumik@gmail.com'
    },
    {
      type: 'Phone',
      icon: '📱',
      value: '+1 (727) 251-1777',
      link: 'tel:+17272511777'
    },
    {
      type: 'GitHub',
      icon: '💻',
      value: 'github.com/artkumik',
      link: 'https://github.com/artkumik'
    },
    {
      type: 'LinkedIn',
      icon: '💼',
      value: 'linkedin.com/in/artur-kumik-8a9a88236/',
      link: 'https://linkedin.com/in/artur-kumik-8a9a88236/'
    },
    {
      type: 'Location',
      icon: '📍',
      value: 'Palm Harbor, FL, USA',
      link: '#'
    }
  ];

  const handleResumeDownload = () => {
    // Create a download link for resume
    // You'll need to add your resume PDF to the public folder
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Artur_Kumik_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="page-container">
      <h1 className="page-title">Get In Touch</h1>
      
      <div className="contact-content">
        <section className="section">
          <h2>Let's Connect</h2>
          <p>
            I'm always open to discussing research opportunities, internships, or collaboration on data science projects. 
            Feel free to reach out through any of the channels below!
          </p>
        </section>

        <div className="resume-download">
          <button onClick={handleResumeDownload} className="resume-btn">
            📄 Download Resume
          </button>
        </div>

        <div className="contact-links">
          {contactInfo.map((contact, index) => (
            <a 
              key={index}
              href={contact.link} 
              className="contact-card"
              target={contact.link.startsWith('http') ? '_blank' : '_self'}
              rel={contact.link.startsWith('http') ? 'noopener noreferrer' : ''}
            >
              <div className="contact-icon">{contact.icon}</div>
              <h3>{contact.type}</h3>
              <p>{contact.value}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Contact;