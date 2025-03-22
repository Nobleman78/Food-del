import React, { useEffect, useRef, useState } from 'react';
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { IoMenuOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import Food_Logo from '../../assets/Food Logo.svg'
import { RxCross2 } from "react-icons/rx";




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
                <IoMenuOutline onClick={() => setOpen(!open)} className='cursor-pointer md:hidden text-xl' />
                <img onClick={() => navigate('/')} className='cursor-pointer logo' src={Food_Logo} alt=""></img>
                <ul className='navbar-menu'>
                    <li onClick={() => setMenu('Home')} className={menu === 'Home' ? 'active' : ''}><Link to='/'>Home</Link></li>
                    <li onClick={() => setMenu('Menu')} className={menu === 'Menu' ? 'active' : ''}><Link to='/menu'>Menu</Link></li>
                    <li onClick={() => setMenu('Mobile-App')} className={menu === 'Mobile-App' ? 'active' : ''}><Link to='/mobile-app'>Mobile-App</Link></li>
                    <li onClick={() => setMenu('Contact ')} className={menu === 'Contact ' ? 'active' : ''}><Link to='/contact'>Contact </Link></li>

                </ul>

                <div className="navbar-right">
                    <Link to='/search'> <IoSearch className='navbar-right-search-img text-xl ' alt="" /></Link>
                    <div className='navbar-search-icon'>
                        <Link to="/cart"> <IoCartOutline className='navbar-right-cart-img text-xl' alt="" /></Link>
                        <div className='dot'></div>
                    </div>
                    <button><Link to="/login">Login</Link></button>

                </div>
                <div className={`absolute top-0 left-0 bottom-0  overflow-hidden bg-white transition-all ${open ? 'w-full h-50  z-10 ' : 'w-0'}`}>
                    <div className='flex flex-col text-gray-600  px-5'>
                        <div onClick={() => setOpen(false)} className='flex items-center gap-4 mt-2 mb-2'>
                            <RxCross2 className='text-2xl' />

                        </div>
                        <NavLink onClick={() => setOpen(!open)} to='/' className=' py-1 px-1'>Home</NavLink>
                        <NavLink onClick={() => setOpen(!open)} to='/menu' className=' py-1 px-1'>Menu</NavLink>
                        <NavLink onClick={() => setOpen(!open)} to='/mobile-app' className=' px-1 py-1'>Mobile-App</NavLink>
                        <NavLink onClick={() => setOpen(!open)} to='/contact' className=' px-1 py-1'>Contact</NavLink>

                    </div>

                </div>







            </div>

        </div>
    );
};

export default Navbar;