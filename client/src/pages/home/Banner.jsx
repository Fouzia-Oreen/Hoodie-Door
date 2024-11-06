import home_1 from '../../assets/home-1.png'
import { Link } from 'react-router-dom'
import { MoveRight } from 'lucide-react'

export default function Banner() {
  return (
    <div className='section__container'>
        <div className='flex items-center justify-center flex-col mt-20 '>
            <div className='absolute -mt-[440px]'>
                <h4 className='text-end  header__content'>THE BEST HOODIES ARE ONLY HERE</h4>
                <h1 className='text-6xl md:text-7xl font-bold lg:text-8xl'>HoodieDoor</h1>
            </div>

            <div className='relative'>
                <div className='relative'>
                    <img src={home_1} alt="banner"/>
                </div>
                <div className='absolute -mt-20 ml-8 '>
                <button className='btn'>
                    <Link to="/shop" className='flex gap-3'>
                      Explore Now <MoveRight/>
                    </Link>
                </button>
                </div>
            </div>
        </div>
    </div>
  )
}
