import { Link } from "react-router-dom"
import { assets } from "../assets/images/assets"

export default function Category() {

  return (
    <div className='categories__grid'>
        <Link to="/collection" className='categories__card'>
            <img src={assets.men} alt='' />
            <h4>Mens</h4>
        </Link>
        <Link to="/collection" className='categories__card'>
            <img src={assets.women} alt='image' />
            <h4>Womens</h4>
        </Link>        
        <Link to="/collection" className='categories__card'>
            <img src={assets.unisex} alt='image' />
            <h4>Unisex</h4>
        </Link>        
        <Link to="/collection" className='categories__card'>
            <img src={assets.couple} alt='image' />
            <h4>Couple</h4>
        </Link>
    </div>
  )
}
