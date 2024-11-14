//import { useState } from "react";
//import { useSelector } from "react-redux";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { assets } from '../assets/images/assets.js';
import cart from '../assets/images/cart_icon.png';
import dropdown from '../assets/images/dropdown_icon.png';
import menu from '../assets/images/menu_icon.png';
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext.jsx";


export default function Navbar() {
  const [visible, setVisible] = useState(false);
  const {setShowSearch, getCartCount} = useContext(ShopContext)
  //const products = useSelector((state) => state.cart.products);
  //const [isCartOpen, setIsCartOpen] = useState(false);

  // cart toggle function
  // const handleCartToggle = () => {
  //   setIsCartOpen(!isCartOpen)
  // }

  const navlinks =[
    {link:"/", title:"Home"},
    {link:"/about", title:"About"},
    {link:"/collection", title:"Collection"},
    {link:"/contact", title:"Contact"},
  ]
  
  return (
    <>
      <nav className="flex items-center justify-between py-5 px-2 border-b-[1px] border-text-dark ">
        <ul className="hidden sm:flex gap-5 text-sm">
          {
            navlinks.map((nav) => (
              <NavLink to={nav.link} key={nav.link} className="flex flex-col items-start gap-[2px]">
              <p className="font-medium text-text-dark">{nav.title}</p>
              <hr className="w-2/4 border-none h-[1.5px] bg-text-dark hidden" />
            </NavLink>
            ))
          }
          {/* <ShopDropDownMenu /> */}
        </ul>
        {/* logo */}
        <Link to="/">
        <img src={assets.logo} alt="logo" className='size-[44px] '/>
        </Link>
        <div className="flex gap-6 items-center">
          <img src={assets.search_icon} alt="search" className="size-5" onClick={() => setShowSearch(true)}/>
          <div className="group relative">
            <img src={assets.profile_icon} alt="profile" className="size-5 cursor-pointer"/>
            <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
              {/* drop-down-menu */}
              <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-[#D1CFC5] border-[1px] border-dark relative z-20">
                <p className="cursor-pointer hover:text-dark">My Profile</p>
                <p className="cursor-pointer hover:text-dark">Orders</p>
                <p className="cursor-pointer hover:text-dark">Logout</p>
                {/* <DropdownProfile />  */}
              </div>
            </div>
          </div>
          <Link to="/cart" className="relative">
              <img src={cart} alt="" className="size-5"/>
              <p className="absolute right-[-5px] bottom-[-5px] text-center bg-accent text-white size-3.5 rounded-full text-[8px]">{getCartCount()}</p>
          </Link>
          {/* sidebar menu on click */}
          <img src={menu} alt="" className="size-5 cup sm:hidden" onClick={() => setVisible(true)}/>
        </div>
        {/* open menu on smmall devices */}
        <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-[#D1CFC5] transition-all ${visible ? 'w-full z-10' : 'w-0'}`}>
          <div className="flex flex-col text-text-dark ">
            <div className="flex items-center  gap-4 p-3 cursor-pointer" onClick={() => setVisible(false)}>
              <img src={dropdown} alt="" className="size-4 rotate-180"/>
              <p>Back</p>
            </div>
          {/* mobile benu */}
          {
            navlinks.map((nav) => (
              <NavLink to={nav.link} key={nav.link} className="py-2 pl-12 mt-8 text-xl " onClick={() => setVisible(false)}>
              <p className="font-medium text-text-dark">{nav.title}</p>
              </NavLink>
            ))
          }
          </div>
        </div>
      </nav>
      {/* {
        isCartOpen && <CartModel products={products} isOpen={isCartOpen} onClose={handleCartToggle}/>
      } */}

    </>
  )
}
