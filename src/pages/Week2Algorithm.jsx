import Navbar from "../components/Navbar";
import Week2Pager from "../components/Week2Pager";
import "../App.css";

const algorithmBasics = [
  "Write the goal of the project.",
  "Break the goal into small steps.",
  "Put the steps in the order they should happen.",
  "Look for events, loops, conditionals, and variables.",
  "Test the plan before building.",
];

function Week2Algorithm() {
  return (
    <div className="week-page">
      <Navbar />

      <section className="hero-section">
        <p className="eyebrow">Week 2</p>
        <h1>Algorithm Basics</h1>
        <p className="hero-subtitle">
          An algorithm is a step-by-step plan for what your program should do.
        </p>
        <div className="hero-line"></div>
      </section>

      <section className="lesson-section algorithm-section">
        <p className="eyebrow dark-eyebrow">Before Coding</p>
        <h2>Write the Steps First</h2>
        <p>
          Algorithms help students slow down and think before they drag blocks
          into Scratch.
        </p>

        <div className="algorithm-list">
          {algorithmBasics.map((step, index) => (
            <div className="algorithm-step" key={step}>
              <span>{index + 1}</span>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="lesson-section loop-summary-section">
        <p className="eyebrow dark-eyebrow">Remember</p>
        <h2>Algorithms Are Drafts</h2>
        <p>
          Your first algorithm does not have to be perfect. It is a plan you can
          test, change, and improve.
        </p>
        <p className="summary-closing">
          If you can explain the steps, you are getting ready to code.
        </p>
      </section>

      <Week2Pager
        previous={{ label: "Week 2 Overview", path: "/week2" }}
        next={{ label: "Ping Pong Algorithm", path: "/week2/pingpong-algorithm" }}
      />
    </div>
  );
}

export default Week2Algorithm;
