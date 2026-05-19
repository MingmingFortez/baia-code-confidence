import { useState } from "react";
import Navbar from "../components/Navbar";
import ConceptPager from "../components/ConceptPager";
import "../App.css";

const realLifeVariables = [
  {
    icon: "🏷️",
    title: "Name Tag",
    variable: "name",
    value: '"Aaliyah"',
    meaning: "A name tag stores a person's name.",
  },
  {
    icon: "🎮",
    title: "Game Score",
    variable: "score",
    value: "25",
    meaning: "A score variable stores a number that can change.",
  },
  {
    icon: "🔓",
    title: "Door Lock",
    variable: "isUnlocked",
    value: "true",
    meaning: "A lock can store true or false.",
  },
  {
    icon: "🛒",
    title: "Shopping Cart",
    variable: "items",
    value: "3",
    meaning: "A cart can store how many items are inside.",
  },
];

const variableTypes = [
  {
    title: "Integer",
    value: "42",
    meaning: "An integer is a whole number with no decimal.",
    example: "score = 10",
  },
  {
    title: "String",
    value: '"hello"',
    meaning: "A string is text. It usually has quotation marks around it.",
    example: 'playerName = "Maya"',
  },
  {
    title: "Boolean",
    value: "true",
    meaning: "A boolean is either true or false.",
    example: "gameOver = false",
  },
];

const variableScenarios = [
  {
    id: "lives",
    text: "lives = 3",
    answer: "Integer",
  },
  {
    id: "username",
    text: 'username = "BAIA coder"',
    answer: "String",
  },
  {
    id: "is-jumping",
    text: "isJumping = true",
    answer: "Boolean",
  },
  {
    id: "level",
    text: "level = 8",
    answer: "Integer",
  },
  {
    id: "message",
    text: 'message = "You win!"',
    answer: "String",
  },
  {
    id: "has-key",
    text: "hasKey = false",
    answer: "Boolean",
  },
];

const variableBuckets = ["Integer", "String", "Boolean"];

const variableQuizQuestions = [
  {
    question: "Which value is an integer?",
    choices: ['"cat"', "12", "false"],
    answer: "12",
  },
  {
    question: "Which value is a string?",
    choices: ["true", "45", '"hello"'],
    answer: '"hello"',
  },
  {
    question: "Which type can only be true or false?",
    choices: ["Integer", "String", "Boolean"],
    answer: "Boolean",
  },
];

function Variables() {
  const [currentExample, setCurrentExample] = useState(0);
  const [matchedVariables, setMatchedVariables] = useState({});
  const [selectedScenario, setSelectedScenario] = useState("");
  const [quizAnswers, setQuizAnswers] = useState({});

  const example = realLifeVariables[currentExample];

  const score = variableScenarios.reduce((total, scenario) => {
    return matchedVariables[scenario.id] === scenario.answer ? total + 1 : total;
  }, 0);

  const quizScore = variableQuizQuestions.reduce((total, question, index) => {
    return quizAnswers[index] === question.answer ? total + 1 : total;
  }, 0);

  const goToPrevious = () => {
    setCurrentExample((currentExample - 1 + realLifeVariables.length) % realLifeVariables.length);
  };

  const goToNext = () => {
    setCurrentExample((currentExample + 1) % realLifeVariables.length);
  };

  const handleDragStart = (event, scenarioId) => {
    event.dataTransfer.setData("text/plain", scenarioId);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event, variableType) => {
    event.preventDefault();

    const scenarioId = event.dataTransfer.getData("text/plain");

    if (!scenarioId) {
      return;
    }

    const updatedMatches = { ...matchedVariables };

    if (variableType) {
      updatedMatches[scenarioId] = variableType;
    } else {
      delete updatedMatches[scenarioId];
    }

    setMatchedVariables(updatedMatches);
    setSelectedScenario("");
  };

  const placeSelectedScenario = (variableType) => {
    if (!selectedScenario) {
      return;
    }

    setMatchedVariables({
      ...matchedVariables,
      [selectedScenario]: variableType,
    });
    setSelectedScenario("");
  };

  const resetPractice = () => {
    setMatchedVariables({});
    setSelectedScenario("");
  };

  const unmatchedScenarios = variableScenarios.filter(
    (scenario) => !matchedVariables[scenario.id],
  );

  return (
    <div className="week-page">
      <Navbar />

      <section className="hero-section">
        <p className="eyebrow">Coding Concept</p>
        <h1>Variables</h1>
        <p className="hero-subtitle">
          Variables store information so a program can remember and use it later.
        </p>
        <div className="hero-line"></div>
      </section>

      <section className="lesson-section">
        <h2>Real Life Examples</h2>
        <p>
          A variable is like a labeled container. The label is the variable name,
          and the value is what is stored inside.
        </p>

        <div className="variable-carousel" aria-label="Real life variable examples">
          <button
            className="carousel-button"
            type="button"
            onClick={goToPrevious}
            aria-label="Previous variable example"
          >
            ‹
          </button>

          <article className="variable-card">
            <div className="variable-icon" aria-hidden="true">
              {example.icon}
            </div>
            <p className="loop-count">
              Example {currentExample + 1} of {realLifeVariables.length}
            </p>
            <h3>{example.title}</h3>
            <div className="variable-equation">
              <span>{example.variable}</span>
              <span>=</span>
              <span>{example.value}</span>
            </div>
            <p>{example.meaning}</p>
          </article>

          <button
            className="carousel-button"
            type="button"
            onClick={goToNext}
            aria-label="Next variable example"
          >
            ›
          </button>
        </div>

        <div className="carousel-dots" aria-label="Choose a variable example">
          {realLifeVariables.map((item, index) => (
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

      <section className="lesson-section variable-types-section">
        <p className="eyebrow dark-eyebrow">Variable Types</p>
        <h2>Integer, String, Boolean</h2>
        <p>
          Different variable types store different kinds of information.
        </p>

        <div className="variable-types-grid">
          {variableTypes.map((type) => (
            <article className="variable-type-card" key={type.title}>
              <div className="variable-value-badge">{type.value}</div>
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
        <h2>Match the Variable Type</h2>
        <p>
          Drag each value into the type bucket that makes the most sense.
        </p>

        <div className="practice-toolbar">
          <div className="practice-score">
            Score: {score} / {variableScenarios.length}
          </div>
          <button className="reset-practice-button" type="button" onClick={resetPractice}>
            Reset
          </button>
        </div>

        <div className="matching-game">
          <div className="word-bank">
            <h3>Values</h3>
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
                <p className="empty-zone-text">All values have been sorted.</p>
              )}
            </div>
          </div>

          <div className="bucket-grid">
            {variableBuckets.map((bucket) => {
              const bucketItems = variableScenarios.filter(
                (scenario) => matchedVariables[scenario.id] === bucket,
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
                      <p className="empty-zone-text">Drop values here.</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="lesson-section variables-challenge-section">
        <p className="eyebrow dark-eyebrow">Scratch Challenge</p>
        <h2>Build a Score Tracker</h2>
        <p>
          Create variables that remember a player's score, name, and whether the
          game is over.
        </p>

        <div className="challenge-board">
          <div className="challenge-card">
            <h3>Your Mission</h3>
            <ul>
              <li>Create a score variable and start it at 0.</li>
              <li>Create a playerName variable that stores text.</li>
              <li>Create a gameOver variable that can be true or false.</li>
              <li>Change the score when the sprite collects an item.</li>
            </ul>
          </div>

          <div className="challenge-card scratch-script-card">
            <h3>Scratch Blocks to Try</h3>
            <div className="scratch-script">
              <div className="scratch-event-block">when green flag clicked</div>
              <div className="variable-block">set score to 0</div>
              <div className="variable-block">set playerName to BAIA coder</div>
              <div className="variable-block">set gameOver to false</div>
            </div>

            <div className="scratch-script">
              <div className="scratch-event-block">when sprite clicked</div>
              <div className="variable-block">change score by 1</div>
              <div className="scratch-look-block">say score</div>
            </div>
          </div>
        </div>
      </section>

      <section className="lesson-section mini-quiz-section">
        <p className="eyebrow dark-eyebrow">Mini Quiz</p>
        <h2>Check Your Variable Knowledge</h2>
        <p>Choose the best answer for each question.</p>

        <div className="mini-quiz-score">
          Quiz Score: {quizScore} / {variableQuizQuestions.length}
        </div>

        <div className="mini-quiz-list">
          {variableQuizQuestions.map((quizQuestion, questionIndex) => {
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

      <section className="lesson-section loop-summary-section variables-summary-section">
        <p className="eyebrow dark-eyebrow">Summary</p>
        <h2>Variables Help Programs Remember</h2>
        <p>
          Variables store values that a project can use, update, and check while
          it runs.
        </p>

        <div className="summary-grid">
          <div className="summary-card">
            <span>1</span>
            <h3>Integer</h3>
            <p>Use it for whole numbers like score, lives, or level.</p>
          </div>

          <div className="summary-card">
            <span>2</span>
            <h3>String</h3>
            <p>Use it for text like names, messages, or labels.</p>
          </div>

          <div className="summary-card">
            <span>3</span>
            <h3>Boolean</h3>
            <p>Use it for true or false states like gameOver or hasKey.</p>
          </div>
        </div>

        <p className="summary-closing">
          If your project needs to remember information, a variable can help.
        </p>
      </section>

      <ConceptPager
        previous={{ label: "Conditionals", path: "/conditionals" }}
        next={{ label: "Debugging", path: "/debugging" }}
      />
    </div>
  );
}

export default Variables;
