/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { ChevronRight } from "lucide-react"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";
import products from '../data/product-data.json'


// common title
export const CommonProductPageTitle = ({title,  page }) => {
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
    <div className="bg-[#d1cfc5]">
    <section className="section__container">
      <div className='flex flex-col'>
      <h2 className="section__header capitalize">{title}</h2>
      <div className="section__subheader flex space-x-2">
        <span ><Link to='/'>home</Link></span><ChevronRight />
        <span ><Link to='/shop'>shop</Link></span><ChevronRight />
        <span>{categoryName}</span>
      </div>
      </div>
    </section>
    </div>
  )
}

export const CommonTitle = ({title, desc}) => {
  return (
    <section className="section__container">
      <div className='flex flex-col'>
      <h2 className="section__header capitalize">{title}</h2>
      <p className="section__subheader mb-12">{desc}</p>
      </div>
    </section>
  )
}

// buttons 
/**
 * sign-up
 * sign-in
 * add-to-cart
 * view-more
 * load-more
 */