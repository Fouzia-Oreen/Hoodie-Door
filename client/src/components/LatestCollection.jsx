/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react"
import { ShopContext } from "../context/ShopContext"
import Title from "./Title";
import ProductItem from "./ProductItem";

const LatestCollection = () => {
  const {products} = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([])
  useEffect(() => {
    setLatestProducts(products.slice(0, 8))
  },[products])
  
  return (
    <div className="my-10">
     {/* title */}
      <div className="text-left py-8 text-3xl">
        <Title text1={"Latest"} text2={"Collection"}/>
        <p className="w-3/4 text-sm sm:text-sm md:text-base text-text-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim est libero non?</p>
      </div>
      {/* rendering products */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
        {
          latestProducts.map((item, index) => (
              <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
          ))
        }
      </div>
    </div>
  )
}

export default LatestCollection
