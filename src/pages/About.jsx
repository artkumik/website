import './About.css';

function About() {
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

  const awards = [
    {
      title: 'NGT 360 Competition - First Place',
      organization: 'National Geospatial Technology Center',
      year: 2023,
      description: '$10,000 grant for Hydrodisc product development'
    },
    {
      title: 'Undergraduate Research Symposium',
      organization: 'University of Florida',
      year: 2025,
      description: 'Presented YOLO v4 near miss detection research to academic audience'
    }
  ];

  return (
    <div className="page-container">
      <h1 className="page-title">About Me</h1>
      
      <section className="section">
        <h2>Professional Summary</h2>
        <p>
          Third-year Data Science major at the University of Florida (GPA: 3.73) with research experience in machine learning and a strong background in Python, R, and TensorFlow. Passionate about applying analytical skills to solve real-world problems through data-driven solutions.
        </p>
      </section>

      <section className="section">
        <h2>Education</h2>
        <div className="education-item">
          <div className="edu-header">
            <h3>Bachelor's Degree in Data Science</h3>
            <span className="edu-meta">University of Florida | August 2023 - May 2027</span>
          </div>
          <p className="edu-gpa"><strong>GPA: 3.73</strong> | Minor: Statistics</p>
          <p className="edu-coursework"><strong>Relevant Coursework:</strong> Programming With Data in R, Regression Analysis, Computational Linear Algebra, Data Structures and Algorithms, Introduction to Statistics Theory, Linear Algebra for Data Science, Intro to Probability, Statistics I & II, Calculus I, II & III</p>
          <p className="edu-activities"><strong>Clubs & Activities:</strong> Data Science and Informatics Club, UF Statistics Club, UF Computing Student Union</p>
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
        <h2>Awards & Recognition</h2>
        <div className="awards-list">
          {awards.map((award, index) => (
            <div key={index} className="award-item">
              <div className="award-header">
                <h3 className="award-title">{award.title}</h3>
                <span className="award-year">{award.year}</span>
              </div>
              <p className="award-org">{award.organization}</p>
              <p className="award-desc">{award.description}</p>
            </div>
          ))}
        </div>
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
    </div>
  );
}

export default About;