import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Navbar from '../src/components/Navbar'
import About from './pages/About'
import Collection from './pages/Collection'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Register from './pages/Register'
import PlaceOrders from './pages/PlaceOrders'
import Order from './pages/Order'
import SearchBar from './components/SearchBar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
  <div className='px-4 sm:px-[7vw] lg:px-[9vw]'>
    <ToastContainer />
   <Navbar />
   <SearchBar />
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/collection' element={<Collection />} />
    <Route path='/about' element={<About />} />
    <Route path='/contact' element={<Contact />} />
    <Route path='/product/:productId' element={<Product />} />
    <Route path='/cart' element={<Cart />} />    
    <Route path='/login' element={<Login />} />
    <Route path='/register' element={<Register />} />
    <Route path='/place-order' element={<PlaceOrders />} />
    <Route path='/order' element={<Order />} />
   </Routes>
   <Footer />
  </div>   
  )
}

export default App
    {/* <Outlet /> */}