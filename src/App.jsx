import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './App.css'
import Header from "../components/Header/Header";
import Home from "../components/Home/Home";
import AboutMe from "../components/AboutMe/AboutMe";
import Technologies from "../components/Technologies/Technologies";
import { Contact } from '../components/Contact/Contact';

function App() {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/technologies" element={<Technologies />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
};

export default App
