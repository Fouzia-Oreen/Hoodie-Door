import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import products from '../../data/product-data.json'
import ProductsCards from "../shop/ProductsCards"

const CategoryPage = () => {
  const {categoryName} = useParams()
  const [filteredProducts, setFilteredProducts] = useState([])
  
  useEffect(() => {
    const filtered = products.filter((product)=>product.category === categoryName.toLowerCase());
    setFilteredProducts(filtered)
  }, [categoryName])
  useEffect(() => {
    window.scrollTo(0, 0)
  })
  
  
  return (
    <>
    <div className="bg-[#d1cfc5]">
    <section className="section__container ">
      <h2 className="section__header capitalize">{categoryName}</h2>
      <p className="section__subheader">Browse a diverse range of categories, to make your winter warm & cozy</p>
    </section>
    </div>
    {/* products cards */}
    <div className="section__container">
      <ProductsCards products={filteredProducts} />
    </div>
    </>

  )
}

export default CategoryPage
