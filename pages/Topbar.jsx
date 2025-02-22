import React, { useState, useEffect } from "react";
import { Resume } from "../components/Resume";
import { Github, Linkedin, Instagram, Mail } from "lucide-react";

export function Topbar({ children }) {
  const [isTopbarVisible, setIsTopbarVisible] = useState(true);
  const [hoveredIcon, setHoveredIcon] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsTopbarVisible(window.scrollY < 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const SocialIcon = ({ icon: Icon, link, label, color, initialColor }) => (
    <div
      onClick={() => window.open(link, "_blank")}
      onMouseEnter={() => setHoveredIcon(label)}
      onMouseLeave={() => setHoveredIcon(null)}
      className="p-2 rounded-full cursor-pointer transition-all duration-300 hover:bg-white/10 hover:scale-110"
    >
      <Icon size={28} color={hoveredIcon === label ? color : initialColor} strokeWidth={1.5} />
    </div>
  );

  return (
    <>
      <div className="flex flex-col sm:flex-row justify-between items-center p-4 bg-gray-900/30 shadow-md border-b border-gray-800">
        <div className="flex items-center gap-6">
          <Resume />
          {children}
        </div>

        <div className="flex items-center gap-6 mt-4 sm:mt-0">
          <SocialIcon icon={Github} link="https://github.com/Ankritjarngal" label="GitHub" initialColor="#8b949e" color="#f0f6fc" />
          <SocialIcon icon={Linkedin} link="https://www.linkedin.com/in/ankrit-jarngal-349225316" label="LinkedIn" initialColor="#8b949e" color="#0a66c2" />
          <SocialIcon icon={Instagram} link="https://www.instagram.com/ankrit.jarngal" label="Instagram" initialColor="#8b949e" color="#e4405f" />
          <SocialIcon icon={Mail} link="mailto:ankrit4c@gmail.com" label="Email" initialColor="#8b949e" color="#00B8A9" />
        </div>
      </div>

      <div
        className={`fixed bottom-4 right-4 z-50 transition-all duration-500 ease-in-out 
          ${isTopbarVisible ? "opacity-0 translate-y-4 pointer-events-none" : "opacity-100 translate-y-0"}`}
      >
        <div className="bg-gray-900 p-1 rounded-full shadow-lg hover:shadow-xl transition-all">
          <Resume />
        </div>
      </div>
    </>
  );
}
