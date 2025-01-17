import React from 'react';
import { HeaderBox } from '../components/HeaderBox';
import { PerProject } from '../components/PerProject';

export function Projects() {
  return (
    <div>
      <HeaderBox title="Projects" number={2} />
      <PerProject
        title="QR Code Scanner"
        text="Developed a full-stack system for scanning and managing participant data during Techvaganza 2024. This project implemented real-time participant tracking and data management functionality, showcasing proficiency in full-stack development and event management systems."
        projectLink="https://qr-code-scanner-sand.vercel.app"
        skills={["HTML", "CSS", "JavaScript", "Node.js", "Express", "PostgreSQL", "Vercel"]
            
            
        }
      />
      
      <PerProject
        title="Onsite Registration System"
        text="Created a comprehensive full-stack system for real-time participant registration. It features efficient data entry, management capabilities, and robust backend infrastructure handling concurrent registrations, with a user-friendly interface for streamlined registration."
        skills={["HTML", "CSS", "JavaScript", "Node.js", "PostgreSQL", "Express"]}
        projectLink="https://github.com/Ankritjarngal/module
"
      />

      <PerProject
        title="Paytm Wallet"
        text="Developed a Paytm Wallet system using ReactJS, Node.js, Express, and JWT for authentication. Features secure user authentication, seamless transaction handling, and robust error validation, leveraging Zod for data validation."
        skills={["ReactJS", "Node.js", "Express", "JWT", "Zod", "MongoDB"]}
        projectLink="https://github.com/Ankritjarngal/Paytm-Wallet"
      />

      <PerProject
        title="Portfolio Website"
        text="Built my personal portfolio website to showcase my skills, projects, and achievements. The site features a modern, responsive design with smooth navigation and a user-friendly interface."
        skills={["ReactJS", "JavaScript", "Tailwind CSS"]}
      />
    </div>
  );
}
