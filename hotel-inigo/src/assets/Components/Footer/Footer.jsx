import React from 'react'
import './Footer.css'
import logo from '../../images/logo.png'




const Footer = () => {

    const currentYear = new Date().getFullYear();
    return (

        <footer className="footer section">
            <div className="footer-container">
                <div className="footer-section brand">
                    <div className="logo-container">
                        <img src={logo} alt="Luxury Hotel Logo" className="footer-logo" />
                    </div>
                    <p className="description">
                        Experience unparalleled luxury and comfort at our hotel.
                        With stunning views, exceptional service, and world-class amenities,
                        we ensure an unforgettable stay for all our guests.
                    </p>
                </div>

                <div className="footer-section links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="/home">Home</a></li>
                        <li><a href="/rooms">Rooms & Suites</a></li>
                        <li><a href="/facilities">Facilities</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/contacts">Contact Us</a></li>

                    </ul>
                </div>

                <div className="footer-section contact">
                    <h3>Contact & Reservation</h3>
                    <ul>

                        <li>
                            <span><i className="ri-phone-line"></i></span>
                            <p>
                                <a href="tel:+639352810508">+63935-281-0508</a><br />
                                <a href="tel:+639236920148">+63923-692-0148</a>
                            </p>
                        </li>
                        <li>
                            <span> <i className="ri-mail-line"></i></span>
                            <p><a href="mailto:sales.inigo2019@gmail.com">sales.inigo2019@gmail.com</a><br />

                            </p>

                        </li>

                        <div className="social-links">
                            <a href="https://facebook.com/" aria-label="Facebook"><i className="ri-facebook-circle-fill"></i> Hotel Inigo</a>
                        </div>
                    </ul>
                </div>

                <div className="footer-section address">
                    <h3>Hotel Address</h3>
                    <address>
                        Rizal St., Brgy.19 Cabangan,
                        Legazpi City
                    </address>

                </div>

            </div>

            <div className="footer-bottom">
                <p>&copy; {currentYear} Hotel Inigo. All rights reserved.</p>
            </div>
        </footer>


    )
}

export default Footer
