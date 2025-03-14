import React from 'react';
import Bap from '../../assets/bap.webp'
import Bar from '../../assets/bar.webp'

const Newsletter = () => {
    return (
        <div style={{marginTop:'70px'}} className='grid grid-cols-1  gap-5  xl:grid-cols-2'>
            <div style={{padding:'20px'}} className='flex flex-col gap-4 md:flex-row  bg-white rounded-3xl hover:shadow-lg'>
                <img className='sm:w-50 w-100' src={Bap} alt="" />
                <div className='flex flex-col'>
                    <h2 style={{marginBottom:'10px'}} className='text-xl '>List Your Resturant on Foodi</h2>
                    <p style={{marginBottom:'8px'}} className='text-gray-600'>Would you like millions of new customers to enjoy your amazing food and groceries? Let's start our partnership today!</p>
                    <button className='btn text-white cursor-pointer'>Become a Parthner</button>

                </div>

            </div>
            <div style={{padding:'20px'}} className='flex flex-col md:flex-row gap-4 bg-white rounded-3xl hover:shadow-lg'>
                <img className='w-100 sm:w-50 rounded-xl h-50' src={Bar} alt="" />
                <div className='flex flex-col'>
                    <h2 style={{marginBottom:'10px'}} className='text-xl'>Become A Foodie Hero</h2>
                    <p style={{marginBottom:'8px'}} className='text-gray-600'>Are you a man of speed and a master of navigation? Become a Foodi Hero and earn up to 25,000 TK each month while spreading joy to the doorsteps.</p>
                    <button className='btn text-white cursor-pointer'>Become a Hero</button>

                </div>

            </div>
        </div>
    );
};

export default Newsletter;