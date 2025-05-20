import React, { useState, useEffect } from 'react'
import './GallerySection.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import 'swiper/swiper-bundle.css';

import img1 from '../../images/gallery/hotel-img-1.jpg';
import img2 from '../../images/gallery/hotel-img-2.jpg';
import img3 from '../../images/gallery/hotel-img-3.jpg';
import img4 from '../../images/gallery/hotel-img-4.jpg';
import img5 from '../../images/gallery/hotel-img-5.jpg';
import img6 from '../../images/gallery/hotel-img-6.jpg';
import img7 from '../../images/gallery/hotel-img-7.jpg';
import img8 from '../../images/gallery/hotel-img-8.jpg';

const GallerySection = () => {

    const hotelImages = [
        { id: 1, src: img1 },
        { id: 2, src: img2 },
        { id: 3, src: img3 },
        { id: 4, src: img4 },
        { id: 5, src: img5 },
        { id: 6, src: img6 },
        { id: 7, src: img7 },
        { id: 8, src: img8 },
    ];

    return (
        <div className="gallery-section">
            <h2 className="gallery-title">Our Gallery</h2>

            <div className="gallery-slider-container">
                <button className="slider-arrow prev-button">
                    <ChevronLeft size={24} />
                </button>

                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={30}
                    slidesPerView={3}
                    breakpoints={{
                        1024: { slidesPerView: 3 },
                        768: { slidesPerView: 2 },
                        576: { slidesPerView: 1 },

                    }}
                    navigation={{
                        nextEl: '.next-button',
                        prevEl: '.prev-button',
                    }}
                    pagination={{ clickable: true, el: '.slider-dots' }}
                    className="gallery-slider">

                    {hotelImages.map((image, index) => (
                        <SwiperSlide key={index}>
                            <div className="slider-item">
                                <img src={image.src} alt={`Hotel view ${index + 1}`} className="gallery-image" />

                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <button className="slider-arrow next-button">
                    <ChevronRight size={24} />
                </button>
            </div>
            <div className="slider-dots"></div>

        </div>
    )
}

export default GallerySection
