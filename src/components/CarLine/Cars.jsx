import React, { useState, useEffect } from "react";
import Modal from "../../components/CarLineModal/CarLineModal";
import { HashLink as Link } from "react-router-hash-link";

const Cars = () => {
  const [carData, setCarData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch("/cars.json")
      .then((response) => response.json())
      .then((data) => setCarData(data))
      .catch((error) => console.error("Error fetching car data:", error));
  }, []);

  const carsToShow = showAll ? carData : carData.slice(0, 6);

  const handleDetailsClick = (car, e) => {
    e.preventDefault();
    setSelectedCar(car);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCar(null);
  };

  const toggleShowAll = (e) => {
    e.preventDefault();
    setShowAll(!showAll);
  };

  return (
    <section
      id="our-cars"
      className="our-cars pb-24 pt-20 bg-white dark:bg-dark dark:text-white"
    >
      <div className="container">
        <h1
          data-aos="fade-in"
          className="text-3xl sm:text-4xl font-semibold font-serif mb-3 text-center"
        >
          ✧ Our Fleet ✧
        </h1>
        <p data-aos="fade-in" className="text-md pb-10 font-serif text-center">
          Our showroom displays a variety of luxurious cars. Make a choice and
          you'd be glad.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
          {carsToShow.map((car) => (
            <div
              key={car.name}
              data-aos="zoom-in"
              data-aos-delay={car.aosDelay}
              className="space-y-3 border-2 border-gray-300 hover:border-primary p-3 rounded-xl relative group"
            >
              <div className="w-full h-[120px]">
                <img
                  className="w-full h-full object-contain sm:translate-x-8 overflow-hidden
                  group-hover:translate-x-16 duration-700 cursor-pointer"
                  src={car.image}
                  alt={car.name}
                />
              </div>
              <div className="space-y-2">
                <h1 className="dark:text-yellow-600 text-primary font-semibold font-serif text-xl">
                  {car.name}
                </h1>
                <div className="flex justify-between items-center text-lg font-bold font-serif">
                  <p className="text-green-700">€{car.price}/Day</p>
                  <div
                    onClick={(e) => handleDetailsClick(car, e)}
                    className="hover:text-primary font-bold text-sm cursor-pointer"
                  >
                    Details
                  </div>
                </div>
              </div>
              <p className="text-xl font-bold font-serif absolute top-0 left-3">
                🌍🇪🇺
              </p>
            </div>
          ))}
        </div>
        <Link to="#contact">
          {carData.length > 6 && (
            <div className="grid place-content-center mt-8 font-semibold font-serif">
              <button
                onClick={toggleShowAll}
                className="button-outline px-4 py-2"
              >
                {showAll ? "LEARN MORE" : "Show More"}
              </button>
            </div>
          )}
        </Link>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal} car={selectedCar} />
    </section>
  );
};

export default Cars;
