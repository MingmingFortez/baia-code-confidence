import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Week1 from "./pages/Week1";
import Week2 from "./pages/Week2";
import Week3 from "./pages/Week3";
import Loops from "./pages/Loops";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/week1" element={<Week1 />} />
        <Route path="/week2" element={<Week2 />} />
        <Route path="/week3" element={<Week3 />} />
        <Route path="/loops" element={<Loops />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;