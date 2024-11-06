/* eslint-disable react/no-unknown-property */
import { Link } from "react-router-dom";
import logo from '../assets/logo.png';


const Navbar = () => {
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
                <button className=' duration-200'>
                    <Link>
                    <i className="ri-shopping-bag-line"></i>
                    <sup className='text-sm inline-block px-1.5 text-primary rounded-full text-center bg-accent'>0</sup>
                    </Link>
                </button>
            </span>
            <span><Link to="login">
            <i className="ri-user-line"></i></Link></span>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
