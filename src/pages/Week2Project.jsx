import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Week2Pager from "../components/Week2Pager";
import "../App.css";

const improvementIdeas = [
  "Change the paddle speed.",
  "Make the ball get faster after each point.",
  "Add a sound when the ball hits the paddle.",
  "Add a second level or new backdrop.",
  "Create a win screen when the score reaches 10.",
  "Add a second paddle for two players.",
];

const homeworkPrompts = [
  "What kind of Scratch project do you want to make?",
  "What is the goal of your project?",
  "What sprites or characters might you need?",
  "What is one feature from Ping Pong you could reuse?",
];

function Week2Project() {
  return (
    <div className="week-page">
      <Navbar />

      <section className="hero-section">
        <p className="eyebrow">Week 2</p>
        <h1>Improve Ping Pong</h1>
        <p className="hero-subtitle">
          Play with the Ping Pong game, make it better, and notice ideas you may
          want to use later.
        </p>
        <div className="hero-line"></div>
      </section>

      <section className="lesson-section brainstorm-section">
        <p className="eyebrow dark-eyebrow">Make It Better</p>
        <h2>Choose an Upgrade</h2>
        <p>
          Students should experiment with the Ping Pong game before starting an
          original project. Pick one or two upgrades to try.
        </p>

        <div className="brainstorm-grid">
          {improvementIdeas.map((idea) => (
            <article className="brainstorm-card" key={idea}>
              <p>{idea}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="lesson-section homework-section">
        <p className="eyebrow dark-eyebrow">Homework</p>
        <h2>Think About Your Own Project</h2>
        <p>
          Students do not need to write a full algorithm yet. For homework, they
          should think about what they might want to build in Week 3.
        </p>

        <div className="homework-prompt-list">
          {homeworkPrompts.map((prompt, index) => (
            <div className="homework-prompt" key={prompt}>
              <span>{index + 1}</span>
              <p>{prompt}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="lesson-section loop-summary-section week2-summary-section">
        <p className="eyebrow dark-eyebrow">Summary</p>
        <h2>Ready for Project Time</h2>
        <p>
          Students built and improved a demo game. Their homework is to think
          about their own project idea before Week 3.
        </p>
        <p className="summary-closing">
          Bring one project idea into Week 3. It can change later.
        </p>
      </section>

      <div className="week2-next-action">
        <Link className="week1-concept-pill" to="/week3">
          Continue to Week 3
        </Link>
      </div>

      <Week2Pager previous={{ label: "Code the Game", path: "/week2/code" }} />
    </div>
  );
}

export default Week2Project;
