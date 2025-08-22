import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

export function AboutSection() {
  const [ref, isIntersecting] = useIntersectionObserver();

  return (
    <section id="about" ref={ref} className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 gradient-text" data-testid="about-title">
            Professional Summary
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-accent-purple mx-auto"></div>
        </div>
        <div className="max-w-4xl mx-auto">
          <div 
            className={`bg-background/50 backdrop-blur-md rounded-2xl p-8 card-hover border border-border ${
              isIntersecting ? 'animate-scale-in' : 'opacity-0'
            }`}
          >
            <p className="text-lg leading-relaxed text-text-secondary text-center" data-testid="about-description">
              BCA student with hands-on experience in{' '}
              <span className="text-accent font-semibold">full-stack web</span> and{' '}
              <span className="text-accent font-semibold">Android development</span>. 
              Skilled in JavaScript, Python, and backend integration, with a strong focus on{' '}
              <span className="text-accent-purple font-semibold">user-centric design</span>. 
              A quick learner and team player, passionate about building efficient and impactful technology solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
