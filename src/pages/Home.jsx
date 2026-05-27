import './Home.css';

function Home() {
  const skills = [
    { category: 'Programming & Libraries', items: 'Python, SQL, Power BI, R, pandas, PyTorch, TensorFlow, Linux/Unix, Docker, HTML/CSS, Java' },
    { category: 'Analytical & Methodological', items: 'Data Analysis, Machine Learning, Deep Learning, Data Visualization, Business Analytics, Statistics' },
    { category: 'Languages', items: 'Polish, English' }
  ];

  const certifications = [
    'Fundamentals of Deep Learning from NVIDIA',
    'Building Transformer-Based Natural Language Processing Applications from NVIDIA',
    'SQL Essential Training from LinkedIn',
    'Power BI Essential Training (2024) from LinkedIn'
  ];

  return (
    <div className="home">
      <div className="hero">
        <h1 className="hero-title">Hi, I'm Artur Kumik</h1>
        <p className="hero-subtitle">Data Science | Machine Learning | Research</p>
      </div>

      <div className="page-container">
        <section className="section">
          <h2>About Me</h2>
          <p>
            Third-year Data Science major at the University of Florida (GPA: 3.73) with research experience in machine learning and a strong background in Python, R, and TensorFlow. Passionate about applying analytical skills to solve real-world problems through data-driven solutions.
          </p>
        </section>

        <section className="section">
          <h2>Skills</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-card">
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
                <span>{cert}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <h2>Get Started</h2>
          <div className="hero-buttons">
            <a href="/projects" className="btn btn-primary">View My Projects</a>
            <a href="/contact" className="btn btn-secondary">Get In Touch</a>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;