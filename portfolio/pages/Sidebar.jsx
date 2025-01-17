import React, { useState, useEffect } from "react";
import Profile from "../src/assets/Profile.jpg";

export function Sidebar() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [activeSection, setActiveSection] = useState('about');

  const handleMouseMove = (e) => {
    setPos({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'projects', 'experience'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className="relative h-full overflow-hidden  bg-[#1A202C] scale-x-100 transition-all duration-200 "
    >
      <div
        style={{
          top: `${pos.y - 200}px`,
          left: `${pos.x - 200}px`,
        }}
        className="absolute w-[400px] h-[400px] bg-gradient-to-r from-[#2b6cb0]/30 to-[#38a169]500/30 rounded-full blur-3xl pointer-events-none duration-200 ease-out z-0"
      ></div>

      <div className="bg-[#151A23]/70 h-full flex flex-col justify-start items-center pt-4 sm:pt-8">
        <div className="w-16 sm:w-24 aspect-square rounded-full overflow-hidden m-2 border-2 border-[#ded7d7]/10 transform transition-all duration-300 hover:scale-105 hover:border-3 hover:border-[#00B8A9] hover:shadow-md">
          <img
            src={Profile}
            alt="profile"
            className="w-full h-full rounded-full object-cover opacity-60 transition-opacity duration-300 ease-in hover:opacity-100"
          />
        </div>
        
        <div 
          className={`
            mt-6 sm:mt-10 py-2 sm:py-3 px-2 sm:px-4 my-1 sm:my-2 cursor-pointer
            transition-all duration-200 w-full
            text-center text-sm sm:text-md font-medium
            ${activeSection === "footer" 
              ? 'text-[#00B8A9] bg-[#1A202C]/40'
              : 'text-gray-400 hover:text-[#00B8A9] hover:bg-[#1A202C]/20'
            }
          `}
          onMouseMove={() => scrollToSection("contact")}
        >
          Connect
        </div>

        <div className="mt-8 sm:mt-12 w-full">
          {navItems.map(({ id, label }) => (
            <div
              key={id}
              onMouseMove={() => scrollToSection(id)}
              className={`
                py-2 sm:py-3 px-2 sm:px-4 my-1 sm:my-2 cursor-pointer
                transition-all duration-200
                text-center text-sm sm:text-md font-medium
                ${activeSection === id
                  ? 'text-[#00B8A9] border-l-2 sm:border-l-4 border-[#00B8A9] bg-[#1A202C]/40'
                  : 'text-gray-400 hover:text-[#00B8A9] hover:bg-[#1A202C]/20'
                }
              `}
            >
              {label}
            </div>
          ))}
        </div>

        <div
          className={`
            mt-auto mb-8 sm:mb-14 py-2 sm:py-3 px-2 sm:px-4 my-1 sm:my-2 cursor-pointer
            transition-all duration-200 w-full
            text-center text-sm sm:text-md font-medium
            ${activeSection === "footer" 
              ? 'text-[#00B8A9] bg-[#1A202C]/40'
              : 'text-gray-400 hover:text-[#00B8A9] hover:bg-[#1A202C]/20'
            }
          `}
          onMouseMove={() => scrollToSection("footer")}
        >
          Suggestions
        </div>
      </div>
    </div>
  );
}