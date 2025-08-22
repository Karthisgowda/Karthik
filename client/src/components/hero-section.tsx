import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { Mail, Phone, MapPin, ArrowDown } from 'lucide-react';

export function HeroSection() {
  const [ref, isIntersecting] = useIntersectionObserver();

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="home"
      ref={ref}
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary to-background"></div>
      <div className="absolute inset-0 grid-pattern opacity-20"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={`${isIntersecting ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="block" data-testid="hero-greeting">Hello, I'm</span>
            <span className="gradient-text" data-testid="hero-name">Karthik S Gowda</span>
          </h1>
          <p 
            className="text-xl sm:text-2xl text-text-secondary mb-8 animate-fade-in-up opacity-0"
            style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
            data-testid="hero-title"
          >
            Full Stack Developer & Problem Solver
          </p>
          <div 
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12 animate-fade-in-up opacity-0"
            style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
          >
            <div className="flex items-center space-x-2 text-text-secondary" data-testid="contact-email">
              <Mail className="w-4 h-4" />
              <span>karthiksgowda28@gmail.com</span>
            </div>
            <div className="flex items-center space-x-2 text-text-secondary" data-testid="contact-phone">
              <Phone className="w-4 h-4" />
              <span>+91 80508 28798</span>
            </div>
          </div>
          <div 
            className="flex items-center justify-center space-x-6 mb-12 animate-fade-in-up opacity-0"
            style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}
          >
            <a 
              href="https://linkedin.com/in/karthisg" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-2xl text-text-secondary hover:text-accent transition-all duration-300 hover:scale-110"
              data-testid="link-linkedin"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a 
              href="https://github.com/Karthisgowda" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-2xl text-text-secondary hover:text-accent transition-all duration-300 hover:scale-110"
              data-testid="link-github"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <div className="flex items-center text-text-secondary" data-testid="contact-location">
              <MapPin className="w-4 h-4 mr-2" />
              <span className="text-sm">Bangalore, India</span>
            </div>
          </div>
          <div className="animate-float">
            <button
              onClick={scrollToNext}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-accent to-accent-purple text-white font-semibold rounded-full hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-pulse-glow"
              data-testid="button-explore"
            >
              Explore My Work
              <ArrowDown className="ml-2 w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
