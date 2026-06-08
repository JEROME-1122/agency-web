import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import assets from "../assets/assets";
import Box from "./utills/box";

function Services() {
  const { theme } = useContext(ThemeContext);
  const services = [
    {
      title: "Web Development",
      description:
        "Building responsive and modern websites tailored to your needs.",
    },
    {
      title: "Digital Marketing",
      description:
        "Creating effective marketing strategies to boost your online presence.",
    },
    {
      title: "Graphic Design",
      description:
        "Creating visually appealing designs that capture your brand's essence.",
    },
    {
      title: "SEO Optimization",
      description:
        "Improving your website's visibility on search engines to attract more traffic.",
    },
  ];

  return (
    <div
      id="services"
      className={`
            py-10
            ${
              theme === "light"
                ? "bg-gray-100 text-gray-800"
                : "bg-gray-800 text-gray-100"
            }

            `}
    >
      <div className="container mx-auto text-center ">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Services</h2>
        <p className="text-lg sm:text-xl mb-8">
          We offer a wide range of services to help your business succeed.
        </p>
        <div className="services-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className={`service-card p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300  cursor-pointer
                                ${
                                  theme === "light"
                                    ? "bg-white text-gray-800"
                                    : "bg-gray-700 text-gray-100"
                                }
                                `}
              >
                <Box title={service.title} des={service.description} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Services;
