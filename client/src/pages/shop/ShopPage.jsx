/* eslint-disable react-hooks/exhaustive-deps */
import  { useEffect, useState } from 'react';
import productData from '../../data/product-data.json'
import ProductsCards from './ProductsCards';
import ShopFilter from './ShopFilter';

const filters = {
    categories: ['all' ,'mens', 'womens', 'unisex', 'couple', 'accessories'],
    colors: ['all', 'black', 'red', 'green', 'blue', 'beige', 'gray'],
    priceRanges: [
        { label: 'Under $50' , min:0, max: 50},
        { label: '$50 to $100' , min:50, max: 100},
        { label: '$100 to $200' , min:100, max: 200},
        { label: '$200 and above' , min:200, max: Infinity},
    ]
}

const ShopPage = () => {
    const [products, setProducts] = useState(productData)
    const [filterState, setFilterState] = useState({ 
                                            category:'all', 
                                            color:'all', 
                                            priceRange:''})

    const applyFilters = () => {
        let filteredProducts = productData;
        // filter by category
        if (filterState.category && filterState.category != 'all') {
            filteredProducts = filteredProducts.filter(product => product.category === filterState.category)
        }
        // check filter by colors
        if (filterState.color && filterState.color != 'all') {
            filteredProducts = filteredProducts.filter(product => product.color === filterState.color )
        }
        // filter by price
        if (filterState.priceRange) {
            const [minPrice, maxPrice] = filterState.priceRange.split('-').map(Number);
            filteredProducts = filteredProducts.filter(product => product.price >= minPrice && product.price <= maxPrice)
        }
        setProducts(filteredProducts)
    }
    useEffect(() => {
        applyFilters()
    }, [filterState]);
    const clearFilters = () => {
        setFilterState({
            category:'all', 
            colors:'all', 
            priceRange:''
        })
    }
    
  return (
    <>
    <div className="bg-[#d1cfc5]">
    <section className="section__container ">
      <h2 className="section__header capitalize">Shop</h2>
      <p className="section__subheader">Browse a diverse range of categories, to make your winter warm & cozy</p>
    </section>
    </div>
    <section className="section__container">
        <div className='flex flex-col md:flex-row md:gap-12 gap-8'>
            {/* sidebar */}
            <ShopFilter 
            filters={filters} 
            filterState={filterState} 
            setFilterState={setFilterState} 
            clearFilters={clearFilters}/>
            {/* main content */}
            <div>
                <h3 className='text-xl '>Available Products : {products.length}</h3>
                <ProductsCards products={products} />
            </div>
        </div>
    </section>
    </>
  )
}

export default ShopPage
