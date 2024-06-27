import React, { useState } from "react";
import ContactFormModal from "../ContactFormModal/ContactFormModal";

const Contact = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleModalOpen = () => {
    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
  };

  return (
    <section id="contact" className="contact">
      <div data-aos="zoom-in" className="dark:bg-black dark:text-white py-14">
        <div className="container min-h-[50%]">
          <div
            className="grid grid-cols-1 sm:grid-cols-3
        gap-6 bg-gray-800 py-8 px-6 rounded-lg"
          >
            <div className="col-span-2 space-y-3">
              <h1 className="text-4xl sm:text-5xl font-bold text-white font-serif">
                Connect with us. We'll be Glad to assist you →
              </h1>
              <p className="text-gray-400 font-serif">
                We provide you with the best service. Contact one of our
                professionals. We will get back to you promptly.
              </p>
            </div>
            <div className="grid place-items-center">
              <button
                onClick={handleModalOpen}
                className="inline-block font-semibold py-2 px-6 bg-primary font-serif
              rounded-full tracking-wider uppercase hover:bg-primary/80 duration-300"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>
      <ContactFormModal isVisible={isModalVisible} onClose={handleModalClose} />
    </section>
  );
};

export default Contact;
