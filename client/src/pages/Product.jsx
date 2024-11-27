 
/* eslint-disable react-hooks/exhaustive-deps */

import { Dot } from 'lucide-react';
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { assets } from '../assets/images/assets';
import RelatedProducts from '../components/RelatedProducts';
import { ShopContext } from "../context/ShopContext";


const Product = () => {
  const { productId } = useParams()
  const { products, currency, addToCart} = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');
  const [color, setColor] = useState('');
 
  const filterProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0])
        return null
      }
    })
  }
  useEffect(() => {
    filterProductData()
  }, [productId])
  
  // const  addToCart = () => {
  //   navigate("/cart")
  // }


  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* product Data */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row section_container">
      {/* product - image */}
      <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
        <div className="flex sm:flex-col sm:overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
          {
            productData.image.map((item, index) => (
              <img 
              src={item} 
              alt="image" 
              key={index} 
              onClick={() => setImage(item)}
              className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer border-[1px] p-2 border-text-light border-opacity-30"/>
            ))
          }
        </div>
        <div className="w-full sm:w-[80%] cursor-pointer">
          <img src={image} alt="image" className="w-full h-auto p-2 border-[1px] border-text-light border-opacity-30"/>
        </div>
      </div>
      {/* product info */}
      <div className="flex-1">
      <div className=' flex items-center justify-between'>
        <div>
        <h1 className="font-medium text-2xl mt-2 text-text-dark">
          {productData.name}
        </h1>
        <p className='mt-5 text-text-light md:w-4/5'>
          {productData.description}
        </p>
        </div>
        <div className='bg-accent px-2 text-white'>
            {productData.onsale ? <p>OnSale</p> : ""}
        </div>
      
      </div>
        {/* product - rating */}
        {/* re rendered */}
        <div className="flex items-center gap-1 mt-2">
          <img src={assets.star_icon} alt="" className="size-3"/>
          <img src={assets.star_icon} alt="" className="size-3"/>
          <img src={assets.star_icon} alt="" className="size-3"/>
          <img src={assets.star_icon} alt="" className="size-3"/>
          <img src={assets.star_dull_icon} alt="" className="size-3"/>
          <p className='pl-2'>({productData.rating}) </p>
        </div>
       
        {/* product - price */}
        <div className='flex items-baseline gap-4 mt-5'>
        <p className=' text-3xl font-medium text-text-dark'>{currency}{productData.price}</p>
        <p className='text-text-light'>
          <del>{currency}{productData.oldPrice}</del>
        </p>
        </div>
        {/* product - size */}
        <div className="flex flex-col gap-4 my-8">
          <p>Select Size</p>
          <div className="flex gap-2">
            {
              productData.sizes.map((item, index) => (
                <button 
                onClick={()=> setSize(item)}
                className={`border-[3px] border-primary-dark  size-9 flex items-center justify-center bg-[#D1CFC5] rounded-full font-medium text-sm ${item === size ? "border-accent border-[3px]" : "border-none"}`} key={index}>{item}</button>
              ))
            }
          </div>  
        </div>
        {/* product - color */}
        <div className="flex flex-col gap-4 my-8">
          <p>Select Color</p>
          <div className="flex gap-2">
            {
              productData.colors.map((colorItem, i) => (<>
                <button 
                 onClick={()=> setColor(colorItem)} key={i}
                 className={`${color.includes(colorItem) ? "border-[3px]" : "bg-primary-light"} flex items-center justify-center size-6 mr-2 rounded-full  cursor-pointer border-[1px] border-text-dark`} style={{backgroundColor : colorItem}}>
                </button>
               </>
              ))
            }
          </div>  
        </div>
        <button onClick={() => addToCart(productData._id, size)} 

        className='btn active:bg-accent'>ADD TO CART</button>

        {/* product - assurance */}
        <hr className='mt-8 sm:w-4/5'/>
        <div className="text-sm mt-5 flex flex-col gap-1">
          <p className='flex'><Dot /> 100% Original product.</p>
          <p className='flex'><Dot />Cash on delivery is available on this product.</p>
          <p className='flex'><Dot /> Easy return and exchange policy within 7 days</p>
        </div>
      </div>
      </div>

      {/* Description & review page */}
      <div className="section_container mt-20">
        <div className='flex gap-4'>
            <b className='px-5 py-3 text-sm text-text-dark'>Description</b>
            <b className='px-5 py-3 text-sm text-text-light'>Reviews (122)</b>
        </div>
        <div className="flex flex-col gap-4 px-6 py-6 border text-sm text-text-light">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam esse nulla quis sapiente, dolores unde dolorem, recusandae enim tenetur minus ullam ipsa! Doloremque minus est, laborum debitis, error optio repellat neque corrupti atque labore adipisci quo repellendus culpa tenetur quaerat dolore nemo libero explicabo ad assumenda eius quibusdam sunt!</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam esse nulla quis sapiente, dolores unde dolorem, recusandae repellendus culpa tenetur quaerat dolore nemo libero explicabo ad assumenda eius quibusdam sunt!</p>

        </div>
      </div>
      {/* display related products */}
      <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
    </div>
  ) : <div className="opacity-0"></div>
}

export default Product
