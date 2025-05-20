import React from "react";
import { Link } from "react-router-dom";
import "./RoomSection.css";
import RoomImg1 from "../../images/rooms/standard.jpg";
import RoomImg2 from "../../images/rooms/deluxe.jpg";
import RoomImg3 from "../../images/rooms/executive1.jpg";

const RoomSection = () => {
  const rooms = [
    {
      id: 1,
      title: "Standard Room",
      price: "₱2,300",
      perNight: "/ per night",
      image: RoomImg1,
    },
    {
      id: 2,
      title: "Executive Room",
      price: "₱3,500",
      perNight: "/ per night",
      image: RoomImg3,
    },
    {
      id: 3,
      title: "Deluxe Room",
      price: "₱2,500",
      perNight: "/ per night",
      image: RoomImg2,
    },
  ];

  return (
    <div className="rooms-section section">
      <div className="container">
        <div className="rooms-header">
          <h1 className="section-title">Rooms & Suites</h1>
          <p className="section-description">
            Discover a blend of modern luxury and warm hospitality in our
            thoughtfully designed rooms and suites. Each space features plush
            bedding, stylish décor, and premium amenities to ensure a restful
            and memorable stay- whether you’re traveling for business or
            leisure.
          </p>
        </div>

        <div className="rooms-grid">
          {rooms.map((room) => (
            <div key={room.id} className="Room-slide">
              <div className="Room-Card">
                <div className="Room-Img">
                  <img src={room.image} alt={room.alt} className="room-image" />
                </div>

                <div className="Room-Content">
                  <h3>{room.title}</h3>
                  <div className="Price-Container">
                    <span className="Price-Amount">{room.price}</span>
                    <span className="Price-Period">{room.perNight}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="View-All-Container">
          <Link to="/room" className="View-All-Button">
            View All
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RoomSection;
