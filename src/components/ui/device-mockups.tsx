import { cn } from '@/lib/utils';

interface DeviceProps {
  children: React.ReactNode;
  className?: string;
}

// MacBook Pro Mockup
export const MacBookMockup = ({ children, className }: DeviceProps) => (
  <div className={cn("relative", className)}>
    {/* Screen */}
    <div className="relative bg-[#1a1a1a] rounded-t-xl p-[8px] pb-0">
      {/* Camera */}
      <div className="absolute top-[6px] left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#3a3a3a]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-[#1a1a1a]" />
      </div>
      
      {/* Screen Content */}
      <div className="bg-white rounded-t-lg overflow-hidden">
        {children}
      </div>
    </div>
    
    {/* Bottom Bezel */}
    <div className="h-4 bg-[#1a1a1a] rounded-b-xl" />
    
    {/* Hinge */}
    <div className="relative mx-auto w-[90%]">
      <div className="h-2 bg-gradient-to-b from-[#d4d4d4] to-[#a3a3a3] rounded-b-lg" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-[#c4c4c4] rounded-b" />
    </div>
    
    {/* Base */}
    <div className="mx-auto w-[95%] h-1 bg-gradient-to-b from-[#e5e5e5] to-[#d4d4d4] rounded-b-xl" />
  </div>
);

// iPhone Mockup
export const IPhoneMockup = ({ children, className }: DeviceProps) => (
  <div className={cn("relative", className)}>
    {/* Phone Frame */}
    <div className="relative bg-[#1a1a1a] rounded-[2.5rem] p-[10px] shadow-xl">
      {/* Dynamic Island */}
      <div className="absolute top-[18px] left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-20" />
      
      {/* Screen */}
      <div className="bg-white rounded-[2rem] overflow-hidden relative">
        {children}
      </div>
      
      {/* Side Button (Right) */}
      <div className="absolute right-[-3px] top-28 w-[3px] h-12 bg-[#2a2a2a] rounded-r" />
      <div className="absolute right-[-3px] top-44 w-[3px] h-8 bg-[#2a2a2a] rounded-r" />
      
      {/* Side Buttons (Left) */}
      <div className="absolute left-[-3px] top-24 w-[3px] h-6 bg-[#2a2a2a] rounded-l" />
      <div className="absolute left-[-3px] top-36 w-[3px] h-10 bg-[#2a2a2a] rounded-l" />
      <div className="absolute left-[-3px] top-48 w-[3px] h-10 bg-[#2a2a2a] rounded-l" />
    </div>
  </div>
);

// Browser Window Mockup
export const BrowserMockup = ({ children, className }: DeviceProps) => (
  <div className={cn("relative bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden", className)}>
    {/* Browser Chrome */}
    <div className="h-10 bg-gray-50 border-b border-gray-100 flex items-center px-4 gap-2">
      <div className="flex gap-1.5">
        <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
        <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
        <div className="w-3 h-3 rounded-full bg-[#28CA41]" />
      </div>
      <div className="ml-4 flex-1 max-w-[240px] h-6 bg-white rounded-md flex items-center px-3 border border-gray-100">
        <svg className="w-3 h-3 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
        <span className="text-[10px] text-gray-400">portal.iluminar.app</span>
      </div>
    </div>
    
    {/* Content */}
    <div className="bg-white">
      {children}
    </div>
  </div>
);

