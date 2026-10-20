import * as ProjectImages from '../assets/projects';
import './Projects.css';

function Projects() {
  const projects = [
    {
      id: 7,
      title: 'Snap Solve',
      description: 'Turns handwritten math into LaTeX and checks each step using a fine-tuned TexTeller model, SymPy, and Gemini.',
      technologies: ['FastAPI', 'PyTorch', 'TexTeller', 'SymPy', 'Gemini'],
      timeline: 'Hackathon',
      type: 'AI / Education',
      image: ProjectImages.snapSolve,
      imageAlt: 'Handwritten equations beside feedback identifying an incorrect step',
      previewType: 'math',
      url: 'https://github.com/artkumik/snap-solve',
      hackathon: 'SwampHacks XII'
    },
    {
      id: 6,
      title: 'Form Fitter',
      description: 'Real-time exercise form tracking and personalized workout scheduling.',
      technologies: ['Flask', 'MediaPipe', 'Gemini', 'scikit-learn'],
      timeline: '2026',
      type: 'AI / Fitness',
      image: ProjectImages.formFitter,
      imageAlt: 'Push-up pose tracking with a repetition counter and form feedback',
      previewType: 'pose',
      url: 'https://github.com/artkumik/Form-Fitter',
      hackathon: 'Hacklytics 2026'
    },
    {
      id: 1,
      title: 'YOLO Model Benchmarking',
      description: 'Automated training and benchmarking of YOLO models on UF and UVA HPC clusters, comparing architectures and visualizing performance.',
      technologies: ['Python', 'YOLO', 'Slurm', 'HPC'],
      timeline: 'Jan 2025 - Present',
      type: 'Research',
      image: ProjectImages.yoloDetection,
      imageAlt: 'Traffic intersection camera footage with vehicle detection boxes',
      previewType: 'traffic',
      url: 'https://github.com/jpfleischer/chocolatechip'
    },
    {
      id: 3,
      title: 'London Weather Analysis',
      description: 'Time series prediction achieving 0.79 R² using Regression Trees and Ada Boosting.',
      technologies: ['Python', 'sklearn', 'Pandas'],
      timeline: 'Academic',
      type: 'Data Analysis',
      image: ProjectImages.londonWeather,
      imageAlt: 'Scatter plot comparing actual and predicted weather values',
      previewType: 'chart',
      url: 'https://github.com/artkumik/LondonWeatherAnalysis'
    },
    {
      id: 2,
      title: 'Tic Tac Toe RL',
      description: 'Reinforcement Learning algorithm with Pygame interface for playing against AI.',
      technologies: ['Python', 'Pygame', 'NumPy'],
      timeline: 'Academic',
      type: 'AI/ML',
      image: ProjectImages.rlGameplay,
      imageAlt: 'Tic-tac-toe interface with options to play against AI',
      previewType: 'game',
      url: 'https://github.com/artkumik/tictactoe'
    },
    {
      id: 8,
      title: 'Bill-y the Investo-Gator',
      description: 'Analyzes spending from bank CSVs and answers budgeting questions with AI chat and spoken responses.',
      technologies: ['Python', 'Flask', 'Gemini', 'ElevenLabs', 'JavaScript'],
      timeline: 'Jan 2026',
      type: 'AI / Finance',
      image: ProjectImages.billY,
      imageAlt: 'Bill-y finance assistant homepage with Chat and Plan options',
      previewType: 'finance',
      url: 'https://github.com/artkumik/SwampHacksXI-TeamJAN',
      hackathon: 'SwampHacks XI'
    },
  ];

  return (
    <div className="page-container">
      <h1 className="page-title">Projects</h1>
      
      <section className="projects-section">
        <p className="projects-intro">Click a project to view its code on GitHub.</p>
<div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className={`project-entry ${project.hackathon ? 'hackathon-project' : ''}`}>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card-link"
            >
              <div className="project-card">
                
                <figure className={`project-preview preview-${project.previewType}`}>
                  <div className="project-image-wrapper">
                    <img
                      src={project.image}
                      alt={project.imageAlt}
                      className="project-img"
                      loading="lazy"
                    />
                  </div>
                </figure>

                <div className="project-content">
                  <div>
                    <div className="project-card-header">
                      <h3 className="project-title">{project.title}</h3>
                    </div>
                    <p className="project-description">{project.description}</p>
                  </div>
                  
                  <div className="project-footer">
                    <div className="project-event">
                      {project.hackathon && <span className="hackathon-badge">{project.hackathon}</span>}
                    </div>
                    <div className="project-tech">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
                
              </div>
            </a>

            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Projects;