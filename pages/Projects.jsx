import React from 'react';
import { HeaderBox } from '../components/HeaderBox';
import { PerProject } from '../components/PerProject';

export function Projects() {
  return (
    <div className="w-full max-w-3xl px-4 sm:px-0">
      <HeaderBox title="Projects" number={16} />

      <div className="grid gap-6 sm:gap-8">

        <PerProject
          title="GopherVectra: High-Performance Vector Database Engine"
          summary="A from-scratch vector database engine in Go for 768-D embeddings. It pairs an LSM-Tree write path (WAL, RWMutex Memtable, leveled SSTable compaction, FNV-64a Bloom filters) with an HNSW graph for O(log N) approximate nearest-neighbor search — benchmarked from ~2000ms down to ~247ms latency and 5 → 250+ QPS at 100% recall."
          text="Engineered a vector database from scratch in Go for 768-dimensional embeddings, with a strict separation between a durability-focused write path and a speed-focused search path. On write, each vector is normalized to the unit sphere (so cosine similarity reduces to a plain dot product), appended to a binary Write-Ahead Log for crash recovery, and buffered in a sync.RWMutex-protected Memtable that flushes to an immutable on-disk SSTable once full. A background compactor performs leveled compaction — merging 8+ Level-0 files into Level-1 and 15+ Level-1 files into Level-2 while dropping tombstoned entries — and every SSTable carries a custom Bloom filter (FNV-64a double-hashing, with bit-array and hash-count sized from a target false-positive rate) to skip unnecessary disk reads.

Search uses a Hierarchical Navigable Small World (HNSW) graph (configurable M / Ef, up to 16 layers, probabilistic level assignment via ML = 1/ln M) for O(log N) approximate nearest-neighbor queries, backed by container/heap for an efficient two-heap traversal and a monotonic node-ID counter with tombstone-based deletes. A dual-mode API can fall back to a brute-force flat cosine scan to validate recall (100% against ground truth). Benchmarked over 768-D vectors with 10 concurrent users, targeted optimizations took latency from ~2000ms to ~247ms and throughput from 5 to 250+ QPS, with the HNSW index persisted to disk on graceful shutdown and the WAL replayed on startup."
          projectLink="https://github.com/Ankritjarngal/gopher-vectra"
          skills={[
            "Go (Golang)", "LSM-Tree Architecture", "HNSW Graph Indexing", "Bloom Filters (FNV-64a)",
            "Write-Ahead Logging (WAL)", "Leveled SSTable Compaction", "Concurrency (sync.RWMutex)",
            "Cosine Similarity", "REST API"
          ]}
        />

        <PerProject
          title="Dungeon Crawler: Full-Stack Multiplayer Roguelike"
          summary="A real-time multiplayer roguelike with an authoritative Go server where each room is an isolated goroutine talking over gorilla/websocket. Features 88×46 procedurally generated dungeons, a full bestiary of multi-state AI monsters, melee + ranged combat, team fog of war, and a React + Canvas frontend with keyboard and Gamepad support."
          text="Built a real-time multiplayer roguelike entirely in Go, where each game room runs as an isolated session (identified by a random 4-letter code) with its own goroutine and command channel. A gorilla/websocket layer carries a custom JSON protocol, and a per-session loop processes player actions sequentially so state stays thread-safe and authoritative for up to 5 cooperating players, with sessions auto-cleaned up when they end.

Dungeons are generated on an 88×46 grid via a Random Walk algorithm (23 walkers) plus a corridor-carving pass that connects every region, then seeded with loot, healing fountains, and a guarded exit. A bestiary of distinct monsters — Goblins and Bats (pack spawns), Ogres, Skeleton Archers (ranged, vision 12 / attack range 6), and a Guardian boss — each define HP, attack, vision, leash radius, attack range, and movement speed, driving multi-state AI (wander → chase → attack → return to territory). Combat spans both melee and ranged with weapon/armor items, and a per-player fog of war includes a teamwork buff that widens vision near allies. The React + Tailwind frontend renders the world on a sprite-based Canvas with a Lobby, Status/Inventory/Player-List/Log panels, a tutorial, victory/defeat screens, and both keyboard and Gamepad API controls."
          projectLink="https://github.com/Ankritjarngal/Dungeon-Crawler"
          liveLink="https://dungeon-explorer-kappa.vercel.app/"
          skills={["Go", "Concurrency (goroutines/channels)", "WebSockets (gorilla)", "Game Development", "Procedural Generation", "Game AI", "ReactJS", "Canvas API", "Gamepad API", "Tailwind CSS"]}
        />

        <PerProject
          title="MCP (Model Context Protocol) Assistant"
          summary="A modular AI assistant that turns vague natural-language requests into real actions on Google Calendar, Gmail, and tasks. A service-selector + intent-enhancer (backed by per-user memory in MongoDB) rewrites queries and routes them to dedicated per-operation agents, all powered by Gemini 2.5 Flash with structured JSON output and Google OAuth."
          text="MCP Assistant is a modular AI framework built on a Model Context Protocol (MCP) that turns vague, multi-step natural-language instructions into real actions across Google Calendar, Gmail, and tasks. A service-selecting agent first classifies intent, then an intent-enhancer fills in missing details — pulling per-user context and memory stored in MongoDB, plus the current timestamp and sender name — to rewrite the request into a complete, explicit query. That query is routed to a dedicated per-operation agent and API route (e.g. createEvent, editEvent, deleteEvent, listEvents, mailAgent), keeping each capability cleanly isolated and easy to extend.

Reasoning is powered by Google Gemini 2.5 Flash using structured JSON-schema output (constrained enums and low temperature for deterministic tool selection). Authentication uses Google OAuth 2.0 with JWT-based frontend sessions, on a Node.js / Express backend, a MongoDB store, and a React + Tailwind + Vite frontend — a stateless, agent-based design that is trivial to extend with new services like Tasks, Notion, or Slack."
          projectLink="https://github.com/Ankritjarngal/MCP-assistant"
          liveLink="https://mcp-assistant.vercel.app/"
          skills={[
            "React", "Node.js", "Express", "MongoDB", "Google Gemini 2.5 Flash",
            "Structured JSON Output", "Intent Recognition", "Context-Aware Enrichment",
            "Google Calendar API", "Gmail API", "Google OAuth 2.0", "JWT", "Modular Agent Architecture"
          ]}
        />

        <PerProject
          title="CodeJudge: AI-Powered Assessment Platform"
          summary="A secure coding-assessment platform with a bring-your-own-key Socratic Gemini tutor that hints instead of answering. Runs submissions in per-submission Docker sandboxes (C/C++/Python/JS) with timeouts, enforces strict proctoring (auto-lock after 3 violations), and backs an instructor dashboard with PostgreSQL, JWT, and bulk CSV enrollment."
          text="CodeJudge is a secure coding-assessment platform for educational institutions. Its Socratic AI tutor — powered by bring-your-own-key Google Gemini 2.5 Flash — analyzes the problem, the student's code, and recent test results to give short guiding hints (never the direct answer). Academic integrity is enforced with tab-switch / focus-loss detection, progressive warnings, and an auto-lock after 3 violations, tracked per exam attempt.

Submissions run in isolated, per-submission Docker containers (gcc for C and C++, python:3, and node for JavaScript) with 5-second compile/run timeouts and a concurrency limiter, and outputs are graded with whitespace-normalized token comparison against visible example and hidden test cases. For instructors, an admin dashboard offers timed assignments, due-date enforcement, bulk CSV enrollment, student analytics, and proctoring logs. State lives in a relational PostgreSQL (Neon) schema — users, courses, enrollments, assignments, questions, attempts, and solutions — secured with JWT auth and bcrypt, with a Monaco Editor coding frontend in React."
          projectLink="https://github.com/Ankritjarngal/coding-platform-assignment"
          skills={[
            "React.js", "Node.js", "Express", "PostgreSQL (Neon)", "Gemini 2.5 Flash (BYOK)",
            "Docker Sandboxes", "Monaco Editor", "Strict Proctoring",
            "JWT + bcrypt", "Auto-Grading"
          ]}
        />

        <PerProject
          title="Mind Space"
          summary="A privacy-first journaling app with on-device entries and a fully stateless backend. After a personality quiz you pick one of five distinct Gemini-powered AI companions for mood-aware journal summaries and context-grounded conversations that also manage a capped to-do list. Built in React 18 + TypeScript with shadcn/ui."
          text="Mind Space is a privacy-first journaling app: entries live on the user's device and the backend is fully stateless, so personal data stays under their control. After a personality quiz, users pick from five distinct AI companions — Aura, Zenith, Summit, Luna, and Sage — each with its own personality and system prompt, all powered by Google Gemini 2.5 Flash. The app summarizes journal entries against a mood scale and holds context-aware, heart-to-heart conversations grounded in those summaries.

The chat also doubles as a lightweight productivity assistant: the AI returns structured JSON that suggests and prunes actionable to-dos (capped at five active tasks) alongside its reply. Built with a React 18 + TypeScript frontend using Tailwind and shadcn/ui — PIN + OTP auth, journaling tab, floating chatbot, and a to-do sidebar — over a minimal Express backend with exponential-backoff retries. Built collaboratively in a high-pressure hackathon (runner-up)."
          projectLink="https://github.com/Ankritjarngal/headspace"
          liveLink="https://headspace-bice.vercel.app/"
          skills={["React 18", "TypeScript", "Tailwind CSS", "shadcn/ui", "Express", "Gemini 2.5 Flash", "On-Device Storage", "Prompt Engineering", "Hackathon Runner-Up"]}
        />

        <PerProject
          title="Smart Resume Analyzer (ResumeSense)"
          summary="An AI resume evaluator that parses PDFs, runs NER (compromise) to extract structured details, and scores resumes across six dimensions via Gemini. It embeds resumes with a local all-MiniLM-L6-v2 model into Pinecone for similarity search and scrapes matching Internshala internships through a Python/BeautifulSoup microservice."
          text="ResumeSense is an AI-powered resume evaluator and internship matcher. Uploaded PDFs are parsed with pdf-parse and run through a custom NER pipeline (compromise + compromise-dates, alongside the natural and stopword libraries) that extracts the candidate's name, education, work experience, skills, organizations, job titles, and dates by detecting resume sections. A Google Gemini model then scores the resume as structured JSON across six weighted dimensions — Education, Work Experience, Skills, Projects & Certifications, Achievements & Awards, and Communication & Formatting — plus an overall score, and distills 5-6 core skills to drive recommendations.

For similarity search, resume text is embedded locally with the all-MiniLM-L6-v2 model via @xenova/transformers (mean-pooled, normalized, padded to 1024 dimensions) and stored/queried in Pinecone using cosine similarity with a score threshold; original PDFs are uploaded to Google Drive and linked from the vector metadata. A separate Python Flask + BeautifulSoup microservice scrapes live Internshala listings from a skills-based search URL so users can browse and apply directly. The frontend is built in React + Vite with Firebase."
          projectLink="https://github.com/Ankritjarngal/ResumeSense"
          liveLink="https://resume-everything.vercel.app/"
          skills={[
            "React", "Node.js / Express", "Gemini AI", "Pinecone",
            "all-MiniLM-L6-v2 (@xenova/transformers)", "NER (compromise)", "pdf-parse",
            "Google Drive API", "Python Flask", "BeautifulSoup", "Firebase"
          ]}
        />

        <PerProject
          title="Go Load Balancer"
          summary="A concurrent HTTP load balancer in Go built on httputil reverse proxies. It distributes traffic round-robin via an atomic counter, automatically skips unhealthy backends, and runs a per-backend TCP health-check goroutine every 20 seconds — all configurable through command-line flags."
          text="A concurrent HTTP load balancer written in Go on top of the standard library's httputil.ReverseProxy. Backends are supplied as a comma-separated list via command-line flags (with a configurable port), and each is wrapped in a single-host reverse proxy. Incoming requests are distributed round-robin using an atomic counter (atomic.AddUint64 modulo the pool size); if the chosen backend is down, the balancer walks the pool to find the next healthy one, returning 503 Service Unavailable only when none are available.

Health is tracked per backend behind a sync.RWMutex 'alive' flag, updated by a dedicated goroutine per backend that fires every 20 seconds and probes the server with a 2-second net.DialTimeout TCP connection, logging transitions as servers go up or down. The result is a small but genuinely concurrent, fault-aware reverse proxy."
          projectLink="https://github.com/Ankritjarngal/load-balancer-in-go"
          skills={["Go", "httputil ReverseProxy", "Round-Robin (atomic)", "Concurrency (goroutines)", "TCP Health Checks", "sync.RWMutex", "CLI Flags"]}
        />

        <PerProject
          title="Tilted Walking"
          summary="A reinforcement-learning project with a custom physics engine and a Gymnasium-compatible environment where a Q-learning agent learns to balance on a tightrope against random wind. It discretizes angle / velocity / center-of-mass state, uses decaying-epsilon exploration, and trains over 20,000 episodes."
          text="A reinforcement-learning project (in a Jupyter notebook) where an agent learns to keep a tightrope walker balanced against random, destabilizing wind. The custom physics engine models a box-shaped walker with gravity, center-of-mass shifts, and angular momentum, applying wind as torque and registering a fall once the tilt angle exceeds 90 degrees. It is wrapped in a Gymnasium-compatible environment (TightropeEnv) whose state is the walker's angle, angular velocity, and center-of-mass position, with three discrete actions — lean left, center, or lean right — rewarding +1 per surviving step and -100 for falling.

A tabular Q-learning agent discretizes the continuous state into bins and balances exploration vs. exploitation with a decaying epsilon, training over 20,000 episodes. By the end it reliably counteracts the wind by shifting its center of mass and survives far longer than a random policy."
          projectLink="https://github.com/Ankritjarngal/titled-walking"
          skills={["Python", "Reinforcement Learning", "Q-Learning", "Gymnasium", "Custom Physics Engine", "State Discretization", "Epsilon-Greedy"]}
        />

        <PerProject
          title="Http Server From Scratch In C"
          summary="A from-scratch HTTP/1.0 server in C using the WinSock API. It parses raw request lines to handle GET, POST, PUT, and DELETE, generates proper status responses (200/500) with correct headers, and logs each request to disk — a hands-on dive into low-level socket programming."
          text="A minimal HTTP/1.0 web server implemented from scratch in C using the WinSock2 API, written to understand networking below any framework. It opens a TCP socket, accepts connections, and parses the raw request buffer to dispatch the four core methods — GET, POST, PUT, and DELETE — each handled by its own routine that builds a well-formed HTTP response with a proper status line and headers (Server, Content-Type, Content-Length, Connection: close).

Requests return 200 OK with an HTML page echoing the request (path or body), fall back to 500 Internal Server Error on failures, and are logged to disk by writing the generated page to an index.html file. It is a compact, hands-on exercise in low-level socket programming and the mechanics of the HTTP protocol."
          projectLink="https://github.com/Ankritjarngal/http-server-from-scratch-in-c"
          skills={["C", "WinSock2", "TCP Sockets", "HTTP/1.0 Protocol", "Request Parsing", "Systems Programming"]}
        />

        <PerProject
          title="Portfolio Website"
          summary="My personal portfolio: a modern, responsive React + Tailwind single-page site with smooth scroll-spy navigation, an interactive cursor-following gradient background, and dynamic expandable detail views for every project — no page reloads."
          text="My personal portfolio, built as a single-page React + Vite app styled with Tailwind CSS. It features a responsive layout with a fixed sidebar and smooth scroll-spy navigation, an interactive gradient background that follows the cursor, a preloader, and dynamic expandable cards that open detailed project views in a modal without any page reloads."
          projectLink="https://github.com/Ankritjarngal/portfolio-website"
          liveLink="https://portfolio-ankrit.vercel.app/"
          skills={["ReactJS", "Vite", "JavaScript", "Tailwind CSS"]}
        />

      </div>
    </div>
  );
}
