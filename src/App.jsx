import React from 'react';

import './App.css';
import './components/projects.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { First } from "./components/First";


function App() {
  
  return (
    <div className="App">
      <NavBar />
      <Banner />
   

      <Skills />

      <Projects />
      <Contact />
 
      <section
        className="h-screen bg-[#0800E1] bg-cover
    font-[Manrope] font-bold md:bg-top bg-center active"
      >
        <div className="flex static z-1000 justify-center text-center items-center h-3/4">
          <First />
        </div>
      </section>
    <Footer />
    </div>
  );
}

export default App;
