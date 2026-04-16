
import React from 'react';

const FailedSolutions: React.FC = () => {
  const items = [
    { title: "Watching free YouTube tutorials", desc: "Overwhelming, no structure, you quit after 3 days" },
    { title: "Joining WhatsApp \"make money\" groups", desc: "Full of noise, fake screenshots, no real mentorship" },
    { title: "Buying cheap ₦5K courses", desc: "No support, no accountability, no results" },
    { title: "Applying for jobs endlessly", desc: "300+ applications, 2 interviews, 0 offers. The system is broken." },
    { title: "Learning random skills", desc: "You learned video editing...but can't find buyers. You learned copywriting...but no one pays you. Why? You skipped the most important step: discovering YOUR monetizable edge." }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold text-[#0A1F44] mb-12 text-center underline decoration-[#D4AF37]">What You've Tried That Didn't Work:</h2>
        
        <div className="space-y-4">
          {items.map((item, index) => (
            <div key={index} className="flex items-center gap-4 p-4 border-l-4 border-red-200 bg-red-50/30 rounded-r-lg">
              <span className="text-2xl">❌</span>
              <p className="text-lg">
                <span className="font-bold text-[#0A1F44]">{item.title}</span> → {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-[#0A1F44] rounded-2xl text-center text-white">
          <p className="text-2xl font-bold leading-relaxed">
            The problem isn't you. The problem is you're following generic advice that doesn't fit YOUR reality.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FailedSolutions;
