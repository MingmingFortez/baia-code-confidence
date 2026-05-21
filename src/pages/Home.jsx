import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../App.css";

const homeWeeks = [
  {
    title: "Week 1",
    path: "/week1",
    label: "Scratch Basics",
    description: "Learn events, loops, conditionals, variables, and debugging.",
  },
  {
    title: "Week 2",
    path: "/week2",
    label: "Build Ping Pong",
    description: "Practice planning, setup, coding, testing, and improving a game.",
  },
  {
    title: "Week 3",
    path: "/week3",
    label: "Project Time",
    description: "Write an algorithm, code an original project, and present it.",
  },
];

function Home() {
  return (
    <div className="home-page">
      <Navbar />

      <section className="home-hero">
        <div className="home-hero-panels" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="home-hero-content">
          <p className="home-hero-kicker">BAIA Code Confidence Lab</p>
          <div className="home-baia-mark" aria-label="BAIA">
            <span>B</span>
            <span>A</span>
            <span>I</span>
            <span>A</span>
          </div>
          <h1>Beautiful As I Am</h1>
          <p className="hero-subtitle">
            Building confident young girls through code, creativity, and the
            power of a village.
          </p>
        </div>
        <div className="home-hero-actions">
          <Link className="home-primary-link" to="/week1">
            Start Learning
          </Link>
        </div>
      </section>

      <section className="home-mission-section">
        <div className="home-mission-copy">
          <p className="eyebrow dark-eyebrow">BAIA Mission</p>
          <h2>Building Confident Young Girls Through Code</h2>
          <p>
            BAIA helps young girls see themselves as creators, problem-solvers,
            and leaders. Coding becomes a way to practice confidence, creativity,
            and persistence.
          </p>
          <p>
            Students do not need to be perfect or know everything before they
            begin. They learn by trying, testing, fixing, and sharing what they
            made.
          </p>
        </div>

        <div className="home-mission-note">
          <span>BAIA</span>
          <p>Beautiful As I Am</p>
        </div>
      </section>

      <section className="home-values-section">
        <article className="home-value-card">
          <span>01</span>
          <h3>Create</h3>
          <p>Students use Scratch to turn ideas into games, stories, and animations.</p>
        </article>
        <article className="home-value-card">
          <span>02</span>
          <h3>Practice</h3>
          <p>They build coding skills through small steps, examples, and projects.</p>
        </article>
        <article className="home-value-card">
          <span>03</span>
          <h3>Confidence</h3>
          <p>They learn that bugs are part of coding and that their ideas matter.</p>
        </article>
      </section>

      <section className="home-course-section">
        <p className="eyebrow dark-eyebrow">Course Flow</p>
        <h2>Three Weeks of Creative Coding</h2>
        <div className="home-week-grid">
          {homeWeeks.map((week) => (
            <Link className="home-week-card" to={week.path} key={week.title}>
              <span>{week.title}</span>
              <h3>{week.label}</h3>
              <p>{week.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="home-final-start">
        <p className="eyebrow dark-eyebrow">Ready?</p>
        <h2>Start the BAIA Coding Journey</h2>
        <Link className="week1-concept-pill" to="/week1">
          Get Started
        </Link>
      </section>
    </div>
  );
}

export default Home;
