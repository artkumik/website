import './Contact.css';

function Contact() {
  const networks = [
    { label: 'Email', value: 'artkumik@gmail.com', url: 'mailto:artkumik@gmail.com' },
    { label: 'Phone', value: '+1 (727) 251-1777', url: 'tel:+17272511777' },
    { label: 'LinkedIn', value: 'linkedin.com/in/artur-kumik', url: 'https://linkedin.com/in/artur-kumik-8a9a88236/' },
    { label: 'GitHub', value: 'github.com/artkumik', url: 'https://github.com/artkumik' }
  ];

  return (
    <div className="page-container">
      <h1 className="page-title">Connect</h1>
      
      <section className="contact-section">
        <p className="contact-intro">
          I am always open to discussing new machine learning pipelines, research opportunities, or technical system implementations. Reach out via any of the channels below.
        </p>

        <div className="contact-grid">
          
          {/* Availability Status Matrix Row */}
          <div className="contact-row">
            <h3>Status</h3>
            <div className="contact-content-block">
              <span className="contact-status-text">
                Based in Palm Harbor, FL — Open to relocation and technical research collaborations.
              </span>
            </div>
          </div>

          {/* Network Loops Row */}
          {networks.map((net, index) => (
            <div key={index} className="contact-row">
              <h3>{net.label}</h3>
              <div className="contact-content-block">
                <a 
                  href={net.url} 
                  className="contact-action-link"
                  target={net.url.startsWith('http') ? '_blank' : '_self'}
                  rel={net.url.startsWith('http') ? 'noopener noreferrer' : ''}
                >
                  {net.value} {net.url.startsWith('http') ? '↗' : ''}
                </a>
              </div>
            </div>
          ))}

        </div>
      </section>
    </div>
  );
}

export default Contact;