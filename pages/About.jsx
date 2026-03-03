import { Written } from "../components/Written";
import { HeaderBox } from "../components/HeaderBox";

export function About() {
  return (
    <div className="w-full max-w-3xl">
      <div className="px-4 sm:px-0 mb-8 sm:mb-12">
        <HeaderBox title="About Me!" number={1} />
        <div className="transform hover:scale-[1.02] transition-all">
          <Written
            data={`Hi, I'm Ankrit Jarngal, a 3rd-year Computer Science student at the National Institute of Technology (NIT), Srinagar.

Technical Skills

Development
- Frontend: HTML, CSS, JavaScript, ReactJS, TypeScript, Tailwind CSS, Next.js
- Backend: Go (Golang), Node.js, Express, Next.js, FastAPI, Flask
- Systems: LSM-Trees, HNSW Indexing, WAL, SSTable Compaction, Socket Programming (WinSock)
- Databases: PostgreSQL, MongoDB, Pinecone (Vector Database), Supabase, Redis

Tools & Infrastructure
- Version Control: Git, GitHub
- Infrastructure: Docker, Vercel, Cloudinary, Google Drive API, Google Calendar API
- Authentication: JWT, Next Auth, Zod Validation

AI & Machine Learning
- Vector Engineering: Custom Vector Engines (GopherVectra), Vector Embeddings, RAG
- NLP Technologies: LangChain, Gemini AI, Google Generative AI, Transformers
- Techniques: Intent Recognition, Named Entity Recognition, Sentiment Analysis

Additional Expertise
- API Development: RESTful APIs, WebSockets (Real-time), API Integration
- Data Processing: Web Scraping (Puppeteer, Cheerio), PDF Parsing
- Low-Level: C, Networking, Concurrent Game Engines, Load Balancers
- Error Handling: Custom Error Responses, Async Error Handling, Middleware Design

I focus on building high-performance concurrent applications and low-level system infrastructure.
`}
          />
        </div>
      </div>
    </div>
  );
}