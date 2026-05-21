import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Week2Pager from "../components/Week2Pager";
import "../App.css";

const week2Flow = [
  {
    icon: "🧠",
    title: "Algorithm Basics",
    path: "/week2/algorithm",
    description: "Learn how to write steps before coding.",
  },
  {
    icon: "🏓",
    title: "Ping Pong Algorithm",
    path: "/week2/pingpong-algorithm",
    description: "Plan the Ping Pong game in plain language.",
  },
  {
    icon: "🎬",
    title: "Game Setup",
    path: "/week2/setup",
    description: "Create the stage, sprites, and starter variables.",
  },
  {
    icon: "💻",
    title: "Code the Game",
    path: "/week2/code",
    description: "Build movement, bouncing, scoring, and win logic.",
  },
  {
    icon: "✨",
    title: "Improve Ping Pong",
    path: "/week2/your-project",
    description: "Play with the demo game, make it better, then think about your own project.",
  },
];

function Week2() {
  return (
    <div className="week-page">
      <Navbar />

      <section className="hero-section">
        <p className="eyebrow">Week 2</p>
        <h1>Project Exploration</h1>
        <p className="hero-subtitle">
          This week we build a Ping Pong game together, then use that project as
          a playground for testing ideas and making improvements.
        </p>
        <div className="hero-line"></div>
      </section>

      <section className="welcome-section">
        <h2>What We Are Building</h2>
        <p>
          Our class demo project is a Ping Pong game. Students will see how
          events, loops, conditionals, variables, and debugging work together in
          one complete Scratch project.
        </p>
        <p>
          This is also a soft launch for their own project: as we build Ping
          Pong, students will start noticing game rules, controls, scoring, and
          project ideas they may want to think about for homework.
        </p>
      </section>

      <section className="lesson-section pingpong-demo-section">
        <p className="eyebrow dark-eyebrow">Demo Project</p>
        <h2>Ping Pong Game Preview</h2>

        <div className="pingpong-board">
          <div className="pingpong-stage">
            <div className="pingpong-score">Score: 0</div>
            <div className="pingpong-ball"></div>
            <div className="pingpong-paddle"></div>
          </div>

          <div className="pingpong-parts">
            <h3>Students Will Build</h3>
            <ul>
              <li>A ball that moves around the stage.</li>
              <li>A paddle controlled by the player.</li>
              <li>Collision logic so the ball bounces.</li>
              <li>A score variable that changes during the game.</li>
              <li>A win or game-over condition.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <p className="eyebrow dark-eyebrow">Week 2 Flow</p>
        <h2>Project Pathway</h2>
        <p>
          Move through these pages in order. Each one prepares students for the
          next step of the Ping Pong build.
        </p>

        <div className="week2-flow-grid">
          {week2Flow.map((item, index) => (
            <Link className="week2-flow-card" to={item.path} key={item.title}>
              <span className="week2-flow-number">{index + 1}</span>
              <div className="week2-flow-icon" aria-hidden="true">
                {item.icon}
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <Week2Pager next={{ label: "Algorithm Basics", path: "/week2/algorithm" }} />
    </div>
  );
}

export default Week2;
