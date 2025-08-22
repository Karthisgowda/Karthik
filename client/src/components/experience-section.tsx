import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { CheckCircle } from 'lucide-react';

export function ExperienceSection() {
  const [ref, isIntersecting] = useIntersectionObserver();

  const achievements = [
    'Built a comprehensive web application using NestJS for backend architecture and Vue.js for responsive frontend development',
    'Created robust RESTful APIs and implemented MVC architecture patterns using TypeScript for type-safe development',
    'Utilized Vue Router and Vuex for dynamic routing and centralized state management',
    'Integrated GraphQL for efficient data fetching and implemented secure authentication flows',
    'Successfully deployed a responsive, production-ready application with optimized performance',
  ];

  return (
    <section id="experience" ref={ref} className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 gradient-text" data-testid="experience-title">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-accent-purple mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="timeline-item relative pl-8 pb-12">
            <div className="absolute left-0 top-2 w-4 h-4 bg-gradient-to-r from-accent to-accent-purple rounded-full animate-pulse-glow"></div>
            <div 
              className={`bg-background/50 backdrop-blur-md rounded-2xl p-8 card-hover border border-border ${
                isIntersecting ? 'animate-scale-in' : 'opacity-0'
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-2xl font-semibold text-accent" data-testid="job-title">
                  Full Stack Developer Intern
                </h3>
                <span className="text-text-secondary font-medium" data-testid="job-duration">
                  Dec 2024 – Mar 2025
                </span>
              </div>
              <p className="text-accent-purple font-semibold mb-4" data-testid="company-name">
                Salesine Technology Ltd, Bangalore
              </p>
              <ul className="space-y-3 text-text-secondary">
                {achievements.map((achievement, index) => (
                  <li 
                    key={index} 
                    className="flex items-start"
                    data-testid={`achievement-${index + 1}`}
                  >
                    <CheckCircle className="w-5 h-5 text-success mt-1 mr-3 flex-shrink-0" />
                    <span dangerouslySetInnerHTML={{ 
                      __html: achievement.replace(
                        /(NestJS|Vue\.js|TypeScript|Vue Router|Vuex|GraphQL)/g, 
                        '<strong class="text-accent">$1</strong>'
                      )
                    }} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
