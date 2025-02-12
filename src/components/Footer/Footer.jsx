import React from "react";
import { RiCustomerService2Line } from "react-icons/ri";
import { BsFacebook, BsGithub, BsInstagram, BsTwitterX } from "react-icons/bs";
import { GrMapLocation } from "react-icons/gr";
import { SiTiktok } from "react-icons/si";
import { HashLink as Link } from "react-router-hash-link";

const FooterLinks = [
  {
    title: "Home",
    link: "/#home",
  },
  {
    title: "About",
    link: "/#aboutus",
  },
  {
    title: "Brands",
    link: "/#our-cars",
  },
  {
    title: "Services",
    link: "/#services",
  },
  {
    title: "Testimonial",
    link: "/#testimonial",
  },
];

const Footer = () => {
  return (
    <section id="footer" className="footer">
      <div className="bg-gray-100 dark:bg-dark mt-14 rounded-t-3xl">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div className="md:col-span-1">
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <Link smooth to="#home">
                    <h1 className="text-xl sm:text-3xl font-bold text-justify font-serif mb-2">
                      &copy;{new Date().getFullYear()} Delux
                      <strong className="text-yellow-600">Rental</strong>
                    </h1>
                  </Link>
                  <p className="mb-4 font-serif font-medium">
                    Luxury ✧ Affordability ✧ Excellence
                  </p>
                  <p className="mb-4 font-serif text-sm font-semibold">
                    Made by: Nnaemeka C. Emesowum with ❤️
                  </p>
                </div>
              </div>
            </div>
            {/* Contact Details and Social Media */}
            <div className="md:col-span-1 mb-4">
              <div className="grid grid-cols-1 gap-3">
                <div className="flex items-center gap-3 font-serif font-medium">
                  <GrMapLocation color="#3AA6B9" size={25} />
                  <p>Bavaria (Bayern), Germany</p>
                </div>
                <div className="flex items-center gap-3 font-serif font-medium">
                  <RiCustomerService2Line color="#3AA6B9" size={25} />
                  <p>+49 1234567890</p>
                </div>
                {/* Social Media Links */}
                <div className="flex items-center gap-2">
                  <Link
                    to="https://github.com/AnthonyEmm/DeluxRental"
                    target="_blank"
                    className="dark:text-white text-dark hover:text-primary 
                   dark:hover:text-primary duration-300"
                  >
                    <BsGithub className="text-2xl" />
                  </Link>
                  <Link
                    to="https://x.com/"
                    target="_blank"
                    className="dark:text-white text-dark hover:text-primary 
                   dark:hover:text-primary duration-300"
                  >
                    <BsTwitterX className="text-2xl" />
                  </Link>
                  <Link
                    smooth
                    to="https://www.tiktok.com/"
                    target="_blank"
                    className="dark:text-white text-dark hover:text-primary 
                   dark:hover:text-primary duration-300"
                  >
                    <SiTiktok className="text-2xl" />
                  </Link>
                  <Link
                    smooth
                    to="https://www.facebook.com/"
                    target="_blank"
                    className="dark:text-white text-dark hover:text-primary 
                   dark:hover:text-primary duration-300"
                  >
                    <BsFacebook className="text-2xl" />
                  </Link>
                  <Link
                    smooth
                    to="https://www.instagram.com/"
                    target="_blank"
                    className="dark:text-white text-dark hover:text-primary 
                   dark:hover:text-primary duration-300"
                  >
                    <BsInstagram className="text-2xl" />
                  </Link>
                </div>
              </div>
            </div>
            {/* Navigation Links */}
            <div className="md:col-span-1">
              <div className="grid grid-cols-1 gap-6">
                <div className="text-center flex flex-wrap justify-center gap-4">
                  {FooterLinks.map((data) => (
                    <div key={data.title} className="mb-2">
                      <Link
                        smooth
                        to={data.link}
                        className="block text-sm font-bold text-black dark:text-gray-700 dark:hover:text-primary
                       hover:text-primary transition-colors duration-300 font-serif"
                      >
                        {data.title}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
              <span className="flex flex-col items-center font-medium cursor-pointer gap-2">
                <Link
                  to="https://drive.google.com/file/d/1X8cVOtZ9dQM7iXn5GmHtuCQ3umQRiWGc/view?usp=sharing"
                  target="_blank"
                >
                  <div
                    className="text-black dark:text-gray-700 hover:text-primary dark:hover:text-primary 
                transition-colors duration-300 font-serif text-sm"
                  >
                    Terms and Conditions
                  </div>
                </Link>
                <Link
                  to="https://drive.google.com/file/d/1GxEn2HudlWgDXyRTh776jTiQbQEjM-Vp/view?usp=sharing"
                  target="_blank"
                >
                  <div
                    className="text-black dark:text-gray-700 hover:text-primary dark:hover:text-primary
                transition-colors duration-300 font-serif text-sm"
                  >
                    Deposit Policy
                  </div>
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
