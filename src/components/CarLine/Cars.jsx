import React, { useState, useEffect } from "react";
import Modal from "../../components/CarLineModal/CarLineModal";
import { HashLink as Link } from "react-router-hash-link";

const Cars = () => {
  const [carData, setCarData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    priceRange: "",
    fuel: "",
    engine: "",
    horsepower: "",
    transmission: "",
    drivetrain: "",
  });

  useEffect(() => {
    fetch("/cars.json")
      .then((response) => response.json())
      .then((data) => setCarData(data))
      .catch((error) => console.error("Error fetching car data:", error));
  }, []);

  const filteredCars = carData.filter((car) => {
    const matchesSearch = car.name
      ? car.name.toLowerCase().includes(searchTerm.toLowerCase())
      : false;

    const matchesFilters = Object.entries(filters).every(([key, value]) => {
      if (!value) return true;
      if (key === "priceRange") {
        const [min, max] = value.split("-").map(Number);
        return car.price >= min && car.price <= max;
      }
      return car.specifications[key]
        ? car.specifications[key].toLowerCase().includes(value.toLowerCase())
        : false;
    });

    return matchesSearch && matchesFilters;
  });

  const carsToShow = showAll ? filteredCars : filteredCars.slice(0, 6);

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

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  const clearSearch = () => {
    setSearchTerm("");
  };

  const clearFilter = (filterName) => {
    setFilters((prevFilters) => ({ ...prevFilters, [filterName]: "" }));
  };

  return (
    <section
      id="our-cars"
      className="our-cars pb-24 pt-20 bg-white dark:bg-dark dark:text-black"
    >
      <div className="container">
        <h1
          data-aos="fade-in"
          className="text-3xl sm:text-4xl font-semibold font-serif mb-3 text-center dark:text-white"
        >
          ✧ Our Fleet ✧
        </h1>
        <p
          data-aos="fade-in"
          className="text-md pb-10 font-serif text-center dark:text-white"
        >
          Our showroom displays a variety of luxurious cars. Make a choice and
          you'd be glad.
        </p>
        <div className="mb-4 flex justify-center font-serif relative">
          <input
            type="text"
            placeholder="Search by name..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="w-full max-w-md mx-auto p-2 border border-gray-300 rounded outline-none"
          />
          {searchTerm && (
            <button
              type="button"
              onClick={clearSearch}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 
              text-gray-400 hover:text-black bg-gray-300 px-2"
            >
              x
            </button>
          )}
        </div>
        <div className="mb-4">
          <h3 className="font-bold mb-2 text-center dark:text-white font-serif">
            Filters
          </h3>
          <div className="grid grid-cols-2 gap-4 font-serif max-w-md mx-auto">
            <div className="relative">
              <select
                name="priceRange"
                value={filters.priceRange}
                onChange={handleFilterChange}
                className="w-full p-2 border border-gray-300 dark:border-gray-300 rounded 
                text-gray-400 outline-none font-serif"
              >
                <option value="">Filter by Price €</option>
                <option value="0-500">€0 - €500</option>
                <option value="500-1000">€500 - €1000</option>
                <option value="1000-1500">€1000 - €1500</option>
                <option value="1500-2000">€1500 - €2000</option>
              </select>
            </div>
            {[
              { key: "fuel", label: "Fuel" },
              { key: "engine", label: "Engine" },
              { key: "horsepower", label: "Horsepower" },
              { key: "transmission", label: "Transmission" },
              { key: "drivetrain", label: "Drivetrain" },
            ].map(({ key, label }) => (
              <div key={key} className="relative">
                <input
                  type="text"
                  name={key}
                  placeholder={`Filter by ${label}`}
                  value={filters[key]}
                  onChange={handleFilterChange}
                  className="w-full p-2 border border-gray-300 rounded outline-none"
                />
                {filters[key] && (
                  <button
                    type="button"
                    onClick={() => clearFilter(key)}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 
                    text-gray-400 hover:text-black bg-gray-300 
                    px-2"
                  >
                    x
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
        {filteredCars.length === 0 && (
          <div className="text-center font-serif text-red-600 text-xl">
            No cars found matching your criteria.
          </div>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
          {carsToShow.map((car) => (
            <div
              key={car.name}
              data-aos="zoom-in"
              data-aos-delay={car.aosDelay}
              className="space-y-3 border-2 border-gray-300 hover:border-primary p-3 
              rounded-xl relative group"
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
                    className="hover:text-primary font-bold text-sm cursor-pointer 
                    dark:text-gray-100 dark:hover:text-primary"
                  >
                    Details
                  </div>
                </div>
              </div>
              <p className="text-xl font-bold font-serif absolute top-0 left-3 dark:text-white">
                🌍🇪🇺
              </p>
            </div>
          ))}
        </div>
        <Link to="#contact">
          {filteredCars.length > 6 && (
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
