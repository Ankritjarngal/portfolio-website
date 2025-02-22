export function HeaderBox({ title, number }) {
  return (
    <div className="flex items-center mb-3 sm:mb-4">
      <div className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#48BB78] mr-3">
        {number}.
      </div>
      <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#E2E8F0]">
        {title}
      </div>
    </div>
  );
}
