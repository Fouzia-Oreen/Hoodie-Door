/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import { Link } from "react-router-dom";
import logo from '../assets/logo.png';
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import CartModel from "../pages/shop/cart/CartModal";
import avatarImg from '../assets/avatar.png'


const Navbar = () => {
  const products = useSelector((state) => state.cart.products);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const handleCartToggle = () => {
    setIsCartOpen(!isCartOpen)
  }
  // show user if logged-in
  const dispatch = useDispatch();
  const {user} = useSelector((state) => state.auth);
  // dropdown for user-profile
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const handleDropDownToggle = () => {
    setIsDropDownOpen(!isDropDownOpen)
  }
  // admin dropdown menus
  const adminDropDownMenu = [
    {label : "Dashboard", path : "/dashboard/admin"},
    {label : "Manage Items", path : "/dashboard/manage-products"},
    {label : "All Orders", path : "/dashboard/manage-orders"},
    {label : "Orders", path : "/dashboard/orders"},
  ]
  // user dropdown menus
  const userDropDownMenu = [
    {label : "Dashboard", path : "/dashboard"},
    {label : "Profile", path : "/dashboard/profile"},
    {label : "Payments", path : "/dashboard/payments"},
    {label : "Add New Post", path : "/dashboard/add-new-post"},
  ]
  const dropDownMenu = user?.role === 'admin' ? [...adminDropDownMenu] : [...userDropDownMenu]

  return (
    <header className="fixed-nav-bar w-nav ">
      <nav className="max-w-screen-2xl mx-auto px-4 flex justify-between items-center">
        <ul className="nav__links">
            <li className='link'><Link to="/shop">Shop</Link></li>
            <li className='link'><Link to="/categories/mens">Mens</Link></li>
            <li className='link'><Link to="/categories/womens">Womens</Link></li>
            <li className='link'><Link to="/categories/accessories">Accessories</Link></li>
        </ul>
        <div className='nav__logo'>
            <Link to="/">
                <img src={logo} alt="logo" className='w-full h-[40px]'/>
            </Link>
        </div>
        <div className="nav__icons relative">
            <span>
                <Link to="/search">
                    <i className="ri-search-line"></i>
                </Link>
            </span>
            <span>
                <button className=' duration-200' onClick={handleCartToggle}>
                    <Link>
                    <i className="ri-shopping-bag-line"></i>
                    <sup className='text-sm inline-block px-1.5 text-primary rounded-full text-center bg-accent'>{products.length}</sup>
                    </Link>
                </button>
            </span>
            <span>
              {
                user && user ? (<>
                <img 
                onClick={handleDropDownToggle}
                src={user?.profileImage || avatarImg} alt="user-profile" className="h-7 rounded-full cursor-pointer border-[1px] border-text-dark" />
                {
                  isDropDownOpen && (
                    <div className="absolute right-0 mt-3 p-4 w-48 bg-[#D1CFC5] border-[1px] border-dark rounded-sm z-50">
                      <ul className="font-medium space-y-4 p-2 text-sm text-text-dark">
                        {dropDownMenu.map((menu, index) => (
                          <li key={index}>
                            <Link 
                            onClick={() => setIsDropDownOpen(false)}
                            className="dropdrop-items" 
                            to={menu.path}>{menu.label}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )
                }
                </>) : (
                  <Link to="login">
                  <i className="ri-user-line"></i>
                </Link>)
              }

            </span>
        </div>
      </nav>
      {
        isCartOpen && <CartModel products={products} isOpen={isCartOpen} onClose={handleCartToggle}/>
      }
    </header>
  )
}

export default Navbar