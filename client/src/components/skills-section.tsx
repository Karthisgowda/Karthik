import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { Code, Database, GitBranch, Smartphone } from 'lucide-react';

const languagesSkills = [
  { name: 'DSA', description: 'Data Structures & Algorithms', icon: Code },
  { name: 'Python', description: 'Backend Development & Scripting', icon: Code },
  { name: 'PHP', description: 'Server-side Development', icon: Code },
  { name: 'Android Studio', description: 'Mobile App Development', icon: Smartphone },
];

const webSkills = [
  { name: 'HTML', description: 'Semantic Markup', color: 'text-orange-500' },
  { name: 'CSS', description: 'Modern Styling', color: 'text-blue-500' },
  { name: 'JavaScript', description: 'Dynamic Interactions', color: 'text-yellow-500' },
  { name: 'React', description: 'Component-Based UI', color: 'text-cyan-500' },
];

const toolsSkills = [
  { name: 'MySQL', description: 'Relational Database', icon: Database },
  { name: 'MongoDB', description: 'NoSQL Database', icon: Database },
  { name: 'Git', description: 'Version Control', icon: GitBranch },
  { name: 'VS Code', description: 'Development Environment', icon: Code },
];

export function SkillsSection() {
  const [ref, isIntersecting] = useIntersectionObserver();

  return (
    <section id="skills" ref={ref} className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 gradient-text" data-testid="skills-title">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-accent-purple mx-auto"></div>
        </div>
        
        {/* Languages */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center text-text-primary">
            Languages & Core Technologies
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {languagesSkills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div 
                  key={skill.name}
                  className={`skill-card p-6 rounded-xl border border-border ${
                    isIntersecting 
                      ? 'animate-fade-in-up' 
                      : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
                  data-testid={`skill-card-${skill.name.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <div className="text-center">
                    <Icon className="w-12 h-12 text-accent mb-4 mx-auto" />
                    <h4 className="text-xl font-semibold mb-2">{skill.name}</h4>
                    <p className="text-text-secondary">{skill.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Web/Mobile */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center text-text-primary">
            Web & Mobile Technologies
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {webSkills.map((skill, index) => (
              <div 
                key={skill.name}
                className={`skill-card p-6 rounded-xl border border-border ${
                  isIntersecting 
                    ? 'animate-fade-in-up' 
                    : 'opacity-0'
                }`}
                style={{ animationDelay: `${(index + 3) * 0.1}s`, animationFillMode: 'forwards' }}
                data-testid={`skill-card-${skill.name.toLowerCase()}`}
              >
                <div className="text-center">
                  <div className={`text-4xl ${skill.color} mb-4`}>
                    {skill.name === 'HTML' && '📄'}
                    {skill.name === 'CSS' && '🎨'}
                    {skill.name === 'JavaScript' && '⚡'}
                    {skill.name === 'React' && '⚛️'}
                  </div>
                  <h4 className="text-xl font-semibold mb-2">{skill.name}</h4>
                  <p className="text-text-secondary">{skill.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Databases & Tools */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center text-text-primary">
            Databases & Development Tools
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {toolsSkills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div 
                  key={skill.name}
                  className={`skill-card p-6 rounded-xl border border-border ${
                    isIntersecting 
                      ? 'animate-fade-in-up' 
                      : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${(index + 7) * 0.1}s`, animationFillMode: 'forwards' }}
                  data-testid={`skill-card-${skill.name.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <div className="text-center">
                    <Icon className="w-12 h-12 text-accent mb-4 mx-auto" />
                    <h4 className="text-xl font-semibold mb-2">{skill.name}</h4>
                    <p className="text-text-secondary">{skill.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
