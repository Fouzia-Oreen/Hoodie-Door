import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import logo from '../assets/logo.png';
// import CartModel from "../pages/shop/cart/CartModal";
// import DropdownProfile from "../components/drop-downs/DropdownProfile";
import ShopDropDownMenu from "./drop-downs/ShopDropDown";


const Navbar = () => {
  const products = useSelector((state) => state.cart.products);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // cart toggle function
  const handleCartToggle = () => {
    setIsCartOpen(!isCartOpen)
  }
  

  return (
    <header className="fixed-nav-bar w-nav ">
      <nav className="max-w-screen-2xl mx-auto px-4 flex justify-between items-center">
        <ul className="nav__links">
            <li className='link'>
              <NavLink to="/shop" >Shop</NavLink>
            </li>
            <ShopDropDownMenu />
            <li className='link'>
              <NavLink to="/about">About</NavLink>
            </li>
            <li className='link' >
              <NavLink to="/contact">Contact</NavLink>
            </li>
        </ul>
        <div className='nav__logo'>
            <NavLink to="/">
                <img src={logo} alt="logo" className='w-[40px] h-[40px] object-contain'/>
            </NavLink>
        </div>
        <div className="nav__icons relative">
            <span>
                <Link to="/search">
                    <i className="ri-search-line"></i>
                </Link>
            </span>
            <span>
                <button className='duration-200' onClick={handleCartToggle}>
                    <Link>
                    <i className="ri-shopping-bag-line"></i>
                    <sup className='text-sm inline-block px-1.5 text-primary rounded-full text-center bg-accent'>{products.length}</sup>
                    </Link>
                </button>
            </span>
            {/* dropdown */}
            {/* <DropdownProfile />  */}
        </div>
      </nav>
      {/* {
        isCartOpen && <CartModel products={products} isOpen={isCartOpen} onClose={handleCartToggle}/>
      } */}
    </header>
  )
}

export default Navbar