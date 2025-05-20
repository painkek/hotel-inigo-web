import React, { useEffect } from "react";
import "./App.css";
import Navbar from "./assets/Components/Navbar/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Homepage from "./assets/Pages/Homepage/Homepage";
import RoomPage from "./assets/Pages/RoomPage/RoomPage";
import RoomDetailsPage from "./assets/Pages/RoomPage/RoomDetailsPage";
import Facilities from "./assets/Pages/FacilitiesPage/Facilities";
import About from "./assets/Pages/AboutPage/About";
import BookingPage from "./assets/Pages/ContactUsPage/BookingPage";
import Footer from "./assets/Components/Footer/Footer";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return null;
};

function App() {
  return (
    <div className="App-container">
      <Router>
        <Navbar />
        <ScrollToTop />
        <div className="page-content">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/room" element={<RoomPage />} />
            <Route path="/room/:roomname" element={<RoomDetailsPage />} />
            <Route path="/facilities" element={<Facilities />} />
            <Route path="/about" element={<About />} />
            <Route path="/booking" element={<BookingPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
