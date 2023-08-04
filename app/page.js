import React from "react";
import Header from "./components/Header/index.js";
import About from "./components/About/index.js";
import Skills from "./components/Skills/index.js";
import Contact from "./components/Contact/index.js";
import Footer from "./components/Footer/index.js";

export default function Home() {
  return (
    <div>
      <Header />		
      <About />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}
