import "./App.css";
import "./i18n";
import Home from "./Pages/Home";
import Whoweare from "./Pages/Whoweare";
import Contact from "./Pages/Contact/ContactComponent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/WhoWeAre" element={<Whoweare />} />
      </Routes>
    </Router>
  );
}

export default App;
