import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

import { teamData } from "../assets/assets.js";
function Teams() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`py-10
          ${
            theme === "light"
              ? " bg-gray-100 text-gray-800"
              : "bg-gray-800 text-gray-100"
          }
          
          `}
    >
      <div className="container mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Team</h2>
        <p className="text-lg sm:text-xl mb-8">
          Meet our talented and dedicated team of professionals who are
          passionate about delivering exceptional results for our clients.
        </p>
        <div className="team-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamData.map((members, index) => {
            return (
              <div
                key={index}
                className={`team-member p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer
                    flex gap-8 align-center justify-center
                      ${
                        theme === "light"
                          ? "bg-white text-gray-800"
                          : "bg-gray-700 text-gray-100"
                      }
                    `}
              >
                <img
                  src={members.image}
                  alt={members.name}
                  className="w-15 h-15 rounded-full   mb-4"
                />
                <div>
                  <h3 className="text-xl font-semibold mb-2">{members.name}</h3>
                  <p className=" ">{members.title}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Teams;
