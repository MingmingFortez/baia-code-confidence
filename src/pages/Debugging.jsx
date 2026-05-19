import { useState } from "react";
import Navbar from "../components/Navbar";
import ConceptPager from "../components/ConceptPager";
import "../App.css";

const debuggingExamples = [
  {
    icon: "🧩",
    title: "Missing Block",
    bug: "The sprite does nothing.",
    fix: "Check if the code starts with an event block.",
  },
  {
    icon: "🎯",
    title: "Wrong Value",
    bug: "The score changes too much.",
    fix: "Check how much the variable changes by.",
  },
  {
    icon: "🔁",
    title: "Loop Problem",
    bug: "The sprite never stops moving.",
    fix: "Check if a forever loop should be a repeat until loop.",
  },
  {
    icon: "🕹️",
    title: "Control Bug",
    bug: "The key press does not work.",
    fix: "Check if the correct key is selected in the event block.",
  },
];

const debuggingSteps = [
  {
    title: "Notice",
    meaning: "Look closely at what the project is doing.",
    prompt: "What did I expect to happen?",
  },
  {
    title: "Test",
    meaning: "Try one small change at a time.",
    prompt: "What changed after I tested it?",
  },
  {
    title: "Fix",
    meaning: "Update the code and test again.",
    prompt: "Did the project work better?",
  },
];

const bugScenarios = [
  {
    id: "no-start",
    text: "My sprite does nothing when I press the green flag.",
    answer: "Check Event",
  },
  {
    id: "wrong-score",
    text: "My score jumps from 0 to 10 after one click.",
    answer: "Check Variable",
  },
  {
    id: "never-stops",
    text: "My sprite keeps moving and never stops.",
    answer: "Check Loop",
  },
  {
    id: "space-key",
    text: "My sprite jumps when I press A, but I wanted space.",
    answer: "Check Event",
  },
  {
    id: "score-down",
    text: "My score goes down when it should go up.",
    answer: "Check Variable",
  },
  {
    id: "repeat-too-long",
    text: "My animation repeats way more times than I planned.",
    answer: "Check Loop",
  },
];

const bugBuckets = ["Check Event", "Check Variable", "Check Loop"];

const debuggingQuizQuestions = [
  {
    question: "What should you do first when something does not work?",
    choices: ["Delete everything", "Notice what is happening", "Start a new project"],
    answer: "Notice what is happening",
  },
  {
    question: "Why should you test one small change at a time?",
    choices: ["It helps you find the bug", "It makes code longer", "It hides mistakes"],
    answer: "It helps you find the bug",
  },
  {
    question: "If a sprite does nothing, what should you check?",
    choices: ["The event block", "The backdrop color", "The project title"],
    answer: "The event block",
  },
];

function Debugging() {
  const [currentExample, setCurrentExample] = useState(0);
  const [matchedBugs, setMatchedBugs] = useState({});
  const [selectedBug, setSelectedBug] = useState("");
  const [quizAnswers, setQuizAnswers] = useState({});

  const example = debuggingExamples[currentExample];

  const score = bugScenarios.reduce((total, scenario) => {
    return matchedBugs[scenario.id] === scenario.answer ? total + 1 : total;
  }, 0);

  const quizScore = debuggingQuizQuestions.reduce((total, question, index) => {
    return quizAnswers[index] === question.answer ? total + 1 : total;
  }, 0);

  const goToPrevious = () => {
    setCurrentExample((currentExample - 1 + debuggingExamples.length) % debuggingExamples.length);
  };

  const goToNext = () => {
    setCurrentExample((currentExample + 1) % debuggingExamples.length);
  };

  const handleDragStart = (event, bugId) => {
    event.dataTransfer.setData("text/plain", bugId);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event, bugType) => {
    event.preventDefault();

    const bugId = event.dataTransfer.getData("text/plain");

    if (!bugId) {
      return;
    }

    const updatedMatches = { ...matchedBugs };

    if (bugType) {
      updatedMatches[bugId] = bugType;
    } else {
      delete updatedMatches[bugId];
    }

    setMatchedBugs(updatedMatches);
    setSelectedBug("");
  };

  const placeSelectedBug = (bugType) => {
    if (!selectedBug) {
      return;
    }

    setMatchedBugs({
      ...matchedBugs,
      [selectedBug]: bugType,
    });
    setSelectedBug("");
  };

  const resetPractice = () => {
    setMatchedBugs({});
    setSelectedBug("");
  };

  const unmatchedBugs = bugScenarios.filter((scenario) => !matchedBugs[scenario.id]);

  return (
    <div className="week-page">
      <Navbar />

      <section className="hero-section">
        <p className="eyebrow">Coding Skill</p>
        <h1>Debugging</h1>
        <p className="hero-subtitle">
          Debugging means finding and fixing problems in your code.
        </p>
        <div className="hero-line"></div>
      </section>

      <section className="lesson-section">
        <h2>Common Bugs</h2>
        <p>
          A bug is a problem in a project. Debugging is how coders figure out
          what went wrong and try a fix.
        </p>

        <div className="debug-carousel" aria-label="Common debugging examples">
          <button
            className="carousel-button"
            type="button"
            onClick={goToPrevious}
            aria-label="Previous debugging example"
          >
            ‹
          </button>

          <article className="debug-card">
            <div className="debug-icon" aria-hidden="true">
              {example.icon}
            </div>
            <p className="loop-count">
              Example {currentExample + 1} of {debuggingExamples.length}
            </p>
            <h3>{example.title}</h3>
            <div className="debug-fix-box">
              <p>
                <span>Bug:</span> {example.bug}
              </p>
              <p>
                <span>Try:</span> {example.fix}
              </p>
            </div>
          </article>

          <button
            className="carousel-button"
            type="button"
            onClick={goToNext}
            aria-label="Next debugging example"
          >
            ›
          </button>
        </div>

        <div className="carousel-dots" aria-label="Choose a debugging example">
          {debuggingExamples.map((item, index) => (
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

      <section className="lesson-section debugging-steps-section">
        <p className="eyebrow dark-eyebrow">Debugging Process</p>
        <h2>Notice, Test, Fix</h2>
        <p>
          Debugging works best when you slow down and test one thing at a time.
        </p>

        <div className="debugging-steps-grid">
          {debuggingSteps.map((step, index) => (
            <article className="debugging-step-card" key={step.title}>
              <span>{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.meaning}</p>
              <div>{step.prompt}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="lesson-section practice-section">
        <p className="eyebrow dark-eyebrow">Practice</p>
        <h2>What Should You Check?</h2>
        <p>
          Drag each bug into the bucket that tells what you should check first.
        </p>

        <div className="practice-toolbar">
          <div className="practice-score">
            Score: {score} / {bugScenarios.length}
          </div>
          <button className="reset-practice-button" type="button" onClick={resetPractice}>
            Reset
          </button>
        </div>

        <div className="matching-game">
          <div className="word-bank">
            <h3>Bugs</h3>
            <div
              className="drop-zone word-bank-zone"
              onDragOver={handleDragOver}
              onDrop={(event) => handleDrop(event, "")}
            >
              {unmatchedBugs.map((scenario) => (
                <div
                  className={`match-card ${selectedBug === scenario.id ? "selected" : ""}`}
                  draggable
                  key={scenario.id}
                  onClick={() => setSelectedBug(scenario.id)}
                  onDragStart={(event) => handleDragStart(event, scenario.id)}
                  role="button"
                  tabIndex="0"
                >
                  {scenario.text}
                </div>
              ))}

              {unmatchedBugs.length === 0 && (
                <p className="empty-zone-text">All bugs have been sorted.</p>
              )}
            </div>
          </div>

          <div className="bucket-grid">
            {bugBuckets.map((bucket) => {
              const bucketItems = bugScenarios.filter(
                (scenario) => matchedBugs[scenario.id] === bucket,
              );

              return (
                <div
                  className="loop-bucket"
                  key={bucket}
                  onClick={() => placeSelectedBug(bucket)}
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
                            setSelectedBug(scenario.id);
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
                      <p className="empty-zone-text">Drop bugs here.</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="lesson-section debugging-challenge-section">
        <p className="eyebrow dark-eyebrow">Scratch Challenge</p>
        <h2>Debug a Broken Project</h2>
        <p>
          Create a tiny project, break one thing on purpose, then trade with a
          partner to debug it.
        </p>

        <div className="challenge-board">
          <div className="challenge-card">
            <h3>Your Mission</h3>
            <ul>
              <li>Build a sprite that moves when the green flag is clicked.</li>
              <li>Break one thing: remove an event, change a value, or use the wrong key.</li>
              <li>Ask a partner to find the bug.</li>
              <li>Explain what the bug was and how it was fixed.</li>
            </ul>
          </div>

          <div className="challenge-card scratch-script-card">
            <h3>Debugging Questions</h3>
            <div className="debug-question-list">
              <p>What did I expect to happen?</p>
              <p>What actually happened?</p>
              <p>Which block should I check first?</p>
              <p>What one change can I test?</p>
            </div>
          </div>
        </div>
      </section>

      <section className="lesson-section mini-quiz-section">
        <p className="eyebrow dark-eyebrow">Mini Quiz</p>
        <h2>Check Your Debugging Knowledge</h2>
        <p>Choose the best answer for each question.</p>

        <div className="mini-quiz-score">
          Quiz Score: {quizScore} / {debuggingQuizQuestions.length}
        </div>

        <div className="mini-quiz-list">
          {debuggingQuizQuestions.map((quizQuestion, questionIndex) => {
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

      <section className="lesson-section loop-summary-section debugging-summary-section">
        <p className="eyebrow dark-eyebrow">Summary</p>
        <h2>Debugging Helps You Keep Going</h2>
        <p>
          Bugs are normal. Debugging is the process of noticing, testing, and
          fixing one thing at a time.
        </p>

        <div className="summary-grid">
          <div className="summary-card">
            <span>1</span>
            <h3>Notice</h3>
            <p>Describe what happened and what you expected.</p>
          </div>

          <div className="summary-card">
            <span>2</span>
            <h3>Test</h3>
            <p>Try one small change so you know what fixed the problem.</p>
          </div>

          <div className="summary-card">
            <span>3</span>
            <h3>Fix</h3>
            <p>Keep the change that works, then test the project again.</p>
          </div>
        </div>

        <p className="summary-closing">
          If your code does not work yet, that does not mean you failed. It means
          you are debugging.
        </p>
      </section>

      <ConceptPager
        previous={{ label: "Variables", path: "/variables" }}
        next={{ label: "Mini Quiz", path: "/concept-review" }}
      />
    </div>
  );
}

export default Debugging;
