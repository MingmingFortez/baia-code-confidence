import { Link } from "react-router-dom";
import "../App.css";

function Week3Pager({ previous, next }) {
  return (
    <nav className="concept-pager week3-pager" aria-label="Week 3 project navigation">
      {previous ? (
        <Link className="concept-pager-link previous" to={previous.path}>
          <span>Back</span>
          {previous.label}
        </Link>
      ) : (
        <Link className="concept-pager-link previous" to="/week3">
          <span>Back</span>
          Week 3
        </Link>
      )}

      {next ? (
        <Link className="concept-pager-link next" to={next.path}>
          <span>Next</span>
          {next.label}
        </Link>
      ) : (
        <Link className="concept-pager-link next" to="/week3">
          <span>Finish</span>
          Week 3
        </Link>
      )}
    </nav>
  );
}

export default Week3Pager;
