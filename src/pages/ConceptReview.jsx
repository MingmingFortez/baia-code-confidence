import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../App.css";

const reviewQuestions = [
  {
    question: "Which concept starts code when something happens?",
    choices: ["Events", "Variables", "Loops"],
    answer: "Events",
  },
  {
    question: "Which concept repeats actions?",
    choices: ["Loops", "Conditionals", "Strings"],
    answer: "Loops",
  },
  {
    question: "Which concept helps a project make a choice?",
    choices: ["Events", "Conditionals", "Sprites"],
    answer: "Conditionals",
  },
  {
    question: "Which variable type stores true or false?",
    choices: ["Integer", "String", "Boolean"],
    answer: "Boolean",
  },
  {
    question: "What should you do when your project does not work yet?",
    choices: ["Debug it", "Give up", "Delete the project"],
    answer: "Debug it",
  },
];

function ConceptReview() {
  const [answers, setAnswers] = useState({});

  const score = reviewQuestions.reduce((total, question, index) => {
    return answers[index] === question.answer ? total + 1 : total;
  }, 0);

  return (
    <div className="week-page">
      <Navbar />

      <section className="hero-section">
        <p className="eyebrow">Finish Week 1</p>
        <h1>Concept Review</h1>
        <p className="hero-subtitle">
          Show what you remember about Events, Loops, Conditionals, Variables,
          and Debugging.
        </p>
        <div className="hero-line"></div>
      </section>

      <section className="lesson-section concept-review-section">
        <p className="eyebrow dark-eyebrow">Mini Quiz</p>
        <h2>Week 1 Coding Concepts</h2>

        <p>
          Choose the best answer for each question. Correct answers turn green.
        </p>

        <div className="mini-quiz-score">
          Final Score: {score} / {reviewQuestions.length}
        </div>

        <div className="mini-quiz-list week1-quiz-list">
          {reviewQuestions.map((quizQuestion, questionIndex) => {
            const selectedAnswer = answers[questionIndex];

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
                          setAnswers({
                            ...answers,
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

        <div className="concept-review-actions">
          <Link className="week1-concept-pill" to="/week1">
            Back to Week 1
          </Link>
          <Link className="week1-concept-pill" to="/week2">
            Continue to Week 2
          </Link>
        </div>
      </section>
    </div>
  );
}

export default ConceptReview;
