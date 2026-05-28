import './Publications.css';

function Publications() {
  const publications = [
    {
      id: 2,
      title: 'Reddit Project',
      authors: 'Artur Kumik', // Added fallback name for consistency
      publication: 'University of Florida Journal of Undergraduate Research, Vol. 28',
      year: 2026,
      url: '#',
      pdfUrl: '#',
      note: 'In Progress'
    },
    {
      id: 1,
      title: 'Battle of the YOLOs - Augmenting and Benchmarking Fisheye Camera YOLO Models for Traffic Intersection Object Detection',
      authors: 'J.P. Fleischer, Julian Dominguez, Artur Kumik, Sargam Thakur, Gregor von Laszewski, Sanjay Ranka',
      publication: 'University of Florida Journal of Undergraduate Research, Vol. 27',
      year: 2025,
      url: '#',
      pdfUrl: '#',
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
                    {pub.authors && <p className="pub-authors">{pub.authors}</p>}
                    <p className="pub-venue">{pub.publication}</p>
                    {pub.note && <p className="pub-note">{pub.note}</p>}
                    
                    {/* Render action line container if valid references exist */}
                    {(pub.pdfUrl !== '#' || pub.url !== '#') && (
                      <div className="pub-links">
                        {pub.pdfUrl !== '#' && (
                          <a href={pub.pdfUrl} className="pub-link" target="_blank" rel="noopener noreferrer">
                            PDF ↗
                          </a>
                        )}
                        {pub.url !== '#' && (
                          <a href={pub.url} className="pub-link" target="_blank" rel="noopener noreferrer">
                            Read More ↗
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