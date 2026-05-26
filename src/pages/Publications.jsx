import './Publications.css';

function Publications() {
  const publications = [
    {
      id: 1,
      title: 'Battle of the YOLOs - Augmenting and Benchmarking Fisheye Camera YOLO Models for Traffic Intersection Object Detection',
      authors: 'J.P. Fleischer, Julian Dominguez, Artur Kumik, Sargam Thakur, Gregor von Laszewski, Sanjay Ranka',
      publication: 'University of Florida Journal of Undergraduate Research, Vol. 27',
      year: 2025,
      url: '#',
      pdfUrl: '#',
      note: 'November 5, 2025'
    },
    {
      id: 2,
      title: 'Publication Title 1',
      authors: 'Artur Kumik, Co-Author',
      publication: 'Journal Name',
      year: 2024,
      url: '#',
      pdfUrl: '#'
    },
    {
      id: 3,
      title: 'Publication Title 2',
      authors: 'Artur Kumik, Co-Author',
      publication: 'Conference Proceedings',
      year: 2023,
      url: '#',
      pdfUrl: '#'
    }
  ];

  return (
    <div className="page-container">
      <h1 className="page-title">Publications</h1>
      
      <section className="publications-section">
        <div className="publications-grid">
          {publications.map((pub) => (
            <div key={pub.id} className="publication-card">
              <div className="pub-year">{pub.year}</div>
              <h3 className="pub-title">{pub.title}</h3>
              <p className="pub-authors">{pub.authors}</p>
              <p className="pub-venue">{pub.publication}</p>
              {pub.note && <p className="pub-note">{pub.note}</p>}
              <div className="pub-links">
                {pub.pdfUrl !== '#' && <a href={pub.pdfUrl} className="pub-link">PDF</a>}
                {pub.url !== '#' && <a href={pub.url} className="pub-link">Read More</a>}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Publications;
