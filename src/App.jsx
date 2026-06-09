import React from "react";
import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import TrustedBy from "./components/TrustedBy";
import Services from "./components/Services";
import OurWork from "./components/OurWork";
import Teams from "./components/Teams";
import ContactUs from "./components/ContactUs";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
function App() {
  return (
    <div>
      <Toaster position="top-right" />
      <Navbar />

      <Hero />

      <TrustedBy />

      <Services />

      <OurWork />

      <Teams />

      <ContactUs />

      <Footer />
    </div>
  );
}

export default App;
