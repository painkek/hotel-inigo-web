import React from "react";

import Header from "../../Components/Header/Header";
import RoomSection from "../../Components/RoomSection/RoomSection";
import AboutSection from "../../Components/AboutSection/AboutSection";
import FunctionHallSection from "../../Components/FunctionHall/FunctionHallSection";
import GallerySection from "../../Components/Gallery/GallerySection";

const Homepage = () => {
  return (
    <main className="homepage">
      <Header />
      <RoomSection />
      <AboutSection />
      <FunctionHallSection />
      <GallerySection />
    </main>
  );
};

export default Homepage;
