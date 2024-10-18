import "./App.css";
import Header from "./Components/Header/Header";
import NavBar from "./Components/NavBar/NavBar";
import SkillsandEducation from "./Components/SkillsandEducation/SkillsandEducation";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/SkillsandEducation" element={<SkillsandEducation />} />

        <Route path="/Projects" element={<Projects />} />
      </Routes>
      <NavBar />
    </>
  );
}

export default App;
