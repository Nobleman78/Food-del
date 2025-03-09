import React, { useState } from 'react';
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';



const Navbar = () => {
   
    const[menu,setMenu] = useState('menu')
    return (
        <div className='navbar'>
            <img src={assets.logo} alt="" />
            <ul className='navbar-menu'>
                <li onClick={()=>setMenu('Home')} className={menu === 'Home'?'active':''}><Link to='/'>Home</Link></li>
                <li onClick={()=>setMenu('Menu')} className={menu === 'Menu'?'active':''}><Link to='/menu'>Menu</Link></li>
                <li onClick={()=>setMenu('Mobile-App')} className={menu === 'Mobile-App'?'active':''}><Link to='/mobile-app'>Mobile-App</Link></li>
                <li onClick={()=>setMenu('Contact Us')} className={menu === 'Contact Us'?'active':''}><Link to='/contact'>Contact Us</Link></li>
          
            </ul>
           
            <div className="navbar-right">
                <img src={assets.search_icon} alt="" />
                <div className='navbar-search-icon'>
                    <img src={assets.basket_icon} alt="" />
                    <div className='dot'></div>
                </div>
                <button>Login</button>
            </div>


        </div>
    );
};

export default Navbar;