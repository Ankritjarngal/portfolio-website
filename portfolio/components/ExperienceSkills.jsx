export function ExperienceSkills({ skills }) {
    return (
      <div className="flex flex-wrap gap-3 mt-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-[#38A169] rounded-lg px-3 py-1 text-xs font-semibold text-[#F0FDF4] shadow-sm"
          >
            {skill}
          </div>
        ))}
      </div>
    );
  }
  