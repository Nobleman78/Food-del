import React, { useContext} from 'react';
import './FoodItem.css'
import { assets } from '../../assets/assets';
import { StoreContext } from '../../Context/Context';

const FoodItem = ({ foodItem }) => {
    const{addToCart,cartItems,removeFromCart} = useContext(StoreContext)
    const id = foodItem._id
    return (
        <div className='shadow-xl rounded-lg'>
            <div className='food-item-img '>
                <img className='rounded-lg' src={foodItem.image} alt="" />
                {
                    !cartItems[id]? <img className='add'onClick={()=>addToCart(id)} src={assets.add_icon_white}></img>:
                    <div className='food-item-counter flex gap-4 items-center '>
                        <img className='w-[30%]' onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                         <p className=' w-[5px]  text-bold text-sm text-gray-950 '>{cartItems[id]}</p>
                        <img className='w-[30%]' onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
                    </div>

                }
            </div>
            <div className='food-item-info '>
                <div className='food-item-name-rating flex items-center justify-between'>
                    <p className='font-bold text-lg'>{foodItem.name}</p>
                    <img className='w-[70px] h-[20px]' src={assets.rating_starts} alt="" />
                   
                </div>
                <p>Price : $ {foodItem.price}</p>
                <p className='text-sm text-justify w-[95%] mx-auto'>Description : {foodItem.description}</p>
            </div>


        </div>
    );
};

export default FoodItem;