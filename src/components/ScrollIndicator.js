import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const ScrollIndicator = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsVisible(scrollTop < 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-8 left-1/2 z-40 hidden -translate-x-1/2 transform animate-bounce md:block">
      <div className="flex flex-col items-center space-y-2 text-zinc-400">
        <span className="text-sm font-medium">Scroll to explore</span>
        <ChevronDown className="w-6 h-6 animate-pulse text-teal-200" />
      </div>
    </div>
  );
};

export default ScrollIndicator;
