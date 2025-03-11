
import './Header.css'
import backGroundImage from '../../assets/header_img.png'
import { Link } from 'react-router-dom';
const Header = () => {
    
    return (
        <div className='header'>
            <img src={backGroundImage} alt="" />
            <div className='header-contents'>
                <h1 className='text-5xl text-white '>Order Your Favaourite food here.</h1>
                <p className='text-white text-lg text-justify'>Explore a world of flavors through our curated collection of recipes.</p>
                <button className='btn text-white'><Link to='/menu'>View Menu</Link></button>

            </div>
        </div>
    );
};

export default Header;