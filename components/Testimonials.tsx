
import React from 'react';

const Testimonials: React.FC = () => {
  const reviews = [
    {
      quote: "I fell victim to scammers before. At Caramel Digital Academy, the value far exceeds the meager fee. I now stand out in video creation and make ₦150K/month. Mentorship truly works.",
      author: "Dauda Abdulwaheed, Graduate"
    },
    {
      quote: "Coach Elizabeth is patient, knowledgeable, and deeply committed. Complex topics become easy. I added ₦200K/month passive income while keeping my job.",
      author: "\"Marketing Manager Maya,\" Banker"
    },
    {
      quote: "The value is absolutely free in quality. I quit applying for jobs after 8 weeks and now earn ₦250K/month. This is the real deal.",
      author: "Theophilus Joshua Maiganga, Author"
    }
  ];

  return (
    <section className="py-20 bg-[#FEFBF3]">
      <div className="container mx-auto px-4 max-w-5xl text-center">
        <h2 className="text-4xl font-bold text-[#0A1F44] mb-16">What Our Sovereigns Are Saying</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((rev, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-lg border-t-8 border-[#10B981] relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-[#10B981] rounded-full flex items-center justify-center text-white">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" /></svg>
              </div>
              <p className="text-[#2D3748] italic mb-6 text-lg">"{rev.quote}"</p>
              <p className="font-bold text-[#0A1F44] text-sm tracking-widest uppercase">— {rev.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
