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

  return (
    <div className="page-container">
      <h1 className="page-title">Publications</h1>
      <section className="publication-list" aria-label="Research publications">
        {publications.map(pub => (
          <div key={pub.id} className="publication-year-section">
            <h2 className="publication-year">{pub.year}</h2>
            <article className="publication-item">
            <h3 className="pub-title">
              <a href={pub.url} target="_blank" rel="noopener noreferrer">{pub.title}</a>
            </h3>
            {pub.summary && <p className="pub-summary">{pub.summary}</p>}
            <p className="pub-authors">{pub.authors}</p>
            <p className="pub-venue">{pub.publication}</p>
            <footer className="pub-footer">
              <p className="pub-note">{pub.note}</p>
              <div className="pub-action-links">
                <a href={pub.pdfUrl} className="pub-action-link" target="_blank" rel="noopener noreferrer">PDF ↗</a>
                {pub.doi && <a href={`https://doi.org/${pub.doi}`} className="pub-action-link" target="_blank" rel="noopener noreferrer">DOI ↗</a>}
                <a href={pub.url} className="pub-action-link" target="_blank" rel="noopener noreferrer">Article ↗</a>
              </div>
            </footer>
            </article>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Publications;
