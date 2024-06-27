import React from "react";
import { RiCustomerService2Line } from "react-icons/ri";
import { GiMoneyStack } from "react-icons/gi";
import { LiaShippingFastSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

const Services = () => {
  const skillsData = [
    {
      name: "Excellent Service",
      icon: (
        <RiCustomerService2Line className="text-5xl text-primary group-hover:text-black duration-300" />
      ),
      description: "Unmatched customer care, always exceeding expectations",
      aosDelay: "500",
    },
    {
      name: "Great Price",
      icon: (
        <GiMoneyStack className="text-5xl text-primary group-hover:text-black duration-300" />
      ),
      description: "Competitive pricing without compromising on quality",
      aosDelay: "500",
    },
    {
      name: "Fast & Reliable",
      icon: (
        <LiaShippingFastSolid className="text-5xl text-primary group-hover:text-black duration-300" />
      ),
      description: "Prompt and dependable delivery, every time.",
      aosDelay: "1000",
    },
  ];

  return (
    <section id="services" className="services">
      <div className="py-14 dark:bg-black dark:text-white sm:min-h-[600px] sm:grid sm:place-items-center min-h-screen">
        <div className="container max-w-screen-xl mt-16 mb-16">
          <div className="pb-12">
            <h1 className="text-3xl font-semibold text-center font-serif sm:text-4xl">
              ✧ What We Do ✧
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {skillsData.map((skill) => (
              <div
                key={skill.name}
                data-aos="flip-right"
                data-aos-delay={skill.aosDelay}
                className="card text-center group space-y-3 sm:space-y-6 p-4 sm:p-8 bg-dark rounded-lg hover:bg-primary/80 duration-300 text-white hover:text-black"
              >
                <div className="grid place-items-center">{skill.icon}</div>
                <h1 className="font-serif text-xl sm:text-2xl font-semibold">
                  {skill.name}
                </h1>
                <p className="font-serif">{skill.description}</p>
                <p>✔️</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
