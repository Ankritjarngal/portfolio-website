import AnkritResume from "../src/assets/AnkritResume.pdf"

export function Resume(){
    return (
        <div  className="p-2 bg-[#1A202C] text-xl text-[#e2e8f0] rounded-lg transition-all duration-200 flex items-center justify-center border-2 border-[#4A5568] hover:border-[#00B8A9] hover:text-[#00B8A9] hover:shadow-[0_2px_8px_rgba(0,184,169,0.2)] hover:scale-105 cursor-pointer w-24"
        onClick={handler}>
            Resume
            
        </div>
    )
}
function handler(){
    const link = AnkritResume;
    const fileName="Ankrit Resume"
    const a = document.createElement('a');
    a.href = link;
    a.download = fileName;
    a.click();



}