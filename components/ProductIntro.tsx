
import React from 'react';

const ProductIntro: React.FC = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0A1F44] mb-6 leading-tight">
              The Sovereign Income Multiplier: <span className="text-[#D4AF37]">An 8-Week Program</span> That Transforms Your Single Paycheck Into 3-5 Automated Income Streams
            </h2>
            <p className="text-xl text-[#2D3748] mb-8 leading-relaxed">
              This isn't a course. It's a transfer of the exact system I used to go from ₦50K/month to ₦1M in 30 days.
            </p>
            
            <div className="space-y-4">
              {[
                "Takes you from \"I don't know what to sell\" to automated income in 60 days",
                "Uses the 4-phase framework (Skill Discovery → Monetization → Brand Building → Automation)",
                "Provides every tool, template, and strategy you need—no guesswork",
                "Builds your income streams in sequence, step-by-step",
                "Teaches you to work 2 hours/week while earning ₦100K-₦500K/month"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-[#00D4AA]/20 rounded-full flex items-center justify-center text-[#00D4AA]">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  </div>
                  <span className="text-lg text-[#2D3748]">{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
             <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-[#0A1F44] gold-glow bg-gray-50 p-8 md:p-12 min-h-[400px] flex items-center justify-center">
                <div className="flex items-center justify-center gap-2 md:gap-4 w-full h-full relative">
                   {/* Left Assets Mockup */}
                   <img 
                    src="https://i.ibb.co/fYwNfdZn/ei-1769448839154-removebg-preview.png" 
                    alt="Sovereign Multiplier Assets" 
                    className="w-[30%] h-auto object-contain drop-shadow-xl transform transition-transform duration-700 hover:scale-110 z-20" 
                   />
                   
                   {/* New Phone Mockup - Placed close to iMac */}
                   <img 
                    src="https://i.ibb.co/93gHNzxT/ei-1769449074501-removebg-preview.png" 
                    alt="Sovereign Multiplier Phone Interface" 
                    className="w-[20%] h-auto object-contain drop-shadow-xl transform transition-transform duration-700 hover:scale-125 z-30 -mx-4 mb-[-10%]" 
                   />
                   
                   {/* Main iMac Mockup */}
                   <img 
                    src="https://i.ibb.co/Gvb18SBJ/ei-1769448601331-removebg-preview.png" 
                    alt="The Sovereign Multiplier Main Mockup" 
                    className="w-[55%] h-auto object-contain drop-shadow-2xl transition-transform duration-700 hover:scale-105 z-10" 
                   />
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F44] via-transparent to-transparent opacity-30 pointer-events-none"></div>
                <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 text-white drop-shadow-2xl z-40">
                   <div className="bg-[#0A1F44]/80 backdrop-blur-md px-5 py-2.5 rounded-2xl border border-[#D4AF37]/40 shadow-xl">
                     <p className="font-black text-xl md:text-2xl uppercase tracking-[0.2em] text-[#D4AF37]">SOVEREIGN STATUS</p>
                     <p className="text-[10px] md:text-xs font-bold text-white/80 tracking-widest uppercase mt-1">60 Days to Financial Freedom</p>
                   </div>
                </div>
             </div>
             
             {/* Decorative Accents */}
             <div className="absolute -top-12 -left-12 w-48 h-48 bg-[#D4AF37] opacity-10 rounded-full blur-[80px]"></div>
             <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-[#00BFFF] opacity-10 rounded-full blur-[80px]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductIntro;
