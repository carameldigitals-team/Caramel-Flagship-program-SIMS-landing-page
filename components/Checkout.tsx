
import React, { useState } from 'react';

interface CheckoutProps {
  onBack: () => void;
  onSuccess: () => void;
  isSection?: boolean;
}

const Checkout: React.FC<CheckoutProps> = ({ onBack, onSuccess, isSection }) => {
  const [selectedPayment, setSelectedPayment] = useState<string>('paystack');
  const [isProcessing, setIsProcessing] = useState(false);
  const [email, setEmail] = useState('');
  const [copied, setCopied] = useState(false);

  const handleCompleteOrder = () => {
    console.log('Completing order for payment method:', selectedPayment);
    if (!email) {
      alert('Please enter your email address to continue.');
      return;
    }
    
    if (selectedPayment === 'transfer') {
      alert('Please complete the bank transfer and send proof via WhatsApp using the button provided below.');
      return;
    }

    if (selectedPayment === 'selar') {
      setIsProcessing(true);
      console.log('Opening Selar checkout...');
      const redirectUrl = window.location.origin + '/api/pay/selar';
      const win = window.open(redirectUrl, '_blank');
      if (!win) {
        // Fallback if popup blocked
        window.location.href = redirectUrl;
      }
      setTimeout(() => setIsProcessing(false), 2000);
      return;
    }

    if (selectedPayment === 'paystack') {
      setIsProcessing(true);
      console.log('Opening Paystack checkout...');
      const redirectUrl = window.location.origin + '/api/pay/paystack';
      const win = window.open(redirectUrl, '_blank');
      if (!win) {
        // Fallback if popup blocked
        window.location.href = redirectUrl;
      }
      setTimeout(() => setIsProcessing(false), 2000);
      return;
    }

    if (selectedPayment === 'flutterwave') {
      alert('Flutterwave payment is currently being set up. Please use Paystack or Selar for now.');
      return;
    }

    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      onSuccess();
    }, 2500);
  };

  const handleCopyAccount = () => {
    navigator.clipboard.writeText('2235077035');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`bg-white font-['Inter'] text-slate-800 antialiased ${isSection ? 'py-24 border-t border-slate-100 bg-slate-50/30' : 'min-h-screen'}`}>
      {!isSection && (
        <header className="bg-[#0074D9] py-6 px-4 shadow-xl relative z-50">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center space-x-3 cursor-pointer group" onClick={onBack}>
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg transform group-hover:rotate-6 transition-transform overflow-hidden">
                 <img src="https://i.ibb.co/LDNC0ZjN/ei-1769462007616-removebg-preview.png" alt="Sovereign Logo" className="w-10 h-10 object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="text-[#FFD700] font-['Playfair_Display'] font-black text-2xl leading-none">SOVEREIGN</span>
                <span className="text-white font-bold text-[10px] tracking-[0.5em] mt-1 uppercase">Multiplier</span>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-[#00E5FF] text-[#0074D9] px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest shadow-lg">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"/></svg>
              Secure Checkout
            </div>
          </div>
        </header>
      )}

      <main className="container mx-auto px-4">
        {isSection && (
          <div className="text-center mb-16">
            <div className="mb-12 flex justify-center">
              <div className="relative group">
                <div className="absolute -inset-10 bg-gradient-to-r from-[#D4AF37] to-[#00BFFF] rounded-full blur-[100px] opacity-20 group-hover:opacity-40 transition-opacity duration-1000"></div>
                <img 
                  src="https://i.ibb.co/LDNC0ZjN/ei-1769462007616-removebg-preview.png" 
                  alt="Sovereign Multiplier System Mockup" 
                  className="relative w-64 md:w-80 h-auto drop-shadow-[0_35px_60px_rgba(0,0,0,0.15)] transform transition-transform duration-700 hover:scale-105" 
                />
              </div>
            </div>

            <h2 className="text-[#0A1F44] text-5xl md:text-6xl font-black mb-6 uppercase tracking-tighter leading-none">SECURE ENROLLMENT</h2>
            <p className="text-[#D4AF37] font-black uppercase tracking-[0.4em] text-sm flex items-center justify-center gap-4">
              <span className="hidden sm:block w-16 h-0.5 bg-[#D4AF37]/30"></span>
              Join the cohort now
              <span className="hidden sm:block w-16 h-0.5 bg-[#D4AF37]/30"></span>
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-[#0074D9] font-black text-xs uppercase tracking-[0.3em] mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-[#00E5FF] rounded-full"></span>
              Your Program Access
            </h3>
            {[
              { title: "8-Week Program", desc: "Full Implementation Access" },
              { title: "8 Mastery Modules", desc: "Skill to Automation Path" },
              { title: "50+ Pro Templates", desc: "Done-for-you Frameworks" },
              { title: "Weekly Coaching", desc: "Direct Access to Mentors" },
              { title: "Private Community", desc: "Network with 350+ Builders" },
              { title: "Success Guarantee", desc: "Risk-Free Results Path" }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-5 rounded-2xl shadow-md border-r-4 border-[#00E5FF] flex items-start gap-4 transform hover:scale-[1.02] transition-transform">
                <div className="w-6 h-6 bg-[#0074D9]/10 text-[#0074D9] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                </div>
                <div>
                  <h4 className="text-[#0074D9] font-bold text-sm leading-tight">{item.title}</h4>
                  <p className="text-slate-400 text-[11px] font-medium mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-6">
            <div className="bg-white rounded-[2.5rem] p-8 md:p-14 shadow-[0_30px_80px_rgba(0,116,217,0.15)] border border-slate-50 relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#0074D9] via-[#00E5FF] to-[#FFD700]"></div>
               
               <div className="text-center mb-12">
                 <h2 className="text-[#FFD700] font-['Playfair_Display'] text-3xl md:text-4xl font-black mb-6 leading-tight uppercase tracking-tight">
                   The Sovereign Income Multiplier - Base Package
                 </h2>
                 
                 <div className="inline-block relative">
                   <div className="text-[#0074D9] text-7xl md:text-8xl font-black tracking-tighter">
                     <span className="text-3xl font-bold align-top mt-4 inline-block mr-1">₦</span>25,000
                   </div>
                   <div className="mt-2 inline-block px-4 py-1 bg-[#FFD700]/10 rounded-full border border-[#FFD700]/20">
                     <p className="text-[#FFD700] font-black text-[10px] uppercase tracking-[0.3em]">one-time payment</p>
                   </div>
                 </div>
               </div>

               <div className="space-y-10">
                 <div className="space-y-3">
                   <label className="block text-[#0074D9] font-black text-[10px] uppercase tracking-[0.4em] ml-2">Delivery Email Address</label>
                   <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your best email..." 
                    disabled={isProcessing}
                    className="w-full px-8 py-5 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-[#0074D9] focus:bg-white transition-all outline-none text-lg font-medium shadow-inner disabled:opacity-50"
                   />
                 </div>

                 <div className="space-y-4">
                    <p className="text-center text-[10px] text-slate-300 font-black uppercase tracking-widest">Select Payment Method</p>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      <button 
                        disabled={isProcessing}
                        onClick={() => setSelectedPayment('paystack')}
                        className={`flex flex-col items-center justify-center p-4 rounded-xl border transition-all duration-300 transform hover:scale-105 backdrop-blur-md ${
                          selectedPayment === 'paystack' 
                          ? 'border-[#0074D9] bg-[#0074D9]/90 text-white shadow-lg ring-2 ring-[#0074D9]/20' 
                          : 'border-slate-200/50 bg-slate-50/40 text-slate-500 hover:bg-white/60 hover:border-[#0074D9]/30 shadow-sm'
                        } disabled:opacity-50`}
                      >
                        <span className="font-black text-[10px] uppercase tracking-widest">Paystack</span>
                      </button>
                      
                      <button 
                        disabled={isProcessing}
                        onClick={() => setSelectedPayment('flutterwave')}
                        className={`flex flex-col items-center justify-center p-4 rounded-xl border transition-all duration-300 transform hover:scale-105 backdrop-blur-md ${
                          selectedPayment === 'flutterwave' 
                          ? 'border-[#00E5FF] bg-[#00E5FF]/90 text-[#0074D9] shadow-lg ring-2 ring-[#00E5FF]/20' 
                          : 'border-slate-200/50 bg-slate-50/40 text-slate-500 hover:bg-white/60 hover:border-[#00E5FF]/30 shadow-sm'
                        } disabled:opacity-50`}
                      >
                        <span className="font-black text-[10px] uppercase tracking-widest">Flutterwave</span>
                      </button>

                      <button 
                        disabled={isProcessing}
                        onClick={() => setSelectedPayment('selar')}
                        className={`flex flex-col items-center justify-center p-4 rounded-xl border transition-all duration-300 transform hover:scale-105 backdrop-blur-md ${
                          selectedPayment === 'selar' 
                          ? 'border-[#ff6b35] bg-[#ff6b35]/90 text-white shadow-lg ring-2 ring-[#ff6b35]/20' 
                          : 'border-slate-200/50 bg-slate-50/40 text-slate-500 hover:bg-white/60 hover:border-[#ff6b35]/30 shadow-sm'
                        } disabled:opacity-50`}
                      >
                        <span className="font-black text-[10px] uppercase tracking-widest leading-none text-center">CARD/USSD (Selar)</span>
                      </button>
                      
                      <button 
                        disabled={isProcessing}
                        onClick={() => setSelectedPayment('transfer')}
                        className={`flex flex-col items-center justify-center p-4 rounded-xl border transition-all duration-300 transform hover:scale-105 backdrop-blur-md ${
                          selectedPayment === 'transfer' 
                          ? 'border-[#FFD700] bg-[#FFD700]/90 text-[#0074D9] shadow-lg ring-2 ring-[#FFD700]/20' 
                          : 'border-slate-200/50 bg-slate-50/40 text-slate-500 hover:bg-white/60 hover:border-[#FFD700]/30 shadow-sm'
                        } disabled:opacity-50`}
                      >
                        <span className="font-black text-[10px] uppercase tracking-widest">Transfer</span>
                      </button>
                    </div>

                    {/* Accepted Payment Icons */}
                    <div className="flex justify-center items-center gap-6 mt-4 opacity-70 grayscale hover:grayscale-0 transition-all">
                       <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-4 md:h-6 object-contain" />
                       <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-6 md:h-10 object-contain" />
                       <div className="flex items-center gap-1 font-black italic text-slate-800 text-sm md:text-lg">
                          <span className="text-blue-700">V</span>ERVE
                       </div>
                    </div>
                 </div>

                 {/* Direct Payment Links Section */}
                 <div className="bg-slate-50/50 rounded-2xl p-6 border border-slate-100 mt-6 mb-6">
                   <p className="text-center text-[10px] text-slate-400 font-black uppercase tracking-[0.3em] mb-4">Direct Payment Links</p>
                   <div className="grid grid-cols-2 gap-4">
                     <a 
                       href="/api/pay/paystack" 
                       target="_top" 
                       className="flex items-center justify-center gap-2 bg-white p-3 rounded-xl border border-slate-200 hover:border-[#0074D9] hover:text-[#0074D9] transition-all shadow-sm"
                     >
                       <span className="font-bold text-xs">Paystack Link</span>
                       <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                     </a>
                     <a 
                       href="/api/pay/selar" 
                       target="_top" 
                       className="flex items-center justify-center gap-2 bg-white p-3 rounded-xl border border-slate-200 hover:border-[#ff6b35] hover:text-[#ff6b35] transition-all shadow-sm"
                     >
                       <span className="font-bold text-xs">Selar Link</span>
                       <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                     </a>
                   </div>
                   <p className="text-center text-[9px] text-slate-400 mt-3 italic">Use these links if the automatic button doesn't redirect you.</p>
                 </div>

                 {/* Dropdown for Bank Transfer Details */}
                 {selectedPayment === 'transfer' && (
                   <div className="bg-[#FEFBF3] border-2 border-dashed border-[#D4AF37]/50 rounded-3xl p-8 animate-in fade-in slide-in-from-top-4 duration-500">
                      <h4 className="text-[#0A1F44] font-black text-xs uppercase tracking-[0.3em] mb-6 text-center">Transfer Details</h4>
                      <div className="space-y-4 mb-8">
                        <div className="flex justify-between items-center bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                          <span className="text-[10px] font-black uppercase text-slate-400">Bank Name</span>
                          <span className="font-bold text-[#0A1F44]">UBA</span>
                        </div>
                        <div className="flex flex-col bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                          <span className="text-[10px] font-black uppercase text-slate-400 mb-1 text-left">Account Name</span>
                          <span className="font-bold text-[#0A1F44]">OLUYEMI ELIZABETH ODUSOGA</span>
                        </div>
                        <div className="flex justify-between items-center bg-[#0A1F44] p-5 rounded-xl shadow-lg border border-[#D4AF37]/20">
                          <div className="flex flex-col">
                            <span className="text-[10px] font-black uppercase text-[#D4AF37] mb-1">Account Number</span>
                            <span className="text-2xl font-black text-white tracking-widest">2235077035</span>
                          </div>
                          <button 
                            onClick={handleCopyAccount}
                            className={`px-4 py-2 rounded-lg font-black text-[10px] uppercase transition-all ${copied ? 'bg-green-500 text-white' : 'bg-[#D4AF37] text-[#0A1F44] hover:bg-white'}`}
                          >
                            {copied ? 'Copied!' : 'Copy'}
                          </button>
                        </div>
                      </div>
                      
                      <div className="text-center space-y-4">
                        <p className="text-xs text-slate-500 font-medium px-6">
                          Please complete your transfer and click the button below to send your payment proof. Your access will be activated immediately after verification.
                        </p>
                        <a 
                          href="https://wa.link/z5fna0" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-3 w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-black py-4 rounded-xl shadow-lg transition-all transform hover:scale-[1.02]"
                        >
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.672 1.433 5.661 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                          Send Payment Proof via WhatsApp
                        </a>
                      </div>
                   </div>
                 )}

                 <div className="pt-6">
                   <button 
                    onClick={handleCompleteOrder}
                    disabled={isProcessing}
                    className={`w-full bg-gradient-to-r from-[#0074D9] to-[#005bb5] hover:from-[#005bb5] hover:to-[#004488] text-[#FFD700] text-2xl font-black py-7 rounded-2xl shadow-[0_20px_40px_rgba(0,116,217,0.3)] transform hover:-translate-y-2 active:translate-y-0 transition-all uppercase tracking-[0.2em] flex items-center justify-center gap-4 disabled:opacity-75 disabled:hover:translate-y-0 ${selectedPayment === 'transfer' ? 'hidden' : ''}`}
                   >
                     {isProcessing ? (
                       <>
                        <svg className="animate-spin h-6 w-6 text-[#FFD700]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Redirecting...
                       </>
                     ) : (
                       <>
                        {selectedPayment === 'selar' ? 'Enroll via Selar' : selectedPayment === 'paystack' ? 'Enroll via Paystack' : 'Complete My Order'}
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M13 7l5 5m0 0l-5 5m5-5H6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                       </>
                     )}
                   </button>
                   
                   <div className="flex justify-center items-center gap-3 mt-8">
                     <svg className="w-5 h-5 text-[#FFD700]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"/></svg>
                     <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Your information is protected by 256-bit SSL</span>
                   </div>
                 </div>
               </div>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-8">
            <div className="bg-white border-4 border-[#FFD700] rounded-[2rem] p-8 shadow-2xl relative">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <svg className="w-12 h-12 text-[#0074D9]" fill="currentColor" viewBox="0 0 24 24"><path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
              </div>
              <h4 className="text-[#0074D9] font-black text-sm uppercase tracking-[0.2em] mb-8">Order Summary</h4>
              
              <div className="space-y-5 text-sm">
                <div className="flex justify-between font-medium">
                  <span className="text-slate-400">Program Value</span>
                  <span className="line-through text-slate-300">₦485,000</span>
                </div>
                <div className="flex justify-between font-bold text-[#0074D9]">
                  <span>Limited Discount</span>
                  <span>- ₦460,000</span>
                </div>
                <div className="h-px bg-slate-50 my-6"></div>
                <div className="flex flex-col gap-1">
                  <span className="text-[#0074D9] font-black uppercase text-[10px] tracking-widest opacity-40">Total Due Today</span>
                  <span className="text-4xl font-black text-[#0074D9] tracking-tighter">₦25,000</span>
                </div>
              </div>
            </div>

            <div className="p-10 bg-blue-100/50 rounded-[2.5rem] border-2 border-blue-400 text-center shadow-xl transform transition-all hover:scale-105">
              <p className="text-[#005bb5] font-black text-2xl leading-tight tracking-tight">
                "87% of students make their first ₦50K in 30 days."
              </p>
            </div>
          </div>
        </div>
      </main>

      <section className="py-20 border-t border-slate-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center items-center gap-12">
            <div className="flex items-center gap-5 p-6 bg-white rounded-3xl shadow-xl border-2 border-[#10B981]/20 max-w-sm">
              <div className="w-16 h-16 bg-[#10B981] text-white rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
              </div>
              <div>
                <p className="text-[#10B981] font-black text-xs uppercase tracking-widest">Ironclad Guarantee</p>
                <p className="text-[#FFD700] font-bold text-sm">Do the work or get mentored until success.</p>
              </div>
            </div>

            <div className="flex items-center gap-5 p-6 bg-white rounded-3xl shadow-xl border-2 border-[#0074D9]/20 max-w-sm">
              <div className="w-16 h-16 bg-[#0074D9] text-white rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20"><path d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" /></svg>
              </div>
              <div>
                <p className="text-[#0074D9] font-black text-xs uppercase tracking-widest">SSL SECURE</p>
                <p className="text-slate-400 font-bold text-sm">100% Encrypted Transactions</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Checkout;
