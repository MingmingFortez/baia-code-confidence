import { Link } from "react-router-dom";
import "../App.css";

function Week1() {
  return (
    <div className="week-page">
      <Link to="/" className="back-link">← Back Home</Link>

      <section className="week-hero">
        <p className="eyebrow">Week 1</p>
        <h1>Welcome to Coding</h1>
        <p className="subtitle">
          This week is all about learning that coding can be creative, fun, and something you can actually do.
        </p>
      </section>

      <section className="lesson-section">
        <h2>Before Our Live Session</h2>
        <p>
          Complete these quick activities before we meet. You do not need to be perfect. Just explore and try.
        </p>

        <div className="activity-grid">
          <div className="activity-card pink">
            <h3>1. What is Scratch?</h3>
            <p>
              Scratch is a coding website where you use blocks to make games, stories, animations, and apps.
            </p>
          </div>

          <div className="activity-card orange">
            <h3>2. Learn the Parts</h3>
            <p>
              Sprite = character. Stage = background. Blocks = instructions you give to your project.
            </p>
          </div>

          <div className="activity-card green">
            <h3>3. Tiny Challenge</h3>
            <p>
              Open Scratch and make a sprite say hello when the green flag is clicked.
            </p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <h2>Live Coding Demo</h2>
        <p>
          During our session, we will build a simple ping pong game together. You will learn events, loops, movement, and conditionals while coding along.
        </p>

        <div className="demo-box">
          <h3>Today’s Build</h3>
          <p>Mini Ping Pong Game in Scratch</p>
          <a
            href="https://scratch.mit.edu/projects/editor/"
            target="_blank"
            rel="noreferrer"
            className="start-button"
          >
            Open Scratch
          </a>
        </div>
      </section>

      <section className="lesson-section">
        <h2>Mini Check</h2>

        <div className="quiz-card">
          <p className="question">Which Scratch block starts the program?</p>

          <button className="choice-button">forever</button>
          <button className="choice-button correct">when green flag clicked</button>
          <button className="choice-button">move 10 steps</button>
        </div>
      </section>

      <section className="lesson-section">
        <h2>Homework: Level Up Your Game</h2>
        <p>
          After the session, choose at least one thing to add to your project:
        </p>

        <ul className="homework-list">
          <li>Add a background</li>
          <li>Change your sprite</li>
          <li>Add sound effects</li>
          <li>Add a score</li>
          <li>Make your game feel like you</li>
        </ul>
      </section>
    </div>
  );
}

export default Week1;