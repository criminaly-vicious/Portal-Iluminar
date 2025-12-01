import { cn } from '@/lib/utils';

interface DoodleProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

export const DoodleArrow = ({ className, ...props }: DoodleProps) => (
  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className={cn("text-[#FF8A3D]", className)} {...props}>
    <path d="M10 50 Q 50 20 90 50" strokeDasharray="8 4" />
    <path d="M80 40 L 90 50 L 80 60" />
  </svg>
);

export const DoodleCircle = ({ className, ...props }: DoodleProps) => (
  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" className={cn("text-[#FF8A3D]", className)} {...props}>
    <circle cx="50" cy="50" r="45" strokeDasharray="10 6" strokeLinecap="round" />
  </svg>
);

export const DoodleStar = ({ className, ...props }: DoodleProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cn("text-[#FF8A3D]", className)} {...props}>
    <path d="M12 2l3 6 6 1-4 4 1 6-6-3-6 3 1-6-4-4 6-1 3-6z" />
  </svg>
);

export const DoodleUnderline = ({ className, ...props }: DoodleProps) => (
  <svg viewBox="0 0 200 20" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className={cn("text-[#FF8A3D]", className)} {...props}>
    <path d="M2 10 Q 50 18 100 10 T 198 10" />
  </svg>
);

