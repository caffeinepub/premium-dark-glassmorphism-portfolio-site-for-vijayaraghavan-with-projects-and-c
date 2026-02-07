import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import SkillsSection from './components/sections/SkillsSection';
import ProjectsSection from './components/sections/ProjectsSection';
import ContactSection from './components/sections/ContactSection';
import TopNav from './components/TopNav';
import AdminPanel from './components/admin/AdminPanel';
import CursorSpotlight from './components/CursorSpotlight';
import DecorativeBackground from './components/DecorativeBackground';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import { Heart } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 text-gray-900 relative">
      <CursorSpotlight />
      <DecorativeBackground />
      <TopNav />
      
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <footer className="relative z-10 border-t border-gray-200/60 bg-white/80 backdrop-blur-sm py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-6">
              <a
                href="https://github.com/vijay2git"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors"
                aria-label="GitHub Profile"
              >
                <SiGithub className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <SiLinkedin className="w-5 h-5" />
              </a>
            </div>
            
            <p className="text-sm text-gray-600 text-center">
              © 2026. Built with <Heart className="inline w-4 h-4 text-rose-500 fill-rose-500" /> using{' '}
              <a
                href="https://caffeine.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 hover:text-blue-600 transition-colors font-medium"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>

      <AdminPanel />
    </div>
  );
}

export default App;
