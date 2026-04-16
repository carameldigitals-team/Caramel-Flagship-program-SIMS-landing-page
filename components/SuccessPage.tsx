
import React from 'react';

interface SuccessPageProps {
  onReturn: () => void;
}

const SuccessPage: React.FC<SuccessPageProps> = ({ onReturn }) => {
  return (
    <div className="min-h-screen bg-white font-['Inter'] text-slate-800 antialiased py-20">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        {/* Success Celebration Icon */}
        <div className="mb-12 relative inline-block">
          <div className="w-32 h-32 bg-[#10B981] rounded-full flex items-center justify-center text-white shadow-[0_20px_40px_rgba(16,185,129,0.3)] mx-auto relative z-10 animate-bounce">
            <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#10B981]/10 rounded-full blur-2xl animate-pulse"></div>
        </div>

        <h1 className="text-5xl md:text-6xl font-black text-[#0074D9] mb-6 font-['Playfair_Display']">Welcome to Sovereignty!</h1>
        <p className="text-2xl text-[#FFD700] font-bold uppercase tracking-[0.2em] mb-12">Your payment was successful</p>

        <div className="bg-white rounded-[2.5rem] p-10 md:p-14 shadow-[0_30px_80px_rgba(0,116,217,0.15)] border border-slate-50 mb-12">
          <h2 className="text-2xl font-bold text-[#0A1F44] mb-8">Next Steps To Start Your Transformation:</h2>
          
          <div className="space-y-6 text-left">
            <div className="flex gap-5 items-start">
              <div className="w-10 h-10 bg-[#0074D9] text-white rounded-xl flex items-center justify-center font-bold flex-shrink-0">1</div>
              <div>
                <p className="font-bold text-[#0A1F44]">Check Your Email</p>
                <p className="text-slate-500">We've sent your login credentials and the "Sovereign Fast-Track Guide" to your inbox. Check your spam if it's not there.</p>
              </div>
            </div>
            
            <div className="flex gap-5 items-start">
              <div className="w-10 h-10 bg-[#0074D9] text-white rounded-xl flex items-center justify-center font-bold flex-shrink-0">2</div>
              <div>
                <p className="font-bold text-[#0A1F44]">Join the Private Community</p>
                <p className="text-slate-500">Click the link in your email to join our exclusive WhatsApp/Telegram group and meet your cohort.</p>
              </div>
            </div>

            <div className="flex gap-5 items-start">
              <div className="w-10 h-10 bg-[#0074D9] text-white rounded-xl flex items-center justify-center font-bold flex-shrink-0">3</div>
              <div>
                <p className="font-bold text-[#0A1F44]">Schedule Your Welcome Call</p>
                <p className="text-slate-500">Book your 15-minute orientation call with one of our coaches to set your income goals.</p>
              </div>
            </div>
          </div>

          <button 
            onClick={onReturn}
            className="mt-12 w-full bg-[#ff6b35] hover:bg-[#e85a2b] text-white text-xl font-bold py-5 rounded-2xl shadow-xl transition-all transform hover:-translate-y-1"
          >
            Return to Dashboard
          </button>
        </div>

        <p className="text-slate-400 font-medium">
          Transacation ID: <span className="font-mono">SIM-{Math.random().toString(36).substr(2, 9).toUpperCase()}</span>
        </p>
      </div>
    </div>
  );
};

export default SuccessPage;
