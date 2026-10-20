import './Experience.css';

function Experience() {
  const experiences = [
    {
      id: 3,
      role: 'Undergraduate Researcher',
      company: 'University of Florida - MALT Lab',
      location: 'Gainesville, FL',
      period: 'Jan 2025 - Present',
      current: true,
      description: [
        'Developed and trained a car-centric simulation model on the UF supercomputer using Weights & Biases, optimizing collision detection algorithms at scale',
        'Built a cross-university web platform for near-miss collision detection processing, leveraging Cloudflare tunneling for secure distributed access',
        'Researcher at the Modern Artificial Intelligence and Learning Technologies (MALT) Lab under Dr. Sanjay Ranka',
        'Used Slurm on UF and UVA HPC systems to train and benchmark YOLO models across architectures and computing environments',
        'Communicated research methodologies and findings to a diverse academic audience at the Undergraduate Research Symposium'
      ]
    },
    {
      id: 5,
      role: 'Intern',
      company: 'SCC Soft Computer',
      location: 'Clearwater, FL · On-site',
      period: 'Jun 2026 - Aug 2026',
      description: [
        'Developed and optimized Power BI and Tableau dashboards connected to Oracle databases with dynamic parameters and templates for seamless client deployment',
        'Debugged ETL processes, engineered SQL-driven data collection workflows, and transformed data pipelines to achieve consistent results across BI platforms',
        'Gained hands-on experience across the software development lifecycle, from requirements analysis and version control to testing, issue resolution, and production troubleshooting'
      ]
    },
    {
      id: 4,
      role: 'Intern',
      company: 'SCC Soft Computer',
      location: 'Clearwater, FL',
      period: 'May 2025 - Aug 2025 / May 2023 - Aug 2023',
      description: [
        'Administered remote technical support and troubleshooting for critical Laboratory Information Systems (LIS) for 350+ hospitals across the United States',
        'Diagnosed and resolved interface issues on both Linux and Unix-based LIS platforms via remote connection'
      ]
    },
    {
      id: 1,
      role: 'Cofounder',
      company: 'Hydrodisc',
      location: 'Palm Harbor, FL',
      period: 'Oct 2021 - 2024',
      description: [
        'Developed a mobile-integrated device that helps customers monitor water consumption and reduce dehydration through real-time reminders',
        'Won First Place in the NGT 360 Competition (2022-2023), securing $10,000 grant for product development',
        'Presented solution to Shark Tank Judge Kevin Harrington and other industry leaders at Raymond James',
        'Incorporated customer feedback into product, boosting satisfaction by 30% as measured by user surveys'
      ]
    },
    {
      id: 2,
      role: 'Intern',
      company: 'Achieva Credit Union',
      location: 'Dunedin, FL',
      period: 'May 2022 - Aug 2022',
      description: [
        'Processed deposits, withdrawals, and other transactions',
        'Greeted customers and assisted with bank-related inquiries',
        'Created a positive customer experience through quick and efficient service',
      ]
    },
  ];

  return (
    <div className="page-container">
      <header>
        <h1 className="page-title">Experience</h1>
      </header>

      <section className="experience-section" aria-label="Career timeline">
          <ol className="timeline">
            {experiences.map(exp => (
              <li key={exp.id} className="timeline-item">
                <div className="exp-date">
                  <span className="exp-period">{exp.period}</span>
                </div>
                <span className="timeline-dot" aria-hidden="true"></span>
                <article className="exp-card">
                  <header className="exp-header">
                    <h3 className="exp-role">{exp.role}</h3>
                    <p className="exp-company">{exp.company}</p>
                    <p className="exp-location">{exp.location}</p>
                  </header>
                  <ul className="exp-description">
                    {exp.description.map((item, index) => <li key={index}>{item}</li>)}
                  </ul>
                </article>
              </li>
            ))}
          </ol>
      </section>
    </div>
  );
}

export default Experience;
