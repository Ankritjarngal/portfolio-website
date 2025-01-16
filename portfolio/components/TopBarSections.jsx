import React from "react"
export function TopBarSection({title,link,alt}){
    
    return(

        <div
        onClick={()=>{
            window.open(link,"_blank")
        }}
        className="h-[45px] w-[45px] text-[#D1D5DB] flex justify-center items-center bg-[#151A23]/60 rounded-full border-2 transition-all   ease-in hover:border-[#00B8A9] hover:border-3 hover:shadow-sm hover:h-[50px] hover:w-[50px]  duration-200 hover:opacity-8">
        <img
          src={title}
          alt={alt}
          className="h-full w-full object-cover rounded-[4px]"
        />
      </div>
      
    )

}