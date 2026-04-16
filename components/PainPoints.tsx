
import React from 'react';

const PainPoints: React.FC = () => {
  const points = [
    "You earn ₦70K, ₦120K, maybe ₦150K/month, but it's never enough. Rent, black tax, transport, and you're broke by week two.",
    "You wake up at 5 AM, commute 3 hours, do work you don't love, for a boss who can dismiss you without warning. You feel like a corporate slave.",
    "You've tried \"side hustles\"—Ponzi schemes, watching YouTube tutorials, applying for endless jobs—but nothing sticks. You end up more tired, more broke, more frustrated.",
    "You're tired of your parents asking, \"When will you get a job?\" while your coursemates post success stories at 2 AM. You wonder, \"Maybe I'm just not cut out for this.\"",
    "You don't have time. Between work, family, and survival, where will you find hours to learn a new skill?",
    "You're skeptical. You've been scammed before. You've bought courses that promised millions and delivered nothing. You don't trust \"gurus\" anymore."
  ];

  return (
    <section className="py-20 bg-[#FEFBF3]">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl font-bold text-[#0A1F44] mb-12 text-center">You've Probably Experienced This:</h2>
        
        <div className="grid gap-6">
          {points.map((point, index) => (
            <div key={index} className="flex gap-4 p-6 bg-white rounded-xl shadow-sm border border-gray-100 items-start">
              <div className="mt-1 text-red-500">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" /></svg>
              </div>
              <p className="text-lg text-[#2D3748]">{point}</p>
            </div>
          ))}
        </div>

        <p className="mt-12 text-xl font-medium text-center text-[#0A1F44] italic">
          Listen to me: That fear, that shame, that anxiety? I know it. I lived it. And there's a way out.
        </p>
      </div>
    </section>
  );
};

export default PainPoints;
