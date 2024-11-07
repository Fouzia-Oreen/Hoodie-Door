import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import products from '../../data/product-data.json'
import ProductsCards from "../shop/ProductsCards"
import CommonTitle from "../../components/CommonUses"

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
    <CommonTitle title={categoryName} desc={"Browse a diverse range of categories, to make your winter warm & cozy"} />
    {/* products cards */}
    <div className="section__container">
      <ProductsCards products={filteredProducts} />
    </div>
    </>
  )
}

export default CategoryPage
