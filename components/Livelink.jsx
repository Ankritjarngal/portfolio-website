import React from "react";

const LiveLink = ({ link }) => {
  return (
    <button
      onClick={() => window.open(link, "_blank")}
      className="bg-orange-500 rounded-xl px-3 py-1 text-sm font-semibold text-[#F0FDF4] 
                 m-2 md:m-3 lg:m-4"
    >
      🔗 Live Preview
    </button>
  );
};

export default LiveLink;
