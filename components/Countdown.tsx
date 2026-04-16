
import React, { useState, useEffect } from 'react';

const Countdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 6,
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#D4AF37] text-[#0A1F44] py-2 text-center font-bold text-sm">
      <div className="container mx-auto px-4 flex justify-center items-center gap-4">
        <span className="uppercase tracking-widest hidden sm:inline">Registration Closes In:</span>
        <div className="flex gap-2">
          <span>{timeLeft.days}d</span>:
          <span>{timeLeft.hours.toString().padStart(2, '0')}h</span>:
          <span>{timeLeft.minutes.toString().padStart(2, '0')}m</span>:
          <span>{timeLeft.seconds.toString().padStart(2, '0')}s</span>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
