import React, { useContext } from "react";
import { company_logos } from "../assets/assets";
import { ThemeContext } from "../context/ThemeContext";
function TrustedBy() {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`
            py-10
            ${
              theme === "light"
                ? "bg-gray-100 text-gray-800"
                : "bg-gray-800 text-gray-100"
            }
          `}
    >
      <div className="container mx-auto text-center">
        <h3 className="text-3xl sm:text-4xl mb-4">
          <strong>Trusted by top companies worldwide</strong>
        </h3>
        <div className="company-logos flex flex-wrap justify-center items-center">
          {company_logos.map((logo, index) => {
            return (
              <img
                src={logo}
                alt={`Company Logo ${index + 1}`}
                key={index}
                className="mx-4 my-2 inline-block w-24 h-auto"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TrustedBy;
