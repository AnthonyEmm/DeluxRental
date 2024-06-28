import React, { useState, useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";

const FAQ = () => {
  const [faqs, setFaqs] = useState([]);
  const [open, setOpen] = useState(null);

  useEffect(() => {
    fetch("/faq.json")
      .then((response) => response.json())
      .then((data) => setFaqs(data))
      .catch((error) => console.error("Error fetching FAQ data:", error));
  }, []);

  const toggleFAQ = (index) => {
    setOpen(open === index ? null : index);
  };

  return (
    <section id="faq" className="faq">
      <div className="max-w-3xl mx-auto p-6">
        <h2
          data-aos="fade-in"
          className="text-3xl font-bold mb-10 text-center 
          font-serif mt-20"
        >
          ✧ Frequently Asked Questions ✧
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border rounded-lg">
              <button
                className="w-full flex justify-between items-center p-4 text-left"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-medium font-serif">
                  {faq.question}
                </span>
                <svg
                  className={`w-6 h-6 transition-transform transform ${
                    open === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
                  open === index ? "max-h-screen" : "max-h-0"
                }`}
              >
                <div className="p-4 border-t font-serif">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
