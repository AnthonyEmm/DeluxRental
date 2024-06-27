import React from "react";
import Avantador from "../../assets/Avantador.png";
import { HashLink as Link } from "react-router-hash-link";

const About = () => {
  return (
    <section id="aboutus" className="aboutus">
      <div className="dark:bg-black bg-slate-100 dark:text-white duration-300 sm:h-screen sm:grid sm:place-items-center">
        <div className="container max-w-screen-xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
            <div data-aos="slide-right" data-aos-duration="1500">
              <img
                src={Avantador}
                alt="about car picture"
                className="w-full max-h-[70vh] sm:scale-105 drop-shadow-[2px 10px 6px rgba(0,0,0,0.50)] mt-28 mb-16"
              />
            </div>
            <div>
              <div className="space-y-5 sm:p-16 pb-6">
                <h1
                  data-aos="fade-up"
                  className="text-3xl sm:text-4xl font-bold font-serif"
                >
                  ✧ Who We Are ✧
                </h1>
                <p data-aos="flip-down" className="font-serif font-semibold">
                  DeluxRental offers top-tier car rental services, focusing on
                  luxury, reliability, and customer satisfaction.
                </p>

                <p data-aos="flip-down" className="font-serif font-semibold">
                  Our diverse fleet and exceptional support ensure an
                  unparalleled driving experience.
                </p>
                <Link smooth to="#our-cars">
                  <button
                    data-aos="zoom-in"
                    className="button-outline font-serif mt-6 uppercase"
                  >
                    Discover
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
