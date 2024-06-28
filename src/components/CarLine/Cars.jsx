import React, { useState } from "react";
import Modal from "../../components/CarLineModal/CarLineModal";
import { HashLink as Link } from "react-router-hash-link";
import Benz from "../../assets/GLC.png";
import Italian from "../../assets/Maser.png";
import Taycan from "../../assets/Porsche-Taycan.png";
import SQ8 from "../../assets/audi_sq8.png";
import Cayenne from "../../assets/Cayenne.png";
import Series from "../../assets/BMW_3.png";
import Genesis from "../../assets/Genesis.png";
import Audi5 from "../../assets/A5.png";
import SClass from "../../assets/S-Class2.png";
import Camaro from "../../assets/Chevy_Camaro.webp";
import G63 from "../../assets/G63.png";
import F8 from "../../assets/Ferrari_F8.png";
import Ghibli from "../../assets/Ghibli.png";
import X1 from "../../assets/X1.png";
import Hyundai from "../../assets/Palisade.png";
import Urus from "../../assets/Urus1.png";
import Avantador from "../../assets/Avant.png";
import Roma from "../../assets/FerrariRoma.png";
import Bentley from "../../assets/bentley_continental.png";
import Bentayga from "../../assets/Bentayga_S.png";
import GLA from "../../assets/GLA.png";
import GLE from "../../assets/GLE.png";
import GT43 from "../../assets/GT43.png";
import XM from "../../assets/XM.png";
import X6 from "../../assets/X6.png";
import EBenz from "../../assets/EClass.png";
import Cruiser from "../../assets/Land-Cruiser.png";
import Purosangue from "../../assets/Purosangue.png";
import AM from "../../assets/Aston_Martin.png";
import Etron from "../../assets/e-tron.png";

const CarData = [
  {
    name: "Lamborghini Avantador ",
    price: 80,
    image: Avantador,
    aosDelay: "0",
    specifications: {
      fuel: "Premium Gasoline ⛽",
      engine: "6.5L V12",
      horsepower: "769 hp (Aventador LP 780-4 Ultimae)",
      transmission: "7-speed ISR (Independent Shifting Rod) automated manual",
      drivetrain: "All-Wheel Drive",
      colors: ["🟡", "⚫", "🔴", "⚪"],
    },
  },
  {
    name: "Mercedes Benz G63 AMG",
    price: 72,
    image: G63,
    aosDelay: "300",
    specifications: {
      fuel: "Premium Gasoline ⛽",
      engine: "4.0L V8 Biturbo",
      horsepower: "577 hp",
      transmission: "AMG SPEEDSHIFT TCT 9-speed automatic",
      drivetrain: "All-Wheel Drive",
      colors: ["⚫", "⚪"],
    },
  },
  {
    name: "Ferrari Roma",
    price: 95,
    image: Roma,
    aosDelay: "500",
    specifications: {
      fuel: "Premium Gasoline ⛽",
      engine: "3.9L V8 twin-turbocharged",
      horsepower: "612 hp",
      transmission: "8-speed dual-clutch automatic",
      drivetrain: "Rear-Wheel Drive (RWD)",
      colors: ["⚫", "🔴", "⚪"],
    },
  },
  {
    name: "Audi SQ8",
    price: 53,
    image: SQ8,
    aosDelay: "0",
    specifications: {
      fuel: "Premium Gasoline ⛽",
      engine: "4.0L V8",
      horsepower: "500 hp",
      transmission: "8-speed automatic",
      drivetrain: "All-Wheel Drive",
      colors: ["⚫", "🔴", "⚪"],
    },
  },
  {
    name: "Porsche Cayenne",
    price: 50,
    image: Cayenne,
    aosDelay: "300",
    specifications: {
      fuel: "Premium Gasoline ⛽",
      engine: "3.0L V6",
      horsepower: "335 hp",
      transmission: "8-speed automatic",
      drivetrain: "All-Wheel Drive",
      colors: ["⚪", "⚫"],
    },
  },
  {
    name: "Lamborghini Urus",
    price: 80,
    image: Urus,
    aosDelay: "500",
    specifications: {
      fuel: "Premium Gasoline ⛽",
      engine: "4.0L V8 twin-turbocharged",
      horsepower: "657 hp (Urus S and Urus Performante)",
      transmission: "8-speed automatic",
      drivetrain: "All-Wheel Drive (AWD)",
      colors: ["⚪", "⚫", "🔵"],
    },
  },
  {
    name: "BMW 3-Series",
    price: 46,
    image: Series,
    aosDelay: "0",
    specifications: {
      fuel: "Premium Gasoline ⛽",
      engine: "2.0L I4",
      horsepower: "255 hp",
      transmission: "8-speed automatic",
      drivetrain: "Rear-Wheel Drive",
      colors: ["⚫", "🟤", "⚪"],
    },
  },
  {
    name: "BMW X6 xDrive40i",
    price: 65,
    image: X6,
    aosDelay: "300",
    specifications: {
      fuel: "Premium Gasoline ⛽",
      engine: "3.0L inline-6 turbocharged with mild hybrid technology",
      horsepower: "375 hp",
      transmission: "8-speed automatic",
      drivetrain: "All-Wheel Drive (AWD)",
      colors: ["⚫", "⚪", "🔴"],
    },
  },
  {
    name: "Porsche Taycan",
    price: 66,
    image: Taycan,
    aosDelay: "500",
    specifications: {
      fuel: "Electric ⚡",
      engine: "Performance Battery Plus 93.4 kWh",
      horsepower: "402 hp",
      transmission: "1-speed automatic",
      drivetrain: "All-Wheel Drive",
      colors: ["⚫", "🔴", "🟤", "⚪"],
    },
  },
  {
    name: "Mercedes-Benz GLC-Class",
    price: 45,
    image: Benz,
    aosDelay: "0",
    specifications: {
      fuel: "Premium Gasoline ⛽",
      engine: "2.0L I4",
      horsepower: "255 hp",
      transmission: "9-speed automatic",
      drivetrain: "All-Wheel Drive",
      colors: ["⚫", "🟤", "⚪"],
    },
  },
  {
    name: "Audi A5",
    price: 35,
    image: Audi5,
    aosDelay: "300",
    specifications: {
      fuel: "Premium Gasoline ⛽",
      engine: "2.0L I4",
      horsepower: "261 hp",
      transmission: "7-speed automatic",
      drivetrain: "All-Wheel Drive",
      colors: ["⚫", "🟤", "⚪"],
    },
  },
  {
    name: "Genesis GV70",
    price: 45,
    image: Genesis,
    aosDelay: "500",
    specifications: {
      fuel: "Premium Gasoline ⛽",
      engine: "2.5L I4",
      horsepower: "300 hp",
      transmission: "8-speed automatic",
      drivetrain: "All-Wheel Drive",
      colors: ["🔴", "⚪", "⚫"],
    },
  },
  {
    name: "Mercedes-Benz S-Class",
    price: 85,
    image: SClass,
    aosDelay: "0",
    specifications: {
      fuel: "Premium Gasoline ⛽",
      engine: "3.0L I6",
      horsepower: "429 hp",
      transmission: "9-speed automatic",
      drivetrain: "All-Wheel Drive",
      colors: ["⚫", "⚪"],
    },
  },
  {
    name: "Maserati Ghibli Modena",
    price: 85,
    image: Ghibli,
    aosDelay: "500",
    specifications: {
      fuel: "Premium Gasoline ⛽",
      engine: "3.0L V6 twin-turbo",
      horsepower: "424 hp",
      transmission: "8-speed automatic",
      drivetrain: "Multiple drive modes including Sport and Corsa",
      colors: ["⚫", "⚪", "🔴"],
    },
  },
  {
    name: "Chevrolet Camaro ZL1",
    price: 65,
    image: Camaro,
    aosDelay: "300",
    specifications: {
      fuel: "Premium Gasoline ⛽",
      engine: "6.2L V8",
      horsepower: "650 hp",
      transmission: "6-speed manual",
      drivetrain: "Rear-Wheel Drive",
      colors: ["⚫", "⚪", "🔴"],
    },
  },
  {
    name: "Maserati GranTurismo Folgore",
    price: 90,
    image: Italian,
    aosDelay: "0",
    specifications: {
      fuel: "Electric ⚡",
      engine: "All-electric powertrain",
      horsepower: "751 hp",
      transmission: "single-speed automatic",
      drivetrain: "All-Wheel Drive",
      colors: ["⚫", "🟤", "⚪", "🔴"],
    },
  },
  {
    name: "Merceded Benz GLE 63 AMG",
    price: 66,
    image: GLE,
    aosDelay: "300",
    specifications: {
      fuel: "Premium Gasoline ⛽",
      engine: "4.0-liter V8 Biturbo with EQ Boost",
      horsepower: "603 hp",
      transmission: "9-speed automatic",
      drivetrain: "AMG all-wheel drive (AWD)",
      colors: ["⚫", "⚪", "🔴"],
    },
  },
  {
    name: "Ferrari F8 Turbo",
    price: 120,
    image: F8,
    aosDelay: "500",
    specifications: {
      fuel: "Premium Gasoline ⛽",
      engine: "3.9-liter twin-turbocharged V8",
      horsepower: "710 hp",
      transmission: "7-speed dual-clutch automatic",
      drivetrain: "Rear-wheel drive (RWD)",
      colors: ["🟡", "⚫", "🔴", "⚪"],
    },
  },
  {
    name: "BMW X1",
    price: 75,
    image: X1,
    aosDelay: "0",
    specifications: {
      fuel: "Premium Gasoline ⛽",
      engine: "2.0L I4 turbocharged",
      horsepower: "241 hp",
      transmission: "7-speed dual-clutch automatic",
      drivetrain: "All-Wheel Drive (xDrive)",
      colors: ["⚫", "⚪"],
    },
  },
  {
    name: "Hyundai Palisade",
    price: 39,
    image: Hyundai,
    aosDelay: "300",
    specifications: {
      fuel: "Premium Gasoline ⛽",
      engine: "3.8L V6",
      horsepower: "291 hp",
      transmission: "8-speed automatic",
      drivetrain: "Front-Wheel Drive (FWD) or optional All-Wheel Drive (AWD)",
      colors: ["⚫", "🟤", "⚪"],
    },
  },
  {
    name: "Merceded Benz GLA 45 AMG",
    price: 69,
    image: GLA,
    aosDelay: "500",
    specifications: {
      fuel: "Premium Gasoline ⛽",
      engine: "2.0-liter inline-4 turbocharged",
      horsepower: "221 hp",
      transmission: "8-speed AMG SPEEDSHIFT DCT dual-clutch automatic",
      drivetrain: "All-Wheel Drive (AWD)",
      colors: ["⚫", "🟤", "⚪"],
    },
  },
  {
    name: "Bentley Bentayga S",
    price: 109,
    image: Bentayga,
    aosDelay: "0",
    specifications: {
      fuel: "Premium Gasoline ⛽",
      engine: "4.0-liter V8",
      horsepower: "542 hp",
      transmission: "8-speed automatic",
      drivetrain: "All-wheel drive (AWD)",
      colors: ["🟢", "⚫", "🟤", "⚪"],
    },
  },
  {
    name: "Bentley Continental GT",
    price: 99,
    image: Bentley,
    aosDelay: "300",
    specifications: {
      fuel: "Premium Gasoline ⛽",
      engine: "4.0-liter V8 or 6.0-liter W12 Twin-turbocharged",
      horsepower: "V8: 542 hp | W12: 626 hp",
      transmission: "8-speed dual-clutch automatic",
      drivetrain: "All-wheel drive (AWD)",
      colors: ["🔴", "⚫", "🟤", "⚪"],
    },
  },
  {
    name: "Toyota Land Cruiser",
    price: 65,
    image: Cruiser,
    aosDelay: "500",
    specifications: {
      fuel: "Premium Gasoline ⛽",
      engine: "3.5L V6 twin-turbo or 4.0L V6",
      horsepower: "409 hp",
      transmission: "10-speed automatic",
      drivetrain: "4WD (Four-Wheel Drive)",
      colors: ["⚫", "⚪"],
    },
  },
  {
    name: "Merceded Benz GT 43 AMG",
    price: 115,
    image: GT43,
    aosDelay: "0",
    specifications: {
      fuel: "Premium Gasoline ⛽",
      engine: "3.0-liter inline-6 turbocharged",
      horsepower: "362 hp + EQ Boost power",
      transmission: "9-speed automatic",
      drivetrain: "4MATIC+ all-wheel drive (AWD)",
      colors: ["🔴", "⚫", "🔵", "⚪"],
    },
  },
  {
    name: "BMW XM",
    price: 115,
    image: XM,
    aosDelay: "300",
    specifications: {
      fuel: "Premium Gasoline and electric power ⛽ ⚡",
      engine: "4.4-liter Twin-turbocharged V8 and electric motor",
      horsepower: "644 hp",
      transmission: "8-speed automatic transmission",
      drivetrain: "All-wheel drive (AWD)",
      colors: ["🔴", "⚫", "⚪"],
    },
  },
  {
    name: "Mercedes Benz E-Class",
    price: 35,
    image: EBenz,
    aosDelay: "500",
    specifications: {
      fuel: "Premium Gasoline ⛽",
      engine: "3.0L inline-6 turbo with mild hybrid system",
      horsepower: "375 hp",
      transmission: "9-speed automatic transmission",
      drivetrain: "All-wheel drive (AWD)",
      colors: ["🔴", "⚫", "⚪", "🔵"],
    },
  },
  {
    name: "Ferrari Purosangue",
    price: 155,
    image: Purosangue,
    aosDelay: "0",
    specifications: {
      fuel: "Premium Gasoline ⛽",
      engine: "6.5-liter naturally aspirated V12",
      horsepower: "715 hp",
      transmission: "8-speed dual-clutch automatic",
      drivetrain: "All-wheel drive (AWD) with rear-biased torque distribution",
      colors: ["⚫", "🟡", "🔴", "⚪"],
    },
  },
  {
    name: "Aston Martin",
    price: 145,
    image: AM,
    aosDelay: "300",
    specifications: {
      fuel: "Premium Gasoline ⛽",
      engine: "4.0-liter twin-turbocharged V8",
      horsepower: "503 hp",
      transmission: "8-speed automatic",
      drivetrain: "Rear-wheel drive (RWD)",
      colors: ["🔴", "⚫", "🟡", "⚪"],
    },
  },
  {
    name: "Audi Q8 e-tron",
    price: 125,
    image: Etron,
    aosDelay: "500",
    specifications: {
      fuel: "Electric ⚡",
      engine: " All Electric 114 kWh Battery",
      horsepower: "402 hp",
      transmission: "Single-speed automatic",
      drivetrain: "Dual-motor all-wheel drive (AWD)",
      colors: ["🔵", "🔴", "⚫", "⚪"],
    },
  },
];

const Cars = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);
  const [showAll, setShowAll] = useState(false);

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

  const carsToShow = showAll ? CarData : CarData.slice(0, 6);

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
          {carsToShow.map((data) => (
            <div
              key={data.name}
              data-aos="zoom-in"
              data-aos-delay={data.aosDelay}
              className="space-y-3 border-2 border-gray-300 hover:border-primary p-3 rounded-xl relative group"
            >
              <div className="w-full h-[120px]">
                <img
                  className="w-full h-full object-contain sm:translate-x-8 overflow:hidden
                  group-hover:translate-x-16 duration-700 cursor-pointer"
                  src={data.image}
                  alt="Car"
                />
              </div>
              <div className="space-y-2">
                <h1 className="dark:text-yellow-600 text-primary font-semibold font-serif text-xl">
                  {data.name}
                </h1>
                <div className="flex justify-between items-center text-lg font-bold font-serif">
                  <p className="text-green-700">€{data.price}/Day</p>
                  <Link
                    to="#our-cars"
                    onClick={(e) => handleDetailsClick(data, e)}
                    className="hover:text-primary font-bold text-sm"
                  >
                    Details
                  </Link>
                </div>
              </div>
              <p className="text-xl font-bold font-serif absolute top-0 left-3">
                🌍🇪🇺
              </p>
            </div>
          ))}
        </div>
        <Link smooth to="#footer">
          {CarData.length > 6 && (
            <div className="grid place-content-center mt-8 font-semibold font-serif">
              <button
                onClick={toggleShowAll}
                className="button-outline px-4 py-2"
              >
                {showAll ? "Our Location" : "Show More"}
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
