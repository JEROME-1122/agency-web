import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
function Footer() {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`
          py-10
          ${
            theme === "light"
              ? "bg-gray-100 text-gray-800"
              : "bg-gray-800 text-white"
          }
          `}
    >
      <div className="container mx-auto text-center ">footer</div>
    </div>
  );
}

export default Footer;
