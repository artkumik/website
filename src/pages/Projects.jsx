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
      color: '#FF6B6B',
      icon: '🎯'
    },
    {
      id: 2,
      title: 'Tic Tac Toe RL',
      description: 'Reinforcement Learning algorithm with Pygame interface for playing against AI.',
      technologies: ['Python', 'Pygame', 'NumPy'],
      timeline: 'Academic',
      type: 'AI/ML',
      color: '#4ECDC4',
      icon: '🎮'
    },
    {
      id: 3,
      title: 'London Weather Analysis',
      description: 'Time series prediction achieving 0.79 R² using Regression Trees and Ada Boosting.',
      technologies: ['Python', 'sklearn', 'Pandas'],
      timeline: 'Academic',
      type: 'Data Analysis',
      color: '#FFE66D',
      icon: '📊'
    },
    {
      id: 4,
      title: 'Hydrodisc',
      description: 'Mobile IoT device for water consumption monitoring. Won NGT 360 Competition.',
      technologies: ['IoT', 'Mobile', 'Product Design'],
      timeline: 'Oct 2021 - Present',
      type: 'Entrepreneurship',
      color: '#95E1D3',
      icon: '💧'
    }
  ];

  return (
    <div className="page-container">
      <h1 className="page-title">Projects</h1>
      
      <section className="projects-section">
        <p className="projects-intro">
          I build software and tools to solve problems. Here are some of my projects that showcase my work in data science, machine learning, and product development.
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card" style={{ '--card-color': project.color }}>
              <div className="project-image">{project.icon}</div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              
              <div className="project-meta">
                <span className="project-type">{project.type}</span>
                <span className="project-timeline">{project.timeline}</span>
              </div>
              
              <div className="project-tech">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Projects;