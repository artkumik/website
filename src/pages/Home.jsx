import './Home.css';

function Home() {
  const metrics = [
    { value: '3.73', label: 'Undergraduate GPA' },
    { value: '2+', label: 'Years Research Experience' },
    { value: '$10K', label: 'Venture Grant Funding' },
    { value: '2', label: 'Academic Publications' }
  ];

  const researchInterests = [
    'Computer Vision (Object Detection)',
    'Intelligent Transportation Systems (ITS)',
    'Reinforcement Learning',
    'High-Performance Computing (HPC)'
  ];

  const skills = [
    { category: 'Programming & Libraries', items: 'Python, SQL, Power BI, R, pandas, PyTorch, TensorFlow, Linux/Unix, Docker, HTML/CSS, Java' },
    { category: 'Analytical & Methodological', items: 'Data Analysis, Machine Learning, Deep Learning, Data Visualization, Business Analytics, Statistics' },
    { category: 'Languages', items: 'Polish, English' }
  ];

  const certifications = [
    { title: 'Fundamentals of Deep Learning', issuer: 'NVIDIA' },
    { title: 'Building Transformer-Based Natural Language Processing Applications', issuer: 'NVIDIA' },
    { title: 'SQL Essential Training', issuer: 'LinkedIn' },
    { title: 'Power BI Essential Training', issuer: 'LinkedIn' }
  ];

  const connectionLinks = [
    { name: 'GitHub', url: 'https://github.com/artkumik', isExternal: true },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/artur-kumik-8a9a88236/', isExternal: true },
    { name: 'Email', url: 'mailto:artkumik@gmail.com', isExternal: false },
    { name: 'Phone', url: 'tel:+17272511777', isExternal: false },
    { name: 'Palm Harbor, FL', url: null, isExternal: false, isMeta: true }
  ];

  return (
    <div className="home">
      <div className="page-container">
        
        {/* Strictly Left-Aligned Hero Profile Layout */}
        <header className="hero">
          <h1 className="hero-title">Artur Kumik</h1>
          <p className="hero-subtitle">Data Science | Machine Learning | Research</p>
          
          <div className="hero-contact-row">
            {connectionLinks.map((link, index) => {
              if (link.isMeta || !link.url) {
                return (
                  <span key={index} className="hero-link meta-link">
                    {link.name}
                  </span>
                );
              }
              return (
                <a 
                  key={index}
                  href={link.url}
                  className="hero-link"
                  target={link.isExternal ? "_blank" : "_self"}
                  rel={link.isExternal ? "noopener noreferrer" : ""}
                >
                  {link.name}
                </a>
              );
            })}
          </div>
        </header>

        <section className="section">
          <h2>About Me</h2>
          <p className="about-text">
            Third-year Data Science major at the University of Florida (GPA: 3.73) with research experience in machine learning and a strong background in Python, R, and TensorFlow. Passionate about applying analytical skills to solve real-world problems through data-driven solutions.
          </p>
          
          <div className="metrics-row">
            {metrics.map((metric, index) => (
              <div key={index} className="metric-item">
                <span className="metric-value">{metric.value}</span>
                <span className="metric-label">{metric.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <h2>Research Focus</h2>
          <div className="interests-row">
            {researchInterests.map((interest, index) => (
              <span key={index} className="interest-tag">{interest}</span>
            ))}
          </div>
        </section>

        <section className="section">
          <h2>Skills</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-row">
                <h3>{skill.category}</h3>
                <p>{skill.items}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <h2>Certifications</h2>
          <div className="certifications-list">
            {certifications.map((cert, index) => (
              <div key={index} className="cert-item">
                <span className="cert-title">{cert.title}</span>
                <span className="cert-issuer">{cert.issuer}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <h2>Navigation</h2>
          <div className="hero-buttons">
            <a href="/projects" className="btn btn-primary">View Projects</a>
            <a href="/contact" className="btn btn-secondary">Get In Touch</a>
          </div>
        </section>
        
      </div>
    </div>
  );
}

export default Home;