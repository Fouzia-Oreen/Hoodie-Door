import {assets} from '../assets/images/assets'
import { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useLocation } from 'react-router-dom'

const SearchBar = () => {
   const {search, setSearch, showSearch, setShowSearch } = useContext(ShopContext)
   const [visible, setVisible] = useState(false)
   const location = useLocation();

   useEffect(() => {
    if (location.pathname.includes('collection') ) {
        setVisible(true)
    }else {
        setVisible(false)
    }
   }, [location])
   

    return showSearch && visible ? (
      <div className='border-b border-dark  py-6 flex gap-6 items-center justify-center'>
        <div className="flex items-center justify-between border border-text-light px-5 py-2 rounded-sm w-3/4 sm:w-1/2">
        <input type="text" placeholder='Search' className='flex-1 outline-none bg-inherit text-sm placeholder:text-text-light' value={search} onChange={(e) => setSearch(e.target.value)}/>
        <img src={assets.search_icon} alt="" className='size-4'/>
        </div>
        <img src={assets.cross_icon} alt="" className='size-3 inline cursor-pointer' onClick={() => setShowSearch(false)}/>
      </div>
    ) : null
}

export default SearchBar
