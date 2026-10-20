import * as ProjectImages from '../assets/projects';
import './Projects.css';

function Projects() {
  const projects = [
    {
      id: 7,
      title: 'Snap Solve',
      description: 'Reads handwritten math and checks each solution step with TexTeller, SymPy, and Gemini.',
      technologies: ['TexTeller', 'SymPy', 'FastAPI'],
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
      technologies: ['MediaPipe', 'scikit-learn', 'Flask'],
      image: ProjectImages.formFitter,
      imageAlt: 'Push-up pose tracking with a repetition counter and form feedback',
      previewType: 'pose',
      url: 'https://github.com/artkumik/Form-Fitter',
      hackathon: 'Hacklytics 2026'
    },
    {
      id: 1,
      title: 'YOLO Model Benchmarking',
      description: 'Trains and benchmarks YOLO models on UF and UVA computing clusters, comparing architectures and performance.',
      technologies: ['YOLO', 'Slurm', 'Python'],
      image: ProjectImages.yoloDetection,
      imageAlt: 'Traffic intersection camera footage with vehicle detection boxes',
      previewType: 'traffic',
      url: 'https://github.com/jpfleischer/chocolatechip'
    },
    {
      id: 3,
      title: 'London Weather Analysis',
      description: 'Predicts London temperatures with regression trees and AdaBoost, achieving an R² of 0.79.',
      technologies: ['Python', 'scikit-learn', 'pandas'],
      image: ProjectImages.londonWeather,
      imageAlt: 'Scatter plot comparing actual and predicted weather values',
      previewType: 'chart',
      url: 'https://github.com/artkumik/LondonWeatherAnalysis'
    },
    {
      id: 2,
      title: 'Tic Tac Toe RL',
      description: 'A Q-learning agent you can play against through a Pygame interface.',
      technologies: ['Python', 'Pygame', 'NumPy'],
      image: ProjectImages.rlGameplay,
      imageAlt: 'Tic-tac-toe interface with options to play against AI',
      previewType: 'game',
      url: 'https://github.com/artkumik/tictactoe'
    },
    {
      id: 8,
      title: 'Bill-y the Investo-Gator',
      description: 'Analyzes spending from bank CSVs and answers budgeting questions with AI chat and spoken responses.',
      technologies: ['Flask', 'Gemini', 'ElevenLabs'],
      image: ProjectImages.billY,
      imageAlt: 'Bill-y finance assistant homepage with Chat and Plan options',
      previewType: 'finance',
      url: 'https://github.com/artkumik/SwampHacksXI-TeamJAN',
      hackathon: 'SwampHacks XI'
    },
  ];

  return (
    <div className="page-container">
      <header>
        <h1 className="page-title">Projects</h1>
        <p className="projects-intro">Click a project to view its code on GitHub.</p>
      </header>
      <section className="projects-grid" aria-label="Project collection">
        {projects.map((project) => (
          <a
            key={project.id}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card portfolio-card"
          >
            <div className={`project-preview preview-${project.previewType}`}>
              <img src={project.image} alt={project.imageAlt} loading="lazy" />
            </div>
            <div className="project-body">
              <h2 className="project-title portfolio-title">{project.title}</h2>
              <p className="project-description">{project.description}</p>
            </div>
            <div className="project-footer">
              <div className="project-event">
                {project.hackathon && <span className="hackathon-badge">{project.hackathon}</span>}
              </div>
              <ul className="project-tech" aria-label="Technologies">
                {project.technologies.map(tech => (
                  <li key={tech} className="tech-tag">{tech}</li>
                ))}
              </ul>
            </div>
          </a>
        ))}
      </section>
    </div>
  );
}

export default Projects;
