import './Home.css';

function Home() {
  const metrics = [
    { value: '3.73', label: 'Undergraduate GPA' },
    { value: '2+', label: 'Years Research Experience' },
    { value: '$10K', label: 'Venture Grant Funding' },
    { value: '2', label: 'Academic Publications' }
  ];

  const skills = [
    { category: 'Research Domains', items: 'Computer Vision (Object Detection), Intelligent Transportation Systems (ITS), Reinforcement Learning, High-Performance Computing (HPC)' },
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

  return (
    <div className="home">
      <div className="page-container">
        
        <header className="hero">
          <h1 className="hero-title">Artur Kumik</h1>
          <p className="hero-subtitle">Data Science | Machine Learning | Research</p>
          
          <div className="hero-contact-row">
            <span className="hero-link meta-link">
              Palm Harbor, FL
            </span>
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
          <h2>Technical & Research Profile</h2>
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

        {/* Minimalist Funnel Link */}
        <div className="next-step-container">
          <a href="/projects" className="minimal-nav-link">
            View Projects <span>&rarr;</span>
          </a>
        </div>
        
      </div>
    </div>
  );
}

export default Home;