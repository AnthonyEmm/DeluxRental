import React, { useState } from "react";
import PropTypes from "prop-types";
import { MdSunny } from "react-icons/md";
import { HiMoon } from "react-icons/hi";
import ResponsiveMenu from "../ResponsiveMenu/ResponsiveMenu";
import { AiOutlineClose } from "react-icons/ai";
import { TbMenuDeep } from "react-icons/tb";
import { HashLink as Link } from "react-router-hash-link";

export const NavLinks = [
  {
    id: "1",
    name: "Home",
    link: "/#home",
  },
  {
    id: "2",
    name: "About",
    link: "/#aboutus",
  },
  {
    id: "3",
    name: "Cars",
    link: "/#our-cars",
  },
  {
    id: "4",
    name: "Our Clients",
    link: "/#testimonial",
  },
  {
    id: "5",
    name: "FAQ",
    link: "/#faq",
  },
  {
    id: "6",
    name: "ORDER",
    link: "/#contact",
  },
];

const Navbar = ({ theme, setTheme }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <nav className="shadow-lg bg-white dark:bg-dark dark:text-white duration-300 z-40 fixed top-0 left-0 w-full p-1">
      <div className="container mx-auto py-3 md:py-0 px-4">
        <div className="flex justify-between items-center whitespace-nowrap">
          <div>
            <Link smooth to="#home">
              <h1 className="text-3xl font-bold font-serif">
                Delux<strong className="text-yellow-600">Rental</strong>
              </h1>
            </Link>
          </div>
          <div className="hidden md:block">
            <ul className="flex items-center gap-8 font-serif">
              {NavLinks.map((data) => (
                <li key={data.id} className="py-4">
                  <a
                    href={data.link}
                    className="py-2 hover:border-b-2 hover:text-primary 
                    hover:border-primary transition-colors duration-500 text-lg font-medium"
                  >
                    {data.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Dark Mode Icons */}
          <div className="flex items-center gap-4">
            <div>
              {theme === "dark" ? (
                <MdSunny
                  className="text-2xl cursor-pointer"
                  onClick={() => setTheme("light")}
                  aria-label="Switch to light mode"
                />
              ) : (
                <HiMoon
                  className="text-2xl cursor-pointer"
                  onClick={() => setTheme("dark")}
                  aria-label="Switch to dark mode"
                />
              )}
            </div>
            <div className="md:hidden">
              {/* Hamburger Menu */}
              {showMenu ? (
                <AiOutlineClose
                  onClick={closeMenu}
                  size={30}
                  className="cursor-pointer transition-all"
                  aria-label="Close menu"
                />
              ) : (
                <TbMenuDeep
                  onClick={toggleMenu}
                  size={30}
                  className="cursor-pointer transition-all"
                  aria-label="Open menu"
                />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Passing setShowMenu as prop to ResponsiveMenu */}
      {showMenu && (
        <ResponsiveMenu showMenu={showMenu} setShowMenu={setShowMenu} />
      )}
    </nav>
  );
};

Navbar.propTypes = {
  theme: PropTypes.string.isRequired,
  setTheme: PropTypes.func.isRequired,
};

export default Navbar;
