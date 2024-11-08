/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { CommonProductPageTitle } from '../../components/CommonUses';
import productData from '../../data/product-data.json';
import ProductFilter from '../shop/product-details/ProductFilter';
import ProductsCards from './product-details/ProductsCards';

const filters = {
    categories: ['all' ,'mens', 'womens', 'unisex', 'couple', 'accessories'],
    colors: ['all', 'black', 'red', 'green', 'blue', 'beige', 'gray'],
    priceRanges: [
        { label: 'Under $50' , min:0, max: 50},
        { label: '$50 to $100' , min:50, max: 100},
        { label: '$100 to $200' , min:100, max: 200},
        { label: '$200 and above' , min:200, max: Infinity},
    ],

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
    {/* title */}
    <CommonProductPageTitle title={'Shop'} page={null}/>
    {/* products - display */}
    <section className="section__container">
        <div className='flex flex-col md:flex-row md:gap-12 gap-8'>
            {/* sidebar */}
            <ProductFilter 
            filters={filters} 
            filterState={filterState} 
            setFilterState={setFilterState} 
            clearFilters={clearFilters}/>
            {/* main content */}
            <div>
                <h3 className='text-xl mb-8'> Available Products : {products.length}</h3>
                <ProductsCards products={products} />
            </div>
        </div>
    </section>
    </>
  )
}

export default ShopPage
