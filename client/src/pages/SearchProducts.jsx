import  { useState } from 'react'
import productData from '../data/product-data.json'
import ProductsCards from './shop/ProductsCards'

const SearchProducts = () => {
   const [searchQuery, setSearchQuery] = useState('')
  //  filter products
   const [filteredProducts, setFilteredProducts] = useState(productData)
   const handleSearch = () => {
    const query = searchQuery.toLowerCase();
    const filtered = productData.filter((product)=> product.name.toLowerCase().includes(query) || product.category.toLowerCase().includes(query));
    setFilteredProducts(filtered)
   }
  return (
    <>
    <div className="bg-[#d1cfc5]">
    <section className="section__container ">
      <h2 className="section__header capitalize">Search Product</h2>
      <p className="section__subheader">Browse a diverse range of categories, to make your winter warm & cozy</p>
    </section>
    </div>
    <section className="section__container ">
      <div className='w-full mb-12 items-center justify-center flex flex-col md:flex-row gap-2'>
       <input type="text" 
              value={searchQuery} 
              onChange={(e)=> setSearchQuery(e.target.value)}
              placeholder='Search for products...'
              className='search-bar w-full max-w-4xl p-2 border-[1px] border-dark outline-none focus:none rounded-md'/>
       <button 
       className='search-button w-full md:w-auto py-2 px-8 bg-accent font-medium text-primary rounded-md'
       onClick={handleSearch}
       >Search</button>
      </div>
      <ProductsCards products={filteredProducts} />
    </section>
  

    </>
  )
}

export default SearchProducts
