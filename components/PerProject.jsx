import { Github, ExternalLink } from "lucide-react";
import { ShadowBox } from "./ShadowBox";

export function PerProject({ title, text, skills, projectLink, liveLink }) {
  return (
    <div className="h-full">
      <ShadowBox data={text} title={title}>
        <div className="flex flex-col h-full justify-between gap-4">
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
          
          <div className="flex items-center gap-4 mt-auto">
            {projectLink && (
              <a 
                href={projectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 bg-violet-600 text-white rounded-xl hover:bg-violet-500 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                <Github size={16} />
                <span className="text-sm font-medium">Code</span>
              </a>
            )}
            {liveLink && (
              <a 
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 bg-red-600 text-white rounded-xl hover:bg-red-500 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                <ExternalLink size={16} />
                <span className="text-sm font-medium">Live Demo</span>
              </a>
            )}
          </div>
        </div>
      </ShadowBox>
    </div>
  );
}