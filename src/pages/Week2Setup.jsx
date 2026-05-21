import Navbar from "../components/Navbar";
import Week2Pager from "../components/Week2Pager";
import "../App.css";

const setupItems = [
  "Choose or draw a simple backdrop.",
  "Add a ball sprite.",
  "Add a paddle sprite.",
  "Create a score variable.",
  "Place the sprites where the game should begin.",
];

function Week2Setup() {
  return (
    <div className="week-page">
      <Navbar />

      <section className="hero-section">
        <p className="eyebrow">Week 2</p>
        <h1>Game Setup</h1>
        <p className="hero-subtitle">
          Set up the Scratch project before writing the main game code.
        </p>
        <div className="hero-line"></div>
      </section>

      <section className="lesson-section pingpong-demo-section">
        <p className="eyebrow dark-eyebrow">Setup Preview</p>
        <h2>Stage, Sprites, Variables</h2>

        <div className="pingpong-board">
          <div className="pingpong-stage">
            <div className="pingpong-score">Score: 0</div>
            <div className="pingpong-ball"></div>
            <div className="pingpong-paddle"></div>
          </div>

          <div className="pingpong-parts">
            <h3>Setup Checklist</h3>
            <ul>
              {setupItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="lesson-section scratch-challenge-section">
        <p className="eyebrow dark-eyebrow">Starter Blocks</p>
        <h2>Reset the Game</h2>
        <div className="challenge-board">
          <div className="challenge-card scratch-script-card">
            <h3>When the Game Starts</h3>
            <div className="scratch-script">
              <div className="scratch-event-block">when green flag clicked</div>
              <div className="variable-block">set score to 0</div>
              <div className="scratch-motion-block">go to x: 0 y: 0</div>
              <div className="scratch-motion-block">point in direction 45</div>
            </div>
          </div>
        </div>
      </section>

      <Week2Pager
        previous={{ label: "Ping Pong Algorithm", path: "/week2/pingpong-algorithm" }}
        next={{ label: "Code the Game", path: "/week2/code" }}
      />
    </div>
  );
}

export default Week2Setup;
