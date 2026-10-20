import './Contact.css';

const contacts = [
  { label: 'Email', value: 'artkumik@gmail.com', url: 'mailto:artkumik@gmail.com' },
  { label: 'Phone', value: '+1 (727) 251-1777', url: 'tel:+17272511777' },
  { label: 'LinkedIn', value: 'Artur Kumik', url: 'https://linkedin.com/in/artur-kumik-8a9a88236/' },
  { label: 'GitHub', value: '@artkumik', url: 'https://github.com/artkumik' }
];

function Contact() {
  return (
    <div className="page-container">
      <header>
        <h1 className="page-title">Contact</h1>
        <p className="contact-lead">Have a question or a project in mind? Send me an email.</p>
      </header>
      <section className="contact-details" aria-label="Contact details">
        <dl className="contact-list">
          {contacts.map(({ label, value, url }) => (
            <div className="contact-detail" key={label}>
              <dt>{label}</dt>
              <dd>
                <a href={url}
                  target={url.startsWith('https:') ? '_blank' : undefined}
                  rel={url.startsWith('https:') ? 'noopener noreferrer' : undefined}>
                  {value}{url.startsWith('https:') && <span aria-hidden="true"> ↗</span>}
                </a>
              </dd>
            </div>
          ))}
        </dl>
        <p className="contact-location">Palm Harbor, Florida · Open to relocation</p>
      </section>
    </div>
  );
}

export default Contact;
