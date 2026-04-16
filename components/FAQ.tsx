
import React, { useState } from 'react';

const FaqItem: React.FC<{ q: string; a: string }> = ({ q, a }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-200">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left focus:outline-none group"
      >
        <span className="text-xl font-bold text-[#0A1F44] group-hover:text-[#0891B2] transition-colors">{q}</span>
        <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
           <svg className="w-6 h-6 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-6' : 'max-h-0'}`}>
        <p className="text-lg text-[#2D3748] leading-relaxed whitespace-pre-line">{a}</p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const questions = [
    {
      q: "I don't have time. How can I do this with my 9-to-5?",
      a: "The entire system is built for busy professionals. The \"2-hour work week\" framework means you maintain everything in 2 hours/week after setup. Dauda worked 2 hours/day. Maya worked 15 mins/day on LinkedIn. We meet you where you are."
    },
    {
      q: "I've been scammed before. How is this different?",
      a: "My students literally say, \"I fell victim to scammers before.\" This is the antidote. You get live coaching, real community, accountability, and a 60-day client guarantee. I'm not hiding behind a screen—I'm in the trenches with you."
    },
    {
      q: "I'm not tech-savvy. Can I really do this?",
      a: "Everything is copy-paste. The templates, the email sequences, the WhatsApp funnels—you don't create, you customize. If you can use WhatsApp and Google, you can do this. I have food technologists and nurses in the program. Tech is not the barrier. Mindset is."
    },
    {
      q: "What if I don't know what skill to monetize?",
      a: "That's exactly what Phase 1 solves. The Ikigai-based assessment reveals your monetizable edge based on what colleagues already ask you for, what you solve faster than others, and what the market pays for. You already have the skill. You just don't see it yet."
    },
    {
      q: "Will this work for a graduate with no job?",
      a: "Ask Dauda. Ask Maiganga. Both were unemployed. Dauda makes ₦150K/month. Maiganga makes ₦250K/month. This is BUILT for graduates waiting for jobs. It gives you income while you wait—or makes waiting optional."
    },
    {
      q: "What if I try and fail?",
      a: "The guarantee is clear: Execute and don't get results? I work with you 1-on-1 until you do. The only way to fail is to not start. Starting is the win."
    },
    {
      q: "₦25,000 is a lot. Is it worth it?",
      a: "Students consistently say, \"The token I paid was far below the experience.\" If you add ₦200K/month for 12 months, that's ₦2.4M. Your ROI is 96x. The question isn't \"Can I afford this?\" It's \"Can I afford to stay trapped?\""
    }
  ];

  return (
    <section className="py-20 bg-[#FEFBF3]">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl font-bold text-[#0A1F44] text-center mb-12 uppercase tracking-widest">Frequently Asked Questions</h2>
        <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
          {questions.map((item, i) => <FaqItem key={i} q={item.q} a={item.a} />)}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
