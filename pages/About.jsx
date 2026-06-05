import { HeaderBox } from "../components/HeaderBox";
import { ExpandableCard } from "../components/ExpandableCard";

export function About() {
  return (
    <div className="w-full max-w-3xl">
      <div className="px-4 sm:px-0 mb-8 sm:mb-12">
        <HeaderBox title="About Me!" number={1} />
        <ExpandableCard
          title="Ankrit Jarngal"
          subtitle="Computer Science @ NIT Srinagar"
          summary="Hi, I'm Ankrit — a Computer Science student at NIT Srinagar who loves building high-performance concurrent applications and low-level system infrastructure. Click to see my full technical stack."
        >
          <div className="space-y-5" style={{ whiteSpace: "pre-line" }}>
            <div>
              <h4 className="text-lg font-bold text-stone-200">Development</h4>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>Frontend: HTML, CSS, JavaScript, ReactJS, TypeScript, Tailwind CSS, Next.js</li>
                <li>Backend: Go (Golang), Node.js, Express, Next.js, FastAPI, Flask</li>
                <li>Systems: LSM-Trees, HNSW Indexing, WAL, SSTable Compaction, Socket Programming (WinSock)</li>
                <li>Databases: PostgreSQL, MongoDB, Pinecone (Vector Database), Supabase, Redis</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold text-stone-200">Tools & Infrastructure</h4>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>Version Control: Git, GitHub</li>
                <li>Infrastructure: Docker, Vercel, Cloudinary, Google Drive API, Google Calendar API</li>
                <li>Authentication: JWT, Next Auth, Zod Validation</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold text-stone-200">AI & Machine Learning</h4>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>Vector Engineering: Custom Vector Engines (GopherVectra), Vector Embeddings, RAG</li>
                <li>NLP Technologies: LangChain, Gemini AI, Google Generative AI, Transformers</li>
                <li>Techniques: Intent Recognition, Named Entity Recognition, Sentiment Analysis</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold text-stone-200">Additional Expertise</h4>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>API Development: RESTful APIs, WebSockets (Real-time), API Integration</li>
                <li>Data Processing: Web Scraping (Puppeteer, Cheerio), PDF Parsing</li>
                <li>Low-Level: C, Networking, Concurrent Game Engines, Load Balancers</li>
                <li>Error Handling: Custom Error Responses, Async Error Handling, Middleware Design</li>
              </ul>
            </div>
          </div>
        </ExpandableCard>
      </div>
    </div>
  );
}
