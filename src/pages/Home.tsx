import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.scrollY;
        const rate = scrolled * 0.5;
        parallaxRef.current.style.transform = `translate3d(0, ${rate}px, 0)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Hero Section with Parallax */}
      <div className="relative h-screen">
        <div 
          ref={parallaxRef}
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1604519190383-a3bb14fc2236?q=80&w=2000')] bg-cover bg-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/70 via-black/80 to-black" />
        
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 mb-6 animate-fade-in">
            Embark on the Epic Journey
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-8 animate-fade-in-delayed">
            Where ancient wisdom meets modern vibes
          </p>
          <Link 
            to="/characters"
            className="group flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300"
          >
            Begin Journey
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Content Sections */}
      <section className="relative bg-black py-20">
        <div className="max-w-7xl mx-auto px-4">
          {/* Featured Section */}
          <div className="mb-32">
            <div className="glass rounded-3xl overflow-hidden">
              <div className="grid md:grid-cols-2 gap-8 p-8">
                <div className="space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
                    Why This Epic Hits Different 💫
                  </h2>
                  <p className="text-xl text-white/80">
                    A story that's been viral since before social media existed. The Ramayana isn't just another tale 
                    - it's the blueprint that inspired countless stories you love today.
                  </p>
                  <Link 
                    to="/author"
                    className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    Learn about the author <ArrowRight size={16} />
                  </Link>
                </div>
                <div className="relative h-64 md:h-auto rounded-xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800" 
                    alt="Starry Night"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="grid md:grid-cols-3 gap-8">
            <Link 
              to="/characters"
              className="glass rounded-xl p-6 hover:scale-105 transition-transform"
            >
              <h3 className="text-xl font-bold mb-2">Meet the Squad</h3>
              <p className="text-white/60">Epic characters with even more epic stories</p>
            </Link>
            <Link 
              to="/locations"
              className="glass rounded-xl p-6 hover:scale-105 transition-transform"
            >
              <h3 className="text-xl font-bold mb-2">Explore Locations</h3>
              <p className="text-white/60">From heavenly cities to mystical forests</p>
            </Link>
            <Link 
              to="/trivia"
              className="glass rounded-xl p-6 hover:scale-105 transition-transform"
            >
              <h3 className="text-xl font-bold mb-2">Test Your Knowledge</h3>
              <p className="text-white/60">Fun facts and epic trivia await</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;