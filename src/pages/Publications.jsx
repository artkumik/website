import './Publications.css';

function Publications() {
  const publications = [
    {
      id: 2,
      title: 'PhaseShift: Topology-Aware Data Harmonization and Model Consolidation Across Signalized Intersections',
      authors: 'Yash Ranjan, Artur Kumik, Rahul Sengupta, Anand Rangarajan, Sanjay Ranka',
      publication: 'arXiv preprint · Artificial Intelligence / Robotics',
      year: 2026,
      url: 'https://arxiv.org/abs/2608.25275',
      pdfUrl: 'https://arxiv.org/pdf/2608.25275',
      note: 'August 26, 2026 · Preprint',
      summary: 'A shared traffic-behavior model that harmonizes trajectory data across intersection layouts, supporting cross-site transfer and adaptation with limited data.'
    },
    {
      id: 1,
      title: 'Battle of the YOLOs - Augmenting and Benchmarking Fisheye Camera YOLO Models for Traffic Intersection Object Detection',
      authors: 'J.P. Fleischer, Julian Dominguez, Artur Kumik, Sargam Thakur, Gregor von Laszewski, Sanjay Ranka',
      publication: 'University of Florida Journal of Undergraduate Research, Vol. 27',
      year: 2025,
      url: 'https://journals.flvc.org/UFJUR/article/view/139103',
      pdfUrl: 'https://journals.flvc.org/UFJUR/article/view/139103/145480',
      doi: '10.32473/ufjur.27.139103',
      note: 'November 5, 2025'
    }
  ];

  // Group publications by year
  const publicationsByYear = publications.reduce((acc, pub) => {
    if (!acc[pub.year]) {
      acc[pub.year] = [];
    }
    acc[pub.year].push(pub);
    return acc;
  }, {});

  // Sort years in descending order
  const sortedYears = Object.keys(publicationsByYear).sort((a, b) => b - a);

  return (
    <div className="page-container">
      <h1 className="page-title">Publications</h1>
      
      <section className="publications-section">
        <div className="publications-list">
          {sortedYears.map((year) => (
            <div key={year} className="year-group">
              <h2 className="year-heading">{year}</h2>
              <div className="year-publications">
                {publicationsByYear[year].map((pub) => (
                  <div key={pub.id} className="publication-item">
                    <h3 className="pub-title">{pub.title}</h3>
                    {pub.summary && <p className="pub-summary">{pub.summary}</p>}
                    {pub.authors && <p className="pub-authors">{pub.authors}</p>}
                    <p className="pub-venue">{pub.publication}</p>
                    {pub.note && <p className="pub-note">{pub.note}</p>}
                    
                    {/* Render action line container if valid references exist */}
                    {(pub.pdfUrl || pub.url) && (
                      <div className="pub-action-links">
                        {pub.pdfUrl && (
                          <a href={pub.pdfUrl} className="pub-action-link" target="_blank" rel="noopener noreferrer">
                            PDF ↗
                          </a>
                        )}
                        {pub.doi && (
                          <a href={`https://doi.org/${pub.doi}`} className="pub-action-link" target="_blank" rel="noopener noreferrer">
                            DOI ↗
                          </a>
                        )}
                        {pub.url && (
                          <a href={pub.url} className="pub-action-link" target="_blank" rel="noopener noreferrer">
                            Article ↗
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Publications;