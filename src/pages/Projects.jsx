import { useState } from 'react';
import './Projects.css';

function Projects() {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'YOLO v4 Near Miss Detection',
      description: 'Darknet YOLO v4 model for near miss detection on multi-GPU HPC clusters at UF and UVA.',
      technologies: ['Python', 'TensorFlow', 'YOLO v4', 'HPC'],
      timeline: 'Jan 2025 - Present',
      type: 'Research'
    },
    {
      id: 2,
      title: 'Tic Tac Toe RL',
      description: 'Reinforcement Learning algorithm with Pygame interface for playing against AI.',
      technologies: ['Python', 'Pygame', 'NumPy'],
      timeline: 'Academic',
      type: 'AI/ML'
    },
    {
      id: 3,
      title: 'London Weather Analysis',
      description: 'Time series prediction achieving 0.79 R² using Regression Trees and Ada Boosting.',
      technologies: ['Python', 'sklearn', 'Pandas'],
      timeline: 'Academic',
      type: 'Data Analysis'
    },
    {
      id: 4,
      title: 'Hydrodisc',
      description: 'Mobile IoT device for water consumption monitoring. Won NGT 360 Competition.',
      technologies: ['IoT', 'Mobile', 'Product Design'],
      timeline: 'Oct 2021 - Present',
      type: 'Entrepreneurship'
    }
  ];

  const filters = ['All', 'Research', 'AI/ML', 'Data Analysis', 'Entrepreneurship'];
  const filteredProjects = selectedFilter === 'All' ? projects : projects.filter(p => p.type === selectedFilter);

  return (
    <div className="page-container">
      <h1 className="page-title">Projects & Experience</h1>
      
      <section className="projects-section">
        <div className="filters-container">
          {filters.map((filter) => (
            <button
              key={filter}
              className={`filter-btn ${selectedFilter === filter ? 'active' : ''}`}
              onClick={() => setSelectedFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-type-badge">{project.type}</div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              
              <div className="project-tech">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
              
              <div className="project-timeline">{project.timeline}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Projects;