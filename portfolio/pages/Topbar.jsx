import React from "react";
import { TopBarSection } from "../components/TopBarSections";
import { Resume } from "../components/Resume";
import Profile from "../src/assets/Profile.jpg";
import github2 from "../src/assets/pngwing.com (1).png";
import linkedin from "../src/assets/pngwing.com (3).png";
import mail from "../src/assets/pngwing.com (4).png";
import instagram from "../src/assets/pngwing.com (7).png";

export function Topbar({ children }) {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center bg-[#151A23]/30 p-2 sm:p-3">
      {/* Left section with hamburger and resume */}
      <div className="flex w-full sm:w-auto justify-between items-center mb-2 sm:mb-0">
        <div className={`${children ? "mr-4 sm:mr-6 md:mr-8" : "mr-0"}`}>
          {children}
        </div>
        <div className="ml-2 sm:ml-4">
          <Resume />
        </div>
      </div>

      {/* Social icons section */}
      <div className="flex justify-center sm:justify-end items-center gap-3 sm:gap-4 md:gap-6 p-1 w-full sm:w-auto">
        <TopBarSection 
          title={github2} 
          alt="github" 
          link="https://github.com/Ankritjarngal"
          className="w-8 h-8 sm:w-10 sm:h-10 hover:scale-110 transition-transform duration-200"
        />
        <TopBarSection 
          title={linkedin} 
          alt="linkedin" 
          link="https://www.linkedin.com/in/ankrit-jarngal-349225316"
          className="w-8 h-8 sm:w-10 sm:h-10 hover:scale-110 transition-transform duration-200"
        />
        <TopBarSection 
          title={mail} 
          alt="mail" 
          link="mailto:ankrit4c@gmail.com"
          className="w-8 h-8 sm:w-10 sm:h-10 hover:scale-110 transition-transform duration-200"
        />
        <TopBarSection 
          title={instagram} 
          alt="instagram" 
          link="https://www.instagram.com/ankrit.jarngal"
          className="w-8 h-8 sm:w-10 sm:h-10 hover:scale-110 transition-transform duration-200"
        />
      </div>
    </div>
  );
}