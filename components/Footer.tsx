
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#001F3F] text-white py-12 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start">
             <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-[#D4AF37] rounded-lg flex items-center justify-center text-[#0A1F44] font-bold">S</div>
                <span className="font-bold text-lg">SOVEREIGN INCOME MULTIPLIER</span>
             </div>
             <p className="text-gray-400 text-sm">© 2026 Caramel Digital Academy. All rights reserved.</p>
          </div>
          
          <div className="flex gap-8 text-sm text-gray-300">
             <a href="#" className="hover:text-[#D4AF37] transition-colors">Privacy Policy</a>
             <a href="#" className="hover:text-[#D4AF37] transition-colors">Terms of Service</a>
             <a href="#" className="hover:text-[#D4AF37] transition-colors">Support</a>
          </div>
          
          <div className="flex gap-4">
             {[1,2,3].map(i => (
                <div key={i} className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#D4AF37] transition-all cursor-pointer flex items-center justify-center">
                   <div className="w-4 h-4 bg-white/50 rounded-sm"></div>
                </div>
             ))}
          </div>
        </div>
        <p className="mt-12 text-center text-xs text-gray-500 uppercase tracking-widest">Built for Nigerian Professionals & Global Sovereignty</p>
      </div>
    </footer>
  );
};

export default Footer;
