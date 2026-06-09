import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import toast from "react-hot-toast";

function ContactUs() {
  const { theme } = useContext(ThemeContext);

  const onSubmit = async (event) => {
    event.preventDefault();
    toast.loading("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "97a60597-af44-4fdd-9c97-15e4099f9ce0");
    try {
      const response = await fetch("https://xcxc.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(
        "An error occurred while sending your message. Please try again later.",
      );
    }
  };

  return (
    <section
      id="contact-us"
      className={`py-16 px-4 transition-colors duration-300 ${
        theme === "light"
          ? "bg-gray-100 text-gray-800"
          : "bg-gray-800 text-white"
      }`}
    >
      <div className="container mx-auto text-center">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Contact Us</h2>

          <p className="text-lg max-w-3xl mx-auto">
            We'd love to hear from you. Whether you have a question about our
            services, pricing, projects, or anything else, our team is ready to
            help.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={onSubmit} className="grid sm:grid-cols-2 gap-5">
          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className={`w-full p-3 rounded-lg border outline-none transition ${
              theme === "light"
                ? "border-gray-300 bg-white text-gray-800 focus:border-blue-500"
                : "border-gray-600 bg-gray-700 text-white focus:border-blue-400"
            }`}
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className={`w-full p-3 rounded-lg border outline-none transition ${
              theme === "light"
                ? "border-gray-300 bg-white text-gray-800 focus:border-blue-500"
                : "border-gray-600 bg-gray-700 text-white focus:border-blue-400"
            }`}
          />

          {/* Subject */}
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className={`sm:col-span-2 w-full p-3 rounded-lg border outline-none transition ${
              theme === "light"
                ? "border-gray-300 bg-white text-gray-800 focus:border-blue-500"
                : "border-gray-600 bg-gray-700 text-white focus:border-blue-400"
            }`}
          />

          {/* Message */}
          <textarea
            name="message"
            rows="6"
            placeholder="Your Message"
            required
            className={`sm:col-span-2 w-full p-3 rounded-lg border outline-none resize-none transition ${
              theme === "light"
                ? "border-gray-300 bg-white text-gray-800 focus:border-blue-500"
                : "border-gray-600 bg-gray-700 text-white focus:border-blue-400"
            }`}
          ></textarea>

          {/* Submit Button */}
          <div className="sm:col-span-2 flex justify-center">
            <button
              type="submit"
              className="px-8 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactUs;
