
import React from 'react';

interface HeroProps {
  onCtaClick?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section className="bg-[#0A1F44] text-white pt-20 pb-28 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37] opacity-10 rounded-full -mr-48 -mt-48 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#00BFFF] opacity-10 rounded-full -ml-48 -mb-48 blur-3xl"></div>

      <div className="container mx-auto px-4 text-center relative z-10 max-w-5xl">
        <div className="inline-block px-4 py-1 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/30 text-[#D4AF37] font-semibold text-sm mb-8 animate-pulse">
          NEW FOR 2026
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-8 leading-tight">
          If You're Still Living on One Salary in 2026, You're One <span className="text-[#D4AF37]">"Engagement Letter"</span> Away from Financial Disaster
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
          A Proven 8-Week System That Helps Busy Nigerian Professionals & Job-Searching Graduates Build 3-5 Automated Income Streams (₦100K-₦500K/Month) Using Skills You Already Have—While Keeping Your 9-to-5 or Waiting for That Job
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button 
            onClick={onCtaClick}
            className="w-full sm:w-auto bg-[#ff6b35] hover:bg-[#e85a2b] text-white text-xl font-bold px-10 py-5 rounded-xl transition-all shadow-2xl transform hover:-translate-y-1"
          >
            Secure My Spot Now
          </button>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <span className="flex -space-x-2">
              {[1,2,3,4].map(i => (
                <img key={i} src={`https://picsum.photos/seed/${i+40}/32/32`} className="w-8 h-8 rounded-full border-2 border-[#0A1F44]" />
              ))}
            </span>
            <span>Joined by 350+ Professionals</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
