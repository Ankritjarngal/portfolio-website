import React, { useState } from "react";
import { FileText, Download } from "lucide-react";
import AnkritResume from "";

export function Resume() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      className="flex items-center px-3 py-3 rounded-full 
        text-gray-300 font-medium transition-all duration-300 
        hover:bg-white/10 hover:scale-105 active:scale-95 
        bg-transparent w-max"
      onClick={downloadResume}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      title="Download Resume"
    >
      <span className="w-5 flex justify-center">
        {isHovered ? (
          <Download size={20} className="text-[#00B8A9]" strokeWidth={1.5} />
        ) : (
          <FileText size={20} className="text-gray-400" strokeWidth={1.5} />
        )}
      </span>
      <span className="ml-2">Resume</span>
    </button>
  );
}

function downloadResume() {
  const link = AnkritResume;
  const a = document.createElement("a");
  a.href = link;
  a.download = "f";
  a.click();
}
