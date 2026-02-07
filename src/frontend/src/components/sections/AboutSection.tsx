import GlassCard from '../GlassCard';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function AboutSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div
            ref={ref}
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <GlassCard>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  I'm a passionate Full-Stack Developer dedicated to crafting exceptional web applications 
                  that prioritize clean code, optimal performance, and seamless scalability. With expertise 
                  spanning modern frontend frameworks to robust backend systems, I bring ideas to life through 
                  elegant, maintainable solutions.
                </p>
                <p className="text-lg">
                  My approach combines technical excellence with a deep understanding of user needs, ensuring 
                  every project delivers both powerful functionality and outstanding user experience. I thrive 
                  on solving complex challenges and continuously expanding my skill set to stay at the forefront 
                  of web development.
                </p>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}
