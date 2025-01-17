import React from 'react';

export function ShadowBox({ title, data, children }) {
  return (
    <div className="mb-4 sm:mb-6">
      <div className="text-xl sm:text-2xl md:text-3xl font-bold text-stone-200 mb-2 sm:mb-4">
        {title}
      </div>
      <div className="text-base sm:text-lg text-[#A0AEC0] bg-gray-800/80 p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-md border border-gray-700 transition-all duration-300 ease-in-out hover:shadow-lg hover:text-[#cfd5dd] hover:border-[#38A169]">
        <p style={{ whiteSpace: 'pre-line' }}>{data}</p> 
        <div className="mt-3 sm:mt-4">
          {children}
        </div>
      </div>
    </div>
  );
}