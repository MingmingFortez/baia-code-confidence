import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Week3Pager from "../components/Week3Pager";
import "../App.css";

const celebrationNotes = [
  "You wrote an algorithm.",
  "You coded your own project.",
  "You tested and fixed bugs.",
  "You shared your creative thinking.",
];

function Week3Celebrate() {
  return (
    <div className="week-page">
      <Navbar />

      <section className="celebration-hero">
        <div className="confetti-piece confetti-one"></div>
        <div className="confetti-piece confetti-two"></div>
        <div className="confetti-piece confetti-three"></div>
        <div className="confetti-piece confetti-four"></div>
        <div className="confetti-piece confetti-five"></div>
        <div className="confetti-piece confetti-six"></div>
        <div className="confetti-piece confetti-seven"></div>
        <div className="confetti-piece confetti-eight"></div>

        <p className="eyebrow">Week 3 Complete</p>
        <h1>Congrats for Making It Here</h1>
        <p className="hero-subtitle">
          You planned an idea, built it in Scratch, debugged it, and made it
          your own.
        </p>
        <div className="celebration-burst" aria-hidden="true">
          ★
        </div>
      </section>

      <section className="lesson-section celebration-summary">
        <p className="eyebrow dark-eyebrow">You Did It</p>
        <h2>You Built Something Real</h2>
        <p>
          The goal was not to make the biggest project. The goal was to show
          your thinking, creativity, and persistence.
        </p>

        <div className="celebration-note-grid">
          {celebrationNotes.map((note, index) => (
            <article className="celebration-note" key={note}>
              <span>{index + 1}</span>
              <p>{note}</p>
            </article>
          ))}
        </div>

        <p className="summary-closing">
          Be proud of your project. You learned how to turn an idea into code.
        </p>
      </section>

      <Week3Pager previous={{ label: "Project Presentation", path: "/week3/presentation" }} />

      <div className="celebration-home-actions">
        <Link className="week1-concept-pill" to="/">
          Go Back Home
        </Link>
      </div>
    </div>
  );
}

export default Week3Celebrate;
