import './Home.css'
import Header from '../../components/Header/Header';
import Menu from '../Menu/Menu';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';
import RolePlay from '../../components/RolePlay/RolePlay';
import Newsletter from '../../components/Newsletter/Newsletter';
const Home = () => {

    return (
        <div>
           <Header/>
           <Newsletter/>
           <RolePlay/>
           
           
        </div>
    );
};

export default Home;