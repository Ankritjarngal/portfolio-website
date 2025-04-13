import { ShadowBox } from "../components/ShadowBox";
import { HeaderBox } from "../components/HeaderBox";
import { ExperienceSkills } from "../components/ExperienceSkills";

export const Experience = () => {
  return (
    <div className="w-full max-w-3xl mt-6">
      <div className="px-4 sm:px-0 space-y-6 sm:space-y-8">
        <HeaderBox title="Experience" number={3} />
        
        <div className="space-y-4 sm:space-y-6">
          <ShadowBox 
            title="Generative AI Intern (March 2025 – April 2025)" 
            data="AgentsMadeEasy LLC"
          >
            <div className="mt-4 transform hover:scale-[1.01] transition-all">
              <ul className="list-disc pl-6 space-y-2 sm:space-y-3 text-[#A0AEC0]">
                <li className="leading-relaxed">Conducted comprehensive testing of the company's no-code AI platform, identifying and documenting bugs and performance issues</li>
                <li className="leading-relaxed">Collaborated with development team to improve user experience and platform stability</li>
                <li className="leading-relaxed">Contributed to quality assurance processes for AI-powered tools</li>
              </ul>
              <div className="mt-4 pt-4 border-t border-[#4A5568]">
                <ExperienceSkills skills={['AI Testing', 'Bug Reporting', 'UX Enhancement', 'Quality Assurance', 'Team Collaboration']} />
              </div>
            </div>
          </ShadowBox>

          <ShadowBox 
            title="Web Development Team Member (Aug 2023 – Oct 2023)" 
            data="Techvaganza, NIT Srinagar"
          >
            <div className="mt-4 transform hover:scale-[1.01] transition-all">
              <ul className="list-disc pl-6 space-y-2 sm:space-y-3 text-[#A0AEC0]">
                <li className="leading-relaxed">Working on the development and maintenance of the Techvaganza website</li>
                <li className="leading-relaxed">Developed essential tools for event management including QR code scanning</li>
                <li className="leading-relaxed">Created and implemented onsite participant registration systems</li>
                <li className="leading-relaxed">Collaborated with team members to enhance website functionality</li>
              </ul>
              <div className="mt-4 pt-4 border-t border-[#4A5568]">
                <ExperienceSkills skills={['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express', 'PostgreSQL', 'Vercel']} />
              </div>
            </div>
          </ShadowBox>

          <ShadowBox 
            title="Management Team Member (Feb 2024)" 
            data="ICCBT 2024, NIT Srinagar"
          >
            <div className="mt-4 transform hover:scale-[1.01] transition-all">
              <ul className="list-disc pl-6 space-y-2 sm:space-y-3 text-[#A0AEC0]">
                <li className="leading-relaxed">Collaborated with team to manage conference logistics and activities</li>
                <li className="leading-relaxed">Contributed to successful execution of conference operations</li>
                <li className="leading-relaxed">Gained experience in large-scale event management</li>
              </ul>
              <div className="mt-4 pt-4 border-t border-[#4A5568]">
                <ExperienceSkills skills={['Team Collaboration', 'Event Management', 'Logistics', 'Public Speaking']} />
              </div>
            </div>
          </ShadowBox>
        </div>
      </div>
    </div>
  );
};