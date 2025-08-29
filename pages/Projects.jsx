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
  title="MCP (Model Context Protocol) Assistant"
  text="
  **Currenty Working On**

  MCP Assistant is an intelligent, modular AI assistant framework designed around a structured Model Context Protocol (MCP). The system processes user queries by first identifying the underlying intent (e.g., Google Calendar, mailing service, task management more to be added soon) and then enriching the query using contextual data from previous interactions.

It utilizes the OpenRouter API with the Meta llama model (Metts LLaMA 3.3) for natural language understanding and dynamic context reasoning. Once the query is contextually enhanced, it is routed to the appropriate agent, which performs the relevant task (e.g., creating calendar events,editing alrady existing events ,rescheduling evens , composing emails). The final response is handled by an action execution layer and returned to the user seamlessly.

This project emphasizes robustness through a stateless design, intelligent fallback handling, and modular architecture. It integrates with real-world services like Google Calendar, Gmail, to create a production-grade assistant capable of understanding vague or multi-step queries with high accuracy
Will add more services soon."
  
projectLink="https://github.com/Ankritjarngal/MCP-assistant"
liveLink="https://mcp-assistant.vercel.app/"

  skills={[
    "JavaScript", "Node.js", "Express", "OpenRouter API", "Metta llama (Metta LLaMA 3.3)",
    "Intent Recognition", "Context-Aware Query Enhancement", 
    "Google Calendar API", "Gmail API", "Modular Agent Architecture"
  ]}
/>


        </div>
        
        
        <div className="transform hover:scale-[1.02] transition-all">


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

<div className="transform hover:scale-[1.02] transition-all">
          <PerProject
            title="AI Agents"
            text="Developed an AI-powered chatbot that provides real-time weather and location-based information using LangChain and Google Generative AI. The project integrates multiple APIs for fetching user location and weather conditions, enabling accurate and dynamic responses. It implements an interactive conversational experience with specialized weather assistance. Currently exploring advanced AI integrations and API optimizations."
            projectLink="https://github.com/Ankritjarngal/AI-agents"
            skills={["JavaScript", "Node.js", "Express", "LangChain", "Google Generative AI", "APIs", "OpenWeather", "IP Geolocation"]}
          />
        </div>

        {/* <div className="transform hover:scale-[1.02] transition-all">
          <PerProject
            title="HeadSpace"
            text="Made a personal chatbot assistant with built in journal support with the context awarenress of the journels it uses "
            projectLink="https://github.com/Ankritjarngal/AI-agents"
            skills={["JavaScript", "Node.js", "Express", "LangChain", "Google Generative AI", "APIs", "OpenWeather", "IP Geolocation"]}
          />
        </div> */}
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
            title="Http Server From Scratch In C"
            text="Developed an HTTP server from scratch in C using WinSock. Supports GET, POST, PUT, and DELETE methods with dynamic request handling. Features  request parsing, and structured logging. Implements  response generation for a reliable web server experience."
            skills={["C", "WinSock", "HTTP", "Socket Programming", "Networking", "Systems Programming"]}
            projectLink="https://github.com/Ankritjarngal/http-server-from-scratch-in-c"
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
