import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import assets from "../assets/assets";
function Footer() {
  const { theme } = useContext(ThemeContext);
  return (
    <footer
      className={`
          pt-10 pb-5
          ${
            theme === "light"
              ? "bg-gray-100 text-gray-800"
              : "bg-gray-800 text-white"
          }
          `}
    >
      <div className="container mx-auto text-center ">
        <div className="flex flex-wrap align-center  justify-between">
          <div className="w-[35%]">
            <img
              src={`
                    ${theme === "light" ? assets.logo : assets.logo_dark}`}
              className="mb-3"
              alt=""
              title=""
            />
            <p
              className={`mb-3 text-left ${theme === "light" ? "text-gray-800" : "text-gray-100"}`}
            >
              From strategy to execute, we craft digital solutions that moves
              your business forward.
            </p>
            <ul className="text-left flex gap-5">
              <li
                className={`mb-2 ${theme === "light" ? "text-gray-800" : "text-gray-100"}`}
              >
                <a href="#hero">Home</a>
              </li>
              <li
                className={`  ${theme === "light" ? "text-gray-800" : "text-gray-100"}`}
              >
                <a href="#services">Service</a>
              </li>
              <li
                className={`  ${theme === "light" ? "text-gray-800" : "text-gray-100"}`}
              >
                <a href="#our-work">Our Work</a>
              </li>
              <li
                className={`mb-4  ${theme === "light" ? "text-gray-800" : "text-gray-100"}`}
              >
                <a href="#contact-us">Contact US</a>
              </li>
            </ul>
          </div>

          <div></div>

          <div className="">
            <p
              className={`mb-3 text-left ${theme === "light" ? "text-gray-800" : "text-gray-100"}`}
            >
              Social Media
            </p>
            <div className="flex gap-1 align-center justify-center">
              <img src={assets.facebook_icon} className="" />
              <img src={assets.twitter_icon} className="" />
              <img src={assets.instagram_icon} className="" />
              <img src={assets.linkedin_icon} className="" />
            </div>
          </div>
        </div>
      </div>

      <hr />
      <p
        className={`text-center mt-5 ${theme === "light" ? "text-gray-800" : "text-gray-100"}`}
      >
        Copyright 2026 @ agency
      </p>
    </footer>
  );
}

export default Footer;
