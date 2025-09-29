import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Home} from "./pages/home";
import CharacterDetails from "./pages/characterDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/character/:id" element={<CharacterDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
