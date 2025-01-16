import React from 'react';
import { HeaderBox } from '../components/HeaderBox';
import { PerProject}  from '../components/PerProject'


export function Projects() {
  return (
   <div>
    <HeaderBox title="Projects" number={2}></HeaderBox>
    <PerProject 
    title="QR Scanner" 
    text="A lightweight and intuitive application for scanning and decoding QR codes. It supports multiple formats and provides real-time scanning using your device's camera. Ideal for inventory management, event check-ins, and everyday use." 
    skills={["React", "JavaScript", "HTML5", "CSS3"]} 
/>

<PerProject 
    title="Task Manager" 
    text="A fully responsive web application designed to help users organize, prioritize, and track their daily tasks efficiently. Features include drag-and-drop task reordering, deadlines, reminders, and synchronization across devices." 
    skills={["React", "Redux", "Node.js", "MongoDB"]} 
/>

<PerProject 
    title="Blog Platform" 
    text="An interactive blogging platform that allows users to create, edit, and share posts seamlessly. Includes features like user authentication, rich text editing, comment sections, and tag-based post categorization for improved discoverability." 
    skills={["Next.js", "TypeScript", "Firebase", "Tailwind CSS"]} 
/>

<PerProject 
    title="Fitness Tracker" 
    text="A mobile app built to track and analyze workouts, monitor diet plans, and log daily progress. Features include customizable workout routines, calorie counting, hydration tracking, and visual progress charts for motivation." 
    skills={["React Native", "Expo", "SQLite", "APIs"]} 
/>

<PerProject 
    title="Crypto Tracker" 
    text="A dynamic and visually appealing dashboard that provides real-time updates on cryptocurrency prices and trends. Includes features like watchlists, historical data visualization, market news, and portfolio management tools for crypto enthusiasts." 
    skills={["Vue.js", "D3.js", "Axios", "Chart.js"]} 
/>
   </div>
  );
}
