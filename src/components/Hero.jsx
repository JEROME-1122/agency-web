import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import assets from "../assets/assets";
function Hero() {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`hero-section py-10 
            ${
              theme === "light"
                ? "bg-gray-100 text-gray-800"
                : "bg-gray-800 text-gray-100"
            }`}
    >
      <div className="container mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          <strong>
            Welcome to{"  "}
            <span
              className={
                theme === "light" ? "text-indigo-600" : "text-orange-600"
              }
            >
              Our Agency
            </span>
          </strong>
        </h1>
        <p className="text-lg sm:text-xl mb-8">
          We provide top-notch services to help your business grow.
        </p>
        <img
          src={assets.hero_img}
          alt="Hero Image"
          className="mx-auto mb-8 w-[80%] "
        />
        <a
          href="#services"
          className={`inline-block px-6 py-3 rounded 
                ${
                  theme === "light"
                    ? "bg-indigo-600 text-white hover:bg-indigo-700"
                    : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                }`}
        >
          Get Started
        </a>
      </div>
    </div>
  );
}

export default Hero;
