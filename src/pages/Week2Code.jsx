import Navbar from "../components/Navbar";
import Week2Pager from "../components/Week2Pager";
import "../App.css";
import { useState } from "react";

const debuggingChecklist = [
  "The green flag resets the game.",
  "The paddle moves left and right.",
  "The ball moves when the game starts.",
  "The ball bounces off the edge.",
  "The ball bounces when it touches the paddle.",
  "The score changes at the right time.",
  "The game has a win or ending condition.",
];

function Week2Code() {
  const [checkedItems, setCheckedItems] = useState({});

  const completedChecks = debuggingChecklist.filter((item) => checkedItems[item]).length;

  const toggleCheck = (item) => {
    setCheckedItems({
      ...checkedItems,
      [item]: !checkedItems[item],
    });
  };

  return (
    <div className="week-page">
      <Navbar />

      <section className="hero-section">
        <p className="eyebrow">Week 2</p>
        <h1>Code the Ping Pong Game</h1>
        <p className="hero-subtitle">
          Build the game one script at a time: paddle, ball, bounce, score, win.
        </p>
        <div className="hero-line"></div>
      </section>

      <section className="lesson-section scratch-challenge-section">
        <p className="eyebrow dark-eyebrow">Build Together</p>
        <h2>Core Scripts</h2>
        <div className="challenge-board">
          <div className="challenge-card scratch-script-card">
            <h3>Ball Script</h3>
            <div className="scratch-script">
              <div className="scratch-event-block">when green flag clicked</div>
              <div className="scratch-block challenge-block">
                <span>forever</span>
              </div>
              <div className="scratch-motion-block">move 10 steps</div>
              <div className="scratch-motion-block">if on edge, bounce</div>
              <div className="conditional-scratch-block challenge-block">
                <span>if</span>
                <span className="scratch-input">touching paddle?</span>
              </div>
              <div className="scratch-motion-block">turn 180 degrees</div>
            </div>
          </div>

          <div className="challenge-card scratch-script-card">
            <h3>Paddle and Score</h3>
            <div className="scratch-script">
              <div className="event-scratch-block challenge-block">when right arrow pressed</div>
              <div className="scratch-motion-block">change x by 10</div>
            </div>
            <div className="scratch-script">
              <div className="event-scratch-block challenge-block">when left arrow pressed</div>
              <div className="scratch-motion-block">change x by -10</div>
            </div>
            <div className="scratch-script">
              <div className="conditional-scratch-block challenge-block">
                <span>if</span>
                <span className="scratch-input">touching goal?</span>
              </div>
              <div className="variable-block">change score by 1</div>
            </div>
          </div>
        </div>
      </section>

      <section className="lesson-section debugging-steps-section">
        <p className="eyebrow dark-eyebrow">Debugging Checks</p>
        <h2>Interactive Test Checklist</h2>
        <p>
          Check each item after you test it in Scratch. If something does not
          work, debug that piece before moving on.
        </p>

        <div className="debug-checklist-score">
          Checked: {completedChecks} / {debuggingChecklist.length}
        </div>

        <div className="debug-checklist">
          {debuggingChecklist.map((item) => (
            <label
              className={`debug-check-item ${checkedItems[item] ? "checked" : ""}`}
              key={item}
            >
              <input
                type="checkbox"
                checked={Boolean(checkedItems[item])}
                onChange={() => toggleCheck(item)}
              />
              <span>{item}</span>
            </label>
          ))}
        </div>
      </section>

      <Week2Pager
        previous={{ label: "Game Setup", path: "/week2/setup" }}
        next={{ label: "Improve Ping Pong", path: "/week2/your-project" }}
      />
    </div>
  );
}

export default Week2Code;
