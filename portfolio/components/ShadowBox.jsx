export function ShadowBox({ title, data, children }) {
  return (
    <div className="mb-6">
      <div className="text-3xl font-bold text-stone-200 mb-4">{title}</div>
      <div className="text-lg text-[#A0AEC0] bg-gray-800/80 p-6 rounded-2xl shadow-md border border-gray-700 transition-all duration-300 ease-in-out hover:shadow-lg hover:text-[#cfd5dd] hover:border-[#38A169]">
        <p>{data}</p>
        <div className="mt-4">
          {children}
        </div>
      </div>
    </div>
  );
}
