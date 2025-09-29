import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { CharacterDetails } from "./pages/characterDetail";
import DefaultLayout from "./layout/defaultLayout";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index element={<Home />} />
          <Route path="character" element={<CharacterDetails />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
