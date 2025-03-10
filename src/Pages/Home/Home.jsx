import './Home.css'
import Header from '../../components/Header/Header';
import Menu from '../Menu/Menu';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';
const Home = () => {

    return (
        <div>
           <Header/>
           <Menu />
           <FoodDisplay/>
        </div>
    );
};

export default Home;