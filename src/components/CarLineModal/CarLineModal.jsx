import React from "react";
import PropTypes from "prop-types";
import { HashLink as Link } from "react-router-hash-link";

const Modal = ({ isOpen, onClose, car }) => {
  if (!isOpen || !car) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleButtonClick = () => {
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={handleOverlayClick}
    >
      <div
        className="bg-white dark:bg-dark dark:text-white rounded-lg p-6 relative 
        w-full max-w-md mx-auto text-black"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-2 dark:text-white text-4xl text-dark"
          onClick={onClose}
          aria-label="Close Modal"
        >
          &times;
        </button>
        <div>
          <img
            src={car.image}
            alt={car.name}
            className="w-full h-64 object-contain rounded-lg mb-4 overflow-hidden"
          />
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 dark:text-yellow-600 font-serif text-primary">
            {car.name}
          </h2>
          <p className="text-xl sm:text-2xl font-semibold mb-2 font-serif text-green-700">
            Rent Price: €{car.price}/Day
          </p>
          <div className="text-left">
            <h3 className="text-xl sm:text-2xl font-bold font-serif">
              Specifications:
            </h3>
            <ul className="list-disc ml-5 font-serif">
              {Object.keys(car.specifications).map((key) => (
                <li key={key} className="capitalize">
                  <span className="font-semibold">{key}: </span>
                  {car.specifications[key]}
                </li>
              ))}
            </ul>
          </div>
          <Link smooth to="#contact" className="flex justify-center">
            <button
              onClick={handleButtonClick}
              data-aos="fade-in"
              data-aos-delay="300"
              className="btn bg-primary text-black px-6 py-3 mt-6 rounded-full
               hover:bg-primary/80 duration-300 font-semibold font-serif uppercase"
            >
              Rent This Car
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
// PropTypes for the Modal component
Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  car: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    specifications: PropTypes.object.isRequired,
  }),
};

export default Modal;
