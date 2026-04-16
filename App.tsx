
import React, { useState, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Countdown from './components/Countdown';
import StorySection from './components/StorySection';
import PainPoints from './components/PainPoints';
import FailedSolutions from './components/FailedSolutions';
import TheBridge from './components/TheBridge';
import ProductIntro from './components/ProductIntro';
import HowItWorks from './components/HowItWorks';
import OfferStack from './components/OfferStack';
import SocialProof from './components/SocialProof';
import CaseStudy from './components/CaseStudy';
import Urgency from './components/Urgency';
import Guarantee from './components/Guarantee';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import Checkout from './components/Checkout';
import SuccessPage from './components/SuccessPage';

const App: React.FC = () => {
  const [view, setView] = useState<'sales' | 'success'>('sales');
  const checkoutRef = useRef<HTMLDivElement>(null);

  const scrollToCheckout = () => {
    checkoutRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const showSuccess = () => {
    setView('success');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const backToSales = () => {
    setView('sales');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (view === 'success') {
    return <SuccessPage onReturn={backToSales} />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Countdown />
      <Header onCtaClick={scrollToCheckout} />
      <main>
        <Hero onCtaClick={scrollToCheckout} />
        <StorySection />
        <PainPoints />
        <FailedSolutions />
        <TheBridge />
        <ProductIntro />
        <HowItWorks />
        <OfferStack onCtaClick={scrollToCheckout} />
        <SocialProof />
        <CaseStudy onCtaClick={scrollToCheckout} />
        <Urgency onCtaClick={scrollToCheckout} />
        <Guarantee onCtaClick={scrollToCheckout} />
        <FAQ />
        <FinalCTA onCtaClick={scrollToCheckout} />
        
        {/* The Checkout is now a section on the main page */}
        <div ref={checkoutRef} className="scroll-mt-20">
          <Checkout onBack={backToSales} onSuccess={showSuccess} isSection={true} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
