import './Projects.css';

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'YOLO v4 Near Miss Detection',
      description: 'Darknet YOLO v4 model for near miss detection on multi-GPU HPC clusters at UF and UVA.',
      technologies: ['Python', 'TensorFlow', 'YOLO v4', 'HPC'],
      timeline: 'Jan 2025 - Present',
      type: 'Research',
      image: '/images/yolo-detection.jpg',
      codeUrl: 'https://github.com/artkumik', 
      demoUrl: '#' 
    },
    {
      id: 4,
      title: 'Hydrodisc',
      description: 'Mobile IoT device for water consumption monitoring. Won NGT 360 Competition.',
      technologies: ['IoT', 'Mobile', 'Product Design'],
      timeline: 'Oct 2021 - Present',
      type: 'Entrepreneurship',
      image: '/images/hydrodisc-render.jpg',
      codeUrl: '#',
      demoUrl: '#'
    },
    {
      id: 3,
      title: 'London Weather Analysis',
      description: 'Time series prediction achieving 0.79 R² using Regression Trees and Ada Boosting.',
      technologies: ['Python', 'sklearn', 'Pandas'],
      timeline: 'Academic',
      type: 'Data Analysis',
      image: '/images/weather-plots.jpg',
      codeUrl: 'https://github.com/artkumik',
      demoUrl: '#'
    },
    {
      id: 2,
      title: 'Tic Tac Toe RL',
      description: 'Reinforcement Learning algorithm with Pygame interface for playing against AI.',
      technologies: ['Python', 'Pygame', 'NumPy'],
      timeline: 'Academic',
      type: 'AI/ML',
      image: '/images/rl-gameplay.jpg',
      codeUrl: 'https://github.com/artkumik',
      demoUrl: '#'
    }
  ];

  return (
    <div className="page-container">
      <h1 className="page-title">Projects</h1>
      
      <section className="projects-section">
        <p className="projects-intro">
          An open collection of research initiatives, computer vision benchmarks, and analytical applications exploring machine learning and intelligent systems.
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              
              <div className="project-image-wrapper">
                <img 
                  src={project.image} 
                  alt={`${project.title} preview`} 
                  className="project-img" 
                  loading="lazy"
                />
              </div>

              <div className="project-content">
                <div>
                  <div className="project-card-header">
                    <h3 className="project-title">{project.title}</h3>
                    <div className="project-meta">
                      <span className="project-type">{project.type}</span>
                      <span className="project-timeline">{project.timeline}</span>
                    </div>
                  </div>
                  <p className="project-description">{project.description}</p>
                </div>
                
                <div className="project-footer-row">
                  <div className="project-tech">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>

                  {(project.codeUrl !== '#' || project.demoUrl !== '#') && (
                    <div className="project-action-links">
                      {project.codeUrl !== '#' && (
                        <a href={project.codeUrl} className="proj-action-link" target="_blank" rel="noopener noreferrer">Code ↗</a>
                      )}
                      {project.demoUrl !== '#' && (
                        <a href={project.demoUrl} className="proj-action-link" target="_blank" rel="noopener noreferrer">Demo ↗</a>
                      )}
                    </div>
                  )}
                </div>
              </div>
              
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Projects;