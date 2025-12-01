import { cn } from '@/lib/utils';

export const Logo = ({ className, dark = false }: { className?: string; dark?: boolean }) => (
  <div className={cn("flex items-center gap-3", className)}>
    <div className="relative w-8 h-8 flex items-center justify-center">
      {/* Arco Semicircular */}
      <svg width="32" height="16" viewBox="0 0 32 16" fill="none" className="absolute bottom-0" xmlns="http://www.w3.org/2000/svg">
        <path 
          d="M1 15C1 6.71573 7.71573 0 16 0C24.2843 0 31 6.71573 31 15" 
          stroke={dark ? "white" : "#101010"} 
          strokeWidth="2.5" 
          strokeLinecap="round"
        />
      </svg>
      {/* Ponto de Luz */}
      <div className="absolute bottom-2 w-2 h-2 bg-orange rounded-full shadow-[0_0_10px_rgba(255,138,61,0.6)] animate-pulse-soft" />
    </div>
    <div className="flex flex-col justify-center h-8">
      <span className={cn("text-lg font-semibold leading-none tracking-tight", dark ? "text-white" : "text-graphite")}>
        Portal Iluminar
      </span>
      <span className={cn("text-[10px] font-medium tracking-wider uppercase opacity-60", dark ? "text-white" : "text-graphite")}>
        by Centra
      </span>
    </div>
  </div>
);

