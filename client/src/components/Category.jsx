import { Link } from "react-router-dom"
import acce from '../assets/accessories.jpg'
import couple from '../assets/couple.png'
import mens from '../assets/mens.png'
import womens from '../assets/womens.png'




export default function Category() {

  return (
    <div className='categories__grid'>
        <Link to="/collection" className='categories__card'>
            <img src={mens} alt='' />
            <h4>Mens</h4>
        </Link>
        <Link to="/collection" className='categories__card'>
            <img src={womens} alt='' />
            <h4>Womens</h4>
        </Link>        
        <Link to="/collection" className='categories__card'>
            <img src={acce} alt='' />
            <h4>Accessories</h4>
        </Link>        
        <Link to="/collection" className='categories__card'>
            <img src={couple} alt='' />
            <h4>Couple</h4>
        </Link>
    </div>
  )
}
