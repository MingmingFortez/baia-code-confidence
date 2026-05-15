import Navbar from "../components/Navbar";
import "../App.css";
import { useState } from "react";

const loopExamples = [
  {
    icon: "🪥",
    title: "Brushing Teeth",
    loopLine: "Brush left, brush right, rinse, repeat.",
    description:
      "You repeat the same brushing motion until your teeth feel clean.",
  },
  {
    icon: "👏",
    title: "Clapping",
    loopLine: "Hands together, hands apart, repeat.",
    description:
      "Every clap is the same action happening again and again.",
  },
  {
    icon: "🚶",
    title: "Walking",
    loopLine: "Left foot, right foot, repeat.",
    description:
      "Walking works because your steps repeat in a pattern.",
  },
  {
    icon: "🍳",
    title: "Flipping Pancakes",
    loopLine: "Pour, wait, flip, stack, repeat.",
    description:
      "Making pancakes uses a repeated set of steps until breakfast is ready.",
  },
  {
    icon: "🏀",
    title: "Dribbling a Ball",
    loopLine: "Push down, bounce back, repeat.",
    description:
      "The ball keeps moving because the same action repeats over time.",
  },
];

const scratchLoopTypes = [
  {
    title: "For Loop",
    scratchName: "repeat 10",
    meaning:
      "A for loop repeats a set number of times. Use it when you already know how many times something should happen.",
    example: "Repeat 10 times: move 10 steps.",
    blockParts: ["repeat", "10"],
  },
  {
    title: "While Loop",
    scratchName: "repeat until",
    meaning:
      "A while loop keeps going while a condition is true. In Scratch, this often looks like repeating until something happens.",
    example: "Keep moving until you touch the edge.",
    blockParts: ["repeat until", "touching edge?"],
  },
  {
    title: "Forever Loop",
    scratchName: "forever",
    meaning:
      "A forever loop keeps repeating without stopping unless the program is stopped.",
    example: "Forever: play music, animate a sprite, or check for key presses.",
    blockParts: ["forever"],
  },
];

const loopPracticeItems = [
  {
    id: "jump-five",
    text: "Make a sprite jump exactly 5 times.",
    answer: "For Loop",
  },
  {
    id: "touch-edge",
    text: "Keep moving until the sprite touches the edge.",
    answer: "While Loop",
  },
  {
    id: "background-music",
    text: "Keep background music playing during the whole game.",
    answer: "Forever Loop",
  },
  {
    id: "draw-shape",
    text: "Draw 8 sides of a shape.",
    answer: "For Loop",
  },
  {
    id: "wait-for-click",
    text: "Keep checking until the player clicks the sprite.",
    answer: "While Loop",
  },
  {
    id: "idle-animation",
    text: "Make a character blink again and again while waiting.",
    answer: "Forever Loop",
  },
];

const loopBuckets = ["For Loop", "While Loop", "Forever Loop"];

function Loops() {
  const [currentExample, setCurrentExample] = useState(0);
  const [matchedLoops, setMatchedLoops] = useState({});
  const [selectedPracticeItem, setSelectedPracticeItem] = useState("");

  const goToPrevious = () => {
    setCurrentExample((currentExample - 1 + loopExamples.length) % loopExamples.length);
  };

  const goToNext = () => {
    setCurrentExample((currentExample + 1) % loopExamples.length);
  };

  const example = loopExamples[currentExample];

  const score = loopPracticeItems.reduce((total, item) => {
    return matchedLoops[item.id] === item.answer ? total + 1 : total;
  }, 0);

  const handleDragStart = (event, itemId) => {
    event.dataTransfer.setData("text/plain", itemId);
  };

  const handleDrop = (event, loopType) => {
    event.preventDefault();

    const itemId = event.dataTransfer.getData("text/plain");

    if (!itemId) {
      return;
    }

    const updatedMatches = { ...matchedLoops };

    if (loopType) {
      updatedMatches[itemId] = loopType;
    } else {
      delete updatedMatches[itemId];
    }

    setMatchedLoops(updatedMatches);
    setSelectedPracticeItem("");
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const resetPractice = () => {
    setMatchedLoops({});
    setSelectedPracticeItem("");
  };

  const placeSelectedItem = (loopType) => {
    if (!selectedPracticeItem) {
      return;
    }

    setMatchedLoops({
      ...matchedLoops,
      [selectedPracticeItem]: loopType,
    });
    setSelectedPracticeItem("");
  };

  const unmatchedPracticeItems = loopPracticeItems.filter((item) => !matchedLoops[item.id]);

  return (
    <div className="week-page">
      <Navbar />

      <section className="hero-section">
        <p className="eyebrow">Coding Concept</p>

        <h1>Loops</h1>

        <p className="hero-subtitle">
          Loops help us repeat actions without writing the same instructions over and over again.
        </p>

        <div className="hero-line"></div>
      </section>

      <section className="lesson-section">

        <h2>Real Life Examples</h2>

        <p>
          Loops repeat actions again and again. Use the carousel to see loops
          that show up in everyday life.
        </p>

        <div className="loop-carousel" aria-label="Real life loop examples">
          <button
            className="carousel-button"
            type="button"
            onClick={goToPrevious}
            aria-label="Previous loop example"
          >
            ‹
          </button>

          <article className="loop-card">
            <div className="loop-card-icon" aria-hidden="true">
              {example.icon}
            </div>

            <p className="loop-count">
              Example {currentExample + 1} of {loopExamples.length}
            </p>

            <h3>{example.title}</h3>

            <p className="loop-line">{example.loopLine}</p>

            <p>{example.description}</p>
          </article>

          <button
            className="carousel-button"
            type="button"
            onClick={goToNext}
            aria-label="Next loop example"
          >
            ›
          </button>
        </div>

        <div className="carousel-dots" aria-label="Choose a loop example">
          {loopExamples.map((example, index) => (
            <button
              className={`carousel-dot ${index === currentExample ? "active" : ""}`}
              type="button"
              key={example.title}
              onClick={() => setCurrentExample(index)}
              aria-label={`Show ${example.title}`}
              aria-pressed={index === currentExample}
            />
          ))}
        </div>

      </section>

      <section className="lesson-section loop-types-section">
        <p className="eyebrow dark-eyebrow">Scratch Loops</p>
        <h2>Types of Loops</h2>

        <p>
          Scratch has different loop blocks depending on how long you want the
          action to repeat.
        </p>

        <div className="loop-types-grid">
          {scratchLoopTypes.map((loopType) => (
            <article className="loop-type-card" key={loopType.title}>
              <div className="scratch-block" aria-label={`${loopType.scratchName} Scratch block`}>
                <span>{loopType.blockParts[0]}</span>

                {loopType.blockParts[1] && (
                  <span className="scratch-input">{loopType.blockParts[1]}</span>
                )}
              </div>

              <h3>{loopType.title}</h3>
              <p>{loopType.meaning}</p>

              <div className="loop-example-box">
                <span>Example</span>
                <p>{loopType.example}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="lesson-section practice-section">
        <p className="eyebrow dark-eyebrow">Practice</p>
        <h2>Which Loop Would You Use?</h2>

        <p>
          Drag each example into the loop bucket that makes the most sense.
        </p>

        <div className="practice-toolbar">
          <div className="practice-score">
            Score: {score} / {loopPracticeItems.length}
          </div>

          <button className="reset-practice-button" type="button" onClick={resetPractice}>
            Reset
          </button>
        </div>

        <div className="matching-game">
          <div className="word-bank">
            <h3>Examples</h3>

            <div
              className="drop-zone word-bank-zone"
              onDragOver={handleDragOver}
              onDrop={(event) => handleDrop(event, "")}
            >
              {unmatchedPracticeItems.map((item) => (
                <div
                  className={`match-card ${
                    selectedPracticeItem === item.id ? "selected" : ""
                  }`}
                  draggable
                  key={item.id}
                  onClick={() => setSelectedPracticeItem(item.id)}
                  onDragStart={(event) => handleDragStart(event, item.id)}
                  role="button"
                  tabIndex="0"
                >
                  {item.text}
                </div>
              ))}

              {unmatchedPracticeItems.length === 0 && (
                <p className="empty-zone-text">All examples have been sorted.</p>
              )}
            </div>
          </div>

          <div className="bucket-grid">
            {loopBuckets.map((bucket) => {
              const bucketItems = loopPracticeItems.filter(
                (item) => matchedLoops[item.id] === bucket,
              );

              return (
                <div
                  className="loop-bucket"
                  key={bucket}
                  onClick={() => placeSelectedItem(bucket)}
                  onDragOver={handleDragOver}
                  onDrop={(event) => handleDrop(event, bucket)}
                >
                  <h3>{bucket}</h3>

                  <div className="drop-zone">
                    {bucketItems.map((item) => {
                      const isCorrect = item.answer === bucket;

                      return (
                        <div
                          className={`match-card sorted ${isCorrect ? "correct" : "wrong"}`}
                          draggable
                          key={item.id}
                          onClick={(event) => {
                            event.stopPropagation();
                            setSelectedPracticeItem(item.id);
                          }}
                          onDragStart={(event) => handleDragStart(event, item.id)}
                          role="button"
                          tabIndex="0"
                        >
                          {item.text}
                          <span>{isCorrect ? "Correct" : "Try again"}</span>
                        </div>
                      );
                    })}

                    {bucketItems.length === 0 && (
                      <p className="empty-zone-text">Drop examples here.</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="lesson-section scratch-challenge-section">
        <p className="eyebrow dark-eyebrow">Scratch Challenge</p>
        <h2>Build a Loop Dance</h2>

        <p>
          Create a sprite that dances forever, then add a second loop that makes
          something happen a set number of times.
        </p>

        <div className="challenge-board">
          <div className="challenge-card">
            <h3>Your Mission</h3>

            <ul>
              <li>Choose a sprite.</li>
              <li>Use a forever loop to make the sprite dance.</li>
              <li>Use a repeat loop to change colors 10 times.</li>
              <li>Add one sound or background change.</li>
            </ul>
          </div>

          <div className="challenge-card scratch-script-card">
            <h3>Scratch Blocks to Try</h3>

            <div className="scratch-script">
              <div className="scratch-event-block">when green flag clicked</div>
              <div className="scratch-block challenge-block">
                <span>forever</span>
              </div>
              <div className="scratch-motion-block">next costume</div>
              <div className="scratch-motion-block">wait 0.2 seconds</div>
            </div>

            <div className="scratch-script">
              <div className="scratch-event-block">when space key pressed</div>
              <div className="scratch-block challenge-block">
                <span>repeat</span>
                <span className="scratch-input">10</span>
              </div>
              <div className="scratch-look-block">change color effect by 25</div>
            </div>
          </div>
        </div>
      </section>

      <section className="lesson-section loop-summary-section">
        <p className="eyebrow dark-eyebrow">Summary</p>
        <h2>Loops Help Programs Repeat</h2>

        <div className="summary-grid">
          <div className="summary-card">
            <h3>For Loop</h3>
            <p>Use it when you know exactly how many times to repeat.</p>
          </div>

          <div className="summary-card">
            <h3>While Loop</h3>
            <p>Use it when something should repeat until a condition changes.</p>
          </div>

          <div className="summary-card">
            <h3>Forever Loop</h3>
            <p>Use it when something should keep going while the project runs.</p>
          </div>
        </div>

        <p className="summary-closing">
          If you see a repeated action, pattern, animation, or check, a loop can
          probably help.
        </p>
      </section>
    </div>
  );
}

export default Loops;
