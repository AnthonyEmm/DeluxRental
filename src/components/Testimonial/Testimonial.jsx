import React from "react";
import Banner from "../../assets/Site_browser.png";
import { Link } from "react-router-dom";
import Kate from "../../assets/nata.png";
import Man from "../../assets/Man.png";
import Regina from "../../assets/woman.png";

const Testimonial = () => {
  const Testimonials = [
    {
      name: "Kate P.",
      description:
        "DeluxRental exceeded my expectations with their outstanding service and luxury cars.",
      stars: "★ ★ ★ ★ ☆",
      image: Kate,
      aosDelay: "0",
    },
    {
      name: "Dietrich J.",
      description:
        "Affordable prices and top-notch vehicles. DeluxRental is my go-to for car rentals.",
      stars: "★ ★ ★ ★ ★",
      image: Man,
      aosDelay: "300",
    },
    {
      name: "Regina L.",
      description:
        "Fast, reliable, and exceptional customer service. DeluxRental made my choice seamless.",
      stars: "★ ★ ★ ★ ★",
      image: Regina,
      aosDelay: "500",
    },
  ];

  return (
    <section
      id="testimonial"
      className="testimonial dark:bg-black dark:text-white py-14 sm:pb-2"
    >
      <div className="container pb-14">
        {/* Section Header */}
        <div className="space-y-4 pb-12">
          <p
            data-aos="fade-in"
            className="text-3xl sm:text-4xl font-semibold font-serif text-center pt-20"
          >
            ❝ Testimonial ❞
          </p>
          <p data-aos="fade-in" className="text-center sm:px-44 font-serif">
            It's not what we say, but what is said about us...
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-black dark:text-white">
          {Testimonials.map((data) => (
            <div
              key={data.name}
              className="card text-center group space-y-3 sm:space-y-6 p-4 bg-gray-100 dark:bg-white/10 sm:py-12 duration-300 rounded-lg"
              data-aos="flip-up"
              data-aos-delay={data.aosDelay}
            >
              <div className="grid place-items-center">
                <img
                  className="h-20 w-20 rounded-full border:1px solid dark:bg-black bg-gray-300 object-cover"
                  src={data.image}
                  alt={`${data.name}'s photo`}
                />
              </div>
              <div className="text-2xl">{data.stars}</div>
              <p className="font-serif">❝{data.description}❞</p>
              <p className="font-semibold text-center font-serif">
                {data.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
