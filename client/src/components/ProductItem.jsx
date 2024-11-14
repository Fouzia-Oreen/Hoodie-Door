/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom';

const ProductItem = ({id, name, image, price}) => {
    const {currency} = useContext(ShopContext);


  return (
    <Link to={`/product/${id}`} className='cursor-pointer border-[1px] p-2 border-text-light border-opacity-30'>
      <div className='overflow-hidden '>
        <img src={image[0]} alt="" className='hover:scale-110 transition ease-in-out'/>
      </div>
        <p className='pt-3 pb-2 pl-2'>{name}</p>
        <p className='text-sm font-bold text-text-dark pl-2'>{currency} {price}</p>
    </Link>
  )
}

export default ProductItem
