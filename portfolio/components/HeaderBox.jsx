export function HeaderBox({ title, number }) {
    return (
      <div className="flex items-baseline mb-4">
        <div className="text-3xl text-[#38A169] font-semibold mr-4">{number}.</div>
        <div className="text-4xl font-bold text-[#D1D5DB]">{title}</div>
      </div>
    );
  }
  