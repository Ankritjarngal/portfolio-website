import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream } from "fs";

const hostname = "https://portfolio-ankrit.vercel.app"; 
const links = [
  { url: "/", changefreq: "daily", priority: 1.0 } 
];

const stream = new SitemapStream({ hostname });

links.forEach((link) => {
  stream.write(link);
});

stream.end();

streamToPromise(stream)
  .then((data) => {
    createWriteStream("public/sitemap.xml").write(data);
    console.log("✅ Sitemap generated successfully!");
  })
  .catch((error) => console.error("❌ Sitemap generation failed:", error));
