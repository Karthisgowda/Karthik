import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    value: 'karthiksgowda28@gmail.com',
    href: 'mailto:karthiksgowda28@gmail.com',
  },
  {
    icon: Phone,
    title: 'Phone',
    value: '+91 80508 28798',
    href: 'tel:+918050828798',
  },
  {
    icon: MapPin,
    title: 'Location',
    value: 'Kengeri, Bangalore, 560060, India',
    href: null,
  },
];

const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/karthisg',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    bgClass: 'from-blue-600 to-blue-700',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/Karthisgowda',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
    bgClass: 'from-gray-700 to-gray-800',
  },
];

export function ContactSection() {
  const [ref, isIntersecting] = useIntersectionObserver();

  return (
    <section id="contact" ref={ref} className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 gradient-text" data-testid="contact-title">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-accent-purple mx-auto mb-6"></div>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto" data-testid="contact-description">
            Ready to collaborate on exciting projects? Let's connect and create something amazing together!
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              {contactInfo.map((contact, index) => {
                const Icon = contact.icon;
                const content = (
                  <div 
                    className={`bg-secondary/50 backdrop-blur-md rounded-xl p-6 card-hover border border-border ${
                      isIntersecting 
                        ? 'animate-fade-in-left' 
                        : 'opacity-0'
                    }`}
                    style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
                    data-testid={`contact-info-${contact.title.toLowerCase()}`}
                  >
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-accent to-accent-purple rounded-full flex items-center justify-center mr-4">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-text-primary" data-testid={`contact-${contact.title.toLowerCase()}-title`}>
                          {contact.title}
                        </h4>
                        <p className="text-text-secondary" data-testid={`contact-${contact.title.toLowerCase()}-value`}>
                          {contact.value}
                        </p>
                      </div>
                    </div>
                  </div>
                );

                return contact.href ? (
                  <a key={contact.title} href={contact.href} className="block">
                    {content}
                  </a>
                ) : (
                  <div key={contact.title}>{content}</div>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="flex flex-col justify-center">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold mb-6 text-accent" data-testid="social-title">
                  Connect With Me
                </h3>
                <div className="flex justify-center space-x-6" data-testid="social-links">
                  {socialLinks.map((social, index) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-16 h-16 bg-gradient-to-r ${social.bgClass} rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 hover:shadow-xl ${
                        isIntersecting 
                          ? 'animate-scale-in' 
                          : 'opacity-0'
                      }`}
                      style={{ animationDelay: `${(index + 3) * 0.1}s`, animationFillMode: 'forwards' }}
                      data-testid={`social-link-${social.name.toLowerCase()}`}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
              <div className="text-center">
                <a
                  href="mailto:karthiksgowda28@gmail.com"
                  className={`inline-flex items-center px-8 py-4 bg-gradient-to-r from-accent to-accent-purple text-white font-semibold rounded-full hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-pulse-glow ${
                    isIntersecting 
                      ? 'animate-fade-in-up' 
                      : 'opacity-0'
                  }`}
                  style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}
                  data-testid="button-send-message"
                >
                  <Send className="mr-2 w-4 h-4" />
                  Send Message
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
