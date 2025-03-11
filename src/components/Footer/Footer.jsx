import React from 'react';
import './Footer.css'
import { assets } from '../../assets/assets';


const Footer = () => {
    return (
        <div className='footer '>

            <div className="footer-content w-full grid  gap-20 ">
                <div className='footer-content-left flex flex-col items-start gap-5'>
                    <img src={assets.logo} alt="" />
                    <p className='text-white '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, ratione?</p>
                    <div className="footer-social-icons  flex  gap-3 cursor-pointer">
                        <img src={assets.facebook_icon} alt="FaceBook Icon" />
                        <img src={assets.twitter_icon} alt="Twitter Icon" />
                        <img src={assets.linkedin_icon} alt="Linkdin Icon" />
                    </div>

                </div>
                <div className='footer-content-center flex flex-col items-start gap-5'>
                    <h2 className='text-white text-2xl'>Company</h2>
                    <ul className='grid gap-2 text-white cursor-pointer'>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>

                </div>
                <div className='footer-content-right flex flex-col items-start gap-5'>
                    <h2 className='text-white text-2xl'>Get In Touch</h2>
                    <ul className='text-white grid gap-2 cursor-pointer'>
                        <li>+8801783672349</li>
                        <li>food@gmail.com</li>
                    </ul>

                </div>
            </div>
            <hr />
            <p className="footer-copyright text-white">
                Copyright 2025 <span className='copyright-title'>@foodpanda.com</span> - All Rights Reserved.

            </p>
        </div>
    );
};

export default Footer;