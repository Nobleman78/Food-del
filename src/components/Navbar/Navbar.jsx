import React, { useEffect, useState } from 'react';
import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = () => {
    const navbarItems = [
        { id: 1, title: "Home"},
        { id: 2, title: "Menu"},
        { id: 3, title: "Mobile-App" },
        { id: 4, title: "Contact"},
      ];
 
    const[menu,setMenu] = useState(navbarItems[0])
    return (
        <div className='navbar'>
            <img src={assets.logo} alt="" />
            <ul className='navbar-menu'>
                {
                    navbarItems.map((item)=>(
                        <li key={item.id} onClick={()=>setMenu(item)} className={menu.id === item.id ?'active':'' }>
                            {item.title}
                        </li>
                    ))
                }
            </ul>
           
            <div className="navbar-right">
                <img src={assets.search_icon} alt="" />
                <div>
                    <img src={assets.basket_icon} alt="" />
                    <div className='dot'></div>
                </div>
                <button>Login</button>
            </div>


        </div>
    );
};

export default Navbar;