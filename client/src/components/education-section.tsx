import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { GraduationCap, Award, Trophy, Users } from 'lucide-react';

const education = [
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Jain Deemed-to-be University, Bangalore',
    period: 'Jul 2023 – Jun 2026',
    grade: '8.58 CGPA',
  },
  {
    degree: 'Pre-University (Commerce)',
    institution: 'Vishwaprajna PU College, Mysore',
    period: 'Jun 2021 – Jun 2023',
    grade: '81%',
  },
];

const certifications = [
  { 
    name: 'Python Basics', 
    icon: '🐍',
    link: 'https://drive.google.com/file/d/1lydFufG8EefbBZD5lAJnFCM1H9QURWSS/view?usp=drive_link'
  },
  { 
    name: 'Mobile App Development', 
    icon: '📱',
    link: 'https://drive.google.com/file/d/1LEgQ4cF2_CjOQzQhXqHC52GkbOCXxHNE/view?usp=drive_link'
  },
  { 
    name: 'SQL', 
    icon: '🗃️',
    link: 'https://drive.google.com/file/d/1hrXJgn-QM2UPxhyjPeB3w_ENHm24v5Y6/view?usp=drive_link'
  },
  { 
    name: 'Version Control', 
    icon: '🌿',
    link: 'https://drive.google.com/file/d/1MdIcjmwcZoLmVPHBNXzDIpW7N_e8aERJ/view?usp=drive_link'
  },
  { 
    name: 'Data Analytics', 
    icon: '📊',
    link: 'https://drive.google.com/file/d/1Dy8q2ikaqh-RZrpzhDQpTBYaTrZTBYgj/view?usp=drive_link'
  },
];

const achievements = [
  {
    title: 'National-level Karate Player',
    description: 'Represented at major competitions, showcasing discipline and leadership skills',
    icon: '🥋',
  },
  {
    title: 'President, Commerce Club',
    description: 'Organized events, seminars, and student-driven initiatives in Mysore',
    icon: '👨‍💼',
  },
  {
    title: 'Cricket Team Captain',
    description: 'Champions in Interschool competition 2022-23',
    icon: '🏆',
  },
];

export function EducationSection() {
  const [ref, isIntersecting] = useIntersectionObserver();

  return (
    <section id="education" ref={ref} className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 gradient-text" data-testid="education-title">
            Education & Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-accent-purple mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center text-accent">Academic Background</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div 
                  key={edu.degree}
                  className={`bg-background/50 backdrop-blur-md rounded-xl p-6 card-hover border border-border ${
                    isIntersecting 
                      ? 'animate-fade-in-left' 
                      : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 0.2}s`, animationFillMode: 'forwards' }}
                  data-testid={`education-card-${index + 1}`}
                >
                  <h4 className="text-xl font-semibold text-accent-purple mb-2" data-testid={`education-degree-${index + 1}`}>
                    {edu.degree}
                  </h4>
                  <p className="text-text-secondary mb-2" data-testid={`education-institution-${index + 1}`}>
                    {edu.institution}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-text-secondary" data-testid={`education-period-${index + 1}`}>
                      {edu.period}
                    </span>
                    <span className="px-3 py-1 bg-success/20 text-success rounded-full text-sm font-bold" data-testid={`education-grade-${index + 1}`}>
                      {edu.grade}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center text-accent">Professional Certifications</h3>
            <div className="grid grid-cols-1 gap-4">
              {certifications.map((cert, index) => (
                <a
                  key={cert.name}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`bg-background/50 backdrop-blur-md rounded-xl p-4 card-hover border border-border flex items-center hover:bg-accent/10 transition-all duration-300 cursor-pointer ${
                    isIntersecting 
                      ? 'animate-fade-in-right' 
                      : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
                  data-testid={`certification-${cert.name.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <span className="text-2xl mr-4">{cert.icon}</span>
                  <span className="font-semibold hover:text-accent transition-colors">{cert.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center text-accent">Notable Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div 
                key={achievement.title}
                className={`bg-background/50 backdrop-blur-md rounded-xl p-6 text-center card-hover border border-border ${
                  isIntersecting 
                    ? 'animate-fade-in-up' 
                    : 'opacity-0'
                }`}
                style={{ 
                  animationDelay: `${(index + 1) * 0.2}s`, 
                  animationFillMode: 'forwards'
                }}
                data-testid={`achievement-${index + 1}`}
              >
                <div className="text-4xl mb-4 animate-float" style={{ animationDelay: `${index}s` }}>
                  {achievement.icon}
                </div>
                <h4 className="text-xl font-semibold text-accent-purple mb-2" data-testid={`achievement-title-${index + 1}`}>
                  {achievement.title}
                </h4>
                <p className="text-text-secondary" data-testid={`achievement-description-${index + 1}`}>
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
