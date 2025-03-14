import React from 'react';
import SuperFast from '../../assets/superfast.svg'
import Order_traking from '../../assets/order_traking.svg'
import Fav_Resturant from '../../assets/fav_restaurant.svg'

const RolePlay = () => {
    return (
        <div>
            <div style={{marginTop:'60px'}} className='flex items-center gap-3 '>
                <h2 className='text-2xl'><span className='text-gray-600'>WHY</span> CHOOSE US</h2>
                <p className='w-8 sm:w-11 bg-black h-[1px]'></p>
            </div>
            <div style={{ marginTop: '50px' }} className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3'>

                <div className='flex flex-col text-center items-center justify-center'>
                    <img src={SuperFast} alt="" />
                    <h2 className='font-semibold text-xl'>Super Fast Delivery</h2>
                    <p>Faster than your cravings can blink. Experience the super-fast delivery and get fresh food.</p>

                </div>
                <div className='flex flex-col text-center items-center justify-center'>
                    <img src={Order_traking} alt="" />
                    <h2 className='font-semibold text-xl'>Live Order Tracking</h2>
                    <p>Track your order while it is delivered to your doorstep from the restaurant.</p>

                </div>
                <div className='flex flex-col text-center items-center justify-center'>
                    <img src={Fav_Resturant} alt="" />
                    <h2 className='font-semibold text-xl'>Your Favorite Restaurants</h2>
                    <p>Find the best and nearest top your favorite restaurants from your selected location.</p>

                </div>
            </div>
        </div>
    );
};

export default RolePlay;