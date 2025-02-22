import LiveLink from "./Livelink";
import { ShadowBox } from "./ShadowBox";

export function PerProject({ title, text, skills, projectLink, liveLink }) {
  const handleClick = () => {
    if (projectLink) {
      window.open(projectLink, "_blank");
    }
  };

  return (
    <div className="cursor-pointer" onClick={handleClick}>
      <ShadowBox data={text} title={title}>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-[#38A169] rounded-xl px-3 py-1 text-sm font-semibold text-[#F0FDF4] shadow-sm"
            >
              {skill}
            </div>
          ))}
        </div>
        {liveLink && <Live liveLink={liveLink} />}
      </ShadowBox>
    </div>
  );
}

function Live({ liveLink }) {
  return <LiveLink link={liveLink} />;
}
