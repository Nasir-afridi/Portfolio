import Navbar from "./components/Navbar/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Projects";
import Technologies from "./pages/Technologies";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/technologies" element={<Technologies />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
