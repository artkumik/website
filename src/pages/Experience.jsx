import './Experience.css';

function Experience() {
  const experiences = [
    {
      id: 3,
      role: 'Undergraduate Researcher',
      company: 'University of Florida - MALT Lab',
      location: 'Gainesville, FL',
      period: 'Jan 2025 - Present',
      description: [
        'Researcher at the Modern Artificial Intelligence and Learning Technologies (MALT) Lab under Dr. Sanjay Ranka',
        'Trained a Darknet YOLO v4 model for near miss detection on multi-GPU nodes with UF and UVA High-Performance Computer (HPC) environments',
        'Communicated research methodologies and findings to a diverse academic audience at the Undergraduate Research Symposium'
      ]
    },
    {
      id: 4,
      role: 'Intern',
      company: 'SCC Soft Computer',
      location: 'Clearwater, FL',
      period: 'May 2025 - Aug 2025',
      description: [
        'Administered remote technical support and troubleshooting for critical Laboratory Information Systems (LIS) for 20+ hospitals across the United States',
        'Diagnosed and resolved interface issues on both Linux and Unix-based LIS platforms via remote connection'
      ]
    },
    {
      id: 1,
      role: 'Cofounder',
      company: 'Hydrodisc',
      location: 'Palm Harbor, FL',
      period: 'Oct 2021 - Present',
      description: [
        'Developed a mobile-integrated device that helps customers monitor water consumption and reduce dehydration through real-time reminders',
        'Won First Place in the NGT 360 Competition (2022-2023), securing $10,000 grant for product development',
        'Presented solution to Kevin Harrington and other industry leaders at Raymond James',
        'Incorporated customer feedback into product, boosting satisfaction by 30% as measured by user surveys'
      ]
    },
    {
      id: 2,
      role: 'Intern',
      company: 'SCC Soft Computer',
      location: 'Clearwater, FL',
      period: 'May 2023 - Aug 2023',
      description: [
        'Administered remote technical support and troubleshooting for critical Laboratory Information Systems (LIS) for 20+ hospitals across the United States',
        'Diagnosed and resolved interface issues on both Linux and Unix-based LIS platforms via remote connection'
      ]
    }
  ];

  return (
    <div className="page-container">
      <h1 className="page-title">Professional Experience</h1>
      
      <section className="experience-section">
        <div className="timeline">
          {experiences.map((exp) => (
            <div key={exp.id} className="timeline-item">
              <div className="timeline-dot"></div>
              
              <div className="exp-header">
                <div>
                  <h3 className="exp-role">
                    {exp.role}
                    <span className="exp-company">— {exp.company}</span>
                  </h3>
                </div>
                
                <div className="exp-meta-compact">
                  <span className="exp-period">{exp.period}</span>
                  <span className="exp-location">{exp.location}</span>
                </div>
              </div>
              
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