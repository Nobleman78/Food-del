import React, { useContext, useState } from 'react';
import { StoreContext } from '../../Context/Context';
import './FoodDisplay.css'
import FoodItem from '../FoodItem/FoodItem';
import Pagination from '../Pagination/Pagination';

const FoodDisplay = ({ catagory }) => {
    
    const { food_list } = useContext(StoreContext)
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(8);

    const lastPostIndex = currentPage * postPerPage;
    const firstPostIndex = lastPostIndex - postPerPage;
    const currentPosts = food_list.slice(firstPostIndex,lastPostIndex)




    return (
        <div className='food-display'>
            <h2 className='text-2xl'>Top Dishes Near You</h2>
            <div className="food-display-list grid grid-cols-4 gap-5 ">
                {
                    currentPosts.map((foodItem, index) => {
                        if (catagory === 'All' || catagory === foodItem.category)
                            return (
                                <FoodItem key={index} foodItem={foodItem}></FoodItem>

                            )
                    })
                }
            </div>
            <Pagination totalMenu={food_list.length} postPerPage={postPerPage} setCurrentPage={setCurrentPage}/>

        </div>
    );
};

export default FoodDisplay;