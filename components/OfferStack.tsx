
import React from 'react';

interface OfferStackProps {
  onCtaClick?: () => void;
}

const OfferStack: React.FC<OfferStackProps> = ({ onCtaClick }) => {
  const elements = [
    {
      title: "THE 8-WEEK IMPLEMENTATION PROGRAM",
      is: "8 video modules (20+ hours), 50+ templates, step-by-step blueprints",
      does: "Takes you from confusion to automated income in sequence",
      means: "You never wonder \"what's next?\" Everything is mapped out",
      value: "₦150,000"
    },
    {
      title: "WEEKLY LIVE COACHING CALLS",
      is: "8 live group sessions with me (recorded)",
      does: "Real-time Q&A, feedback, and motivation",
      means: "You're never alone. I answer your specific questions",
      value: "₦100,000"
    },
    {
      title: "PRIVATE SOVEREIGNTY COMMUNITY",
      is: "WhatsApp/Telegram group of fellow builders",
      does: "24/7 troubleshooting, peer support, celebration",
      means: "You have a tribe that holds you accountable and lifts you up",
      value: "₦50,000"
    },
    {
      title: "ACCOUNTABILITY PARTNER MATCHING",
      is: "Matched peer for weekly check-ins",
      does: "Forces execution (people get results when checked on)",
      means: "You don't just \"learn\"—you DO",
      value: "₦30,000"
    },
    {
      title: "DONE-FOR-YOU TEMPLATE LIBRARY",
      is: "50+ frameworks, pricing guides, sales pages, email sequences",
      does: "Copy-paste everything—no creating from scratch",
      means: "You launch in days, not months",
      value: "₦75,000"
    },
    {
      title: "THE EVERGREEN SALES SYSTEM",
      is: "Automated email sequences, WhatsApp funnels, affiliate setup",
      does: "Sells for you while you sleep",
      means: "You earn passively while keeping your job",
      value: "₦80,000"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-4xl font-bold text-[#0A1F44] text-center mb-16">THE COMPLETE OFFER STACK:</h2>
        
        <div className="space-y-8 mb-16">
          {elements.map((el, i) => (
            <div key={i} className="bg-white border-2 border-[#D4AF37] rounded-3xl p-8 hover:shadow-2xl transition-all">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                <h3 className="text-xl font-bold text-[#0A1F44] uppercase tracking-wide">ELEMENT {i+1}: {el.title}</h3>
                <span className="mt-2 md:mt-0 px-4 py-1 bg-[#D4AF37]/10 text-[#D4AF37] font-bold rounded-lg border border-[#D4AF37]/30">Value: {el.value}</span>
              </div>
              <div className="grid gap-4 text-[#2D3748]">
                <p><span className="font-bold text-[#0A1F44]">What It Is:</span> {el.is}</p>
                <p><span className="font-bold text-[#0A1F44]">What It Does:</span> {el.does}</p>
                <p><span className="font-bold text-[#0A1F44]">What That Means:</span> {el.means}</p>
              </div>
            </div>
          ))}

          <div className="bg-[#7C3AED] text-white p-8 rounded-3xl border-2 border-[#D4AF37] shadow-xl">
             <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold uppercase">ELEMENT 7: THE FIRST CLIENT GUARANTEE</h3>
                <span className="px-4 py-1 bg-white/20 font-bold rounded-lg uppercase tracking-widest">Priceless</span>
             </div>
             <p className="mb-4"><span className="font-bold">What It Is:</span> If you execute and don't land a client in 60 days, I mentor you 1-on-1 until you do</p>
             <p className="mb-4"><span className="font-bold">What It Does:</span> Removes ALL risk</p>
             <p><span className="font-bold">What That Means:</span> You literally cannot fail if you do the work</p>
          </div>
        </div>

        <div className="text-center bg-[#0A1F44] p-12 rounded-[3rem] text-white shadow-2xl relative overflow-hidden">
           <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37] rounded-full -mr-16 -mt-16 opacity-20"></div>
           <p className="text-2xl uppercase tracking-widest font-bold mb-4">TOTAL PROGRAM VALUE</p>
           <h4 className="text-5xl md:text-7xl font-black text-[#D4AF37] mb-8">₦485,000+</h4>
           <div className="flex flex-col items-center">
              <p className="text-xl text-gray-300 italic mb-8">But you won't pay anywhere near that today...</p>
              <button 
                onClick={onCtaClick}
                className="bg-[#ff6b35] hover:bg-[#e85a2b] text-white text-2xl font-bold px-12 py-5 rounded-2xl shadow-2xl transform hover:scale-105 transition-all"
              >
                Claim This Offer Now
              </button>
           </div>
        </div>
      </div>
    </section>
  );
};

export default OfferStack;
