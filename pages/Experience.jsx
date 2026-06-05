import { HeaderBox } from "../components/HeaderBox";
import { ExpandableCard } from "../components/ExpandableCard";
import { ExperienceSkills } from "../components/ExperienceSkills";

const experiences = [
  {
    title: "Full Stack Engineer Intern (Oct 2025 – Jan 2026)",
    company: "IIT (BHU) Varanasi · Remote",
    summary:
      "Built CodeJudge — a smart, LMS-integrated code editor with Dockerized multi-language execution, strict proctoring, and a Socratic AI tutor.",
    points: [
      "Designed and developed CodeJudge, a smart code editor integrated with an LMS, featuring multi-language execution (C, C++, Python, JS, Java) via Dockerized sandboxes, a Monaco Editor frontend, and bring-your-own-key LLM support for institutional deployments.",
      "Engineered backend modules for automated evaluation and strict proctoring (tab-switch detection, progressive warnings, auto-lock after 3 violations) with instant auto-grading and a Socratic AI tutor that provides hints rather than answers.",
    ],
    skills: [
      "React.js",
      "Node.js",
      "Dockerized Sandboxes",
      "Monaco Editor",
      "LLM Integration",
      "Automated Grading",
      "Proctoring",
    ],
  },
  {
    title: "Fullstack Development Intern (May 2025 – Nov 2025)",
    company: "AsynzX Computing · Bangalore, India · Remote",
    summary:
      "Engineered 3 production-grade websites, turning Figma designs into responsive React apps backed by Node/Express and FastAPI.",
    points: [
      "Engineered 3 production-grade websites, converting Figma designs into responsive React components.",
      "Integrated Node.js + Express REST APIs and Python FastAPI services, improving deployment efficiency by 30%.",
      "Collaborated with remote teams and used version control tools for clean, reviewable code management.",
    ],
    skills: [
      "ReactJS",
      "Node.js",
      "Express",
      "FastAPI",
      "REST APIs",
      "Figma",
      "Responsive Design",
      "Remote Collaboration",
    ],
  },
  {
    title: "Generative AI Intern (Mar 2025 – Apr 2025)",
    company: "AgentsMadeEasy LLC · Delaware, USA · Remote",
    summary:
      "End-to-end testing of a no-code AI platform — found 30+ reproducible bugs and delivered UX recommendations that improved accuracy.",
    points: [
      "Conducted end-to-end testing of a no-code AI platform, identifying 30+ reproducible bugs.",
      "Delivered UI/UX recommendations that improved usability, accessibility, and AI workflow accuracy.",
    ],
    skills: [
      "AI Testing",
      "Bug Reporting",
      "UX Enhancement",
      "Quality Assurance",
      "Team Collaboration",
    ],
  },
  {
    title: "Web Development Team Member (Aug 2023 – Oct 2023)",
    company: "Techvaganza, NIT Srinagar",
    summary:
      "Built and maintained the Techvaganza event website, including QR-code scanning and onsite participant registration tools.",
    points: [
      "Worked on the development and maintenance of the Techvaganza website.",
      "Developed essential tools for event management including QR code scanning.",
      "Created and implemented onsite participant registration systems.",
      "Collaborated with team members to enhance website functionality.",
    ],
    skills: ["HTML", "CSS", "JavaScript", "Node.js", "Express", "PostgreSQL", "Vercel"],
  },
  {
    title: "Management Team Member (Feb 2024)",
    company: "ICCBT 2024, NIT Srinagar",
    summary:
      "Helped manage logistics and operations for a large-scale academic conference.",
    points: [
      "Collaborated with team to manage conference logistics and activities.",
      "Contributed to successful execution of conference operations.",
      "Gained experience in large-scale event management.",
    ],
    skills: ["Team Collaboration", "Event Management", "Logistics", "Public Speaking"],
  },
];

export const Experience = () => {
  return (
    <div className="w-full max-w-3xl mt-6">
      <div className="px-4 sm:px-0 space-y-6 sm:space-y-8">
        <HeaderBox title="Experience" number={4} />

        <div className="space-y-4 sm:space-y-6">
          {experiences.map((exp, index) => (
            <ExpandableCard
              key={index}
              title={exp.title}
              subtitle={exp.company}
              summary={exp.summary}
            >
              <ul className="list-disc space-y-2 pl-5 sm:space-y-3 leading-relaxed">
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              <div className="mt-5 pt-4 border-t border-[#4A5568]">
                <ExperienceSkills skills={exp.skills} />
              </div>
            </ExpandableCard>
          ))}
        </div>
      </div>
    </div>
  );
};
