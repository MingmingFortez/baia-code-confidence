import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Week1 from "./pages/Week1";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/week1" element={<Week1 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;