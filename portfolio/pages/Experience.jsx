import { ShadowBox } from "../components/ShadowBox";
import { HeaderBox } from "../components/HeaderBox";
import { ExperienceSkills } from "../components/ExperienceSkills";

export const Experience = () => {
  return (
    <div className="w-full max-w-3xl mt-6">
      <HeaderBox title="Experience" number={3} />
      <ShadowBox title="Experience 1: Full Stack Developer" data="Worked as a full stack developer, building scalable web applications and maintaining backend systems.">
        <ExperienceSkills skills={['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'Docker']} />
      </ShadowBox>

      <ShadowBox title="Experience 2: Mobile App Developer" data="Developed cross-platform mobile applications using React Native.">
        <ExperienceSkills skills={['React Native', 'Firebase', 'Redux', 'GraphQL', 'Tailwind CSS']} />
      </ShadowBox>

      <ShadowBox title="Experience 3: Software Engineer Intern" data="Contributed to building a cloud-based system for managing server infrastructure and user authentication.">
        <ExperienceSkills skills={['Java', 'Spring Boot', 'AWS', 'MySQL', 'Docker']} />
      </ShadowBox>
    </div>
  );
};
