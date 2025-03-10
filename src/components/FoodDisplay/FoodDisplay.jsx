import React, { useContext, useState } from 'react';
import { StoreContext } from '../../Context/Context';
import './FoodDisplay.css'
import FoodItem from '../FoodItem/FoodItem';

const FoodDisplay = () => {
    const[catagory,setCatagory]=useState('All')
    const {food_list} = useContext(StoreContext)
    return (
        <div className='food-display'>
            <h2 className='text-2xl'>Top Dishes Near You</h2>
            <div className="food-display-list grid grid-cols-4 gap-5 ">
                {
                    food_list.map((foodItem,index)=>{
                        return(
                            <FoodItem key={index} foodItem={foodItem}></FoodItem>

                        )
                    })
                }
            </div>
            
        </div>
    );
};

export default FoodDisplay;