import React, { useEffect, useState } from "react";
import "./RoomPage.css";
import { Link } from "react-router-dom";
import RoomDetailsPage from "./RoomDetailsPage";

import heroImg from "../../images/rooms/room-hero.jpg";

const RoomPage = () => {
  const [roomData, setRoomData] = useState([]);
  const [isloading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [selectedRoom, setSelectedRoom] = React.useState(null);

  useEffect(() => {
    fetchRoomData();
  }, []);

  const fetchRoomData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("http://localhost:3001/api/rooms");

      if (!response.ok) {
        throw new Error("Failed to fetch room data");
      }
      const data = await response.json();
      setRoomData(data);
      setIsLoading(false);
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
      console.error("Error fetching room data:", err);
    }
  };

  const openRoomDetails = (room) => {
    setSelectedRoom(room.title);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden"; // Disable scrolling
  };

  const closeRoomDetails = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto"; // Enable scrolling
  };

  return (
    <div className="room-page">
      <div className="hero-section">
        <img src={heroImg} alt="img" className="hero-img" />
        <div className="room-container-content">
          <h1>Rooms</h1>
          <p>
            Relax in style with our beautifully designed hotel rooms. Enjoy
            plush bedding, modern amenities, and a peaceful retreat for your
            perfect stay. Comfort and convenience await—book now!
          </p>
        </div>
      </div>

      <div className="room-list-container">
        <div className="room-list">
          {roomData.map((room) => (
            <div className="room-card" key={room.id}>
              {room.image && (
                <img
                  src={`/images/${room.image}`}
                  alt={room.title}
                  className="room-image"
                  onError={(e) => {
                    console.error(`Failed to load image: ${room.image}`);
                    e.target.style.display = "none";
                  }}
                />
              )}

              <div className="room-content">
                <h3 className="room-name">{room.title}</h3>
                <p className="room-page-description">{room.description}</p>
                <div className="room-footer">
                  <div className="price-container">
                    <span className="room-price">{room.price}/night</span>
                  </div>
                  <div className="button-container">
                    <button
                      className="view-details-button"
                      onClick={() => openRoomDetails(room)}
                    >
                      View Details
                    </button>
                    <Link to="/booking">
                      <button className="book-now-button">Book Now</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <RoomDetailsPage
        isOpen={isModalOpen}
        onClose={closeRoomDetails}
        roomname={selectedRoom}
      />
    </div>
  );
};

export default RoomPage;
