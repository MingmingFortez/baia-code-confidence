import Navbar from "../components/Navbar";
import Week3Pager from "../components/Week3Pager";
import "../App.css";

const presentationPrompts = [
  "What is your project called?",
  "What does the player or viewer do?",
  "What coding concept are you proud of using?",
  "What bug did you fix?",
  "What would you add next if you had more time?",
];

function Week3Presentation() {
  return (
    <div className="week-page">
      <Navbar />

      <section className="hero-section">
        <p className="eyebrow">Week 3</p>
        <h1>Project Presentation</h1>
        <p className="hero-subtitle">
          Students share what they built and explain how their code works.
        </p>
        <div className="hero-line"></div>
      </section>

      <section className="lesson-section brainstorm-section">
        <p className="eyebrow dark-eyebrow">Presentation Prep</p>
        <h2>What to Share</h2>
        <p>
          A strong presentation explains the project idea, shows the project in
          action, and names one coding challenge.
        </p>

        <div className="brainstorm-grid">
          {presentationPrompts.map((prompt) => (
            <article className="brainstorm-card" key={prompt}>
              <p>{prompt}</p>
            </article>
          ))}
        </div>
      </section>

      <Week3Pager
        previous={{ label: "Debug and Polish", path: "/week3/debug" }}
        next={{ label: "Celebrate", path: "/week3/celebrate" }}
      />
    </div>
  );
}

export default Week3Presentation;
