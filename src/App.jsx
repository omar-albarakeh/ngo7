import React, { useEffect } from "react";
import "./App.css";
import "./i18n";
import Home from "./Pages/Home";
import Whoweare from "./Pages/Whoweare";
import Contact from "./Pages/Contact/ContactComponent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";
import History from "./Pages/History";
import Gallery from "./Pages/Gallery";
// import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const dir = i18n.language === "ar" ? "rtl" : "ltr";
    document.documentElement.dir = dir;
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/WhoWeAre" element={<Whoweare />} />
        <Route path="/history" element={<History />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </Router>
  );
}

export default App;
