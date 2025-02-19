import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home";
import Project from "./pages/Projects/Project";
import SocialMedia from "./components/SocialMedia/SocialMedia";

function App() {
  return (
    <>
      <Navbar />
      <SocialMedia />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Project />} />
        </Routes>
      </BrowserRouter>
      <Contact />
      <Footer />
    </>
  );
}

export default App;
