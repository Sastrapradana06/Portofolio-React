
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Project from "./components/Project";

import AOS from "aos";
import 'aos/dist/aos.css'; 
import { useEffect } from "react";

function App() {

  useEffect(() => {
    AOS.init({
      once:true ,
    })
})

  return (
    <div className="h-[200vh]">
      <Navbar />
      <Home />
      <About />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
