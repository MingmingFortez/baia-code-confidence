import Navbar from "../components/Navbar";
import Week3Pager from "../components/Week3Pager";
import "../App.css";

const codingMilestones = [
  {
    title: "Start",
    description: "Create sprites, backdrops, and the green flag starter code.",
  },
  {
    title: "Controls",
    description: "Add events so the player can interact with the project.",
  },
  {
    title: "Main Action",
    description: "Use loops and conditionals to make the project work.",
  },
  {
    title: "Memory",
    description: "Add variables for score, lives, level, names, or true/false states.",
  },
];

function Week3Code() {
  return (
    <div className="week-page">
      <Navbar />

      <section className="hero-section">
        <p className="eyebrow">Week 3</p>
        <h1>Code Your Project</h1>
        <p className="hero-subtitle">
          Students build independently using their algorithm as the guide.
        </p>
        <div className="hero-line"></div>
      </section>

      <section className="lesson-section">
        <p className="eyebrow dark-eyebrow">Build Time</p>
        <h2>Coding Milestones</h2>
        <p>
          Students should build in small pieces and test after each piece works.
        </p>

        <div className="getting-started-grid">
          {codingMilestones.map((milestone, index) => (
            <article className="getting-started-card" key={milestone.title}>
              <span>{index + 1}</span>
              <h3>{milestone.title}</h3>
              <p>{milestone.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="lesson-section scratch-challenge-section">
        <p className="eyebrow dark-eyebrow">Coding Habit</p>
        <h2>Build One Piece at a Time</h2>
        <div className="challenge-board">
          <div className="challenge-card">
            <h3>Do This</h3>
            <ul>
              <li>Build one feature.</li>
              <li>Test it immediately.</li>
              <li>Fix it before adding more.</li>
              <li>Save your project often.</li>
            </ul>
          </div>
          <div className="challenge-card">
            <h3>Avoid This</h3>
            <ul>
              <li>Adding everything before testing.</li>
              <li>Changing five things at once.</li>
              <li>Ignoring bugs until the end.</li>
              <li>Forgetting to name sprites and variables clearly.</li>
            </ul>
          </div>
        </div>
      </section>

      <Week3Pager
        previous={{ label: "Write Algorithm", path: "/week3/algorithm" }}
        next={{ label: "Debug and Polish", path: "/week3/debug" }}
      />
    </div>
  );
}

export default Week3Code;
