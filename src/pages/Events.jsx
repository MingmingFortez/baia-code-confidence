import { useState } from "react";
import Navbar from "../components/Navbar";
import ConceptPager from "../components/ConceptPager";
import "../App.css";

const realLifeEvents = [
  {
    icon: "🔔",
    title: "Doorbell",
    event: "When the doorbell rings",
    action: "someone answers the door.",
  },
  {
    icon: "📱",
    title: "Phone Tap",
    event: "When you tap an app",
    action: "the app opens.",
  },
  {
    icon: "🎮",
    title: "Game Button",
    event: "When the jump button is pressed",
    action: "the character jumps.",
  },
  {
    icon: "🟢",
    title: "Start Signal",
    event: "When the race starts",
    action: "everyone begins moving.",
  },
];

const eventTypes = [
  {
    title: "Green Flag Event",
    block: "when green flag clicked",
    meaning: "Starts code when the project begins.",
    example: "Set the score to 0 when the game starts.",
  },
  {
    title: "Key Press Event",
    block: "when space key pressed",
    meaning: "Runs code when a player presses a key.",
    example: "Make a sprite jump when space is pressed.",
  },
  {
    title: "Sprite Click Event",
    block: "when this sprite clicked",
    meaning: "Runs code when a player clicks a sprite.",
    example: "Add 1 point when a coin sprite is clicked.",
  },
];

const eventScenarios = [
  {
    id: "start-score",
    text: "Set score to 0 at the start of the project.",
    answer: "Green Flag Event",
  },
  {
    id: "jump-space",
    text: "Make the sprite jump when space is pressed.",
    answer: "Key Press Event",
  },
  {
    id: "click-coin",
    text: "Add a point when the player clicks a coin.",
    answer: "Sprite Click Event",
  },
  {
    id: "start-music",
    text: "Start background music when the game begins.",
    answer: "Green Flag Event",
  },
  {
    id: "arrow-move",
    text: "Move right when the right arrow key is pressed.",
    answer: "Key Press Event",
  },
  {
    id: "click-character",
    text: "Say hello when the player clicks the character.",
    answer: "Sprite Click Event",
  },
];

const eventBuckets = ["Green Flag Event", "Key Press Event", "Sprite Click Event"];

const eventQuizQuestions = [
  {
    question: "Which event usually starts a Scratch project?",
    choices: ["when green flag clicked", "when sprite clicked", "repeat 10"],
    answer: "when green flag clicked",
  },
  {
    question: "Which event is best for keyboard controls?",
    choices: ["Green Flag Event", "Key Press Event", "Sprite Click Event"],
    answer: "Key Press Event",
  },
  {
    question: "What does an event do?",
    choices: ["Stores a number", "Starts code when something happens", "Repeats forever"],
    answer: "Starts code when something happens",
  },
];

function Events() {
  const [currentExample, setCurrentExample] = useState(0);
  const [matchedEvents, setMatchedEvents] = useState({});
  const [selectedScenario, setSelectedScenario] = useState("");
  const [quizAnswers, setQuizAnswers] = useState({});

  const example = realLifeEvents[currentExample];

  const score = eventScenarios.reduce((total, scenario) => {
    return matchedEvents[scenario.id] === scenario.answer ? total + 1 : total;
  }, 0);

  const quizScore = eventQuizQuestions.reduce((total, question, index) => {
    return quizAnswers[index] === question.answer ? total + 1 : total;
  }, 0);

  const goToPrevious = () => {
    setCurrentExample((currentExample - 1 + realLifeEvents.length) % realLifeEvents.length);
  };

  const goToNext = () => {
    setCurrentExample((currentExample + 1) % realLifeEvents.length);
  };

  const handleDragStart = (event, scenarioId) => {
    event.dataTransfer.setData("text/plain", scenarioId);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event, eventType) => {
    event.preventDefault();

    const scenarioId = event.dataTransfer.getData("text/plain");

    if (!scenarioId) {
      return;
    }

    const updatedMatches = { ...matchedEvents };

    if (eventType) {
      updatedMatches[scenarioId] = eventType;
    } else {
      delete updatedMatches[scenarioId];
    }

    setMatchedEvents(updatedMatches);
    setSelectedScenario("");
  };

  const placeSelectedScenario = (eventType) => {
    if (!selectedScenario) {
      return;
    }

    setMatchedEvents({
      ...matchedEvents,
      [selectedScenario]: eventType,
    });
    setSelectedScenario("");
  };

  const resetPractice = () => {
    setMatchedEvents({});
    setSelectedScenario("");
  };

  const unmatchedScenarios = eventScenarios.filter((scenario) => !matchedEvents[scenario.id]);

  return (
    <div className="week-page">
      <Navbar />

      <section className="hero-section">
        <p className="eyebrow">Coding Concept</p>
        <h1>Events</h1>
        <p className="hero-subtitle">
          Events tell a program when to start running code.
        </p>
        <div className="hero-line"></div>
      </section>

      <section className="lesson-section">
        <h2>Real Life Examples</h2>
        <p>
          An event is something that happens. The program listens for the event,
          then runs the matching code.
        </p>

        <div className="event-carousel" aria-label="Real life event examples">
          <button
            className="carousel-button"
            type="button"
            onClick={goToPrevious}
            aria-label="Previous event example"
          >
            ‹
          </button>

          <article className="event-card">
            <div className="event-icon" aria-hidden="true">
              {example.icon}
            </div>
            <p className="loop-count">
              Example {currentExample + 1} of {realLifeEvents.length}
            </p>
            <h3>{example.title}</h3>
            <p className="event-line">
              <span>{example.event}</span>
              <span>{example.action}</span>
            </p>
          </article>

          <button
            className="carousel-button"
            type="button"
            onClick={goToNext}
            aria-label="Next event example"
          >
            ›
          </button>
        </div>

        <div className="carousel-dots" aria-label="Choose an event example">
          {realLifeEvents.map((item, index) => (
            <button
              className={`carousel-dot ${index === currentExample ? "active" : ""}`}
              type="button"
              key={item.title}
              onClick={() => setCurrentExample(index)}
              aria-label={`Show ${item.title}`}
              aria-pressed={index === currentExample}
            />
          ))}
        </div>
      </section>

      <section className="lesson-section event-types-section">
        <p className="eyebrow dark-eyebrow">Scratch Events</p>
        <h2>Types of Events</h2>
        <p>
          Scratch event blocks are usually the first block in a script. They wait
          for something to happen.
        </p>

        <div className="event-types-grid">
          {eventTypes.map((type) => (
            <article className="event-type-card" key={type.title}>
              <div className="event-scratch-block">{type.block}</div>
              <h3>{type.title}</h3>
              <p>{type.meaning}</p>

              <div className="loop-example-box">
                <span>Example</span>
                <p>{type.example}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="lesson-section practice-section">
        <p className="eyebrow dark-eyebrow">Practice</p>
        <h2>Match the Event</h2>
        <p>
          Drag each example into the event bucket that makes the most sense.
        </p>

        <div className="practice-toolbar">
          <div className="practice-score">
            Score: {score} / {eventScenarios.length}
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
              {unmatchedScenarios.map((scenario) => (
                <div
                  className={`match-card ${
                    selectedScenario === scenario.id ? "selected" : ""
                  }`}
                  draggable
                  key={scenario.id}
                  onClick={() => setSelectedScenario(scenario.id)}
                  onDragStart={(event) => handleDragStart(event, scenario.id)}
                  role="button"
                  tabIndex="0"
                >
                  {scenario.text}
                </div>
              ))}

              {unmatchedScenarios.length === 0 && (
                <p className="empty-zone-text">All examples have been sorted.</p>
              )}
            </div>
          </div>

          <div className="bucket-grid">
            {eventBuckets.map((bucket) => {
              const bucketItems = eventScenarios.filter(
                (scenario) => matchedEvents[scenario.id] === bucket,
              );

              return (
                <div
                  className="loop-bucket"
                  key={bucket}
                  onClick={() => placeSelectedScenario(bucket)}
                  onDragOver={handleDragOver}
                  onDrop={(event) => handleDrop(event, bucket)}
                >
                  <h3>{bucket}</h3>
                  <div className="drop-zone">
                    {bucketItems.map((scenario) => {
                      const isCorrect = scenario.answer === bucket;

                      return (
                        <div
                          className={`match-card sorted ${isCorrect ? "correct" : "wrong"}`}
                          draggable
                          key={scenario.id}
                          onClick={(event) => {
                            event.stopPropagation();
                            setSelectedScenario(scenario.id);
                          }}
                          onDragStart={(event) => handleDragStart(event, scenario.id)}
                          role="button"
                          tabIndex="0"
                        >
                          {scenario.text}
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

      <section className="lesson-section events-challenge-section">
        <p className="eyebrow dark-eyebrow">Scratch Challenge</p>
        <h2>Build a Click Game</h2>
        <p>
          Create a game where different events start different actions.
        </p>

        <div className="challenge-board">
          <div className="challenge-card">
            <h3>Your Mission</h3>
            <ul>
              <li>Use green flag to reset the game.</li>
              <li>Use a key press to move the sprite.</li>
              <li>Use sprite click to add a point.</li>
              <li>Add a sound when the player scores.</li>
            </ul>
          </div>

          <div className="challenge-card scratch-script-card">
            <h3>Scratch Blocks to Try</h3>
            <div className="scratch-script">
              <div className="event-scratch-block challenge-block">when green flag clicked</div>
              <div className="variable-block">set score to 0</div>
            </div>

            <div className="scratch-script">
              <div className="event-scratch-block challenge-block">when this sprite clicked</div>
              <div className="variable-block">change score by 1</div>
              <div className="scratch-look-block">play sound pop</div>
            </div>
          </div>
        </div>
      </section>

      <section className="lesson-section mini-quiz-section">
        <p className="eyebrow dark-eyebrow">Mini Quiz</p>
        <h2>Check Your Event Knowledge</h2>
        <p>Choose the best answer for each question.</p>

        <div className="mini-quiz-score">
          Quiz Score: {quizScore} / {eventQuizQuestions.length}
        </div>

        <div className="mini-quiz-list">
          {eventQuizQuestions.map((quizQuestion, questionIndex) => {
            const selectedAnswer = quizAnswers[questionIndex];

            return (
              <article className="mini-quiz-card" key={quizQuestion.question}>
                <h3>{quizQuestion.question}</h3>
                <div className="mini-quiz-choices">
                  {quizQuestion.choices.map((choice) => {
                    const isSelected = selectedAnswer === choice;
                    const isCorrectChoice = quizQuestion.answer === choice;
                    const showCorrect = selectedAnswer && isCorrectChoice;
                    const showWrong = isSelected && !isCorrectChoice;

                    return (
                      <button
                        className={`mini-quiz-choice ${isSelected ? "selected" : ""} ${
                          showCorrect ? "correct" : ""
                        } ${showWrong ? "wrong" : ""}`}
                        type="button"
                        key={choice}
                        onClick={() =>
                          setQuizAnswers({
                            ...quizAnswers,
                            [questionIndex]: choice,
                          })
                        }
                      >
                        {choice}
                      </button>
                    );
                  })}
                </div>

                {selectedAnswer && (
                  <p
                    className={`mini-quiz-feedback ${
                      selectedAnswer === quizQuestion.answer ? "correct" : "wrong"
                    }`}
                  >
                    {selectedAnswer === quizQuestion.answer
                      ? "Correct!"
                      : `Not quite. The answer is ${quizQuestion.answer}.`}
                  </p>
                )}
              </article>
            );
          })}
        </div>
      </section>

      <section className="lesson-section loop-summary-section events-summary-section">
        <p className="eyebrow dark-eyebrow">Summary</p>
        <h2>Events Start the Action</h2>
        <p>
          Events let your project wait for something to happen, then run the code
          connected to that event.
        </p>

        <div className="summary-grid">
          <div className="summary-card">
            <span>1</span>
            <h3>Green Flag</h3>
            <p>Use it to start or reset your project.</p>
          </div>

          <div className="summary-card">
            <span>2</span>
            <h3>Key Press</h3>
            <p>Use it when the player should control something with the keyboard.</p>
          </div>

          <div className="summary-card">
            <span>3</span>
            <h3>Sprite Click</h3>
            <p>Use it when clicking a sprite should cause an action.</p>
          </div>
        </div>

        <p className="summary-closing">
          If your project should respond to a player, an event can start it.
        </p>
      </section>

      <ConceptPager next={{ label: "Loops", path: "/loops" }} />
    </div>
  );
}

export default Events;
