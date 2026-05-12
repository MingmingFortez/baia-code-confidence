import "../App.css";
import Navbar from "../components/Navbar";
import ScratchCard from "../components/ScratchCard";
import ResourceCard from "../components/ResourceCard";
import ScratchResources from "../components/ScratchResource";

function Week1() {
  return (
    <div className="week-page">

      <Navbar />

      <section className="hero-section">

    

        <p className="eyebrow">Week 1</p>

        <h1>Welcome to Coding</h1>

        <p className="hero-subtitle">
          Learning Goal: I can understand basic coding concepts and explore Scratch.
        </p>

      </section>

      <section className="welcome-section">
        <h2>Welcome to Week 1!</h2>
        <p>
          This week is all about getting comfortable with Scratch and learning that
          coding is just a way to give instructions, solve problems, and create
          something fun.
        </p>
        <p>
          You do not need to know everything yet. The goal is to explore, try things
          out, and start seeing yourself as someone who can code.
        </p>
      </section>

      <ScratchResources />


      <section className="lesson-section">
      

        <h2>Scratch Basics</h2>

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

    </div>
  );
}

export default Week1;