
import React from 'react';

interface UrgencyProps {
  onCtaClick?: () => void;
}

const Urgency: React.FC<UrgencyProps> = ({ onCtaClick }) => {
  const reasons = [
    { title: "Cohort Size is Limited", text: "I only take 35 people to ensure quality 1-on-1 attention. Once spots fill, you wait 8 weeks for the next cohort." },
    { title: "Early Bird ₦5,000 Discount", text: "First 15 people pay ₦20,000 (Base), ₦35,000 (VIP), ₦45,000 (Elite). After that, full price applies." },
    { title: "Every Month You Wait = ₦100K-₦500K Lost", text: "If you start today, you could have your first income stream live by next month. If you wait, that's another month of salary-only anxiety." },
    { title: "Nigeria's Economy Won't Wait", text: "The naira is falling, jobs are disappearing. The safest time to build sovereignty was yesterday. The second safest is today." },
    { title: "Bonuses Disappear", text: "The ₦45K bonus pack (₦100K launch plan, proposal templates, mindset audios) is ONLY for fast-action takers." }
  ];

  return (
    <section className="py-20 bg-[#FEFBF3]">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0A1F44] text-center mb-6">THIS COHORT CLOSES IN 7 DAYS OR WHEN 35 SPOTS FILL—WHICHEVER COMES FIRST</h2>
        <p className="text-2xl font-bold text-[#ff6b35] text-center mb-16">Why You Must Act NOW:</p>
        
        <div className="space-y-6">
          {reasons.map((reason, i) => (
            <div key={i} className="flex gap-4 items-start p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
               <div className="w-10 h-10 bg-[#ff6b35]/10 text-[#ff6b35] rounded-full flex items-center justify-center font-bold flex-shrink-0">{i+1}</div>
               <div>
                  <h4 className="text-xl font-bold text-[#0A1F44] mb-2">{reason.title}</h4>
                  <p className="text-[#2D3748] text-lg">{reason.text}</p>
               </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
           <p className="text-2xl font-bold text-[#0A1F44] mb-8 leading-relaxed">
              Bottom Line: In 60 days, you'll either be celebrating your new income streams OR you'll be exactly where you are now—trapped. <span className="text-[#ff6b35]">Which do you choose?</span>
           </p>
           <button 
            onClick={onCtaClick}
            className="bg-[#ff6b35] hover:bg-[#e85a2b] text-white text-2xl font-bold px-12 py-6 rounded-2xl shadow-2xl transform hover:scale-105 transition-all"
           >
              Claim My ₦5,000 Early Bird Discount
           </button>
        </div>
      </div>
    </section>
  );
};

export default Urgency;
