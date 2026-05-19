import { useState } from "react";
import Navbar from "../components/Navbar";
import ConceptPager from "../components/ConceptPager";
import "../App.css";

const realLifeConditionals = [
  {
    icon: "☔",
    title: "Rainy Day",
    condition: "If it is raining",
    result: "bring an umbrella.",
  },
  {
    icon: "🚦",
    title: "Traffic Light",
    condition: "If the light is green",
    result: "go.",
  },
  {
    icon: "🍪",
    title: "Snack Time",
    condition: "If homework is finished",
    result: "eat a snack.",
  },
  {
    icon: "🎮",
    title: "Game Controls",
    condition: "If the space key is pressed",
    result: "make the sprite jump.",
  },
];

const conditionalTypes = [
  {
    title: "If Statement",
    block: ["if", "touching edge?"],
    meaning: "An if statement checks one condition. If it is true, the code inside runs.",
    example: "If the sprite touches the edge, turn around.",
  },
  {
    title: "If Else Statement",
    block: ["if", "score > 10", "else"],
    meaning:
      "An if else statement gives the program two paths: one for true and one for false.",
    example: "If the score is over 10, say You win. Else, keep playing.",
  },
  {
    title: "Nested Conditional",
    block: ["if", "key pressed?", "if touching color?"],
    meaning:
      "A nested conditional is an if statement inside another if statement.",
    example: "If the key is pressed, then check if the sprite is touching a color.",
  },
];

const conditionalScenarios = [
  {
    id: "umbrella",
    text: "If it is raining, bring an umbrella.",
    answer: "If Statement",
  },
  {
    id: "game-win",
    text: "If score is 10, win. Else, keep playing.",
    answer: "If Else Statement",
  },
  {
    id: "double-check",
    text: "If space is pressed, then check if the sprite touches the platform.",
    answer: "Nested Conditional",
  },
  {
    id: "jump",
    text: "If the up arrow is pressed, jump.",
    answer: "If Statement",
  },
  {
    id: "light",
    text: "If the light is green, go. Else, stop.",
    answer: "If Else Statement",
  },
  {
    id: "secret-door",
    text: "If the player has a key, then check if they are touching the door.",
    answer: "Nested Conditional",
  },
];

const conditionalBuckets = ["If Statement", "If Else Statement", "Nested Conditional"];

const conditionalQuizQuestions = [
  {
    question: "What does a conditional do?",
    choices: ["Repeats code", "Checks a choice", "Changes costumes forever"],
    answer: "Checks a choice",
  },
  {
    question: "Which Scratch block gives two paths?",
    choices: ["if", "if else", "forever"],
    answer: "if else",
  },
  {
    question: "What is a nested conditional?",
    choices: ["A loop inside a loop", "An if inside another if", "A sprite costume"],
    answer: "An if inside another if",
  },
];

function Conditionals() {
  const [currentExample, setCurrentExample] = useState(0);
  const [matchedConditionals, setMatchedConditionals] = useState({});
  const [selectedScenario, setSelectedScenario] = useState("");
  const [quizAnswers, setQuizAnswers] = useState({});

  const example = realLifeConditionals[currentExample];

  const score = conditionalScenarios.reduce((total, scenario) => {
    return matchedConditionals[scenario.id] === scenario.answer ? total + 1 : total;
  }, 0);

  const quizScore = conditionalQuizQuestions.reduce((total, question, index) => {
    return quizAnswers[index] === question.answer ? total + 1 : total;
  }, 0);

  const goToPrevious = () => {
    setCurrentExample(
      (currentExample - 1 + realLifeConditionals.length) % realLifeConditionals.length,
    );
  };

  const goToNext = () => {
    setCurrentExample((currentExample + 1) % realLifeConditionals.length);
  };

  const handleDragStart = (event, scenarioId) => {
    event.dataTransfer.setData("text/plain", scenarioId);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event, conditionalType) => {
    event.preventDefault();

    const scenarioId = event.dataTransfer.getData("text/plain");

    if (!scenarioId) {
      return;
    }

    const updatedMatches = { ...matchedConditionals };

    if (conditionalType) {
      updatedMatches[scenarioId] = conditionalType;
    } else {
      delete updatedMatches[scenarioId];
    }

    setMatchedConditionals(updatedMatches);
    setSelectedScenario("");
  };

  const placeSelectedScenario = (conditionalType) => {
    if (!selectedScenario) {
      return;
    }

    setMatchedConditionals({
      ...matchedConditionals,
      [selectedScenario]: conditionalType,
    });
    setSelectedScenario("");
  };

  const resetPractice = () => {
    setMatchedConditionals({});
    setSelectedScenario("");
  };

  const unmatchedScenarios = conditionalScenarios.filter(
    (scenario) => !matchedConditionals[scenario.id],
  );

  return (
    <div className="week-page">
      <Navbar />

      <section className="hero-section">
        <p className="eyebrow">Coding Concept</p>
        <h1>Conditionals</h1>
        <p className="hero-subtitle">
          Conditionals help programs make choices by checking if something is true or false.
        </p>
        <div className="hero-line"></div>
      </section>

      <section className="lesson-section">
        <h2>Real Life Examples</h2>
        <p>
          Conditionals are like decisions. If something happens, then something
          else should happen next.
        </p>

        <div className="conditional-carousel" aria-label="Real life conditional examples">
          <button
            className="carousel-button"
            type="button"
            onClick={goToPrevious}
            aria-label="Previous conditional example"
          >
            ‹
          </button>

          <article className="conditional-card">
            <div className="conditional-icon" aria-hidden="true">
              {example.icon}
            </div>
            <p className="loop-count">
              Example {currentExample + 1} of {realLifeConditionals.length}
            </p>
            <h3>{example.title}</h3>
            <p className="if-then-line">
              <span>{example.condition}</span>
              <span>then {example.result}</span>
            </p>
          </article>

          <button
            className="carousel-button"
            type="button"
            onClick={goToNext}
            aria-label="Next conditional example"
          >
            ›
          </button>
        </div>

        <div className="carousel-dots" aria-label="Choose a conditional example">
          {realLifeConditionals.map((item, index) => (
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

      <section className="lesson-section conditional-types-section">
        <p className="eyebrow dark-eyebrow">Scratch Conditionals</p>
        <h2>Types of Conditionals</h2>
        <p>
          In Scratch, conditionals use sensing, operators, and control blocks to
          decide what should happen.
        </p>

        <div className="conditional-types-grid">
          {conditionalTypes.map((type) => (
            <article className="conditional-type-card" key={type.title}>
              <div className="conditional-scratch-block">
                <span>{type.block[0]}</span>
                <span className="scratch-input">{type.block[1]}</span>
                {type.block[2] && <span>{type.block[2]}</span>}
              </div>

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
        <h2>Match the Conditional</h2>
        <p>
          Drag each example into the conditional bucket that makes the most sense.
        </p>

        <div className="practice-toolbar">
          <div className="practice-score">
            Score: {score} / {conditionalScenarios.length}
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
            {conditionalBuckets.map((bucket) => {
              const bucketItems = conditionalScenarios.filter(
                (scenario) => matchedConditionals[scenario.id] === bucket,
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

      <section className="lesson-section conditionals-challenge-section">
        <p className="eyebrow dark-eyebrow">Scratch Challenge</p>
        <h2>Build a Choice Game</h2>
        <p>
          Create a sprite that reacts differently depending on what the player does.
        </p>

        <div className="challenge-board">
          <div className="challenge-card">
            <h3>Your Mission</h3>
            <ul>
              <li>Choose a sprite and a backdrop.</li>
              <li>Use an if block to check if a key is pressed.</li>
              <li>Use an if else block to make a win or keep playing choice.</li>
              <li>Add one sound or message when the player wins.</li>
            </ul>
          </div>

          <div className="challenge-card scratch-script-card">
            <h3>Scratch Blocks to Try</h3>
            <div className="scratch-script">
              <div className="scratch-event-block">when green flag clicked</div>
              <div className="conditional-scratch-block challenge-block">
                <span>if</span>
                <span className="scratch-input">space key pressed?</span>
              </div>
              <div className="scratch-motion-block">change y by 10</div>
            </div>

            <div className="scratch-script">
              <div className="scratch-event-block">when green flag clicked</div>
              <div className="conditional-scratch-block challenge-block">
                <span>if</span>
                <span className="scratch-input">score = 10</span>
                <span>else</span>
              </div>
              <div className="scratch-look-block">say You win!</div>
            </div>
          </div>
        </div>
      </section>

      <section className="lesson-section mini-quiz-section">
        <p className="eyebrow dark-eyebrow">Mini Quiz</p>
        <h2>Check Your Conditional Knowledge</h2>
        <p>Choose the best answer for each question.</p>

        <div className="mini-quiz-score">
          Quiz Score: {quizScore} / {conditionalQuizQuestions.length}
        </div>

        <div className="mini-quiz-list">
          {conditionalQuizQuestions.map((quizQuestion, questionIndex) => {
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

      <section className="lesson-section loop-summary-section conditionals-summary-section">
        <p className="eyebrow dark-eyebrow">Summary</p>
        <h2>Conditionals Help Programs Choose</h2>
        <p>
          Conditionals let your project check a situation and decide what should
          happen next.
        </p>

        <div className="summary-grid">
          <div className="summary-card">
            <span>1</span>
            <h3>If</h3>
            <p>Use it when one action should happen only when a condition is true.</p>
          </div>

          <div className="summary-card">
            <span>2</span>
            <h3>If Else</h3>
            <p>Use it when the program needs one path for true and another for false.</p>
          </div>

          <div className="summary-card">
            <span>3</span>
            <h3>Nested If</h3>
            <p>Use it when one decision needs another decision inside it.</p>
          </div>
        </div>

        <p className="summary-closing">
          If your project needs to make a choice, a conditional can help.
        </p>
      </section>

      <ConceptPager
        previous={{ label: "Loops", path: "/loops" }}
        next={{ label: "Variables", path: "/variables" }}
      />
    </div>
  );
}

export default Conditionals;
