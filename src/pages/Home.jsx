import { useNavigate } from "react-router-dom";
import "../App.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1>BAIA Code Confidence Lab</h1>

      <p className="subtitle">
        Learn to code, build creative projects, and grow your confidence.
      </p>

      <div className="card">
        <div className="card-inner">

          <h2>What You'll Learn</h2>

          <ul className="lesson-list">
            <li>Scratch Basics</li>
            <li>Loops and Events</li>
            <li>Conditionals</li>
            <li>Creative Coding</li>
            <li>Building Your Own Project</li>
          </ul>

          <button
            className="start-button"
            onClick={() => navigate("/Week1")}
          >
            Start Week 1
          </button>

        </div>
      </div>
    </div>
  );
}

export default Home;