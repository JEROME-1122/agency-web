import React, { useContext } from "react";
import assets from "../assets/assets";
import { ThemeContext } from "../context/ThemeContext";
function NavBar() {
  const navigationLinks = ["Home", "Services", "Our Work", "Contact Us"];
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div
      className={` ${
        theme === "light"
          ? "bg-gray-100 text-gray-800"
          : "bg-gray-800 text-gray-100"
      } p-4  sticky top-0 z-50`}
    >
      <div className="container mx-auto navbar flex justify-between items-center ">
        <div className="logo text-2xl font-bold">
          <img
            src={theme == "light" ? assets.logo : assets.logo_dark}
            alt="Logo"
            className="w-35 sm:w-40 h-auto"
          />
        </div>
        <div className="nav-links flex items-center space-x-4">
          {navigationLinks.map((link, index) => {
            return (
              <a
                href={
                  link === "Home"
                    ? `./`
                    : `#${link.toLowerCase().replace(/\s/g, "-")}`
                }
                key={index}
                className={`hover:text-gray-600 
            ${theme === "light" ? "text-indigo-800" : "text-white-800"}`}
              >
                {link}
              </a>
            );
          })}

          <button
            onClick={toggleTheme}
            className="px-3 py-1 border rounded hover:cursor-pointer
        "
          >
            {theme === "light" ? "☀️" : "🌙"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
