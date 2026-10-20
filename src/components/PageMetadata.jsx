import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const pages = {
  '/': ['About', 'Artur Kumik, a University of Florida data science student researching traffic simulation, computer vision, and machine learning.'],
  '/experience': ['Experience', 'Research at UF’s MALT Lab, business intelligence internships, and product development experience.'],
  '/projects': ['Projects', 'Computer vision research, handwritten math recognition, fitness tools, and other projects by Artur Kumik.'],
  '/publications': ['Publications', 'Research publications by Artur Kumik, including PhaseShift and Battle of the YOLOs.'],
  '/contact': ['Contact', 'Get in touch with Artur Kumik about research, work, or a project.']
};

export default function PageMetadata() {
  const { pathname } = useLocation();
  useEffect(() => {
    const [title, description] = pages[pathname] || ['Page not found', 'Artur Kumik’s personal portfolio.'];
    document.title = `${title} | Artur Kumik`;
    document.querySelector('meta[name="description"]').content = description;
    document.querySelector('meta[property="og:title"]').content = document.title;
    document.querySelector('meta[property="og:description"]').content = description;
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
