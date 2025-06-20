import React, { useState, useEffect } from 'react';

const MeglixLanding = () => {
  const words = [
    'feminine',
    'girl', 
    'stylish',
    'glossy',
    'stunning',
    'star',
    'fabulous',
    'amazing',
    'beautiful',
    'gorgeous',
    'glamorous',
    'elegant',
    'chic',
    'classy',
    'sophisticated',
    'glix'
  ];

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [showLogo, setShowLogo] = useState(false);

  // Word animation effect
  useEffect(() => {
    if (isComplete || !words || words.length === 0) return;

    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => {
        const nextIndex = prev + 1;
        if (nextIndex === words.length - 1) {
          setTimeout(() => {
            setIsComplete(true);
            // Start showing logo after word animation completes
            setTimeout(() => setShowLogo(true), 1000);
          }, 300);
          return nextIndex;
        }
        return nextIndex;
      });
    }, 300);

    return () => clearInterval(interval);
  }, [words, isComplete]);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate logo scale and position based on scroll
  const logoProgress = Math.min(scrollY / 800, 1); // Adjust 800 for scroll distance
  const logoScale = showLogo ? 0.3 + (logoProgress * 1.2) : 0; // Scale from 0.3 to 1.5
  const logoOpacity = showLogo ? Math.min(1, (scrollY + 100) / 200) : 0;

  // Keep initial text visible until logo is almost complete
  const textOpacity = logoProgress < 0.7 ? 1 : Math.max(0, 1 - (logoProgress - 0.7) * 3.33);

  // Hero section appears when logo is fully scaled
  const heroOpacity = logoProgress > 0.8 ? (logoProgress - 0.8) * 5 : 0;
  const heroTranslateY = logoProgress > 0.8 ? (1 - logoProgress) * 50 : 50;

  return (
    <div className="relative">
      {/* Initial Animation Section */}
      <div 
        className="min-h-screen bg-black flex items-center justify-center font-nm overflow-hidden relative z-10"
        style={{ opacity: textOpacity }}
      >
        <div className="text-center">
          <div className="text-6xl md:text-8xl lg:text-9xl font-bold text-white flex items-center justify-center gap-8">
            <span className="font-nm">Me?</span>
            
            <div className="relative">
              {currentWordIndex > 0 && !isComplete && words && words[currentWordIndex] && (
                <div className="absolute inset-0 flex items-center justify-start z-10">
                  <div 
                    className="h-1 bg-pink-500 transition-all duration-700 ease-in-out"
                    style={{
                      width: `${words[currentWordIndex].length * 0.6}em`
                    }}
                  ></div>
                </div>
              )}
              
              <div className="relative w-[300px] md:w-[500px] lg:w-[700px] h-[80px] md:h-[120px] lg:h-[160px] overflow-hidden">
                <div 
                  className="absolute w-full h-full transition-transform duration-500 ease-in-out"
                  style={{
                    transform: `translateY(-${currentWordIndex * 100}%)`
                  }}
                >
                  {words.map((word, index) => (
                    <div
                      key={index}
                      className={`w-full h-full flex items-center justify-start font-bold font-nm ${
                        index === words.length - 1 && isComplete 
                          ? 'text-pink-500' 
                          : 'text-white'
                      }`}
                    >
                      {word}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {isComplete && (
            <div className="mt-8 animate-fade-in">
              <p className="text-pink-500 text-xl md:text-2xl font-nm font-light">
                Welcome to Meglix
              </p>
              <p className="text-white/60 text-sm mt-4 font-nm font-light">
                Scroll to explore
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Scroll-triggered Logo */}
      {showLogo && (
        <div 
          className="fixed inset-0 flex items-center justify-center pointer-events-none z-20"
          style={{
            opacity: logoOpacity,
            transform: `scale(${logoScale})`
          }}
        >
          <img 
            src="/images/logo.svg" 
            alt="Meglix Logo" 
            className="w-32 h-32 md:w-48 md:h-48 object-contain"
          />
        </div>
      )}

      {/* Scrollable Content */}
      <div className="h-[200vh] bg-black"></div>

      {/* Hero Section */}
      <div 
        className="min-h-screen bg-gradient-to-br from-black via-purple-900/20 to-pink-900/20 flex items-center justify-center relative"
        style={{
          opacity: heroOpacity,
          transform: `translateY(${heroTranslateY}px)`
        }}
      >
        <div className="text-center text-white max-w-4xl px-6">
          <h1 className="font-nm font-bold text-5xl md:text-7xl lg:text-8xl mb-6">
            Discover the Bold New Collection
          </h1>
          <p className="font-nm font-light text-xl md:text-2xl text-pink-400 mb-8">
            That Empowers Your Unique Style
          </p>
          <p className="font-nm font-light text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto">
            Embrace elegance and confidence with our statement pieces designed for the modern woman.
          </p>
          <div className="flex flex-wrap gap-6 justify-center">
            <button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-full font-nm font-medium text-lg transition-all duration-300 transform hover:scale-105">
              Shop Now
            </button>
            <button className="border border-white/30 hover:border-pink-500 text-white px-8 py-4 rounded-full font-nm font-medium text-lg transition-all duration-300 transform hover:scale-105">
              Learn More
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </div>
  );
};

export default MeglixLanding;