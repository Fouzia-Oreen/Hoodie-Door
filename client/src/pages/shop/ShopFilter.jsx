/* eslint-disable react/prop-types */

const ShopFilter = ({ filters, filterState, setFilterState, clearFilters}) => {
  return (
    <div className='space-y-5 flex-shrink-0'>
      <h3>Filters</h3>
      {/* category-filter */}
      <div className='flex flex-col space-y-2'>
        <h4 className="font-medium text-lg">Category</h4>
        <hr/>
        {
            filters.categories.map((category) => (
                <label key={category} className='capitalize cursor-pointer'>
                    <input 
                        type="radio" 
                        name='category' 
                        id='category' 
                        value={category} 
                        checked={filterState.category === category}
                        onChange={(e) => setFilterState({...filterState, category: e.target.value})}
                    />
                    <span className='ml-1'>{category}</span>
                </label>
            ))
        }
      </div>
      {/* color-filter */}
      <div className='flex flex-col space-y-2'>
        <h4 className="font-medium text-lg">Colors</h4>
        <hr/>
        {
            filters.colors.map((color) => (
                <label key={color} className='capitalize cursor-pointer'>
                    <input 
                        type="radio" 
                        name='color' 
                        id='color' 
                        value={color} 
                        checked={filterState.color === color}
                        onChange={(e) => setFilterState({...filterState, color: e.target.value})}
                    />
                    <span className='ml-1'>{color}</span>
                </label>
            ))
        }
      </div>
        {/* price-range */}
        <div className='flex flex-col space-y-2'>
        <h4 className="font-medium text-lg">Price Range</h4>
        <hr/>
        {
            filters.priceRanges.map((range) => (
                <label key={range.label} className='capitalize cursor-pointer'>
                    <input 
                        type="radio" 
                        name='priceRange' 
                        id='priceRange' 
                        value={`${range.min}-${range.max}`} 
                        checked={filterState.priceRange === `${range.min}-${range.max}`}
                        onChange={(e) => setFilterState({...filterState, priceRange: e.target.value})}
                    />
                    <span className='ml-1'>{range.label}</span>
                </label>
            ))
        }
        </div>
        {/* clear filter */}
        <button 
        className="bg-accent px-2 py-1 text-primary border-[1px] border-dark"
        onClick={clearFilters}
        > Clear All Filter</button>
    </div>
  )
}

export default ShopFilter
