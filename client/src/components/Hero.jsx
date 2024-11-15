import home_1 from '../assets/images/home-1.png'
import { Link } from 'react-router-dom'
import { MoveRight } from 'lucide-react'

export default function Hero() {
  return (
    <div className='section__container'>
        <div className='flex items-center justify-center flex-col mt-20 '>
            <div className='absolute -mt-[440px]'>
              <div className='flex items-center gap-2 justify-end'>
                <p className="w-8 md:w-11 h-[2px] bg-text-dark"></p>
                <p className='text-dark'>THE BEST HOODIES ARE ONLY HERE</p>
              </div>
                <h1 className='text-6xl md:text-7xl font-bold lg:text-8xl text-dark'>HoodieDoor</h1>
            </div>

            <div className='relative'>
                <div className='relative'>
                    <img src={home_1} alt="banner"/>
                </div>
                <div className='absolute -mt-20 ml-8 '>
                <button className='btn'>
                    <Link to="/collection" className='flex gap-3'>
                      Explore Now <MoveRight/>
                    </Link>
                </button>
                </div>
            </div>
        </div>
    </div>
  )
}
