import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Aventador from "../../assets/lamborghini-aventador.png";
import Bentayga from "../../assets/Bentayga-S.png";
import Purosangue from "../../assets/Ferrari_purosangue.png";
import Urus from "../../assets/Lamborghini-Urus.png";
import G63AMG from "../../assets/Merc_G63.png";
import Taycan from "../../assets/porsche_taycan.png";
import AMG63 from "../../assets/GLE_AMG.png";
import Cruiser from "../../assets/LandC.png";
import SClass from "../../assets/Merc_S.png";

const CarCarousel = () => {
  const [hoveredSlide, setHoveredSlide] = useState(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const cars = [
    { id: 1, name: "Lamborghini Urus", image: Urus },
    { id: 2, name: "Ferrari Purosangue", image: Purosangue },
    { id: 3, name: "Bentley Bentayga S", image: Bentayga },
    { id: 4, name: "Merceded Benz GLE 63 AMG", image: AMG63 },
    { id: 5, name: "Porsche Taycan", image: Taycan },
    { id: 6, name: "Lamborghini Aventador", image: Aventador },
    { id: 7, name: "Mercedes Benz G63 AMG", image: G63AMG },
    { id: 8, name: "Land Cruiser", image: Cruiser },
    { id: 9, name: "Mercedes S Class", image: SClass },
  ];

  const imageStyle = {
    width: "100%",
    height: "350px",
    objectFit: "contain",
    borderRadius: "8px",
    boxShadow: "0 2px 6px rgba(0.2, 0.5, 0.25, 0.5)",
    position: "relative",
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.6)", // Adjust opacity for lighter background
    borderRadius: "8px",
    opacity: hoveredSlide === null ? 0 : 1,
    transition: "opacity 0.3s ease-in-out",
    color: "white",
    fontSize: "1.5rem",
    fontWeight: "bold",
    textAlign: "center",
    pointerEvents: hoveredSlide === null ? "none" : "auto",
  };

  return (
    <div
      className="container mx-auto bg-gray-100 dark:bg-dark py-8 px-8 pt-28 pb-28
     text-primary dark:text-white font-serif font-semibold mt-16 mb-16 min-h-[200px] relative"
    >
      <Slider {...settings}>
        {cars.map((car) => (
          <div
            key={car.id}
            className="px-2 relative"
            onMouseEnter={() => setHoveredSlide(car.id)}
            onMouseLeave={() => setHoveredSlide(null)}
          >
            <img
              src={car.image}
              alt={car.name}
              style={imageStyle}
              className="rounded-lg shadow-lg"
            />
            {hoveredSlide === car.id && (
              <div style={overlayStyle}>
                <h4 className="font-serif mb-2">
                  &copy;{new Date().getFullYear()} Delux
                  <strong className="text-yellow-600">Rental</strong>
                </h4>
                <p className="mb-2 font-serif font-semibold text-lg">
                  Luxury ✧ Affordability ✧ Excellence
                </p>
                <Link smooth to="#our-cars">
                  <button
                    data-aos="fade-in"
                    className="button-outline font-serif mt-6 uppercase"
                  >
                    Get Started
                  </button>
                </Link>
              </div>
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarCarousel;
