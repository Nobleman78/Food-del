import React, { useState } from 'react';
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom';



const Navbar = () => {
    const navigate = useNavigate();
    const[menu,setMenu] = useState('menu')
    return (
        <div className='navbar'>
            <img onClick={()=>navigate('/')}  className='cursor-pointer logo' src={assets.logo} alt=""></img>
            <ul className='navbar-menu'>
                <li onClick={()=>setMenu('Home')} className={menu === 'Home'?'active':''}><Link to='/'>Home</Link></li>
                <li onClick={()=>setMenu('Menu')} className={menu === 'Menu'?'active':''}><Link to='/menu'>Menu</Link></li>
                <li onClick={()=>setMenu('Mobile-App')} className={menu === 'Mobile-App'?'active':''}><Link to='/mobile-app'>Mobile-App</Link></li>
                <li onClick={()=>setMenu('Contact ')} className={menu === 'Contact '?'active':''}><Link to='/contact'>Contact </Link></li>
          
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