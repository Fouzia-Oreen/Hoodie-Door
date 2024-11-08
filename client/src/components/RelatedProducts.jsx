import { useState } from 'react'
import products from '../data/product-data.json'
import ProductsCards from '../pages/shop/product-details/ProductsCards'


export default function RelatedProducts() {
    const [visibleProducts, setVisibleProducts] = useState(4)
    console.log(setVisibleProducts);

  return (
    <section className="section__container">
      <h2 className="section__header">Related Products</h2>
      <p className="section__subheader mb-12">Discover the hottest picks : Elevate Your Style with Our Curate Collection of Trending Hoodies</p>
      {/* product-card */}
      <ProductsCards  products={products.slice(0, visibleProducts)}/>
    </section>
  )
}
