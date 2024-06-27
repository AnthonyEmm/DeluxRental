import React from "react";
import heroCar from "../../assets/Rolls.png";
import Main from "../../assets/Main.png";
import { HashLink as Link } from "react-router-hash-link";

const Hero = ({ theme }) => {
  return (
    <section id="home" className="home">
      <div className="container max-w-screen-xl h-screen flex">
        <div className="grid place-items-center grid-cols-1 sm:grid-cols-2">
          <div
            data-aos="zoom-in"
            data-aos-duration="1500"
            className="order-1 sm:order-2 mt-16 sm:mt-0"
          >
            <img
              src={theme === "dark" ? Main : heroCar}
              alt="Hero Car"
              className="w-full max-h-[70vh] sm:scale-105 drop-shadow-[2px 20px 6px rgba(0,0,0,0.50)]"
              style={{ paddingTop: "2rem" }}
            />
          </div>
          <div className="order-2 sm:order-1 space-y-5 sm:pr-16">
            <h1
              data-aos="fade-up"
              data-aos-delay="600"
              className="text-5xl font-semibold lg:text-7xl font-serif dark:text-white text-black"
            >
              <strong className="text-primary">Dream</strong> Cars
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="1000"
              className="font-serif font-semibold"
            >
              Experience luxury and convenience. Our premium car rentals ensure
              a seamless, stylish journey every time. Book now!
            </p>
            <Link smooth to="#contact">
              <button
                data-aos="fade-in"
                data-aos-delay="1500"
                className="btn bg-primary text-black px-6 py-3 mt-6
                rounded-full hover:bg-primary/80 duration-300 
                font-semibold font-serif uppercase"
              >
                Request Quote
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
