import mens from '../../assets/mens.png';
import womens from '../../assets/womens.png';
import acc from '../../assets/accessories.jpg';
import couple from '../../assets/couple.png';
import { Link } from 'react-router-dom';


export default function Category() {
    const categories = [
        {name : "Mens", path:"/mens", image:mens},
        {name : "Women", path:"/womens", image:womens},
        {name : "Accessories", path:"/accessories", image:acc},
        {name : "Couple", path:"/couple", image:couple}

    ]
  return (
    <div className='categories__grid'>
        {
            categories.map((category) => (
                <Link to={`/categories${category.path}`} key={category.name} className='categories__card'>
                    <img src={category.image} alt={category.name} />
                    <h4>{category.name}</h4>
                </Link>
            ))
        }    
    </div>
  )
}
