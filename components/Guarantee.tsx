
import React from 'react';

interface GuaranteeProps {
  onCtaClick?: () => void;
}

const Guarantee: React.FC<GuaranteeProps> = ({ onCtaClick }) => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <div className="inline-block p-4 rounded-full bg-[#00D4AA]/10 border-2 border-[#00D4AA] mb-8">
           <svg className="w-16 h-16 text-[#00D4AA]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
        </div>
        <h2 className="text-4xl font-bold text-[#0A1F44] mb-12">THE SOVEREIGNTY "DO-THE-WORK" GUARANTEE</h2>
        
        <div className="text-lg text-[#2D3748] space-y-6 leading-relaxed text-left p-8 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-300 mb-12">
           <p>Look, I know you've been burned before. So here's my promise:</p>
           <p className="font-bold text-xl text-[#0A1F44]">If you show up, execute the assignments, attend at least 8 live calls, and complete your portfolio project—but still don't make back your ₦25K investment within 60 days—I'll personally mentor you 1-on-1 until you do.</p>
           <p>Why so bold? Because people who do the work ALWAYS win. Dauda did it. Maya did it. Maiganga did it. If you execute, you cannot fail. The only way you lose is if you quit.</p>
           <p className="text-sm text-gray-500 italic">Conditions: This is for action-takers. If you buy and disappear, you void the guarantee. Fair?</p>
           <p className="text-2xl font-bold text-center text-[#0A1F44] mt-8">Bottom Line: Your risk is ZERO. Your upside is ₦500K/month. The math is simple.</p>
        </div>

        <button 
          onClick={onCtaClick}
          className="bg-[#ff6b35] hover:bg-[#e85a2b] text-white text-2xl font-bold px-12 py-5 rounded-2xl shadow-2xl transition-all transform hover:scale-105"
        >
          Enroll Risk-Free Now
        </button>
      </div>
    </section>
  );
};

export default Guarantee;
