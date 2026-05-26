import './Experience.css';

function Experience() {
  const experiences = [
    {
      id: 1,
      role: 'Undergraduate Researcher',
      company: 'University of Florida - MALT Lab',
      location: 'Gainesville, FL',
      period: 'Jan 2025 - Present',
      description: [
        'Researcher at the Modern Artificial Intelligence and Learning Technologies (MALT) Lab under Dr. Sanjay Ranka',
        'Trained a Darknet YOLO v4 model for near miss detection on multi-GPU nodes with UF and UVA High-Performance Computer (HPC) environments',
        'Communicated research methodologies and findings to a diverse academic audience at the Undergraduate Research Symposium'
      ],
      type: 'Research'
    },
    {
      id: 2,
      role: 'Cofounder',
      company: 'Hydrodisc',
      location: 'Palm Harbor, FL',
      period: 'Oct 2021 - Present',
      description: [
        'Developed a mobile-integrated device that helps customers monitor water consumption and reduce dehydration through real-time reminders',
        'Won First Place in the NGT 360 Competition (2022-2023), securing $10,000 grant for product development',
        'Presented solution to Kevin Harrington and other industry leaders at Raymond James',
        'Incorporated customer feedback into product, boosting satisfaction by 30% as measured by user surveys'
      ],
      type: 'Entrepreneurship'
    },
    {
      id: 3,
      role: 'Intern',
      company: 'SCC Soft Computer',
      location: 'Clearwater, FL',
      period: 'May 2023 - Aug 2023, May 2025 - Aug 2025',
      description: [
        'Administered remote technical support and troubleshooting for critical Laboratory Information Systems (LIS) for 20+ hospitals across the United States',
        'Diagnosed and resolved interface issues on both Linux and Unix-based LIS platforms via remote connection'
      ],
      type: 'Professional'
    }
  ];

  return (
    <div className="page-container">
      <h1 className="page-title">Professional Experience</h1>
      
      <section className="experience-section">
        <div className="experience-list">
          {experiences.map((exp) => (
            <div key={exp.id} className="experience-card">
              <div className="exp-header">
                <div className="exp-title-block">
                  <h3 className="exp-role">{exp.role}</h3>
                  <p className="exp-company">{exp.company}</p>
                </div>
                <div className="exp-meta">
                  <div className="exp-period">{exp.period}</div>
                  <span className="exp-type-badge">{exp.type}</span>
                </div>
              </div>
              
              <p className="exp-location">📍 {exp.location}</p>
              
              <ul className="exp-description">
                {exp.description.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Experience;
