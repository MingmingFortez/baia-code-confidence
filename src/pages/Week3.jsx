import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Week3Pager from "../components/Week3Pager";
import "../App.css";

const week3Flow = [
  {
    icon: "📝",
    title: "Write Algorithm",
    path: "/week3/algorithm",
    description: "Turn your project idea into clear steps before coding.",
  },
  {
    icon: "💻",
    title: "Code Project",
    path: "/week3/code",
    description: "Build your Scratch project independently.",
  },
  {
    icon: "🛠️",
    title: "Debug and Polish",
    path: "/week3/debug",
    description: "Test, fix, and add creative details.",
  },
  {
    icon: "🎤",
    title: "Present",
    path: "/week3/presentation",
    description: "Prepare to share your project and explain your code.",
  },
  {
    icon: "🎉",
    title: "Celebrate",
    path: "/week3/celebrate",
    description: "Finish Week 3 with a project celebration.",
  },
];

function Week3() {
  return (
    <div className="week-page">
      <Navbar />

      <section className="hero-section">
        <p className="eyebrow">Week 3</p>
        <h1>Project Time</h1>
        <p className="hero-subtitle">
          Students write their own algorithm, code their own Scratch project,
          debug it, and present what they built.
        </p>
        <div className="hero-line"></div>
      </section>

      <section className="welcome-section">
        <h2>From Idea to Project</h2>
        <p>
          Week 3 is independent build time. Students use the concepts from Week
          1 and the Ping Pong practice from Week 2 to create something of their
          own.
        </p>
        <p>
          The focus is not perfection. The goal is to plan, build, test, improve,
          and explain their thinking.
        </p>
      </section>

      <section className="lesson-section">
        <p className="eyebrow dark-eyebrow">Week 3 Flow</p>
        <h2>Independent Project Pathway</h2>
        <p>
          Move through the project pages in order. Each step helps students go
          from idea to final presentation.
        </p>

        <div className="week3-flow-grid">
          {week3Flow.map((item, index) => (
            <Link className="week3-flow-card" to={item.path} key={item.title}>
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

      <section className="lesson-section loop-summary-section week3-summary-section">
        <p className="eyebrow dark-eyebrow">Project Goal</p>
        <h2>Build Something You Can Explain</h2>
        <p>
          By the end of Week 3, students should be able to show their project,
          explain the algorithm, and name one bug they fixed.
        </p>
        <p className="summary-closing">
          Your project can be a game, animation, story, quiz, or interactive scene.
        </p>
      </section>

      <Week3Pager next={{ label: "Write Algorithm", path: "/week3/algorithm" }} />
    </div>
  );
}

export default Week3;
