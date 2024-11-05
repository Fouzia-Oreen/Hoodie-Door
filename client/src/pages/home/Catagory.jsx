import mens from '../../assets/mens.png';
import womens from '../../assets/womens.png';
import acc from '../../assets/accessories.jpg';
import couple from '../../assets/couple.png';
import { Link } from 'react-router-dom';




export default function Catagory() {
    const catagories = [
        {name : "Mens", path:"mens", image:mens},
        {name : "Women", path:"womens", image:womens},
        {name : "Accessories", path:"accessories", image:acc},
        {name : "Couple", path:"couple", image:couple}

    ]
  return (
    <div className='categories__grid'>
        {
            catagories.map((catagory) => (
                <Link to={`/catagories${catagory.path}`} key={catagory.name} className='categories__card'>
                    <img src={catagory.image} alt={catagory.name} />
                    <h4>{catagory.name}</h4>
                </Link>
            ))
        }    
    </div>
  )
}
