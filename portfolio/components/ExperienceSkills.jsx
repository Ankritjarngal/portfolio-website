export function ExperienceSkills({skills}){
    return(
        <div>
            {skills.map((skill)=>{
                return(
                    <div> <div className="bg-[#38A169] rounded-lg px-2 py-1 text-xs font-semibold text-[#F0FDF4] shadow-sm inline-block mt-2">
                    {skill}
                  </div></div>
                )
            })}
        </div>
    )
}