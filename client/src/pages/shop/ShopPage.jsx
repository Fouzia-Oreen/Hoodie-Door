
import { useState } from 'react';
import { useFetchAllProductsQuery } from '../../redux/features/product/productApi.js';
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
    const [filterState, setFilterState] = useState({ 
            category:'all', 
            color:'all', 
            priceRange:''
    });
    const [currentPage, setCurrentPage] = useState(1);
    const [ProductPerPage]  = useState(8);
    const {category, color, priceRange} = filterState;
    const [minPrice, maxPrice] = priceRange.split('-').map(Number);
    const {data: {products = [], totalPages, totalProducts} = {}, error, isLoading} = useFetchAllProductsQuery({
        category : category != "all" ? category : "", 
        color : color != "all" ? color : "", 
        maxPrice : isNaN(maxPrice) ? "" : maxPrice , 
        minPrice : isNaN(minPrice) ? "" : minPrice , 
        page : currentPage, 
        limit : ProductPerPage
    });
    // paginations
    const startProduct = (currentPage - 1) * ProductPerPage + 1;
    const endProduct = startProduct + (products.length - 1);
    // pagination function
    const handlePageChange = (pageNumber) => {
        if (pageNumber > 0 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber)
        }
    }
    // clear filter
    const clearFilters = () => {
        setFilterState({
            category:'all', 
            colors:'all', 
            priceRange:''
        })
    }
    if (isLoading) return <div>Loading....</div>
    if (error)  return <div>Error showing products</div>

  return (
    <>
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
                {/* products available */}
                <h3 className='text-sm mb-8 font-medium text-right'> 
                    Showing {startProduct} to {endProduct} of {totalProducts} products
                </h3>
                {/* all products */}
                <ProductsCards products={products} />
                {/* pagination */}
                <div className='mt-6 flex justify-center'>
                   <button 
                   disabled={currentPage === 1}
                   onClick={() => handlePageChange(currentPage - 1)}
                   className='px-3 py-2 bg-[#d1cfc5] border-[1px] border-dark rounded-sm font-medium mr-2'>Prev</button>
                   {
                    [...Array(totalPages)].map((_, index) => (
                    <button 
                    key={index} 
                    onClick={() => handlePageChange(index + 1)}
                    className={`px-4 py-2 border-[1px] border-dark rounded-sm font-medium mx-1 ${currentPage === index + 1 ? 'bg-[#d1cfc5] hover:bg-accent ' : "bg-[#d1cfc5]"}`}>{index + 1}</button>))
                   }
                   <button 
                   disabled={currentPage === totalPages}
                   onClick={() => handlePageChange(currentPage + 1)}
                   className='px-3 py-2 bg-[#d1cfc5] border-[1px] border-dark rounded-sm font-medium ml-2'>Next</button>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default ShopPage
