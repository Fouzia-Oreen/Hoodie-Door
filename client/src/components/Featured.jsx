import { Link } from 'react-router-dom';
import { assets } from '../assets/images/assets';

const featuredCards = [
    {id: 1, image: assets.card_1, title:"Mens Hoodie", trend:'2025 Trend'},
    {id: 2, image: assets.card_2, title:"Womens Hoodie", trend:'2025 Trend'},
    {id: 3, image: assets.card_3, title:"Uni-Sex Hoodie", trend:'2025 Trend'}
]

export default function Featured() {
  return (
    <section className='section__container hero__container'>
        {
            featuredCards.map((card) => (
                <div key={card.id} className='hero__card'>
                    <div className='h-full object-cover'>
                    <img src={card.image} alt="card-image" className=''/>
                    </div>

                    <div className='hero__content lg:pr-10 '>
                        <p>{card.trend}</p>
                        <h4>{card.title}</h4>
                        <Link to="/collection">Discover More</Link>
                    </div>
                </div>
            ))
        }
    </section>
  )
}
