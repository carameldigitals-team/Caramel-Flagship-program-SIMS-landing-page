
import React from 'react';

const TheBridge: React.FC = () => {
  const benefits = [
    "Discover the ONE skill that fits your personality, your gifts, and actually pays (no more guessing)",
    "Package that skill into a ₦10K-₦50K product you can sell on WhatsApp, LinkedIn, or Instagram (no website needed)",
    "Build a micro-brand in 15 minutes/day that attracts buyers while you keep your job",
    "Automate the sales so you earn ₦100K-₦500K/month working just 2 hours/week",
    "Create 3-5 income streams that protect you from job loss, recession, or any shock",
    "Do this in 8 weeks with step-by-step guidance, live coaching, and zero tech overwhelm"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#0A1F44] to-[#001F3F] text-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">What If There Was a Way To...</h2>
        
        <div className="grid gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex gap-4 p-6 glass rounded-2xl border border-white/10 items-start hover:bg-white/10 transition-colors">
              <div className="text-green-400">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <p className="text-xl font-medium">{benefit}</p>
            </div>
          ))}
        </div>

        <p className="mt-16 text-center text-2xl font-bold text-[#D4AF37]">
          That's exactly what The Sovereign Income Multiplier does.
        </p>
      </div>
    </section>
  );
};

export default TheBridge;
