
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart'
import Placeorder from './Pages/Placeorder/Placeorder'
import Menu from './Pages/Menu/Menu'
import Contact from './Pages/Contact/Contact'
import MobileApp from './Pages/MobileApp/MobileApp'
import Footer from './components/Footer/Footer'
import Login from './components/Account/Login'
import Search from './Pages/Search/Search'
import Registration from './components/Account/Registration'
function App() {
  return (
    <>
      <div className='app' >
        <BrowserRouter>
          <Navbar></Navbar>
          <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='menu' element={<Menu></Menu>}></Route>
            <Route path='/cart' element={<Cart></Cart>}></Route>
            <Route path='/contact' element={<Contact></Contact>}></Route>
            <Route path='mobile-app' element={<MobileApp></MobileApp>}></Route>
            <Route path='/order' element={<Placeorder></Placeorder>}></Route>
            <Route path='/login' element={<Login></Login>}></Route>
            <Route path='/registration' element={<Registration></Registration>}></Route>
            <Route path='/search' element={<Search></Search>}></Route>

          </Routes>

        </BrowserRouter>

      </div>
      <Footer></Footer>
    </>

  )
}

export default App
