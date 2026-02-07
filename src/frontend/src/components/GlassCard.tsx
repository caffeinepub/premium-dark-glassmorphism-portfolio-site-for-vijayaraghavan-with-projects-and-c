import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function GlassCard({ children, className, hover = false }: GlassCardProps) {
  return (
    <div
      className={cn(
        'glass-card-light rounded-2xl p-6 backdrop-blur-sm border border-gray-200/60',
        'bg-white/70 shadow-soft',
        hover && 'transition-all duration-300 hover:-translate-y-1 hover:shadow-lift',
        className
      )}
    >
      {children}
    </div>
  );
}
