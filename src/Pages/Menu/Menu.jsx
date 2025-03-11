import React, { useState } from 'react';
import './Menu.css'
import { menu_list } from '../../assets/assets';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';

const Menu = () => {
    const[category,setcategory] = useState('All')
    return (
        <div className='explore-menu flex flex-col gap-5 '>
            <h1 className='text-xl text-justify font-bold '>Explore Our Menu</h1>
            <p className='max-w[60%] explore-menu-text'>Browse our menu and find your next favorite dish. We’ve got something for everyone. Simple, delicious, and made just for you.</p>
            <div className="explore-menu-list flex justify-between  items-center gap-8 text-center ">
                {
                    menu_list.map((item,index)=>{
                        return(
                            <div onClick={()=>setcategory(prev=>prev===item.menu_name?'All':item.menu_name)} key={index} className='explore-menu-list-item'>
                                <img className={item.menu_name===category?'active':''} src={item.menu_image} alt="" />
                                <p className=' cursor-pointer ' >{item.menu_name}</p>

                            </div>
                        )
                    })
                }
            </div>
            <hr />
            <FoodDisplay catagory={category}></FoodDisplay>
          
        </div>
    );
};

export default Menu;