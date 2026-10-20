import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  const skills = [
    { category: 'Programming', items: 'Python, SQL, R, Java, HTML/CSS' },
    { category: 'ML & data', items: 'PyTorch, TensorFlow, pandas, Power BI, Tableau' },
    { category: 'Systems', items: 'Linux / Unix, Docker, HPC' },
    { category: 'Focus', items: 'Computer vision, reinforcement learning, statistics, transportation' }
  ];

  return (
    <div className="home">
      <div className="page-container">
        
        <header className="article-heading">
          <h1 className="page-title">About me</h1>
          <p className="page-intro">Data science · University of Florida</p>
        </header>

        <section className="section">
          <p className="about-text">
            I'm Artur Kumik, a data science student at the University of Florida. I work in the MALT Lab on traffic behavior and near-miss detection. I've trained models on UF and UVA computing clusters and built tools to help researchers process collision data. I also worked with SQL, Power BI, and Tableau during my internships at SCC Soft Computer.
          </p>
          

        </section>

        <section className="section research-notes">
          <h2>What I work on</h2>
          <ul>
            <li>Training car-centric traffic simulation models on UF’s supercomputer.</li>
            <li>Building tools for researchers to process near-miss collision data.</li>
            <li>Testing computer vision models for traffic intersection footage.</li>
          </ul>
          <p>Our latest preprint, <a href="https://arxiv.org/abs/2608.25275" target="_blank" rel="noopener noreferrer">PhaseShift</a>, looks at sharing a traffic-behavior model across intersections with different layouts.</p>
          <p>I also build <Link to="/projects">hackathon projects</Link>, including tools for checking handwritten math and tracking exercise form.</p>
        </section>
        <div className="profile-details">
          <section className="section" aria-labelledby="skills-heading">
            <h2 id="skills-heading">Skills</h2>
            <dl className="profile-skills">
              {skills.map(({ category, items }) => (
                <div key={category}>
                  <dt>{category}</dt>
                  <dd>{items}</dd>
                </div>
              ))}
            </dl>
            <p className="spoken-languages">I speak English and Polish.</p>
          </section>

        </div>

        <p className="about-closing">For more, see my <Link to="/experience">experience</Link> and <Link to="/publications">publications</Link>, or <Link to="/contact">get in touch</Link>.</p>
      </div>
    </div>
  );
}

export default Home;