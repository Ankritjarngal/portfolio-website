import React, { useState, useEffect } from "react";
import { Background } from "../pages/Background";
import { Sidebar } from "../pages/Sidebar";
import { Topbar } from "../pages/Topbar";
import { Footer } from "../pages/Footer";
import { About } from "../pages/About";
import { Projects } from "../pages/Projects";
import { Experience } from "../pages/Experience";
import debounce from "lodash.debounce";

export default function App() {
  const [preLoader, setPreLoader] = useState(true);
  const [largeScreen, setLargeScreen] = useState(window.innerWidth > 786);
  const [sideBar, setSideBar] = useState(false);
  const [button, setButton] = useState(!largeScreen);

  const handleResize = debounce(() => {
    setLargeScreen(window.innerWidth > 786);
  }, 250);

  useEffect(() => {
    setPreLoader(true);
    const timer = setTimeout(() => {
      setPreLoader(false);
    }, 4200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (window.innerWidth > 786) {
        setSideBar(true);
      }
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      handleResize.cancel();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (largeScreen) {
      setSideBar(true);
      setButton(false);
    } else {
      setSideBar(false);
      setButton(true);
    }
  }, [largeScreen]);

  const handleSidebarClick = () => {
    if (!largeScreen) {
      setSideBar(false);
      setButton(true);
    }
  };

  if (preLoader) {
    return <CyberpunkPreloader />;
  }

  return (
    <div className="relative flex min-h-screen bg-[#1A202C]">
      <div
        className={`fixed left-0 top-0 h-full bg-[#1A202C] transform transition-transform duration-300 ease-in-out
          w-22 select-none cursor-default sm:w-3/12 md:w-2/12 xl:w-[12%] z-20
          ${sideBar ? "translate-x-0" : "-translate-x-full"}`}
        onClick={handleSidebarClick}
      >
        <Sidebar />
      </div>

      <div className={`flex-1 transition-all duration-300 ${sideBar ? "ml-12 sm:ml-[25%] md:ml-[16.67%] xl:ml-[12%]" : ""}`}>
        <Background>
          <div id="contact" className="transition-transform duration-500 select-none cursor-default">
            <Topbar>
              {button && (
                <div
                  onClick={() => {
                    setSideBar(!sideBar);
                    setButton(!button);
                  }}
                  className="fixed top-4 left-4 w-12 h-12 bg-[#1A202C] rounded-lg transition-all duration-200 flex items-center justify-center shadow-lg border-2 border-[#1A202C] hover:border-[#00B8A9] hover:border-3 hover:shadow-sm hover:h-[45px] hover:w-[75px] hover:scale-105 z-50"
                >
                  <div className="w-6 h-1 bg-white rounded-full"></div>
                </div>
              )}
            </Topbar>
          </div>

          <div className="w-full overflow-x-hidden">
            <div className="flex flex-wrap justify-between">
              <div id="about" className="w-full md:max-w-3xl mt-6 flex justify-end ml-auto mr-6">
                <About />
              </div>

              <div id="projects" className="w-full md:max-w-3xl mt-6 flex justify-start ml-7">
                <Projects />
              </div>

              <div id="experience" className="w-full md:max-w-3xl mt-6 flex justify-end ml-auto mr-6">
                <Experience />
              </div>
            </div>

            

            <div id="footer" className="mt-6 w-full">
              <Footer />
            </div>
          </div>
        </Background>
      </div>
    </div>
  );
}

const CyberpunkPreloader = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [glitchActive, setGlitchActive] = useState(false);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 80);

    // Random glitch effect timing
    const glitchInterval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 150);
    }, 2000);

    // Hide loader when progress reaches 100%
    const hideLoader = setTimeout(() => {
      setLoading(false);
    }, 4200);

    return () => {
      clearInterval(interval);
      clearInterval(glitchInterval);
      clearTimeout(hideLoader);
    };
  }, []);

  // When loading is complete, hide the component
  if (!loading) return null;

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-gray-900 z-50 overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 bg-gray-900 opacity-70">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(to right, #38A16922 1px, transparent 1px), linear-gradient(to bottom, #38A16922 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}></div>
      </div>

      {/* Animated scan line */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-4 bg-green-500 opacity-10 animate-scan"></div>
      </div>

      <div className={`relative mb-16 ${glitchActive ? 'animate-glitch' : ''}`}>
        {/* The "A" Logo with Cyberpunk style */}
        <div className="relative">
          {/* Main A shape */}
          <div className="w-32 h-48 relative flex items-center justify-center">
            {/* Left leg of A */}
            <div className="absolute h-48 w-3 bg-green-500 transform -rotate-15 origin-bottom"></div>
            <div className={`absolute h-48 w-3 bg-red-500 transform -rotate-15 origin-bottom opacity-50 translate-x-1 ${glitchActive ? '-translate-y-2' : ''}`}></div>
            <div className={`absolute h-48 w-3 bg-blue-400 transform -rotate-15 origin-bottom opacity-50 -translate-x-1 ${glitchActive ? 'translate-y-1' : ''}`}></div>
            
            {/* Right leg of A */}
            <div className="absolute h-48 w-3 bg-green-500 transform rotate-15 origin-bottom"></div>
            <div className={`absolute h-48 w-3 bg-red-500 transform rotate-15 origin-bottom opacity-50 -translate-x-1 ${glitchActive ? 'translate-y-1' : ''}`}></div>
            <div className={`absolute h-48 w-3 bg-blue-400 transform rotate-15 origin-bottom opacity-50 translate-x-1 ${glitchActive ? '-translate-y-2' : ''}`}></div>
            
            {/* Cross bar of A */}
            <div className="absolute top-24 w-28 h-3 bg-green-500"></div>
            <div className={`absolute top-24 w-28 h-3 bg-red-500 opacity-50 translate-x-1 ${glitchActive ? '-translate-y-1' : ''}`}></div>
            <div className={`absolute top-24 w-28 h-3 bg-blue-400 opacity-50 -translate-x-1 ${glitchActive ? 'translate-y-1' : ''}`}></div>
          </div>
          
          {/* Additional cyberpunk elements */}
          <div className="absolute -top-4 -right-4 w-8 h-8 border-t-2 border-r-2 border-green-500"></div>
          <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-2 border-l-2 border-green-500"></div>
        </div>
      </div>

      {/* Digital looking loading bar */}
      <div className="w-64 h-2 bg-gray-800 relative mb-3 overflow-hidden">
        <div 
          className="h-full bg-green-500 transition-all duration-75 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
        {/* Loading bar scan effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-300 to-transparent opacity-30 w-20 h-full transform -translate-x-20 animate-scan-fast"></div>
      </div>
      
      {/* Binary-looking data transfer effect */}
      <div className="flex justify-center mb-6">
        <div className="font-mono text-xs text-green-500 w-64 truncate overflow-hidden animate-typewriter">
          {Array.from({ length: 32 }, () => Math.floor(Math.random() * 2)).join('')}
        </div>
      </div>
      
      {/* Progress percentage with cyberpunk style */}
      <div className={`font-mono text-lg tracking-widest ${glitchActive ? 'text-red-400' : 'text-green-500'}`}>
        <span className="mr-1 opacity-70">::</span>
        <span>{progress.toString().padStart(3, '0')}</span>
        <span className="ml-1 opacity-70">%</span>
      </div>
      
      {/* "SYSTEM LOADING" text */}
      <div className="mt-2 font-mono text-xs text-green-400 tracking-widest">
        SYSTEM LOADING<span className="animate-blink">_</span>
      </div>
    </div>
  );
};

// Add these animations to your global CSS or as inline styles
const styles = `
@keyframes scan {
  from { transform: translateY(-100vh); }
  to { transform: translateY(100vh); }
}

@keyframes scanFast {
  from { transform: translateX(-100%); }
  to { transform: translateX(400%); }
}

@keyframes glitch {
  0% { transform: translate(0); }
  20% { transform: translate(-2px, 2px); }
  40% { transform: translate(-2px, -2px); }
  60% { transform: translate(2px, 2px); }
  80% { transform: translate(2px, -2px); }
  100% { transform: translate(0); }
}

@keyframes typewriter {
  from { width: 0; }
  to { width: 100%; }
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

.animate-scan {
  animation: scan 8s linear infinite;
}

.animate-scan-fast {
  animation: scanFast 1.5s linear infinite;
}

.animate-glitch {
  animation: glitch 0.2s linear;
}

.animate-typewriter {
  animation: typewriter 3s steps(60, end) infinite;
}

.animate-blink {
  animation: blink 0.8s infinite;
}
`;

