export function HeaderBox({ title, number }) {
  return (
    <div className="flex items-baseline mb-3 sm:mb-4">
      <div className="text-xl sm:text-2xl md:text-3xl text-[#38A169] font-semibold mr-2 sm:mr-4">
        {number}.
      </div>
      <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#D1D5DB]">
        {title}
      </div>
    </div>
  );
}