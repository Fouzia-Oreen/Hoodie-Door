import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from '../src/components/Navbar'
import './App.css'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
import About from './pages/About'
import Cart from './pages/Cart'
import Collection from './pages/Collection'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Login from './pages/Login'
import Orders from './pages/Orders'
import PlaceOrders from './pages/PlaceOrders'
import Product from './pages/Product'
import NotFound from './pages/NotFound'
import VerifyPayment from './pages/VerifyPayment'

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
    <Route path='/place-order' element={<PlaceOrders />} />
    <Route path='/orders' element={<Orders />} />
    <Route path='/veyify' element={<VerifyPayment />} />
    <Route path='*' element={<NotFound />} />
   </Routes>
   <Footer />
  </div>   
  )
}

export default App
    {/* <Outlet /> */}