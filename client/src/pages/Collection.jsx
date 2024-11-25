/* eslint-disable react-hooks/exhaustive-deps */
import { ChevronDown, Minus } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import ProductItem from "../components/ProductItem";
import Title from "../components/Title";
import { ShopContext } from "../context/ShopContext";

const Collection = () => {
    const { products, search, showSearch} = useContext(ShopContext);
    const [showFilter, setShowFilter] = useState(true);
    const [filterProducts, setFilterProducts] = useState([]);
    const [category, setCategory] = useState([]);
    const [subCategory, setSubCategory] = useState([]);
    const [sortType, setSortType] = useState('relevant');
    // const [visibleProducts, setVisibleProducts] = useState(8)
    // const loadingMoreProducts = () => {
    //     setVisibleProducts(prevCount => prevCount + 4)
    // }

    const toggleCategory = (e) => {
      if (category.includes(e.target.value)) {
        setCategory(prev => prev.filter(item => item != e.target.value))
      }else {
        setCategory(prev => [...prev, e.target.value])
      }
    }
    const toggleSubCategory = (e) => {
      if (subCategory.includes(e.target.value)) {
        setSubCategory(prev => prev.filter(item => item != e.target.value))
      }else {
        setSubCategory(prev => [...prev, e.target.value])
      }
    }
    const applyFilter = () => {
      let productsCopy = products.slice();
      if (showSearch && search) {
        productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
      }
      if (category.length > 0) {
        productsCopy = productsCopy.filter(item => category.includes(item.category))
      }
      if (subCategory.length > 0) {
        productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory))
      }
      setFilterProducts(productsCopy)
    }
    const sortProduct = () => {
      let filterProductCopy = filterProducts.slice();
      switch (sortType){
        case 'low-high' :
        setFilterProducts(filterProductCopy.sort((a, b) => (a.price - b.price)));
        break;
        case 'high-low' :
          setFilterProducts(filterProductCopy.sort((a, b) => (b.price - a.price)));
        break;
        default : 
          applyFilter();
        break;
      }
    };

    useEffect(() => {
      applyFilter()
    }, [category, subCategory, search, showSearch, products]);

    useEffect(() => {
      sortProduct()
    }, [sortType]);



  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 my-10 ">
      {/* filter options */}
      <div className="min-w-60 border-r border-text-light pt-10" >
        <p onClick={()=>setShowFilter(!showFilter)}
        className="m-2 text-xl font-semibold text-text-dark flex items-center gap-6 cursor-pointer">Filters 
        <div className="sm:hidden ">
          {showFilter ? <ChevronDown className="text-text-dark size-5 "/> : <Minus className="text-text-dark size-5"/>}</div></p>
        <div className={` pl-5 mt-5 ${showFilter ? "" : "hidden"} `}>
          <p className="mb-3 text-sm font-medium text-text-light">Catagories</p>
        <div className="flex flex-col gap-2 text-sm">
          <p className="flex gap-2 items-center">
            <input type="checkbox" className="size-3" value={"Men"} onChange={toggleCategory}/>Mens
          </p>
          <p className="flex gap-2 items-center">
            <input type="checkbox" className="size-3" value={"Women"} onChange={toggleCategory}/>Womens
          </p>          
          <p className="flex gap-2 items-center">
            <input type="checkbox" className="size-3" value={"Acc"} onChange={toggleCategory}/>Accessories
          </p>
          <p className="flex gap-2 items-center">
            <input type="checkbox" className="size-3" value={"Uni"} onChange={toggleCategory}/>Unisex
          </p>
        </div>
        </div>
        {/* sub-catagory filter */}
        <div className={` pl-5 mt-10 ${showFilter ? "" : "hidden"} `}>
          <p className="mb-3 text-sm font-medium text-text-light">Type</p>
        <div className="flex flex-col gap-2 text-sm">
        <p className="flex gap-2 items-center">
            <input type="checkbox" className="size-3" value={"Topwear"} onChange={toggleSubCategory}/>Topwear
          </p>
          <p className="flex gap-2 items-center">
            <input type="checkbox" className="size-3" value={"Bottomwear"} onChange={toggleSubCategory}/>BottomWear
          </p>          
          <p className="flex gap-2 items-center">
            <input type="checkbox" className="size-3" value={"Caps"} onChange={toggleSubCategory}/>Accessories
          </p>
        </div>
        </div>
      </div> 

      {/* right-side */}
        <div className="flex-1">
          <div className="flex justify-between text-base sm:text-2xl mb-4">
            {/* title */}
            <Title text1={"All"} text2={"Collection"}/>  
            {/* products sort */}
            <select 
            onChange={(e) => setSortType(e.target.value)}
            className="border rounded-sm border-text-dark text-sm px-2 focus:none outline-none bg-[#d1cfc5] cursor-pointer" >
            <option value="relavent">Sort by : Relavent</option>
            <option value="low-high">Sort by : Low to High</option>
            <option value="high-low">Sort by : High to Low</option>
            </select>
          </div>

          {/* map products */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {
            filterProducts.map((item, index)=> ( 
            <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} /> ))
          }
          </div>
          {/* <div >
        {
            visibleProducts < products.length && (<button className="btn" onClick={loadingMoreProducts}>Load More</button>)
        }
      </div> */}
        </div>
    </div>
  )
}

export default Collection
