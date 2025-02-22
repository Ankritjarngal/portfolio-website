export function ExperienceSkills({ skills }) {
    return (
      <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-[#38A169] rounded-xl px-3 py-1 text-sm font-semibold text-[#F0FDF4] shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
              >
                {skill}
              </div>
            ))}
          </div>
    );
  }
  