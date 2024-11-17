/* eslint-disable react/prop-types */
import logo from '../assets/logo.png'

const Navbar = ({setToken}) => {
  return (
    <div className=' flex justify-between items-center py-5 px-[4%] border-b-[1px] border-text-dark'>
    <div className='flex items-baseline gap-4 w-[max(20%,80px)]'>
     <img className='size-8' src={logo} alt="" />
     <h1 className='text-3xl font-semibold text-dark'>HoodieDoor</h1> 
    </div>
    <button className='btn' onClick={() => setToken('')}>Logout</button>
    </div>


  )
}

export default Navbar
