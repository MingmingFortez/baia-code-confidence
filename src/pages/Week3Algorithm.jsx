import Navbar from "../components/Navbar";
import Week3Pager from "../components/Week3Pager";
import "../App.css";

const algorithmPrompts = [
  "What is the project idea?",
  "What happens when the green flag is clicked?",
  "What does the player control?",
  "What should repeat?",
  "What choices or if statements are needed?",
  "What variables should the project remember?",
  "How does the project end or finish?",
];

function Week3Algorithm() {
  return (
    <div className="week-page">
      <Navbar />

      <section className="hero-section">
        <p className="eyebrow">Week 3</p>
        <h1>Write Your Algorithm</h1>
        <p className="hero-subtitle">
          Before coding, students write the steps their project should follow.
        </p>
        <div className="hero-line"></div>
      </section>

      <section className="lesson-section algorithm-section">
        <p className="eyebrow dark-eyebrow">Planning</p>
        <h2>Project Algorithm Prompts</h2>
        <p>
          Students answer these prompts in plain language before opening Scratch.
        </p>

        <div className="algorithm-list">
          {algorithmPrompts.map((prompt, index) => (
            <div className="algorithm-step" key={prompt}>
              <span>{index + 1}</span>
              <p>{prompt}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="lesson-section loop-summary-section">
        <p className="eyebrow dark-eyebrow">Reminder</p>
        <h2>Algorithms Can Change</h2>
        <p>
          Students can update their algorithm while coding. The plan is a guide,
          not a rulebook.
        </p>
        <p className="summary-closing">
          Write enough steps that someone else can understand your project idea.
        </p>
      </section>

      <Week3Pager
        previous={{ label: "Week 3 Overview", path: "/week3" }}
        next={{ label: "Code Project", path: "/week3/code" }}
      />
    </div>
  );
}

export default Week3Algorithm;
