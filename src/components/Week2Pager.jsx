import { Link } from "react-router-dom";
import "../App.css";

function Week2Pager({ previous, next }) {
  return (
    <nav className="concept-pager week2-pager" aria-label="Week 2 project navigation">
      {previous ? (
        <Link className="concept-pager-link previous" to={previous.path}>
          <span>Back</span>
          {previous.label}
        </Link>
      ) : (
        <Link className="concept-pager-link previous" to="/week2">
          <span>Back</span>
          Week 2
        </Link>
      )}

      {next ? (
        <Link className="concept-pager-link next" to={next.path}>
          <span>Next</span>
          {next.label}
        </Link>
      ) : (
        <Link className="concept-pager-link next" to="/week3">
          <span>Next</span>
          Week 3
        </Link>
      )}
    </nav>
  );
}

export default Week2Pager;
