import { useScrollReveal } from '@/hooks/useScrollReveal';
import { 
  SiHtml5, 
  SiCss3, 
  SiJavascript, 
  SiReact, 
  SiNextdotjs, 
  SiNodedotjs, 
  SiFlask, 
  SiMysql, 
  SiMongodb, 
  SiRedis, 
  SiAmazon, 
  SiPython 
} from 'react-icons/si';

const skills = [
  { name: 'HTML', icon: SiHtml5, color: 'text-orange-600' },
  { name: 'CSS', icon: SiCss3, color: 'text-blue-600' },
  { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-500' },
  { name: 'React', icon: SiReact, color: 'text-cyan-500' },
  { name: 'Next.js', icon: SiNextdotjs, color: 'text-gray-900' },
  { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-600' },
  { name: 'Flask', icon: SiFlask, color: 'text-gray-700' },
  { name: 'MySQL', icon: SiMysql, color: 'text-blue-700' },
  { name: 'MongoDB', icon: SiMongodb, color: 'text-green-600' },
  { name: 'Redis', icon: SiRedis, color: 'text-red-600' },
  { name: 'AWS', icon: SiAmazon, color: 'text-orange-500' },
  { name: 'Python AI/ML workflows', icon: SiPython, color: 'text-blue-500' },
];

export default function SkillsSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="skills" className="py-20 relative bg-gradient-to-b from-white to-gray-50/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Skills & Technologies
        </h2>

        <div
          ref={ref}
          className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className="group relative bg-white/80 backdrop-blur-sm border border-gray-200/60 rounded-2xl p-6 shadow-soft hover:shadow-glow-light transition-all duration-300 hover:-translate-y-1"
                style={{
                  transitionDelay: isVisible ? `${index * 50}ms` : '0ms',
                }}
              >
                <div className="flex flex-col items-center gap-3 text-center">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 group-hover:from-blue-50 group-hover:to-purple-50 transition-all duration-300">
                    <Icon className={`w-8 h-8 ${skill.color} transition-transform duration-300 group-hover:scale-110`} />
                  </div>
                  <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors">
                    {skill.name}
                  </span>
                </div>
                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-400/0 to-purple-400/0 group-hover:from-blue-400/10 group-hover:to-purple-400/10 transition-all duration-300 pointer-events-none" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
