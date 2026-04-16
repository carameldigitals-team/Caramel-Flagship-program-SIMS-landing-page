
import React from 'react';

interface HeaderProps {
  onCtaClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onCtaClick }) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 py-4 shadow-sm">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#D4AF37] to-[#00BFFF] rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm overflow-hidden border border-gray-100">
               <img src="https://i.ibb.co/LDNC0ZjN/ei-1769462007616-removebg-preview.png" alt="Sovereign Logo" className="w-10 h-10 object-contain" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-[#0A1F44] font-black text-xl leading-none font-['Playfair_Display']">SOVEREIGN</span>
            <span className="text-[#D4AF37] font-bold text-[10px] tracking-[0.3em] uppercase">Multiplier</span>
          </div>
        </div>
        <button 
          onClick={onCtaClick}
          className="bg-[#ff6b35] hover:bg-[#e85a2b] text-white px-8 py-3 rounded-xl font-bold text-sm transition-all transform hover:scale-105 shadow-[0_10px_20px_rgba(255,107,53,0.2)] uppercase tracking-widest"
        >
          ENROLL NOW
        </button>
      </div>
    </header>
  );
};

export default Header;
