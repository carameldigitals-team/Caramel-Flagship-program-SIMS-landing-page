
import React from 'react';

interface FinalCTAProps {
  onCtaClick?: () => void;
}

const FinalCTA: React.FC<FinalCTAProps> = ({ onCtaClick }) => {
  return (
    <section className="py-20 bg-[#0A1F44] text-white overflow-hidden relative">
      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">HERE'S EVERYTHING YOU'RE GETTING TODAY:</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="space-y-4">
             {[
               "The Sovereign Income Multiplier (8-week program): ₦150,000 value",
               "50+ Copy-Paste Templates & Frameworks: ₦75,000 value",
               "Weekly Live Coaching Calls (8 sessions): ₦100,000 value",
               "Private Community & Accountability Partner: ₦50,000 value",
               "Automated Sales System Setup: ₦80,000 value",
               "First Client Guarantee (work with me until you win): PRICELESS",
               "Fast-Action Bonuses (₦100K launch plan, templates, mindset audios): ₦45,000 value"
             ].map((item, i) => (
               <div key={i} className="flex gap-3 text-lg">
                  <span className="text-[#D4AF37]">✅</span>
                  <span>{item}</span>
               </div>
             ))}
          </div>
          
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 glass text-center">
             <p className="text-xl uppercase tracking-widest text-[#D4AF37] mb-2 font-bold">TOTAL VALUE: ₦500,000+</p>
             <p className="text-lg mb-4 text-gray-300">Your Investment Today:</p>
             <p className="text-6xl font-black text-white mb-8">₦25,000</p>
             <p className="text-sm text-gray-400 mb-8 uppercase tracking-[0.2em]">(One-Time Payment)</p>
             <button 
                onClick={onCtaClick}
                className="w-full bg-[#ff6b35] hover:bg-[#e85a2b] text-white text-2xl font-bold py-6 rounded-2xl shadow-2xl transition-all transform hover:-translate-y-2"
             >
                ENROLL NOW
             </button>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-4 text-center mb-16">
           <div className="p-4 bg-white/5 rounded-xl">
              <p className="text-[#D4AF37] font-bold">From one salary</p>
              <p className="text-sm">3-5 income streams</p>
           </div>
           <div className="p-4 bg-white/5 rounded-xl">
              <p className="text-[#D4AF37] font-bold">From anxiety</p>
              <p className="text-sm">Peaceful sleep</p>
           </div>
           <div className="p-4 bg-white/5 rounded-xl">
              <p className="text-[#D4AF37] font-bold">From "I don't know"</p>
              <p className="text-sm">"I built this"</p>
           </div>
           <div className="p-4 bg-white/5 rounded-xl">
              <p className="text-[#D4AF37] font-bold">From slavery</p>
              <p className="text-sm">Financial sovereignty</p>
           </div>
        </div>

        <div className="text-center max-w-3xl mx-auto">
           <p className="text-xl md:text-2xl font-medium leading-relaxed mb-8 italic">
              "In 60 days, you could be telling your mom, 'Send your account details,' without checking your balance first. Or you could be exactly where you are now—trapped, anxious, and waiting."
           </p>
           <p className="text-3xl font-bold text-[#D4AF37] mb-12 uppercase tracking-widest">Which story do you want to tell?</p>
           <p className="text-gray-400 text-sm">P.S. Remember: Cohort closes in 7 days or at 35 people. Early bird ₦5K discount disappears fast. Every month you wait is ₦100K-₦500K you could have earned. Click the button. Let's build your sovereignty.</p>
        </div>
      </div>
      
      {/* Decorative background animation blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#D4AF37] opacity-5 rounded-full blur-[120px] pointer-events-none"></div>
    </section>
  );
};

export default FinalCTA;
