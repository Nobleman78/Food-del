import React from 'react';
import { FaPhoneVolume } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa6";
import { Checkbox } from '@mui/material';
import './Contact.css'
const Contact = () => {

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    return (
        <div className='contact-page  '>
            <h2 className='contact-header-title'>Contact Us</h2>
            <p className='contact-header-text '>Any question or remarks? Just write us a message!</p>
            <div className=' h-[500px]'>
                <div className='contact-contents '>
                    <div className='contact-left-part grid gap-10 '>
                        <div>
                            <h2 className='text-2xl'>Contact Information</h2>
                            <p>Say something to start a live chat!</p>
                        </div>
                        <div className='contact-left-part-item grid gap-7'>
                            <div className='flex items-center phone-section'>
                                <FaPhoneVolume></FaPhoneVolume>
                                <span>+1012 3456 789</span>

                            </div>
                            <div className='flex items-center email-section'>
                                <MdOutlineMail></MdOutlineMail>
                                <p>demo@gmail.com</p>
                            </div>
                            <div className='flex items-center locaton-section'>
                                <FaLocationArrow className='location-icon'></FaLocationArrow>
                                <p>132 Dartmouth Street Boston, Massachusetts 02156 United States</p>
                            </div>


                        </div>

                    </div>
                    <div className='contact-right-part grid w-[500px]  '>
                        <div className='contact-right-part-first flex gap-5 '>
                            <div>
                                <label>First Name : </label>
                                <input className='border-b shadow-none outline-none w-50 ' type="text" name='first-name' placeholder='Enter Your First Name' />
                            </div>
                            <br />
                            <div>
                                <label>Last : </label>
                                <input className='border-b shadow-none outline-none w-50  ' type="text" name='second-name' placeholder='Enter Your Second Name' />
                            </div>
                            <br />
                        </div>
                        <br />
                        <div className='contact-right-part-second  flex gap-20  '>
                            <div>
                                <label>Email</label>
                                <input type="email" className='border-b w-50 outline-none shadow-none' placeholder='Enter Your Email' name='email' />
                            </div>
                            <div>
                                <label>Phone Number</label>
                                <input type="number" name='number' className='border-b w-50 outline-none shadow-none' placeholder='Enter Your Phone Number' />
                            </div>

                        </div>
                        <div className='contact-right-part-end grid gap-5 relative '>
                            <h2>Select Subject?</h2>
                            <div className='flex items-center gap-3'>
                                <span><Checkbox {...label} />General Enquiry</span>
                                <span>Deep Enquiry</span>
                            </div>

                            <div>
                                <p>Message</p>
                                <input type="text" className='border-b w-full shadow-none outline-none' placeholder='Enter Your Message Here' />
                            </div>
                            <button className='send-message-btn absolute'>Send Message </button>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Contact;