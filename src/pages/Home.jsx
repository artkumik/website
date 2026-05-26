import './Home.css';

function Home() {
  return (
    <div className="home">
      <div className="hero">
        <h1 className="hero-title">Hi, I'm <span className="highlight">Artur Kumik</span></h1>
        <p className="hero-subtitle">Data Science | Machine Learning | Research</p>
        <div className="hero-buttons">
          <a href="/projects" className="btn btn-primary">View My Work</a>
          <a href="/contact" className="btn btn-secondary">Get In Touch</a>
        </div>
      </div>
    </div>
  );
}

export default Home;