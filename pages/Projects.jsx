import React from 'react';
import { HeaderBox } from '../components/HeaderBox';
import { PerProject } from '../components/PerProject';

export function Projects() {
  return (
    <div className="px-4 sm:px-0">
      <HeaderBox title="Projects" number={16} />

      <div className="grid gap-6 sm:gap-8">
        
        {/* --- GOPHERVECTRA: ADDED MORE DETAIL --- */}
        <div className="transform hover:scale-[1.02] transition-all">
  <PerProject
    title="GopherVectra: High-Performance Vector Database Engine"
    text="Engineered a vector database from scratch in Go for high-dimensional embeddings (768D) with an emphasis on durability and low-latency retrieval. The storage layer implements a Log-Structured Merge-Tree (LSM-Tree) with a Write-Ahead Log (WAL) for crash recovery, a thread-safe Memtable that flushes to immutable SSTables on disk, and a background compactor goroutine performing multi-level compaction to merge and deduplicate files across storage levels. Each SSTable is paired with a custom Bloom filter (double-hashing FNV-64a) to eliminate unnecessary disk I/O on lookups.

The search engine uses a Hierarchical Navigable Small World (HNSW) graph with probabilistic layer assignment for O(log N) approximate nearest neighbor search. The implementation includes correct neighbor pruning using the diversity heuristic from the original paper, a monotonic node ID counter to prevent collision after deletions, and a two-heap search traversal (min-heap for candidates, worst-heap for results) that replaced a naive sort-on-every-iteration approach. A dual-mode search path allows toggling between HNSW and brute-force flat scan for recall validation — achieving 100% recall at Ef=40. Performance benchmarks on 1000 vectors with 10 concurrent users showed an 8x throughput improvement (5 → 39.74 QPS) and latency reduction from ~2000ms to ~247ms after targeted optimizations."
    projectLink="https://github.com/Ankritjarngal/gopher-vectra"
    skills={[
      "Go (Golang)", "LSM-Tree Architecture", "HNSW Graph Indexing", "Bloom Filters",
      "Write-Ahead Logging (WAL)", "SSTable Compaction", "Concurrency (sync.RWMutex)", 
      "Vector Math", "REST API"
    ]}
  />
</div>

        {/* --- DUNGEON CRAWLER: RESTORED FULL DETAIL --- */}
        <div className="transform hover:scale-[1.02] transition-all">
          <PerProject
            title="Dungeon Crawler: Full-Stack Multiplayer Roguelike"
            text="Architected a real-time multiplayer game server from scratch in Go, centered around a highly concurrent, session-based architecture where each game 'room' runs as an independent, isolated goroutine. Communication is handled via a robust WebSocket layer using a custom JSON protocol, with a command-based, turn-wise game loop processing player actions sequentially via channels to guarantee a thread-safe and authoritative game state for up to 5 players per session.

            The game features a procedural dungeon generator using a Random Walk algorithm to create unique, fully-connected maps featuring loot, healing fountains, and guarded exits. The world is populated with distinct AI-driven monsters (melee, ranged, high-speed) that feature multi-state behaviors like territorial guarding and Line of Sight (LOS) targeting. The frontend, built in React and styled with Tailwind CSS, features a sprite-based Canvas renderer, a full suite of UI panels (Status, Inventory, Player List, Log), and a complete input system supporting both keyboard and the Gamepad API."
            projectLink="https://github.com/Ankritjarngal/Dungeon-Crawler"
            liveLink="https://dungeon-explorer-kappa.vercel.app/"
            skills={["Go", "Concurrency", "Networking (WebSockets)", "Game Development", "Procedural Generation", "Game AI", "ReactJS", "Canvas API", "Tailwind CSS"]}
          />
        </div>

        {/* --- MCP ASSISTANT --- */}
        <div className="transform hover:scale-[1.02] transition-all">
          <PerProject
            title="MCP (Model Context Protocol) Assistant"
            text="MCP Assistant is an intelligent, modular AI assistant framework designed around a structured Model Context Protocol (MCP). The system processes user queries by first identifying the underlying intent (e.g., Google Calendar, mailing service, task management) and then enriching the query using contextual data from previous interactions. It utilizes the Gemini 2.5 flash API for natural language understanding and dynamic context reasoning. Once the query is contextually enhanced, it is routed to the appropriate agent, which performs tasks like creating calendar events or composing emails. The project emphasizes robustness through a stateless design and modular agent architecture."
            projectLink="https://github.com/Ankritjarngal/MCP-assistant"
            liveLink="https://mcp-assistant.vercel.app/"
            skills={[
              "JavaScript", "Node.js", "Express", "Gemini 2.5 flash",
              "Intent Recognition", "Context-Aware Query Enhancement", 
              "Google Calendar API", "Gmail API", "Modular Agent Architecture"
            ]}
          />
        </div>

        {/* --- CODEJUDGE --- */}
        <div className="transform hover:scale-[1.02] transition-all">
          <PerProject
            title="CodeJudge: AI-Powered Assessment Platform"
            text="CodeJudge is a secure coding examination platform featuring a Socratic AI Tutor (Gemini Pro) that provides hints without revealing direct solutions. The platform ensures academic integrity through a strict proctoring system that detects tab switching and window focus loss. It features a robust code execution engine supporting multiple languages (C, C++, Python, JS) via dockerized sandboxes. For instructors, it offers a dashboard for timed assignments, bulk enrollments, and performance analytics."
            projectLink="https://github.com/Ankritjarngal/coding-platform-assignment" 
            skills={[
              "React.js", "Node.js", "PostgreSQL", "Google Gemini Pro",
              "Dockerized Sandboxes", "Monaco Editor", "Strict Proctoring",
              "JWT Authentication", "Real-time Analytics"
            ]}
          />
        </div>

        {/* --- MIND SPACE --- */}
        <div className="transform hover:scale-[1.02] transition-transform duration-300">
          <PerProject
            title="Mind Space"
            text="A privacy-first journaling app with on-device encryption. Features a personalized AI chatbot powered by Gemini Pro, tailored to the user's personality. Designed and implemented local storage encryption and prompt engineering for contextual, secure journaling. Built collaboratively in a high-pressure hackathon environment."
            projectLink="https://github.com/Ankritjarngal/headspace"
            liveLink="https://headspace-bice.vercel.app/"
            skills={["React", "Gemini Pro", "AI Integration", "Encryption", "Prompt Engineering", "Hackathon Runner-Up"]}
          />
        </div>

        {/* --- SMART RESUME ANALYZER --- */}
        <div className="transform hover:scale-[1.02] transition-all">
          <PerProject
            title="Smart Resume Analyzer"
            text="AI-powered Resume Evaluator that extracts key details using NLP and NER. Integrates vector-based search with Pinecone for similarity matching and includes automated web scraping via Puppeteer to fetch relevant Internshala internships based on extracted skills, allowing users to browse and apply directly."
            skills={[
              "NLP", "NER", "Vector Embeddings", "Pinecone", "Gemini AI", 
              "Web Scraping", "Puppeteer", "ReactJS"
            ]}
            projectLink="https://github.com/Ankritjarngal/resume-evaluator"
            liveLink="https://resume-everything.vercel.app/"
          />
        </div>

        {/* --- GO LOAD BALANCER --- */}
        <div className="transform hover:scale-[1.02] transition-transform duration-300">
          <PerProject
            title="Go Load Balancer"
            text="A simple, high-performance HTTP load balancer built with Go. It distributes incoming requests across multiple backend servers using a round-robin algorithm. Includes a concurrent health check mechanism to ensure traffic is only routed to healthy servers, improving reliability and uptime."
            projectLink="https://github.com/Ankritjarngal/load-balancer-in-go"
            skills={["Go", "Networking", "Concurrency", "HTTP", "Reverse Proxy", "Round Robin"]}
          />
        </div>

        {/* --- TILTED WALKING --- */}
        <div className="transform hover:scale-[1.02] transition-transform duration-300">
          <PerProject
            title="Tilted Walking"
            text="A reinforcement learning agent that learns to balance on a tightrope while being subjected to random wind forces. The project features a custom physics engine and a Gymnasium-compatible environment where a Q-learning agent learns to shift its center of mass to counteract destabilizing torque."
            projectLink="https://github.com/Ankritjarngal/titled-walking"
            skills={["Python", "Reinforcement Learning", "Q-Learning", "Gymnasium", "Physics Simulation", "AI"]}
          />
        </div>

        {/* --- HTTP SERVER FROM SCRATCH --- */}
        <div className="transform hover:scale-[1.02] transition-all">
          <PerProject
            title="Http Server From Scratch In C"
            text="Developed an HTTP server from scratch in C using WinSock. Supports GET, POST, PUT, and DELETE methods with dynamic request handling. Features request parsing and structured logging, demonstrating low-level systems programming and socket management."
            skills={["C", "WinSock", "HTTP", "Socket Programming", "Networking", "Systems Programming"]}
            projectLink="https://github.com/Ankritjarngal/http-server-from-scratch-in-c"
          />
        </div>

        {/* --- PORTFOLIO --- */}
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