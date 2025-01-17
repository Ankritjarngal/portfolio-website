import { ShadowBox } from "../components/ShadowBox";
import { HeaderBox } from "../components/HeaderBox";
import { ExperienceSkills } from "../components/ExperienceSkills";

export const Experience = () => {
  return (
    <div className="w-full max-w-3xl mt-6">
      <HeaderBox title="Experience" number={3} />
      
      <ShadowBox title="Web Development Team Member (Aug 2023 – Oct 2023)" data="Techvaganza, NIT Srinagar">
        <ul className="list-disc pl-6 mt-4 text-[#A0AEC0]">
          <li>Working on the development and maintenance of the Techvaganza website</li>
          <li>Developed essential tools for event management including QR code scanning</li>
          <li>Created and implemented onsite participant registration systems</li>
          <li>Collaborated with team members to enhance website functionality</li>
        </ul>
        <ExperienceSkills skills={['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express', 'PostgreSQL', 'Vercel']} />
      </ShadowBox>

      <ShadowBox title="Management Team Member (Feb 2024)" data="ICCBT 2024, NIT Srinagar">
        <ul className="list-disc pl-6 mt-4 text-[#A0AEC0]">
          <li>Collaborated with team to manage conference logistics and activities</li>
          <li>Contributed to successful execution of conference operations</li>
          <li>Gained experience in large-scale event management</li>
        </ul>
        <ExperienceSkills skills={['Team Collaboration', 'Event Management', 'Logistics', 'Public Speaking']} />
      </ShadowBox>
    </div>
  );
};
