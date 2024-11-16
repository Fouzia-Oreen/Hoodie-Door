 
/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { products } from '../../../assets/images/assets'

const SearchProductContainer = () => {
   const [searchQuery, setSearchQuery] = useState('')
  //  filter products
   const [filteredProducts, setFilteredProducts] = useState(products)
   const handleSearch = () => {
    const query = searchQuery.toLowerCase();
    const filtered = products.filter((product)=> product.name.toLowerCase().includes(query) || product.category.toLowerCase().includes(query));
    setFilteredProducts(filtered)
   }
  return (
    <>
    {/* search container */}
    <section className="section__container ">
      <div className='w-full mb-12 items-center justify-center flex flex-col md:flex-row gap-2'>
       <input type="text" 
              value={searchQuery} 
              onChange={(e)=> setSearchQuery(e.target.value)}
              placeholder='Search for products...'
              className='search-bar w-full max-w-4xl p-2 border-[1px] border-dark outline-none focus:none rounded-sm'/>
       <button 
       className='search-button w-full md:w-auto py-2 px-8 bg-accent font-medium text-primary rounded-sm'
       onClick={handleSearch}
       >Search</button>
      </div>
      {/* <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
      <ProductsCards products={filteredProducts}/> */}
    </section>
    </>
  )
}

export default SearchProductContainer
