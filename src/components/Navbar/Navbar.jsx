import React, { useEffect, useRef, useState } from 'react';
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom';



const Navbar = () => {
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
            console.log(position)
        })
    })



    return (
        <div ref={navref} className='nav-wrapper'>
            <div className='navbar'>
                <img onClick={() => navigate('/')} className='cursor-pointer logo' src={assets.logo} alt=""></img>
                <ul className='navbar-menu'>
                    <li onClick={() => setMenu('Home')} className={menu === 'Home' ? 'active' : ''}><Link to='/'>Home</Link></li>
                    <li onClick={() => setMenu('Menu')} className={menu === 'Menu' ? 'active' : ''}><Link to='/menu'>Menu</Link></li>
                    <li onClick={() => setMenu('Mobile-App')} className={menu === 'Mobile-App' ? 'active' : ''}><Link to='/mobile-app'>Mobile-App</Link></li>
                    <li onClick={() => setMenu('Contact ')} className={menu === 'Contact ' ? 'active' : ''}><Link to='/contact'>Contact </Link></li>

                </ul>

                <div className="navbar-right">
                    <Link to='/search'> <img src={assets.search_icon} alt="" /></Link>
                    <div className='navbar-search-icon'>
                        <Link to="/cart"> <img src={assets.basket_icon} alt="" ></img></Link>
                        <div className='dot'></div>
                    </div>
                    <button><Link to="/login">Login</Link></button>
                </div>


            </div>
        </div>
    );
};

export default Navbar;