/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const BestSeller = () => {
    const { products } = useContext(ShopContext);
    const [bestseller, setBestSeller] = useState([]);

    useEffect(() => {
        const bestProduct = products.filter((item) => (item.bestseller));
        setBestSeller(bestProduct.slice(0,5))
    },[])
    
  return (
    <div className='my-10'>
      <div className="text-left text-3xl py-8">
        <Title text1={"Best"} text2={"Seller"}/>
        <p className='w-3/4 text-sm sm:text-sm md:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas dolore asperiores consequuntur quis!</p>
      </div>
      {/* products */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
      {
          bestseller.map((item, index) => (
              <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
          ))
        }
      </div>
    </div>
  )
}

export default BestSeller
