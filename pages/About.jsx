import { Written } from "../components/Written";
import { HeaderBox } from "../components/HeaderBox";

export function About() {
  return (
    <div className="w-full max-w-3xl">
      <div className="px-4 sm:px-0 mb-8 sm:mb-12">
        <HeaderBox title="About Me!" number={1} />
        <div className="transform hover:scale-[1.02] transition-all">
          <Written
            data={`Hi, I'm Ankrit Jarngal, an aspiring web developer from Hirangar, Jammu and Kashmir. I am currently in my 3rd year of the Computer Science program at the National Institute of Technology, Srinagar.

Technical Skills

Development
- Frontend: HTML, CSS, JavaScript, ReactJS, TypeScript, Tailwind CSS, NextJS
- Backend: Node.js, Express, NextJS, HTTP Server Implementation, Socket Programming, Flask
- Databases: MongoDB, PostgreSQL, Pinecone (Vector Database), Supabase

Tools & Infrastructure
- Version Control: Git, GitHub
- Cloud Services: Vercel, Cloudinary, Google Drive API, Google Calendar API
- Authentication: JWT, Next Auth

AI & Machine Learning
- NLP Technologies: LangChain, Transformers, Compromise NLP
- Techniques: Named Entity Recognition, Vector Embeddings, Sentiment Analysis, Intent Analysis
- Platforms: Google Generative AI, Gemini AI, Hugging Face

Additional Expertise
- API Development: RESTful APIs, API Integration
- Data Processing: Web Scraping (Puppeteer, Cheerio), PDF Parsing
- Systems Programming: C, WinSock, Networking
- Middleware: Authentication, Authorization, Request Validation
- Libraries: Zod, JWT, CORS, Express-Session, Multer
- Error Handling: Custom Error Responses, Async Error Handling

I am passionate about building responsive websites and web applications, always eager to learn and grow in the field of web development.

`}
          />
        </div>
      </div>
    </div>
  );
}
