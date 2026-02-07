import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const projects = [
  {
    name: 'Home Price Predictor',
    description: 'A machine learning application that predicts real estate prices using advanced regression models and data analysis techniques.',
    tags: ['Python', 'Machine Learning', 'Flask', 'Data Science'],
    url: 'https://github.com/vijay2git/home-price-predictor.git',
    image: '/assets/generated/project-home-price-predictor.dim_1200x800.png',
  },
  {
    name: 'SimpleNntp',
    description: 'A lightweight NNTP (Network News Transfer Protocol) implementation for efficient newsgroup communication and message handling.',
    tags: ['Python', 'Networking', 'Protocol Implementation'],
    url: 'https://github.com/vijay2git/SimpleNntp.git',
    image: '/assets/generated/project-simplenntp.dim_1200x800.png',
  },
  {
    name: 'Persevan AI',
    description: 'An intelligent AI-powered application leveraging natural language processing and machine learning to deliver smart automation solutions.',
    tags: ['Python', 'AI/ML', 'NLP', 'Automation'],
    url: 'https://github.com/vijay2git/Persevan_Ai.git',
    image: '/assets/generated/project-persevan-ai.dim_1200x800.png',
  },
];

export default function ProjectsSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Featured Projects
        </h2>

        <div
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {projects.map((project, index) => (
            <div
              key={project.name}
              className="group relative bg-white/80 backdrop-blur-sm border border-gray-200/60 rounded-2xl overflow-hidden shadow-soft hover:shadow-lift transition-all duration-300 hover:-translate-y-2"
              style={{
                transitionDelay: isVisible ? `${index * 100}ms` : '0ms',
              }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Project Content */}
              <div className="p-6 flex flex-col h-[calc(100%-12rem)]">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.name}
                </h3>

                <p className="text-gray-600 mb-4 flex-grow text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="bg-gray-100 hover:bg-gray-200 text-gray-700 border-gray-200 text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <Button
                  asChild
                  variant="outline"
                  className="w-full border-gray-300 hover:bg-gray-100 hover:border-gray-400 group/btn transition-all duration-300"
                >
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    View on GitHub
                    <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
