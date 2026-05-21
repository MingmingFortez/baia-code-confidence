import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Week1 from "./pages/Week1";
import Week2 from "./pages/Week2";
import Week2Algorithm from "./pages/Week2Algorithm";
import Week2PingPongAlgorithm from "./pages/Week2PingPongAlgorithm";
import Week2Setup from "./pages/Week2Setup";
import Week2Code from "./pages/Week2Code";
import Week2Project from "./pages/Week2Project";
import Week3 from "./pages/Week3";
import Week3Algorithm from "./pages/Week3Algorithm";
import Week3Code from "./pages/Week3Code";
import Week3Debug from "./pages/Week3Debug";
import Week3Presentation from "./pages/Week3Presentation";
import Week3Celebrate from "./pages/Week3Celebrate";
import Loops from "./pages/Loops";
import Conditionals from "./pages/Conditionals";
import Variables from "./pages/Variables";
import Events from "./pages/Events";
import Debugging from "./pages/Debugging";
import ConceptReview from "./pages/ConceptReview";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/week1" element={<Week1 />} />
        <Route path="/week2" element={<Week2 />} />
        <Route path="/week2/algorithm" element={<Week2Algorithm />} />
        <Route path="/week2/pingpong-algorithm" element={<Week2PingPongAlgorithm />} />
        <Route path="/week2/setup" element={<Week2Setup />} />
        <Route path="/week2/code" element={<Week2Code />} />
        <Route path="/week2/your-project" element={<Week2Project />} />
        <Route path="/week3" element={<Week3 />} />
        <Route path="/week3/algorithm" element={<Week3Algorithm />} />
        <Route path="/week3/code" element={<Week3Code />} />
        <Route path="/week3/debug" element={<Week3Debug />} />
        <Route path="/week3/presentation" element={<Week3Presentation />} />
        <Route path="/week3/celebrate" element={<Week3Celebrate />} />
        <Route path="/loops" element={<Loops />} />
        <Route path="/conditionals" element={<Conditionals />} />
        <Route path="/variables" element={<Variables />} />
        <Route path="/events" element={<Events />} />
        <Route path="/debugging" element={<Debugging />} />
        <Route path="/concept-review" element={<ConceptReview />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
