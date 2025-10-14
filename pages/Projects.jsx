import React from 'react';
import { HeaderBox } from '../components/HeaderBox';
import { PerProject } from '../components/PerProject';

export function Projects() {
  return (
    <div className="px-4 sm:px-0">
      <HeaderBox title="Projects" number={2} />

      <div className="grid gap-6 sm:gap-8">
      <div className="transform hover:scale-[1.02] transition-all">
      <PerProject
    title="Dungeon Crawler - A Full-Stack Multiplayer Roguelike"
    text={`
**Architectural Deep Dive:**

Engineered a complete, real-time multiplayer game server from scratch in Go, centered around a highly concurrent, session-based architecture. Each game "room" runs as an independent, isolated goroutine, managed by a central server that handles a custom, code-based lobby system for private cooperative play. Communication is handled via a robust WebSocket layer using a custom JSON protocol, with a command-based, turn-wise game loop processing player actions sequentially via channels to guarantee a thread-safe and cheat-resistant game state for up to 5 players per session.

**Gameplay & Feature Implementation:**

The game itself is a classic roguelike experience with a modern UI. On the backend, a procedural dungeon generator uses a Random Walk algorithm to create unique, fully-connected maps on every session start. The world is populated with distinct AI-driven monsters (melee, ranged, high-speed) that feature multi-state behaviors like territorial guarding and Line of Sight (LOS) targeting. The frontend, built in React and styled with Tailwind CSS, features a sprite-based Canvas renderer, a full suite of UI panels (Status, Inventory, Player List, Legend, Log), and a complete input system supporting both keyboard and the Gamepad API for a console-like feel.
    `}
    projectLink="https://github.com/Ankritjarngal/Dungeon-Crawler"
    liveLink="https://dungeon-explorer-kappa.vercel.app/"
    skills={["Go (Golang)", "Concurrency", "Networking (WebSockets)", "Game Development", "System Architecture", "Procedural Generation", "Game AI", "ReactJS", "Tailwind CSS"]}
/>


</div>







                
      <div className="transform hover:scale-[1.02] transition-all">
          
      <PerProject
  title="MCP (Model Context Protocol) Assistant"
  text="MCP Assistant is an intelligent, modular AI assistant framework designed around a structured Model Context Protocol (MCP). The system processes user queries by first identifying the underlying intent (e.g., Google Calendar, mailing service, task management more to be added soon) and then enriching the query using contextual data from previous interactions.

It utilizes the Gemini 2.5 flash API for natural language understanding and dynamic context reasoning. Once the query is contextually enhanced, it is routed to the appropriate agent, which performs the relevant task (e.g., creating calendar events,editing alrady existing events ,rescheduling evens , composing emails). The final response is handled by an action execution layer and returned to the user seamlessly.

This project emphasizes robustness through a stateless design, intelligent fallback handling, and modular architecture. It integrates with real-world services like Google Calendar, Gmail, to create a production-grade assistant capable of understanding vague or multi-step queries with high accuracy
Will add more services soon."
  
projectLink="https://github.com/Ankritjarngal/MCP-assistant"
liveLink="https://mcp-assistant.vercel.app/"

  skills={[
    "JavaScript", "Node.js", "Express", "Gemini 2.5 flash",
    "Intent Recognition", "Context-Aware Query Enhancement", 
    "Google Calendar API", "Gmail API", "Modular Agent Architecture"
  ]}
/>


        </div>
        
        
        <div className="transform hover:scale-[1.02] transition-all">

        <div className="transform hover:scale-[1.02] transition-transform duration-300">
  <PerProject
    title="Mind Space"
    text="A privacy-first journaling app with on-device encryption. Features a personalized AI chatbot powered by Gemini Pro, tailored to the user's personality. Designed and implemented local storage encryption and prompt engineering for contextual, secure journaling. Built collaboratively in a high-pressure hackathon environment."
    projectLink="https://github.com/Ankritjarngal/headspace"
    liveLink="https://headspace-bice.vercel.app/"
    skills={["React", "Gemini Pro", "AI Integration", "Encryption", "Prompt Engineering", "Hackathon Runner-Up"]}
  />
</div>
  <PerProject
    title="Smart Resume Analyzer: Score, Compare & Matching Internships"
    text="AI-powered Resume Evaluator that extracts key details using NLP and NER. Processes PDFs, scores resumes on predefined criteria, and integrates vector-based search with Pinecone for similarity matching. Includes a search feature for finding similar resumes based on skills, education, and experience. Secure storage via Google Drive API. Features automated web scraping to fetch relevant Internshala internships based on extracted skills, allowing users to browse and apply directly."
    skills={[
      "NLP",
      "NER",
      "Vector Embeddings",
      "Hugging Face",
      "Pinecone",
      "Gemini AI",
      "Express.js",
      "Web Scraping",
      "Multer",
      "PDF Parsing",
      "Tailwind CSS",
      "Google Drive API",
      "ReactJS",
      "Puppeteer",
      
    ]}
    projectLink="https://github.com/Ankritjarngal/resume-evaluator"
    liveLink="https://resume-everything.vercel.app/"
  />
</div>




        <div className="transform hover:scale-[1.02] transition-transform duration-300">
  <PerProject
    title="Go Load Balancer"
    text="A simple, high-performance HTTP load balancer built with Go. It distributes incoming requests across multiple backend servers using a round-robin algorithm. Includes a concurrent health check mechanism to ensure traffic is only routed to healthy servers, improving reliability and uptime."
    projectLink="https://github.com/Ankritjarngal/load-balancer-in-go"
    liveLink=""
    skills={["Go", "Networking", "Concurrency", "HTTP", "Reverse Proxy", "Round Robin"]}
  />
</div>
<div className="transform hover:scale-[1.02] transition-all">
          <PerProject
            title="Htop-Go"
            text="A Go learning project : A terminal-based system monitoring tool built in Go, inspired by 'htop'. It provides real-time insights into system performance, including CPU, memory, and process management. The project emphasizes efficient resource usage and a user-friendly interface for monitoring system health."
            projectLink="https://github.com/Ankritjarngal/htop-go"
            skills={["Go", "Terminal UI", "System Monitoring", "Concurrency"]}
          />
                  </div>

                  <div className="transform hover:scale-[1.02] transition-transform duration-300">
  <PerProject
    title="Tilted Walking"
    text="A reinforcement learning agent that learns to balance on a tightrope while being subjected to random wind forces. The project features a custom physics engine and a Gymnasium-compatible environment where a Q-learning agent learns to shift its center of mass to counteract destabilizing torque."
    projectLink="https://github.com/Ankritjarngal/titled-walking"
    liveLink=""
    skills={["Python", "Reinforcement Learning", "Q-Learning", "Gymnasium", "Physics Simulation", "AI"]}
  />
</div>


<div className="transform hover:scale-[1.02] transition-transform duration-300">
  <PerProject
    title="Connect 4 RL Agent"
    text="An AI agent trained using Q-learning to master the game of Connect 4. The agent learns by playing over 100,000 games against a heuristic opponent, developing strategies to win, block, and achieve draws. The final trained model can be played against in an interactive terminal game."
    projectLink="https://github.com/Ankritjarngal/connect4-reinforcement"
    liveLink=""
    skills={["Python", "Reinforcement Learning", "Q-Learning", "Numpy", "Game AI", "AI"]}
  />
</div>
<div className="transform hover:scale-[1.02] transition-all">
          <PerProject
            title="AI Agents"
            text="Developed an AI-powered chatbot that provides real-time weather and location-based information using LangChain and Google Generative AI. The project integrates multiple APIs for fetching user location and weather conditions, enabling accurate and dynamic responses. It implements an interactive conversational experience with specialized weather assistance. Currently exploring advanced AI integrations and API optimizations."
            projectLink="https://github.com/Ankritjarngal/AI-agents"
            skills={["JavaScript", "Node.js", "Express", "LangChain", "Google Generative AI", "APIs", "OpenWeather", "IP Geolocation"]}
          />
        </div>


        
        <div className="transform hover:scale-[1.02] transition-all">
          <PerProject
            title="Http Server From Scratch In C"
            text="Developed an HTTP server from scratch in C using WinSock. Supports GET, POST, PUT, and DELETE methods with dynamic request handling. Features  request parsing, and structured logging. Implements  response generation for a reliable web server experience."
            skills={["C", "WinSock", "HTTP", "Socket Programming", "Networking", "Systems Programming"]}
            projectLink="https://github.com/Ankritjarngal/http-server-from-scratch-in-c"
          />
        </div>



<div className="transform hover:scale-[1.02] transition-all">
          <PerProject
            title="QR Code Scanner"
            text="Developed a full-stack system for scanning and managing participant data during Techvaganza 2024. This project implemented real-time participant tracking and data management functionality, showcasing proficiency in full-stack development and event management systems."
            projectLink="https://github.com/Ankritjarngal/qr_code_scanner"
            liveLink="https://qr-code-scanner-sand.vercel.app"
            skills={["HTML", "CSS", "JavaScript", "Node.js", "Express", "PostgreSQL", "Vercel"]}
          />
        </div>

        
        <div className="transform hover:scale-[1.02] transition-all">
          <PerProject
            title="Onsite Registration System"
            text="Developed a full-stack system for registering participants for Techvaganza 2024.. It features efficient data entry, management capabilities, and robust backend infrastructure handling  registrations, with a user-friendly interface for streamlined registration."
            skills={["HTML", "CSS", "JavaScript", "Node.js", "PostgreSQL", "Express"]}
            projectLink="https://github.com/Ankritjarngal/module"
          />
        </div>
        <div className="transform hover:scale-[1.02] transition-all">
          <PerProject
            title="Paytm Wallet"
            text="Developed a Paytm Wallet system using ReactJS, Node.js, Express, and JWT for authentication. Features secure user authentication, seamless transaction handling, and robust error validation, leveraging Zod for data validation."
            skills={["ReactJS", "Node.js", "Express", "JWT", "Zod", "MongoDB"]}
            projectLink="https://github.com/Ankritjarngal/Paytm-Wallet"
          />
        </div>
        
        <div className="transform hover:scale-[1.02] transition-all">
          <PerProject
            title="News Sentiment Analysis"
            text="Explored NLP techniques by analyzing news sentiment using AI models. The project extracts key nouns from news headlines and generates sentiment reports, enhancing understanding of NLP and sentiment analysis."
            projectLink="https://github.com/Ankritjarngal/News-Sentiment-Analysis-Using-NLP"
            skills={["JavaScript", "Compromise NLP", "Transformers", "Google Gemini AI"]}
          />
        </div>


        

        <div className="transform hover:scale-[1.02] transition-all">
          <PerProject
            title="Portfolio Website"
            text="Built my personal portfolio website to showcase my skills, projects, and achievements. The site features a modern, responsive design with smooth navigation and a user-friendly interface."
            skills={["ReactJS", "JavaScript", "Tailwind CSS"]}
            liveLink="https://portfolio-ankrit.vercel.app/"
            projectLink="https://github.com/Ankritjarngal/portfolio-website"
          />
        </div>
        

      </div>
    </div>
  );
}
