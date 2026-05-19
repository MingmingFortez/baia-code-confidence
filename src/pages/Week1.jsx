import "../App.css";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import ScratchCard from "../components/ScratchCard";
import ScratchResources from "../components/ScratchResource";

const gettingStartedSteps = [
  {
    number: "1",
    title: "Open Scratch",
    description: "Go to the Scratch editor and start a new project.",
  },
  {
    number: "2",
    title: "Choose a Sprite",
    description: "Pick a character or object that will follow your code.",
  },
  {
    number: "3",
    title: "Add Blocks",
    description: "Drag code blocks into the scripts area and snap them together.",
  },
  {
    number: "4",
    title: "Press the Green Flag",
    description: "Run your project and test what your sprite does.",
  },
];

const conceptLinks = [
  {
    title: "Events",
    path: "/events",
    description: "Start code when something happens.",
  },
  {
    title: "Loops",
    path: "/loops",
    description: "Repeat actions without rewriting them.",
  },
  {
    title: "Conditionals",
    path: "/conditionals",
    description: "Make choices with if and if else blocks.",
  },
  {
    title: "Variables",
    path: "/variables",
    description: "Store information like score, names, and true/false values.",
  },
  {
    title: "Debugging",
    path: "/debugging",
    description: "Find and fix problems when code does not work yet.",
  },
];

function Week1() {
  return (
    <div className="week-page">

      <Navbar />

      <section className="hero-section">

    

        <p className="eyebrow">Week 1</p>

        <h1>Scratch Basics</h1>

        <p className="hero-subtitle">
          Learning Goal: I can open Scratch, explore the editor, and understand the main parts of a Scratch project.
        </p>

        <div className="hero-line"></div>

      </section>

      <section className="welcome-section">
        <h2>Getting Started with Scratch</h2>
        <p>
          Scratch is a creative coding tool where you can build games, animations,
          stories, and interactive projects by snapping blocks together.
        </p>
        <p>
          This week is about getting comfortable: clicking around, testing ideas,
          and learning what each part of the Scratch workspace is for.
        </p>
      </section>

      <ScratchResources />

      <section className="lesson-section" id="first-steps">
        <p className="eyebrow dark-eyebrow">Start Here</p>
        <h2>First Steps</h2>

        <div className="getting-started-grid">
          {gettingStartedSteps.map((step) => (
            <article className="getting-started-card" key={step.title}>
              <span>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="lesson-section" id="scratch-basics">
        <p className="eyebrow dark-eyebrow">Scratch Workspace</p>

        <h2>Parts of Scratch</h2>

        <p>
          These are the main pieces students will use every time they build a
          Scratch project.
        </p>

        <div className="scratch-grid">

        <ScratchCard
          title="Sprites"
          description="Characters or objects in your project."
          color="pink"
        />

        <ScratchCard
          title="Stage"
          description="The background where your project happens."
          color="orange"
        />

        <ScratchCard
          title="Code Blocks"
          description="Instructions that tell sprites what to do."
          color="purple"
        />

        <ScratchCard
          title="Costumes"
          description="Different looks for your sprites."
          color="green"
        />

        <ScratchCard
          title="Sounds"
          description="Audio effects that make projects more fun."
          color="blue"
        />

        <ScratchCard
          title="Events"
          description="Events tell your project when something should happen."
          color="yellow"
        />

        </div>

      </section>

      <section className="lesson-section scratch-workflow-section">
        <p className="eyebrow dark-eyebrow">Build Habit</p>
        <h2>Try, Test, Change</h2>

        <div className="scratch-workflow">
          <div>
            <h3>Try</h3>
            <p>Drag a block into the scripts area and connect it to an event.</p>
          </div>

          <div>
            <h3>Test</h3>
            <p>Click the green flag or press the key that starts your code.</p>
          </div>

          <div>
            <h3>Change</h3>
            <p>Adjust one thing, then test again to see what changed.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section week1-next-section">
        <p className="eyebrow dark-eyebrow">Next Lessons</p>
        <h2>Concept Lesson Pages</h2>

        <p>
          After students know where things are in Scratch, these lessons explain
          the coding ideas behind the blocks.
        </p>

        <div className="concept-link-grid">
          {conceptLinks.map((concept) => (
            <Link className="concept-link-card" to={concept.path} key={concept.title}>
              <h3>{concept.title}</h3>
              <p>{concept.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="lesson-section week1-navigation-section">
        <p className="eyebrow dark-eyebrow">Learn More</p>
        <h2>Explore the Concept Lessons</h2>

        <p>
          Start with Events, then move through the concept pages in order.
        </p>

        <div className="week1-concept-nav">
          <Link className="week1-concept-pill get-started-pill" to="/events">
            Learn More
          </Link>
        </div>
      </section>

    </div>
  );
}

export default Week1;
