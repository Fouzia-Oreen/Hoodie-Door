import { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';



export default function RelatedProducts({category, subCategory}) {
    const { products } = useContext(ShopContext);
    const [relatedProduct, setRelatedProduct] = useState([]);

    useEffect(() => {
      if (products.length > 0) {
        let productsCopy = products.slice();
        productsCopy = productsCopy.filter((item) => category === item.category);
        productsCopy = productsCopy.filter((item) => subCategory === item.subCategory);
        setRelatedProduct(productsCopy.slice(0, 5))
      }
    }, [products])
    

  return (
    <section className="section__container">
      <div className="text-3xl py-2">
      <Title text1={"Related"} text2={"Products"}/>
      </div>
      <p className="text-text-light mb-12">Discover the hottest picks : Elevate Your Style with Our Curate Collection of Trending Hoodies</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
        {
          relatedProduct.map((item, index)=> ( 
          <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} /> ))
        }
      </div>
    </section>
  )
}
