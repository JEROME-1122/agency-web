import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
function ContactUs() {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      id="contact-us"
      className={`py-10
          ${
            theme === "light"
              ? "bg-gray-100 text-gray-800"
              : "bg-gray-800 text-gray-100"
          }
          `}
    >
      <div className="container mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Contact Us</h2>
        <p className="text-lg sm:text-xl mb-8">
          We would love to hear from you! Whether you have a question about our
          services, pricing, or anything else, our team is ready to answer all
          your questions.
        </p>

        <form
          className={`grid sm:grid-cols-2 gap-4 items-center justify-center w-full`}
        >
          <input
            type="text"
            placeholder="Your Name"
            name="name"
            className={`
                        p-2 rounded mb-4 w-full   border-1

                        ${
                          theme === "light"
                            ? "border-gray-900  text-gray-900"
                            : " border-gray-100 text-gray-100"
                        }
                        `}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className={`
                        p-2 rounded mb-4 w-full   border-1

                        ${
                          theme === "light"
                            ? "border-gray-900 text-gray-900"
                            : " border-gray-100 text-gray-100"
                        }
                        `}
          />
          <textarea
            placeholder="Your Message"
            name="message"
            className={`
                        p-2 rounded mb-4 w-full   border-1

                        ${
                          theme === "light"
                            ? "border-gray-900 text-gray-900"
                            : " border-gray-100 text-gray-100"
                        }
                        `}
          ></textarea>
          <button
            type="submit"
            className={`px-6 py-2 rounded w-[30%] 
                ${
                  theme === "light"
                    ? "bg-blue-500 text-white"
                    : "bg-blue-700 text-gray-100"
                }
                               hover:bg-blue-600 transition-colors duration-300`}
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
