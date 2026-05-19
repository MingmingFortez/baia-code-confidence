import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Week1 from "./pages/Week1";
import Week2 from "./pages/Week2";
import Week3 from "./pages/Week3";
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
        <Route path="/week3" element={<Week3 />} />
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
