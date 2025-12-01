export const Footer = () => {
  return (
    <footer className="py-12 bg-[#FDFCFB] border-t border-[#F7F5F2]">
      <div className="container-main">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#FF8A3D] rounded-lg flex items-center justify-center">
              <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M12 3v2M12 19v2M3 12h2M19 12h2" />
                <circle cx="12" cy="12" r="4" />
              </svg>
            </div>
            <span className="font-bold text-[#1F1F1F]">Portal Iluminar</span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-[#6F6F6F]">
            <span className="font-medium text-[#1F1F1F]">Centra</span>
            <span className="w-1 h-1 rounded-full bg-[#6F6F6F]/30" />
            <span>Portal Iluminar</span>
            <span className="w-1 h-1 rounded-full bg-[#6F6F6F]/30" />
            <span>ASATA</span>
          </div>

          {/* Copyright */}
          <p className="text-sm text-[#6F6F6F]">
            © {new Date().getFullYear()} Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
