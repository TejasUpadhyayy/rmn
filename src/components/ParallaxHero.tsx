import React, { useEffect, useRef } from 'react';

const ParallaxHero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.scrollY;
        heroRef.current.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1604519190383-a3bb14fc2236?q=80&w=2000')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/70 via-black/80 to-black" />
      </div>

      {/* Parallax content */}
      <div
        ref={heroRef}
        className="relative h-full flex flex-col items-center justify-center text-center px-4"
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 mb-6 animate-fade-in">
          Embark on the Epic Journey of the Ramayana
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-8 animate-fade-in-delayed">
          Where <span className="text-purple-400">Heroism</span>, 
          <span className="text-pink-400"> Devotion</span>, and 
          <span className="text-red-400"> Destiny</span> converge in an immortal tale
        </p>

        <div className="flex gap-4 animate-fade-in-delayed-more">
          <button className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300">
            Begin Journey
          </button>
          <button className="px-8 py-3 rounded-full border border-white/20 text-white font-semibold hover:bg-white/10 backdrop-blur-sm transition-all duration-300">
            Learn More
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full animate-scroll" />
        </div>
      </div>
    </div>
  );
};

export default ParallaxHero;