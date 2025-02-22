import React from "react";

export function TopBarSection({ icon: Icon, link, className }) {
  const handleClick = () => window.open(link, "_blank");

  return (
    <div
      onClick={handleClick}
      className={`p-2 rounded-full cursor-pointer transition-all duration-300 ease-in-out 
        hover:bg-[#ffffff1a] hover:shadow-lg ${className}`}
    >
      <Icon size={28} />
    </div>
  );
}
