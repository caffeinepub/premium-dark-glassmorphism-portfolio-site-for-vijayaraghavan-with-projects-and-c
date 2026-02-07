import { Button } from '@/components/ui/button';
import { ArrowDown, Mail, Github, Linkedin } from 'lucide-react';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import { useParallax } from '@/hooks/useParallax';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function HeroSection() {
  const parallaxOffset = useParallax(0.3);
  const { ref, isVisible } = useScrollReveal();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/generated/hero-bg-light.dim_1920x1080.png"
          alt=""
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white/80" />
      </div>

      {/* Accent Orb with Parallax */}
      <div
        className="absolute top-20 right-10 w-96 h-96 opacity-20 pointer-events-none"
        style={{
          transform: `translateY(${parallaxOffset}px)`,
          transition: 'transform 0.1s ease-out',
        }}
      >
        <img
          src="/assets/generated/accent-orb-light.dim_800x800.png"
          alt=""
          className="w-full h-full object-contain blur-2xl"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div
          ref={ref}
          className={`max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Left Column - Text Content */}
          <div className="space-y-8 text-center md:text-left">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                Full-Stack Web & Application Developer
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
                Crafting exceptional digital experiences with clean code, optimal performance, 
                and seamless scalability. Transforming ideas into elegant, maintainable solutions.
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4 justify-center md:justify-start">
              <a
                href="https://github.com/vijay2git"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 rounded-full bg-white/80 border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                aria-label="GitHub Profile"
              >
                <SiGithub className="w-6 h-6 text-gray-700 group-hover:text-gray-900 transition-colors" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 rounded-full bg-white/80 border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                aria-label="LinkedIn Profile"
              >
                <SiLinkedin className="w-6 h-6 text-blue-600 group-hover:text-blue-700 transition-colors" />
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-4">
              <Button
                size="lg"
                onClick={() => scrollToSection('projects')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 min-w-[180px]"
              >
                View Projects
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('contact')}
                className="border-gray-300 hover:bg-gray-100 hover:border-gray-400 transition-all duration-300 hover:-translate-y-0.5 min-w-[180px]"
              >
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </Button>
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div className="flex justify-center md:justify-end">
            <div
              className="relative group"
              style={{
                transform: `translateY(${parallaxOffset * 0.5}px)`,
                transition: 'transform 0.1s ease-out',
              }}
            >
              <div className="relative w-full max-w-md">
                {/* Floating card with tilt effect */}
                <div className="relative rounded-3xl overflow-hidden bg-white/80 backdrop-blur-sm border border-gray-200/60 shadow-2xl transform rotate-2 group-hover:rotate-0 transition-all duration-500 hover:shadow-3xl">
                  <img
                    src="/assets/generated/profile.dim_900x1100.png"
                    alt="Vijayaraghavan - Full-Stack Developer"
                    className="w-full h-auto object-cover"
                  />
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -z-10 top-4 -right-4 w-full h-full rounded-3xl bg-gradient-to-br from-blue-200/40 to-purple-200/40 blur-xl" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-gray-400" />
      </div>
    </section>
  );
}
