import { Link } from "react-router-dom";
import "../App.css";

function ConceptPager({ previous, next }) {
  return (
    <nav className="concept-pager" aria-label="Concept lesson navigation">
      {previous ? (
        <Link className="concept-pager-link previous" to={previous.path}>
          <span>Back</span>
          {previous.label}
        </Link>
      ) : (
        <Link className="concept-pager-link previous" to="/week1">
          <span>Back</span>
          Week 1
        </Link>
      )}

      {next ? (
        <Link className="concept-pager-link next" to={next.path}>
          <span>Next</span>
          {next.label}
        </Link>
      ) : (
        <Link className="concept-pager-link next" to="/week1">
          <span>Finish</span>
          Week 1
        </Link>
      )}
    </nav>
  );
}

export default ConceptPager;
