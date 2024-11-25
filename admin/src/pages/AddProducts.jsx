/* eslint-disable react/prop-types */
import axios from 'axios';
import { useState } from 'react';
import { backendUrl } from '../App';
import upload from '../assets/upload_area.png';
import { toast } from 'react-toastify';


const AddProducts = ({token}) => {
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [oldPrice, setOldPrice] = useState('');
  const [category, setCategory] = useState('Men');
  const [subCategory, setSubCategory] = useState('Topwear');
  const [rating, setRating] = useState('');

  const [bestseller, setBestseller] = useState(false);
  const [onsale, setOnSale] = useState(false);
  const [sizes, setSizes] = useState([]);
  const [colors, setColors] = useState([]);


 const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData()
      // products-details
      formData.append("name", name)
      formData.append("description", description)
      formData.append("price", price)
      formData.append("oldPrice", oldPrice)
      formData.append("category", category)
      formData.append("subCategory", subCategory)
      formData.append("rating", rating)
      formData.append("bestseller", bestseller)
      formData.append("onsale", onsale)
      formData.append("sizes", JSON.stringify(sizes))
      formData.append("colors", JSON.stringify(colors))
      // products-images
      image1 && formData.append("image1", image1)
      image2 && formData.append("image2", image2)
      image3 && formData.append("image3", image3)
      image4 && formData.append("image4", image4)

      const response = await axios.post(backendUrl + "/api/product/add", formData, {headers:{token}})
      if (response.data.success) {
        toast.success(response.data.message)
          setName('')
          setDescription('')
          setPrice('')
          setOldPrice('')
          setCategory('')
          setSubCategory('')
          setBestseller('')
          setOnSale('')
          setRating('')
          setSizes('')
          setColors('')
          setImage1(false)
          setImage2(false)
          setImage3(false)
          setImage4(false)
      }else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
 }

  return (
    <form className='flex flex-col w-full items-start gap-4' 
    onSubmit={onSubmitHandler}>
      {/* product - image */}
      <div>
        <p className='mb-3 text-lg '>Upload Image</p>
        <div className='flex gap-3'>
          <label htmlFor='image1'>
            <img className='w-20 border-[1px] border-text-light border-opacity-50' 
            src={!image1 ? upload : URL.createObjectURL(image1)} alt="" />
            <input onChange={(e) => setImage1(e.target.files[0])}  type="file" id="image1" hidden/>
          </label>
          <label htmlFor='image2'>
            <img  className='w-20 border-[1px] border-text-light border-opacity-50' 
            src={!image2 ? upload : URL.createObjectURL(image2)} alt="" />
            <input onChange={(e) => setImage2(e.target.files[0])}  type="file" id="image2" hidden/>
          </label>
          <label htmlFor='image3'>
            <img className='w-20 border-[1px] border-text-light border-opacity-50' 
            src={!image3 ? upload : URL.createObjectURL(image3)} alt="" />
            <input onChange={(e) => setImage3(e.target.files[0])}  
            type="file" id="image3" hidden/>
          </label>
          <label htmlFor='image4'>
            <img  className='w-20 border-[1px] border-text-light border-opacity-50' 
            src={!image4 ? upload : URL.createObjectURL(image4)} alt="" />
            <input onChange={(e) => setImage4(e.target.files[0])}  type="file" id="image4" hidden/>
          </label>
        </div>
      </div>
      {/* product - title */}
      <div className='w-full'>
        <p className='mb-3 text-lg '>Name</p>
        <input 
        type="text" 
        required 
        value = {name}
        onChange={(e) => setName(e.target.value)}
        placeholder='Enter product name...' 
        className='w-full max-w-[500px] px-3 py-2'/>
      </div>
      {/* product - description */}
      <div className='w-full'>
        <p className='mb-3 text-lg '>Description</p>
        <textarea 
        type="text" 
        required 
        value = {description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder='Enter product description...' 
        className='w-full max-w-[500px] px-3 py-2 placeholder:text-text-light placeholder:text-opacity-60'/>
      </div>

    <div className='flex flex-col sm:flex-row gap-2 w-full sm:gap-8 '>
      {/* product - category */}
      <div>
        <p className='mb-3 text-lg'>Category</p>
        <select onChange={(e) => setCategory(e.target.value)} 
        className='w-full px-3 py-2'>
          <option value="Men">Men</option>
          <option value="Women">Women</option>
          <option value="Kids">Unisex</option>
          <option value="Kids">Couple</option>
        </select>
      </div>
      {/* product - subcategory */}
      <div>
        <p className='mb-3 text-lg'>Subcategory</p>
        <select onChange={(e) => setSubCategory(e.target.value)} className='w-full px-3 py-2'>
          <option value="Topwear">Topwear</option>
          <option value="Bottomwear">Bottomwear</option>
          <option value="Winterwear">Caps</option>
        </select>
      </div>
      {/* product price */}
      <div>
        <p className='mb-3 text-lg'>Price</p>
        <input 
        className='w-full px-3 py-2 sm:w-[120px]' 
        type="number" 
        placeholder='20'
        value={price}
        onChange={(e) => setPrice(e.target.value)}/>
      </div>
      {/* product old-price */}
      <div>
        <p className='mb-3 text-lg'>Old Price</p>
        <input 
        className='w-full px-3 py-2 sm:w-[120px]' 
        type="number" 
        placeholder='20'
        value={oldPrice}
        onChange={(e) => setOldPrice(e.target.value)}/>
      </div>
      {/* product - rating */}
      <div>
        <p className='mb-3 text-lg'>Rating</p>
        <select onChange={(e) => setRating(e.target.value)} className='w-full px-3 py-2'>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
    </div>

      {/* product sizes */}
      <div>
      <p className='text-lg mb-2'>Product Sizes</p>
      <div className='flex gap-3'>
        <div onClick={()=>setSizes(prev => prev.includes("S") ? prev.filter( item => item != "S") : [...prev, "S"])}>
          <p className={`${sizes.includes("S") ? "bg-accent" : "bg-primary-light"} font-medium px-3 py-1 cursor-pointer`}>S</p>
        </div>
        <div onClick={() => setSizes(prev => prev.includes("M") ? prev.filter( item => item != "M") : [...prev, "M"])}>
          <p className={`${sizes.includes("M") ? "bg-accent" : "bg-primary-light"} font-medium px-3 py-1 cursor-pointer`}>M</p>
        </div>          
        <div onClick={() => setSizes(prev => prev.includes("L") ? prev.filter( item => item != "L") : [...prev, "L"])}>
          <p className={`${sizes.includes("L") ? "bg-accent" : "bg-primary-light"} font-medium px-3 py-1 cursor-pointer`}>L</p>
        </div>          
        <div onClick={() => setSizes(prev => prev.includes("XL") ? prev.filter( item => item != "XL") : [...prev, "XL"])}>
          <p className={`${sizes.includes("XL") ? "bg-accent" : "bg-primary-light"} font-medium px-3 py-1 cursor-pointer`}>XL</p>
        </div>          
        <div onClick={() => setSizes(prev => prev.includes("XXL") ? prev.filter( item => item != "XXL") : [...prev, "XXL"])}>
          <p className={`${sizes.includes("XXL") ? "bg-accent" : "bg-primary-light"} font-medium px-3 py-1 cursor-pointer`}>XXL</p>
        </div>
      </div>
      </div>

      {/* product colors */}
      <div>
      <p className='text-lg mb-2'>Colors</p>
      <div className='flex gap-3 flex-wrap'>
        <div onClick={()=>setColors(prev => prev.includes("white") ? prev.filter( item => item != "white") : [...prev, "white"])}>
          <p className={`${colors.includes("white") ? "border-accent border-4 bg-[#ffffff]" : "border-none"} font-medium flex items-center justify-center size-9 cursor-pointer rounded-full bg-[#ffffff]`}></p>
        </div>
        <div onClick={()=>setColors(prev => prev.includes("cream") ? prev.filter( item => item != "cream") : [...prev, "cream"])}>
          <p className={`${colors.includes("cream") ? "border-accent border-4 bg-[#EBE1BE]" : " border-none"} font-medium flex items-center justify-center size-9 cursor-pointer rounded-full bg-[#EBE1BE]`}></p>
        </div>
        <div onClick={()=>setColors(prev => prev.includes("yellow") ? prev.filter( item => item != "yellow") : [...prev, "yellow"])}>
          <p className={`${colors.includes("yellow") ? "border-accent border-4 bg-[#FED533]" : "border-none"} font-medium flex items-center justify-center size-9 cursor-pointer rounded-full bg-[#FED533]`}></p>
        </div>
        <div onClick={()=>setColors(prev => prev.includes("orange") ? prev.filter( item => item != "orange") : [...prev, "orange"])}>
          <p className={`${colors.includes("orange") ? "border-accent border-4 bg-[#F36B26]" : "border-none"} font-medium flex items-center justify-center size-9 cursor-pointer rounded-full bg-[#F36B26]`}></p>
        </div>
        <div onClick={()=>setColors(prev => prev.includes("red") ? prev.filter( item => item != "red") : [...prev, "red"])}>
          <p className={`${colors.includes("red") ? "border-accent border-4 bg-[#E7352B]" : "border-none"} font-medium flex items-center justify-center size-9 cursor-pointer rounded-full bg-[#E7352B]`}></p>
        </div>
        <div onClick={()=>setColors(prev => prev.includes("pink") ? prev.filter( item => item != "pink") : [...prev, "pink"])}>
          <p className={`${colors.includes("pink") ? "border-accent border-4 bg-[#e642a1]" : " border-none"} font-medium flex items-center justify-center size-9 cursor-pointer rounded-full bg-[#e642a1]`}></p>
        </div>
        <div onClick={()=>setColors(prev => prev.includes("purple") ? prev.filter( item => item != "purple") : [...prev, "purple"])}>
          <p className={`${colors.includes("purple") ? "border-accent border-4 bg-[#8D429F]" : "border-none"} font-medium flex items-center justify-center size-9 cursor-pointer rounded-full bg-[#8D429F]`}></p>
        </div>
        <div onClick={()=>setColors(prev => prev.includes("blue") ? prev.filter( item => item != "blue") : [...prev, "blue"])}>
          <p className={`${colors.includes("blue") ? "border-accent border-4 bg-[#1790C8]" : " border-none"} font-medium flex items-center justify-center size-9 cursor-pointer rounded-full bg-[#1790C8]`}></p>
        </div>
        <div onClick={()=>setColors(prev => prev.includes("green") ? prev.filter( item => item != "green") : [...prev, "green"])}>
          <p className={`${colors.includes("green") ? "border-accent border-4 bg-[#7BBA3C]" : " border-none"} font-medium flex items-center justify-center size-9 cursor-pointer rounded-full bg-[#7BBA3C]`}></p>
        </div>
        <div onClick={()=>setColors(prev => prev.includes("brown") ? prev.filter( item => item != "brown") : [...prev, "brown"])}>
          <p className={`${colors.includes("brown") ? "border-accent border-4 bg-[#825D41]" : "border-none"} font-medium flex items-center justify-center size-9 cursor-pointer rounded-full bg-[#825D41]`}></p>
        </div>
        <div onClick={()=>setColors(prev => prev.includes("gray") ? prev.filter( item => item != "gray") : [...prev, "gray"])}>
          <p className={`${colors.includes("gray") ? "border-accent border-4 bg-[#777878]" : "border-none"} font-medium flex items-center justify-center size-9 cursor-pointer rounded-full bg-[#777878]`}></p>
        </div>
        <div onClick={()=>setColors(prev => prev.includes("black") ? prev.filter( item => item != "black") : [...prev, "black"])}>
          <p className={`${colors.includes("black") ? "border-accent border-4 bg-[#111111]" : "border-none"} font-medium flex items-center justify-center text-transparent size-9 cursor-pointer rounded-full bg-[#111111]`}></p>
        </div>
      </div>
      </div>

      {/* best seller check box */}
      <div className='flex gap-2 mt-2 items-center'>
        <input 
        type="checkbox" 
        id="bestseller" 
        onChange={() => setBestseller(prev => !prev)}
        checked={bestseller}
        className='size-4'/>
        <label className='cursor-pointer text-lg' htmlFor='bestseller'>Add to bestseller</label>
      </div>
      {/* best seller check box */}
      <div className='flex gap-2 mt-2 items-center'>
        <input 
        type="checkbox" 
        id="onsale" 
        onChange={() => setOnSale(prev => !prev)}
        checked={onsale}
        className='size-4'/>
        <label className='cursor-pointer text-lg' htmlFor='bestseller'>On Sale</label>
      </div>
      <button className='py-2 px-3 mt-4 bg-dark text-white rounded-sm'>Add Product</button>

    </form>
  )
}

export default AddProducts
/**

 * green :#7BBA3C,
 * blue :#1790C8,
 * pink :#D82A90,
 * red : #E7352B,
 * purple: #8D429F,
 * gray :#777878,
 * balck:#111111,
 * brown : #825D41
 */