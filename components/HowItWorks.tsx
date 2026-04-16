
import React from 'react';

const HowItWorks: React.FC = () => {
  const phases = [
    {
      week: "WEEK 1-2",
      title: "DIGITAL FOUNDATION & MINDSET RESET",
      desc: "We strip away the \"scarcity mindset\" and rebuild your digital foundation. You'll learn the 2026 Sovereign Framework and set up your high-performance environment."
    },
    {
      week: "WEEK 3-4",
      title: "SKILL DISCOVERY & MONETIZATION",
      desc: "Using our Ikigai-based assessment, we identify the ONE skill you already have that the market is hungry for. Then, we package it into a high-ticket offer."
    },
    {
      week: "WEEK 5-6",
      title: "PERSONAL BRAND & DIGITAL PRESENCE",
      desc: "Build a magnetic brand on WhatsApp, LinkedIn, or Instagram in 15 mins/day. We give you the 5-Post Formula that attracts high-paying clients without chasing them."
    },
    {
      week: "WEEK 7-8",
      title: "PASSIVE INCOME SYSTEMS & AUTOMATIONS",
      desc: "The final step: Automation. We set up your evergreen sales funnels and affiliate systems so you earn while you sleep. Your 2-hour work week starts here."
    }
  ];

  return (
    <section className="py-20 bg-[#FEFBF3]">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-4xl font-bold text-[#0A1F44] text-center mb-16">HOW IT WORKS: THE 4-PHASE BLUEPRINT</h2>
        
        <div className="grid md:grid-cols-2 gap-8 relative">
          {/* Connection line for desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-[#D4AF37]/30 -translate-y-1/2 z-0"></div>
          
          {phases.map((phase, idx) => (
            <div key={idx} className="relative z-10 bg-white p-8 rounded-2xl shadow-lg border-b-4 border-[#0891B2] group hover:-translate-y-2 transition-transform">
              <div className="inline-block px-3 py-1 rounded bg-[#0A1F44] text-[#D4AF37] font-bold text-sm mb-4">
                {phase.week}
              </div>
              <h3 className="text-xl font-bold text-[#0A1F44] mb-4 group-hover:text-[#0891B2] transition-colors">{phase.title}</h3>
              <p className="text-[#2D3748] leading-relaxed">{phase.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-[#0A1F44] text-white p-10 rounded-3xl shadow-xl overflow-hidden relative">
           <div className="absolute top-0 right-0 p-8 opacity-10">
              <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
           </div>
           <h3 className="text-2xl font-bold mb-8 text-[#D4AF37]">WHAT HAPPENS IN 60 DAYS:</h3>
           <div className="space-y-6">
              <div className="flex items-center gap-4">
                 <div className="w-12 h-12 rounded-full border-2 border-[#D4AF37] flex items-center justify-center font-bold text-[#D4AF37]">01</div>
                 <p className="text-xl">Month 1: Foundation, Skill Discovery & Launch. Make your first ₦50K.</p>
              </div>
              <div className="flex items-center gap-4">
                 <div className="w-12 h-12 rounded-full border-2 border-[#D4AF37] flex items-center justify-center font-bold text-[#D4AF37]">02</div>
                 <p className="text-xl">Month 2: Brand Building & Automation. Scale to ₦150K-₦300K/month. <span className="text-[#D4AF37]">You're sovereign.</span></p>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
