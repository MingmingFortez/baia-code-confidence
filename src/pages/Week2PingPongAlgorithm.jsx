import Navbar from "../components/Navbar";
import Week2Pager from "../components/Week2Pager";
import "../App.css";

const pingPongAlgorithm = [
  "When the green flag is clicked, reset the score.",
  "Put the ball and paddle in their starting places.",
  "Point the ball in a starting direction.",
  "Forever move the ball.",
  "If the ball touches an edge, bounce.",
  "If the ball touches the paddle, bounce back.",
  "If the ball reaches the goal area, change the score.",
  "If the score reaches the winning number, show a win message.",
];

function Week2PingPongAlgorithm() {
  return (
    <div className="week-page">
      <Navbar />

      <section className="hero-section">
        <p className="eyebrow">Week 2</p>
        <h1>Ping Pong Algorithm</h1>
        <p className="hero-subtitle">
          Before we code the game, we write the game rules in plain language.
        </p>
        <div className="hero-line"></div>
      </section>

      <section className="lesson-section algorithm-section">
        <p className="eyebrow dark-eyebrow">Game Plan</p>
        <h2>Ping Pong Steps</h2>

        <div className="algorithm-list">
          {pingPongAlgorithm.map((step, index) => (
            <div className="algorithm-step" key={step}>
              <span>{index + 1}</span>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="lesson-section">
        <p className="eyebrow dark-eyebrow">Concept Check</p>
        <h2>Where the Week 1 Concepts Show Up</h2>
        <div className="getting-started-grid">
          <article className="getting-started-card">
            <span>1</span>
            <h3>Events</h3>
            <p>Green flag starts the game. Arrow keys move the paddle.</p>
          </article>
          <article className="getting-started-card">
            <span>2</span>
            <h3>Loops</h3>
            <p>Forever keeps the ball moving.</p>
          </article>
          <article className="getting-started-card">
            <span>3</span>
            <h3>Conditionals</h3>
            <p>If touching paddle, bounce. If score is high enough, win.</p>
          </article>
          <article className="getting-started-card">
            <span>4</span>
            <h3>Variables</h3>
            <p>Score remembers how many points the player has.</p>
          </article>
        </div>
      </section>

      <Week2Pager
        previous={{ label: "Algorithm Basics", path: "/week2/algorithm" }}
        next={{ label: "Game Setup", path: "/week2/setup" }}
      />
    </div>
  );
}

export default Week2PingPongAlgorithm;
