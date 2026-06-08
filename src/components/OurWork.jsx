import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import Box from "./utills/box";
import assets from "../assets/assets";

function OurWork() {
  const { theme } = useContext(ThemeContext);
  const projects = [
    {
      title: "Project 1",
      description: "A brief description of the project and its impact.",
      image: assets.work_mobile_app,
    },
    {
      title: "Project 2",
      description: "A brief description of the project and its impact.",
      image: assets.work_fitness_app,
    },
    {
      title: "Project 3",
      description: "A brief description of the project and its impact.",
      image: assets.work_dashboard_management,
    },
    {
      title: "Project 4",
      description: "A brief description of the project and its impact.",
      image: assets.work_mobile_app,
    },
    {
      title: "Project 5",
      description: "A brief description of the project and its impact.",
      image: assets.work_fitness_app,
    },
    {
      title: "Project 6",
      description: "A brief description of the project and its impact.",
      image: assets.work_dashboard_management,
    },
  ];
  return (
    <div
      id="our-work"
      className={` py-10 
        ${
          theme === "light"
            ? "bg-gray-100 text-gray-800"
            : "bg-gray-800 text-white"
        }
       `}
    >
      <div className="container mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Work</h2>
        <p className="text-lg sm:text-xl mb-8">
          We take pride in our work and have a portfolio of successful projects
          that showcase our expertise and creativity.
        </p>
        <div className="work-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            return (
              <div
                key={index}
                className={`project-card p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300  cursor-pointer
                                ${
                                  theme === "light"
                                    ? "bg-white text-gray-800"
                                    : "bg-gray-700 text-gray-100"
                                }
                                `}
              >
                <Box
                  title={project.title}
                  des={project.description}
                  img={project.image}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default OurWork;
