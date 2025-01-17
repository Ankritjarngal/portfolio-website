export const MailSection = () => {
    return (
        <div 
            onClick={() => document.location = "mailto:ankrit4c@gmail.com"}
            className="flex items-center gap-2 cursor-pointer bg-[#151A23]/60 px-4 py-2 rounded-full border-2 hover:border-[#00B8A9] transition-all duration-200"
        >
            
            <span className="text-[#D1D5DB] text-sm">ankrit4c@gmail.com</span>
        </div>
    );
};