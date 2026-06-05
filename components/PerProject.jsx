import { Github, ExternalLink } from "lucide-react";
import { ExpandableCard } from "./ExpandableCard";

export function PerProject({ title, summary, text, skills, projectLink, liveLink }) {
  return (
    <ExpandableCard title={title} summary={summary} tags={skills}>
      <div className="flex flex-col gap-6">
        <p className="leading-relaxed" style={{ whiteSpace: "pre-line" }}>
          {text}
        </p>

        <div className="flex flex-wrap gap-3">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="bg-[#38A169] rounded-xl px-3 py-1 text-sm font-semibold text-[#F0FDF4] shadow-md"
            >
              {skill}
            </span>
          ))}
        </div>

        {(projectLink || liveLink) && (
          <div className="flex flex-wrap items-center gap-4 pt-2">
            {projectLink && (
              <a
                href={projectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 rounded-xl bg-violet-600 px-3 py-1.5 text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-violet-500 hover:shadow-lg"
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
                className="flex items-center gap-1.5 rounded-xl bg-red-600 px-3 py-1.5 text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-500 hover:shadow-lg"
              >
                <ExternalLink size={16} />
                <span className="text-sm font-medium">Live Demo</span>
              </a>
            )}
          </div>
        )}
      </div>
    </ExpandableCard>
  );
}
