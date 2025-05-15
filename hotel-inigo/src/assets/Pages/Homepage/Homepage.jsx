import React from "react";

import "./Homepage.css";


import Header from "../../Components/Header/Header";
import RoomSection from "../../Components/RoomSection/RoomSection";
import AboutSection from "../../Components/AboutSection/AboutSection";
import FunctionHallSection from "../../Components/FunctionHall/FunctionHallSection";
import Footer from "../../Components/Footer/Footer";
import GallerySection from "../../Components/Gallery/GallerySection";

const Homepage = () => {
  return (
    <main className="homepage">
      <Header />
      <RoomSection />
      <AboutSection />
      <FunctionHallSection />
      <GallerySection />
      <Footer />
    </main>

  );
};

export default Homepage;
