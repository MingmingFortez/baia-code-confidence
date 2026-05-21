import { useState } from "react";
import Navbar from "../components/Navbar";
import Week3Pager from "../components/Week3Pager";
import "../App.css";

const projectChecklist = [
  "My project starts when the green flag is clicked.",
  "The player can interact with the project.",
  "My main action works.",
  "I used at least one event.",
  "I used at least one loop or repeated action.",
  "I used at least one conditional or choice.",
  "I tested and fixed at least one bug.",
  "I added a creative detail like sound, costume, backdrop, or message.",
];

function Week3Debug() {
  const [checkedItems, setCheckedItems] = useState({});

  const completedChecks = projectChecklist.filter((item) => checkedItems[item]).length;

  const toggleCheck = (item) => {
    setCheckedItems({
      ...checkedItems,
      [item]: !checkedItems[item],
    });
  };

  return (
    <div className="week-page">
      <Navbar />

      <section className="hero-section">
        <p className="eyebrow">Week 3</p>
        <h1>Debug and Polish</h1>
        <p className="hero-subtitle">
          Students test their project, fix bugs, and add creative finishing touches.
        </p>
        <div className="hero-line"></div>
      </section>

      <section className="lesson-section debugging-steps-section">
        <p className="eyebrow dark-eyebrow">Project Checklist</p>
        <h2>Is Your Project Ready?</h2>
        <p>
          Check each item after testing it in Scratch. If something is missing,
          go back and improve it.
        </p>

        <div className="debug-checklist-score">
          Checked: {completedChecks} / {projectChecklist.length}
        </div>

        <div className="debug-checklist">
          {projectChecklist.map((item) => (
            <label
              className={`debug-check-item ${checkedItems[item] ? "checked" : ""}`}
              key={item}
            >
              <input
                type="checkbox"
                checked={Boolean(checkedItems[item])}
                onChange={() => toggleCheck(item)}
              />
              <span>{item}</span>
            </label>
          ))}
        </div>
      </section>

      <section className="lesson-section loop-summary-section">
        <p className="eyebrow dark-eyebrow">Polish</p>
        <h2>Make It Feel Finished</h2>
        <p>
          Polish can be small: a sound, a message, a better backdrop, a costume
          change, a title screen, or a clearer ending.
        </p>
        <p className="summary-closing">
          A finished project does not need to be huge. It needs to work and make sense.
        </p>
      </section>

      <Week3Pager
        previous={{ label: "Code Project", path: "/week3/code" }}
        next={{ label: "Present", path: "/week3/presentation" }}
      />
    </div>
  );
}

export default Week3Debug;
