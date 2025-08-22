import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Crowdsourced Decision-Making App',
    period: 'Jan 2024 – Feb 2024',
    description: 'A comprehensive web application featuring HTML/CSS/JavaScript frontend with robust Python & PHP backend integration. Includes secure user authentication system and real-time live voting functionality for community-driven decisions.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Python', 'PHP'],
    link: 'https://github.com/Karthisgowda/CrowdChoice-1.git',
    techColors: {
      HTML: 'bg-orange-500/20 text-orange-300',
      CSS: 'bg-blue-500/20 text-blue-300',
      JavaScript: 'bg-yellow-500/20 text-yellow-300',
      Python: 'bg-accent/20 text-accent',
      PHP: 'bg-purple-500/20 text-purple-300',
    }
  },
  {
    title: 'Chatbot-Flow',
    period: 'Nov 2024 – Dec 2024',
    description: 'Developed an interactive chatbot system with modern frontend technologies and robust backend integration. Features seamless UI/UX flow design and advanced backend logic for dynamic conversational experiences.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'PHP', 'Python'],
    link: 'https://github.com/Karthisgowda/chatbot-flow.git',
    demoLink: 'https://chatbot-flow-jsj6.onrender.com',
    techColors: {
      HTML: 'bg-orange-500/20 text-orange-300',
      CSS: 'bg-blue-500/20 text-blue-300',
      JavaScript: 'bg-yellow-500/20 text-yellow-300',
      React: 'bg-cyan-500/20 text-cyan-300',
      PHP: 'bg-purple-500/20 text-purple-300',
      Python: 'bg-accent/20 text-accent',
    }
  },
];

export function ProjectsSection() {
  const [ref, isIntersecting] = useIntersectionObserver();

  return (
    <section id="projects" ref={ref} className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 gradient-text" data-testid="projects-title">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-accent-purple mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className={`bg-secondary/80 backdrop-blur-md rounded-2xl overflow-hidden card-hover border border-border ${
                isIntersecting 
                  ? 'animate-fade-in-up' 
                  : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.2}s`, animationFillMode: 'forwards' }}
              data-testid={`project-card-${index + 1}`}
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-semibold text-accent" data-testid={`project-title-${index + 1}`}>
                    {project.title}
                  </h3>
                  <span className="text-text-secondary text-sm" data-testid={`project-period-${index + 1}`}>
                    {project.period}
                  </span>
                </div>
                <p className="text-text-secondary mb-6 leading-relaxed" data-testid={`project-description-${index + 1}`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6" data-testid={`project-technologies-${index + 1}`}>
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        project.techColors[tech as keyof typeof project.techColors]
                      }`}
                      data-testid={`tech-badge-${tech.toLowerCase()}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-accent to-accent-purple text-white font-semibold rounded-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    data-testid={`project-link-${index + 1}`}
                  >
                    <ExternalLink className="mr-2 w-4 h-4" />
                    View Code
                  </a>
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                      data-testid={`project-demo-${index + 1}`}
                    >
                      <ExternalLink className="mr-2 w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
