import { Written } from "../components/Written";
import { HeaderBox } from "../components/HeaderBox";

export function About() {
  return (
    <div className="w-full max-w-3xl">
      <div className="px-4 sm:px-0 mb-8 sm:mb-12">
        <HeaderBox title="About Me!" number={1} />
        <div className="transform hover:scale-[1.02] transition-all">
          <Written
            data={`Hi, I'm Ankrit Jarngal, an aspiring web developer from Hirangar, Jammu and Kashmir. I am currently in my 2nd year of the Computer Science program at the National Institute of Technology, Srinagar.

Skills:
- Frontend: HTML, CSS, JavaScript, ReactJS, TypeScript
- Backend: Node.js, Express
- Databases: MongoDB, PostgreSQL
- Version Control: Git, GitHub
- Authentication: JWT Authentication

Others:
- JSON, JSONBin
- API Integration
- RESTful APIs

Middleware:
- Generic Middlewares: Authentication, Authorization, Request Validation
- Libraries: Zod, JWT, CORS, Express-Session
- Error Handling: Custom Error Responses, Async Error Handling

I am passionate about building responsive websites and web applications, always eager to learn and grow in the field of web development.
`}
          />
        </div>
      </div>
    </div>
  );
}