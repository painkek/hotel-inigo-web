import React, { useEffect, useState } from 'react'
import './Facilities.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Facilities = () => {

    const [facilities, setFacilities] = useState([]);
    const [Isloading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchFacilitiesData();
    }, []);

    const fetchFacilitiesData = async () => {
        try {
            setIsLoading(true);
            const response = await fetch("http://localhost:3001/api/facilities");
            if (!response.ok) {
                throw new Error('Failed to fetch facilities data');

            }
            const data = await response.json();
            setFacilities(data);
            setIsLoading(false);
        } catch (error) {
            setError(error.message);
            setIsLoading(false);
            console.error("Error fetching facilities data:", error);
        }
    };

    if (Isloading) {
        return <div className="loading">Loading...</div>
    } else if (error) {
        return <div className="error">Error: {error}</div>

    }


    const FacilityCard = (facility) => {
        return (
            <div className={`facility-card ${facility.position}-card`} key={facility.id}>
                <div className={`card-content ${facility.position === 'right' ? 'reverse' : ''}`}>

                    {facility.position !== 'right' && (
                        <div className="image-collage">
                            <div className="large-image-container">
                                <img src={`/images/${facility.images[0]}`} alt={`${facility.name} Main View`} />
                            </div>
                            <div className="content-side">
                                <div className="small-images">
                                    <img src={`/images/${facility.images[1]}`} alt={`${facility.name} Detail 1`} />
                                    <img src={`/images/${facility.images[2]}`} alt={`${facility.name} Detail 2`} />
                                </div>
                            </div>
                        </div>
                    )}

                    <div className="text-content">
                        <div className="card-header">
                            <h2>{facility.name}</h2>
                        </div>
                        <div className="card-description">
                            <p>{facility.description}</p>
                        </div>
                    </div>

                    {facility.position === 'right' && (
                        <div className="image-collage">
                            <div className="large-image-container">
                                <img src={`/images/${facility.images[0]}`} alt={`${facility.name} Main View`} />
                            </div>
                            <div className="content-side">
                                <div className="small-images">
                                    <img src={`/images/${facility.images[1]}`} alt={`${facility.name} Detail 1`} />
                                    <img src={`/images/${facility.images[2]}`} alt={`${facility.name} Detail 2`} />
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

        );
    };

    const SliderCard = (facility) => {
        return (
            <div className="facility-card cafe-card" key={facility.id}>
                <div className="slider-container">
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={0}
                        slidesPerView={1}
                        autoplay={{ delay: 3000 }}
                        className="cafe-slider"
                    >
                        {facility.slides && facility.slides.map((slide, index) => (
                            <SwiperSlide key={index}>
                                <div className="slider-image-container">
                                    <img src={`/images/${slide}`} alt={`${facility.name} Slide ${index + 1}`} />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <div className="card-content-container">
                        <div className="static-content">
                            <div className="card-header">
                                <h2>{facility.name}</h2>
                            </div>
                            <div className="card-description">
                                <p>{facility.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


    return (
        <div className="facilities-page">
            <div className="facilities-hero">
                <div className="hero-overlay">
                    <div className="facilities-container section">
                        <h2>Our Facilities</h2>
                        <p>At our hotel, we strive to provide a comprehensive and comfortable experience for all our guests.
                            Our facilities are designed to cater to your every need, whether you're here for business, leisure,
                            or a combination of both. From relaxing spaces to productive areas,
                            we ensure that you have everything you need to make your stay with us truly unforgettable.</p>
                    </div>
                </div>
            </div>

            <div className="facilities-content">
                {facilities.map((facility) =>
                    facility.type === 'collage'
                        ? FacilityCard(facility)
                        : SliderCard(facility)
                )}
            </div>

        </div >
    )

}


export default Facilities
