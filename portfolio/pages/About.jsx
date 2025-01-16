import { Written } from "../components/Written";
import { HeaderBox } from "../components/HeaderBox";

export function About() {
  return (
    <div className="w-full max-w-3xl">
      <HeaderBox title="About Me!" number={1} />
      <Written
        data={`Hi! My name is [Your Name], and I live in [City, Country]. I’m currently pursuing my studies at [Your School/University Name], focusing on [Your Field of Study].

Living in [City], I’ve grown to appreciate [something unique about your city, e.g., "its vibrant culture" or "peaceful environment"]. As a student of [Your Field of Study], I’m passionate about exploring [specific interests within your field, e.g., "technology trends", "creative problem-solving", or "innovative solutions"].

When I’m not studying, I enjoy [your hobbies/interests, e.g., "reading books", "hiking", "experimenting with new recipes", or "playing games"]. These activities help me stay balanced and bring fresh perspectives to my academic journey.`}
      />
    </div>
  );
}
