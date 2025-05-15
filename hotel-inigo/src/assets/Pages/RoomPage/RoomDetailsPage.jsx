import React from 'react'
import './RoomDetailsPage.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'
import { Autoplay } from 'swiper/modules'
import RoomDataDetails from './RoomDataDetails'
import { useNavigate } from 'react-router-dom'


const RoomDetailsPage = ({ isOpen, onClose, roomname }) => {
    const navigate = useNavigate();

    if (!isOpen) return null;

    const normalize = (str) => str.toLowerCase().replace(/\s+/g, '-');
    const currentRoom = RoomDataDetails.find((room) => normalize(room.title) === normalize(roomname));

    if (!currentRoom) {
        return (
            <div className="modal-overlay">
                <div className="modal-content">
                    <div className="not-found">Room not found. pls try again.</div>
                    <button className="close-modal-button" onClick={onClose}>Close</button>
                </div>
            </div>
        );
    }

    const handleBookNow = () => {
        onClose();
        navigate('/booking');
    };

    return (

        <div className="modal-overlay" onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
        }}>

            <div className="modal-content">
                <div className='room-details-page'>
                    <div className="room-details-content">
                        <div className="image-slider-container">
                            <Swiper
                                modules={[Autoplay]}
                                spaceBetween={0}
                                slidesPerView={1}
                                autoplay={{ delay: 3000, disableOnInteraction: false }}
                                loop={true}
                                className="room-swiper"
                            >
                                {currentRoom.images.map((image, index) => (
                                    <SwiperSlide key={index}>
                                        <img src={image} alt={`${currentRoom.title} view ${index + 1}`} />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>

                        <div className="room-details-info">
                            <div className="room-header">
                                <div className="room-title-container">
                                    <h1 className="room-title">{currentRoom.title}</h1>
                                    <div className="room-price">
                                        <p>{currentRoom.currency}{currentRoom.price.toLocaleString()}/Night</p>
                                    </div>
                                </div>

                                <button className="book-now-btn" onClick={handleBookNow}>Book Now</button>


                            </div>

                            <div className="room-description">
                                <p>{currentRoom.description}</p>
                            </div>

                            <hr className="divider" />

                            <div className="main-container">
                                <div className="left-container">
                                    <div className="details-section">
                                        <h2>Room Features</h2>
                                        <div className="features-grid">
                                            {currentRoom.features.map((feature, index) => (
                                                <div className="feature-item" key={index}>
                                                    {feature}</div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="details-section">
                                        <h2>Room Facilities</h2>
                                        <div className="facilities-grid">
                                            {currentRoom.facilities.map((facility, index) => (
                                                <div className="facility-item" key={index}>{facility}</div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <hr className="vertical-divider" />

                                <div className="right-container">
                                    <div className="details-section">
                                        <h2>In your Private Room</h2>
                                        <div className="amenities-grid">
                                            {currentRoom.privateRoom.map((amenity, index) => (
                                                <div className="amenity-item" key={index}>{amenity}</div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RoomDetailsPage
