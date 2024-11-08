/* eslint-disable react/prop-types */
import { Minus, Plus, X } from 'lucide-react'
import OrderSummary from './OrderSummary'

export default function CartModal({products, isOpen, onClose}) {
  return (
    <div className={`fixed z-[1000] inset-0 bg-black bg-opacity-60 ${isOpen ? "opacity-100" :"opacity-0 pointer-events-none " }`} style={{transition: 'opacity:300ms'}}>
        <div className={`fixed right-0 top-0 md:w-1/3 bg-[#d1cfc5] h-full overflow-y-auto transition-transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`} style={{transition: 'transform 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94'}}>
            <div className='p-4 mt-12 '>
                <div className='flex justify-between'>
                <h4 className='font-semibold text-xl'>Your Cart</h4>
                <button className='text-text-light' onClick={onClose}><X /></button>
                </div>
                <div>
                
                    {
                        products.length === 0 ? (<div>Your Cart Is Empty</div>) : (
                            products.map((item, index) => (
                                <div key={index} className='flex flex-col md:flex-row md:items-center md:justify-between md:p-5 p-2 mb-4'>
                                    <div className='flex items-center'>
                                        {/* no. of items & image */}
                                        <span className='mr-4 px-1 bg-accent text-white rounded-full'>0{index + 1}</span>
                                        <img src={item.image} alt="img" className='size-12 object-cover mr-4'/>
                                        {/* title & price */}
                                        <div className='mr-4'>
                                            <h5 className='text-lg font-medium'>{item.name}</h5>
                                            <p className='text-text-light'>${Number(item.price).toFixed(2)}</p>
                                        </div>
                                        {/* increment, decrement, delete button */}
                                        <div className='flex flex-row md:justify-start justify-end items-center mt-2'>
                                            <button className='size-6 px-1.5 rounded-full bg-text-dark flex text-white ml-8'><Minus /></button>
                                            <span className='px-2 mx-1'>{item.quantity}</span>
                                            <button className='size-6 px-1.5 rounded-full bg-text-dark flex text-white'><Plus /></button>
                                            <div className='ml-5'>
                                                <button className='text-red-600'>
                                                    Remove
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )
                    }
                </div>   
             {/* order summary */}
             <OrderSummary />
            </div>

        </div>
    </div>
  )
}
