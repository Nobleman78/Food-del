import React, { useEffect, useRef, useState } from 'react';
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom';
import { IoMenuOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import Food_Logo from '../../assets/Food Logo.svg'



const Navbar = () => {
    const [open, setOpen] = useState(false);
   

    const navref = useRef();
    const navigate = useNavigate();
    const [menu, setMenu] = useState('menu')

    useEffect(() => {
        window.addEventListener('scroll', () => {
            let position = window.pageYOffset;
            if (position > 40) {
                navref.current.classList.add('fixed')
            }
            else {
                navref.current.classList.remove('fixed')
            }
         
        })
    })



    return (
        <div ref={navref} className='nav-wrapper'>
            <div className='navbar'>
                <div onClick={() => setOpen(!open)} className='md:hidden'>
                    <IoMenuOutline className='cursor-pointer text-xl' />
                </div>
                <img  onClick={() => navigate('/')} className='cursor-pointer logo' src={Food_Logo} alt=""></img>
                <ul className='navbar-menu'>
                    <li onClick={() => setMenu('Home')} className={menu === 'Home' ? 'active' : ''}><Link to='/'>Home</Link></li>
                    <li onClick={() => setMenu('Menu')} className={menu === 'Menu' ? 'active' : ''}><Link to='/menu'>Menu</Link></li>
                    <li onClick={() => setMenu('Mobile-App')} className={menu === 'Mobile-App' ? 'active' : ''}><Link to='/mobile-app'>Mobile-App</Link></li>
                    <li onClick={() => setMenu('Contact ')} className={menu === 'Contact ' ? 'active' : ''}><Link to='/contact'>Contact </Link></li>

                </ul>

                <div className="navbar-right">
                    <Link to='/search'> <IoSearch  className='navbar-right-search-img text-xl ' alt="" /></Link>
                    <div className='navbar-search-icon'>
                        <Link to="/cart"> <IoCartOutline className='navbar-right-cart-img text-xl' alt="" /></Link>
                        <div className='dot'></div>
                    </div>
                    <button><Link to="/login">Login</Link></button>
                  
                </div>

                <div className={`absolute md:hidden top-17 left-0 w-full  bg-white flex flex-col items-center gap-6 font-semibold text-lg transform transition-transform
                    ${open ? "opacity-100 z-10" : "opacity-0"}`}
                    style={{ transition: 'transform 0.3s ease,opacity 0.3s ease' }}>
                    <li className='list-none w-full text-center hover:bg-sky-400 hover:text-white transition-all cursor-pointer '>Home</li>
                    <li className='list-none w-full text-center hover:bg-sky-400 hover:text-white transition-all cursor-pointer '>Menu</li>
                    <li className='list-none w-full text-center hover:bg-sky-400 hover:text-white transition-all cursor-pointer '>Mobile-App</li>
                    <li className='list-none w-full text-center hover:bg-sky-400 hover:text-white transition-all cursor-pointer '>Contact</li>

                </div>





            </div>

        </div>
    );
};

export default Navbar;