import React, { useEffect, useState } from "react";
import { X } from "lucide-react";

function Tag({ children }) {
  return (
    <span className="bg-[#38A169] rounded-xl px-3 py-1 text-sm font-semibold text-[#F0FDF4] shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
      {children}
    </span>
  );
}

export function ExpandableCard({ title, subtitle, summary, tags = [], children }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <>
      <div
        role="button"
        tabIndex={0}
        onClick={() => setOpen(true)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setOpen(true);
          }
        }}
        className="group h-full cursor-pointer rounded-xl sm:rounded-2xl border border-gray-700 bg-gray-800/80 p-4 sm:p-6 shadow-md transition-all duration-300 ease-in-out hover:border-[#38A169] hover:shadow-lg hover:scale-[1.01]"
      >
        {title && (
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-stone-200">
            {title}
          </h3>
        )}
        {subtitle && (
          <p className="mt-1 text-sm sm:text-base font-medium text-[#38A169]">
            {subtitle}
          </p>
        )}
        {summary && (
          <p className="mt-3 text-base sm:text-lg leading-relaxed text-[#A0AEC0] group-hover:text-[#cfd5dd] transition-colors">
            {summary}
          </p>
        )}
        {tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <Tag key={index}>{tag}</Tag>
            ))}
          </div>
        )}
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#38A169] opacity-80 transition-opacity group-hover:opacity-100">
          View details
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </span>
      </div>

      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-[100] flex items-end justify-center bg-black/70 p-0 backdrop-blur-sm animate-modal-overlay sm:items-center sm:p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-t-2xl border border-gray-700 bg-[#1A202C] p-6 shadow-2xl animate-modal-panel sm:rounded-2xl sm:p-8"
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close details"
              className="absolute right-4 top-4 rounded-full p-2 text-gray-400 transition-colors hover:bg-white/10 hover:text-white"
            >
              <X size={22} />
            </button>
            {title && (
              <h3 className="pr-10 text-xl sm:text-2xl md:text-3xl font-bold text-stone-100">
                {title}
              </h3>
            )}
            {subtitle && (
              <p className="mt-1 text-base font-medium text-[#38A169]">
                {subtitle}
              </p>
            )}
            <div className="mt-5 text-base sm:text-lg text-[#A0AEC0]">
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
