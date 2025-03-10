import React, { useContext } from 'react';
import { StoreContext } from '../../Context/Context';
import './FoodDisplay.css'
import FoodItem from '../FoodItem/FoodItem';

const FoodDisplay = ({ catagory }) => {
    console.log(catagory);

    const { food_list } = useContext(StoreContext)
    return (
        <div className='food-display'>
            <h2 className='text-2xl'>Top Dishes Near You</h2>
            <div className="food-display-list grid grid-cols-4 gap-5 ">
                {
                    food_list.map((foodItem, index) => {
                        if(catagory==='All' || catagory===foodItem.category)
                            return (
                                <FoodItem key={index} foodItem={foodItem}></FoodItem>

                            )
                    })
                }
            </div>

        </div>
    );
};

export default FoodDisplay;