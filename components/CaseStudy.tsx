
import React from 'react';

interface CaseStudyProps {
  onCtaClick?: () => void;
}

const CaseStudy: React.FC<CaseStudyProps> = ({ onCtaClick }) => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="bg-[#0A1F44] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-[#D4AF37]">
          <div className="p-8 md:p-12 text-center border-b border-white/10">
             <h2 className="text-2xl md:text-3xl font-bold text-[#D4AF37] uppercase tracking-[0.2em]">CASE STUDY</h2>
             <h3 className="text-3xl md:text-5xl font-bold text-white mt-4">THE DAUDA STORY: FROM SCAMMED GRADUATE TO ₦150K/MONTH SOVEREIGN EARNER</h3>
          </div>
          
          <div className="p-8 md:p-12 grid md:grid-cols-2 gap-12">
            <div>
               <h4 className="text-xl font-bold text-[#D4AF37] mb-4 uppercase">BEFORE:</h4>
               <p className="text-gray-300 text-lg leading-relaxed">
                  Dauda was an unemployed graduate. He'd spent thousands on "make money online" programs that scammed him. He had zero digital skills, zero income, and zero hope. He was about to give up and take a security guard job.
               </p>
               
               <h4 className="text-xl font-bold text-[#D4AF37] mt-8 mb-4 uppercase">AFTER (90 Days Later):</h4>
               <ul className="space-y-4 text-white text-lg font-medium">
                  <li className="flex items-center gap-2"><span className="text-[#10B981]">●</span> Income: ₦150,000/month (3 clients + affiliate sales)</li>
                  <li className="flex items-center gap-2"><span className="text-[#10B981]">●</span> Time: Works 2 hours/day, 4 days/week</li>
                  <li className="flex items-center gap-2"><span className="text-[#10B981]">●</span> Mindset: "I don't apply for jobs anymore. I build income streams."</li>
               </ul>
            </div>
            
            <div className="space-y-8">
               <h4 className="text-xl font-bold text-[#D4AF37] mb-4 uppercase">THE PROCESS:</h4>
               <div className="space-y-6 text-gray-300">
                  <p><span className="text-white font-bold">Week 1-2:</span> Digital Foundation & Mindset Reset. Identified his edge: WhatsApp marketing + video creation</p>
                  <p><span className="text-white font-bold">Week 3-4:</span> Skill Discovery & Monetization. Created a ₦5K "WhatsApp Business Setup" template</p>
                  <p><span className="text-white font-bold">Week 5-6:</span> Personal Brand & Digital Presence. Built his LinkedIn presence using the 5-Post Formula</p>
                  <p><span className="text-white font-bold">Week 7-8:</span> Passive Income Systems & Automations. Set up automated email sequences and affiliate programs</p>
               </div>
               
               <div className="p-6 bg-white/5 rounded-2xl border border-white/10 italic text-white text-lg">
                  "The value far exceeds the meager fee. Mentorship truly works."
               </div>
            </div>
          </div>
          
          <div className="bg-[#D4AF37] p-8 text-center text-[#0A1F44]">
             <p className="text-xl font-bold uppercase tracking-widest mb-6">THE KEY: Dauda didn't learn "everything." He discovered ONE monetizable edge, packaged it, and automated it. That's the Sovereign Income Multiplier.</p>
             <button 
                onClick={onCtaClick}
                className="bg-[#0A1F44] text-white hover:bg-[#001F3F] text-xl font-bold px-10 py-4 rounded-xl shadow-xl transition-all transform hover:scale-105"
             >
                Start Your Success Story
             </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
