import React from "react";
import PropTypes from "prop-types";
import { FaUserCircle } from "react-icons/fa";
import { NavLinks } from "../Navbar/Navbar";
import { HashLink as Link } from "react-router-hash-link";
import Banner from "../../assets/Site_browser.png";

const ResponsiveMenu = ({ showMenu, setShowMenu }) => {
  const handleLinkClick = () => {
    setShowMenu(false); // Closes menu when a link is clicked
  };

  const handleMenuClick = (e) => {
    // Prevents closing if the menu itself (or its content) is clicked
    e.stopPropagation();
  };

  return (
    <div
      data-aos="fade-right"
      className={`fixed top-0 z-50 bg-white dark:bg-dark h-screen w-[75%] 
                  md:hidden rounded-r-xl shadow-md 
                  flex flex-col justify-between px-8 pb-6 pt-16 
                  ${
                    showMenu
                      ? "left-0 transition-left duration-1000 ease-in-out"
                      : "-left-full"
                  }`}
      onClick={() => setShowMenu(false)}
    >
      <div className="card" onClick={handleMenuClick}>
        <div className="flex items-center justify-start gap-3">
          <img
            className="h-20 w-20 rounded-full border:1px solid dark:bg-black bg-gray-300"
            src={Banner}
            alt="Banner"
          />
          <div>
            <h1 className="font-serif font-semibold">Hi, There!</h1>
          </div>
        </div>
        {/* Links */}
        <nav className="mt-8">
          <ul className="space-y-4 text-xl font-serif cursor-pointer">
            {NavLinks.map((data) => (
              <li
                key={data.id}
                className="hover:text-primary duration-300 font-semibold"
              >
                <Link
                  smooth
                  to={data.link}
                  className="block py-2"
                  onClick={handleLinkClick}
                  aria-label={data.name}
                >
                  {data.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      {/* Footer Items */}
      <div>
        <h1 className="font-serif font-semibold">
          &copy;{new Date().getFullYear()} DeluxRental
        </h1>
      </div>
    </div>
  );
};

ResponsiveMenu.propTypes = {
  showMenu: PropTypes.bool.isRequired,
  setShowMenu: PropTypes.func.isRequired,
};

export default ResponsiveMenu;
