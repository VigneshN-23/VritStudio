import { Link } from 'react-router-dom';
import { about } from '../../data';

export function AboutSection({ isHomepage = false }) {
  // If it's the homepage, show a condensed version
  if (isHomepage) {
    return (
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-display font-semibold mb-6 animate-fade-in">About</h2>
            <p className="text-lg text-gray-600 mb-8 animate-fade-in">
              {about.bio.split('\n')[0]}
            </p>
            <Link to="/about" className="btn btn-secondary animate-fade-in">
              Learn more
            </Link>
          </div>
        </div>
      </section>
    );
  }

  // Full about page content
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-display font-semibold mb-12 animate-fade-in">About</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="md:col-span-2 animate-fade-in">
            <h2 className="text-2xl font-display font-medium mb-6">{about.heading}</h2>
            {about.bio.split('\n').map((paragraph, index) => (
              <p key={index} className="text-gray-600 mb-4">{paragraph}</p>
            ))}
          </div>
          
          <div className="animate-fade-in">
            <h3 className="text-xl font-display font-medium mb-4">Skills</h3>
            <div className="flex flex-wrap gap-2 mb-8">
              {about.skills.map((skill, index) => (
                <span key={index} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="animate-fade-in">
            <h3 className="text-xl font-display font-medium mb-6">Experience</h3>
            {about.experience.map((job, index) => (
              <div key={index} className="mb-6">
                <h4 className="font-medium mb-1">{job.position}</h4>
                <div className="flex justify-between text-sm mb-2">
                  <span>{job.company}</span>
                  <span className="text-gray-500">{job.period}</span>
                </div>
                <p className="text-gray-600">{job.description}</p>
              </div>
            ))}
          </div>
          
          <div className="animate-fade-in">
            <h3 className="text-xl font-display font-medium mb-6">Education</h3>
            {about.education.map((edu, index) => (
              <div key={index} className="mb-6">
                <h4 className="font-medium mb-1">{edu.degree}</h4>
                <div className="flex justify-between text-sm">
                  <span>{edu.school}</span>
                  <span className="text-gray-500">{edu.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}