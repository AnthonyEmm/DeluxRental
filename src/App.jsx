import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Services from "./components/OurServices/Services";
import Cars from "./components/CarLine/Cars";
import Testimonial from "./components/Testimonial/Testimonial";
import AppStore from "./components/AppStore/AppStore";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import CarsCarousel from "./components/CarsCarousel/CarsCarousel";

// AOS Dependencies
import AOS from "aos";
import "aos/dist/aos.css";
import FAQ from "./components/FAQ/FAQ";

const App = () => {
  //Feature for dark mode theme
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light",
  );

  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  // AOS Initialization
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <BrowserRouter>
        <div className="bg-white dark:bg-black dark:text-white">
          <Navbar theme={theme} setTheme={setTheme} />
          <Hero theme={theme} />
          <About />
          <Services />
          <Cars />
          <Testimonial />
          <CarsCarousel />
          <AppStore />
          <Contact />
          <FAQ />
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
