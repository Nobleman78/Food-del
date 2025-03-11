import React from 'react';
import './MobileApp.css'
import { assets } from '../../assets/assets';
const MobileApp = () => {
    return (
        <div className='app-download '>
            <p className='text-2xl'>For Better Experience Download The App</p>
            <div className="app-download-plaforms flex cursor-pointer">
                <img src={assets.play_store} alt="Play Store" />
                <img src={assets.app_store} alt="App Store" />
            </div>
        </div>
    );
};

export default MobileApp;