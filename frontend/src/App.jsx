import { Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Detect from "./pages/Detect";
import Result from "./pages/Result";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/detect" element={<Detect />} />
      <Route path="/result" element={<Result />} />
    </Routes>
  );
}

export default App;