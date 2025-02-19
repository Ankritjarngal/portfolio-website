import React,{useState} from "react"; 
export function Background({children}) {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const change = (e) => {
    setPos({ x: e.clientX, y: e.clientY });
  };

  return (
    <div
      onMouseMove={change}
      className="relative min-h-screen overflow-auto bg-[#1A202C] overflow-x-hidden"
    >
      <div
        style={{
          top: `${pos.y - 200}px`,
          left: `${pos.x - 200}px`,
        }}
        className="fixed w-[400px] h-[400px] bg-gradient-to-r from-[#2b6cb0]/60 to-[#38a169]500/60 rounded-full blur-3xl pointer-events-none duration-200 ease-out z-0"
      ></div>

      <div className="relative h-full w-full z-10 opacity-90">
        {children}
      </div>
    </div>
  );
}
