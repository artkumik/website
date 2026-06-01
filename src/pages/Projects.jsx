import * as ProjectImages from '../assets/projects';
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
      // Using the barrel import, with a fallback string just in case
      image: ProjectImages.yoloDetection || '/images/yolo-detection.jpg',
      url: 'https://github.com/artkumik'
    },
    {
      id: 3,
      title: 'London Weather Analysis',
      description: 'Time series prediction achieving 0.79 R² using Regression Trees and Ada Boosting.',
      technologies: ['Python', 'sklearn', 'Pandas'],
      timeline: 'Academic',
      type: 'Data Analysis',
      image: ProjectImages.londonWeather || '../assets/projects/london-weather.png',
      url: 'https://github.com/artkumik/LondonWeatherAnalysis'
    },
    {
      id: 2,
      title: 'Tic Tac Toe RL',
      description: 'Reinforcement Learning algorithm with Pygame interface for playing against AI.',
      technologies: ['Python', 'Pygame', 'NumPy'],
      timeline: 'Academic',
      type: 'AI/ML',
      image: ProjectImages.rlGameplay || '/images/rl-gameplay.jpg',
      url: 'https://github.com/artkumik/tictactoe'
    },
    // {
    //   id: 4,
    //   title: 'Tic-Tac-Toe LLM Arena', 
    //   description: 'A web application that showcases strategic gameplay with AI-powered players competing in classic Tic-Tac-Toe matches.[cite: 1]',
    //   technologies: ['Python', 'Flask', 'FastAPI', 'OpenAI', 'JavaScript', 'Bootstrap'], 
    //   timeline: 'Present',
    //   type: 'Artificial Intelligence / Web Development',
    //   image: ProjectImages.tictactoeArenaRender || '/images/tictactoe-arena-render.jpg',
    //   url: '#'
    // },
    // {
    //   id: 5,
    //   title: 'Hydrodisc',
    //   description: 'Mobile IoT device for water consumption monitoring. Won NGT 360 Competition.',
    //   technologies: ['IoT', 'Mobile', 'Product Design'],
    //   timeline: 'Oct 2021 - Present',
    //   type: 'Entrepreneurship',
    //   image: ProjectImages.hydrodiscRender || '/images/hydrodisc-render.jpg',
    //   url: '#'
    // },

  ];

  return (
    <div className="page-container">
      <h1 className="page-title">Projects</h1>
      
      <section className="projects-section">
        <p className="projects-intro">
          A collection of research initiatives, computer vision benchmarks, and analytical applications in machine learning and intelligent systems. Select any project to view details.
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card-link"
            >
              <div className="project-card">
                
                <div className="project-image-wrapper">
                  <img 
                    src={project.image} 
                    alt={`${project.title} preview`} 
                    className="project-img" 
                    loading="lazy"
                    /* Added inline styles to force the image to fit the box cleanly */
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover', 
                      objectPosition: 'center',
                      display: 'block'
                    }}
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
                  
                  <div className="project-tech">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
                
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Projects;