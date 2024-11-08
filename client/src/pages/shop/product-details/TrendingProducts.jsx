/* eslint-disable no-unused-vars */
import { useState } from "react"
import products from '../../../data/product-data.json'
import ProductsCards from "../product-details/ProductsCards"
import { CommonTitle } from "../../../components/CommonUses"


const TrendingProducts = () => {
    const [visibleProducts, setVisibleProducts] = useState(8)
    const loadingMoreProducts = () => {
        setVisibleProducts(prevCount => prevCount + 4)
    }
  return (
    <section className="section__container">
      <CommonTitle title={'Trending Products'} desc={'Discover the hottest picks : Elevate Your Style with Our Curate Collection of Trending Hoodies'} />
 
      {/* product-card */}
      <ProductsCards  products={products.slice(0, visibleProducts)}/>
      {/* load-more button */}
      <div className="product__btn">
        {
            visibleProducts < products.length && (<button className="btn" onClick={loadingMoreProducts}>Load More</button>)
        }
      </div>
    </section>
  )
}

export default TrendingProducts
