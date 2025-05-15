import React from 'react'
import './AboutSection.css'
import aboutImg from '../../images/hero1.jpg'
import aboutImg2 from '../../images/hero2.jpg'
import aboutImg3 from '../../images/about-1.jpg'

const AboutSection = () => {
    return (

        <div className="about-container section">
            <div className="about-inner-container">

                <div className="about-img-wrapper">
                    <div className="about-image main-image">
                        <img src={aboutImg3} alt="hotel-img" />
                    </div>
                    <div className="about-image-stack">
                        <div className="about-image top-right">
                            <img src={aboutImg} alt="hotel-img" />
                        </div>
                        <div className="about-image bottom-right">
                            <img src={aboutImg2} alt="hotel-img" />
                        </div>
                    </div>

                </div>

                <div className="about-content">
                    <h2 >Escape to <span>Tranquility, </span> Embraced by <span>Nature and Elegance.</span> </h2>

                    <div className="about-text">
                        <small>Hotel Inigo strive to create a pleasant and welcoming atmosphere.
                            It’s our goal to make our clients feel at ease, greeting them with professionalism and attention for their every need.
                            High-speed Internet is available throughout our hotel.</small>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default AboutSection
