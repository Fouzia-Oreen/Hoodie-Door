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
  const [category, setCategory] = useState('Men');
  const [subCategory, setSubCategory] = useState('Topwear');
  const [bestseller, setBestseller] = useState(false);
  const [sizes, setSizes] = useState([]);


 const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData()
      formData.append("name", name)
      formData.append("description", description)
      formData.append("price", price)
      formData.append("category", category)
      formData.append("subCategory", subCategory)
      formData.append("bestseller", bestseller)
      formData.append("sizes", JSON.stringify(sizes))

      image1 && formData.append("image1", image1)
      image2 && formData.append("image2", image2)
      image3 && formData.append("image3", image3)
      image4 && formData.append("image4", image4)

      const response = await axios.post(backendUrl + "/api/product/add", formData, {headers:{token}})
      if (response.data.success) {
        toast.success(response.data.success)
        setName('')
        setDescription('')
        setPrice('')
        setCategory('')
        setSubCategory('')
        setBestseller('')
        setSizes('')
        setImage1(false)
        setImage2(false)
        setImage3(false)
        setImage4(false)
      }else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.error(error)
      toast.error(error.message)
    }
 }

  return (
    <form className='flex flex-col w-full items-start gap-4' onSubmit={onSubmitHandler}>
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
        <p className='mb-3 text-lg '>Product Name</p>
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
        <p className='mb-3 text-lg '>Product Description</p>
        <textarea 
        type="text" 
        required 
        value = {description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder='Enter product description...' 
        className='w-full max-w-[500px] px-3 py-2'/>
      </div>

    <div className='flex flex-col sm:flex-row gap-2 w-full sm:gap-8 '>
      {/* product - category */}
      <div>
        <p className='mb-3 text-lg'>Product Category</p>
        <select onChange={(e) => setCategory(e.target.value)} 
        className='w-full px-3 py-2'>
          <option value="Men">Men</option>
          <option value="Women">Women</option>
          <option value="Kids">Kids</option>
        </select>
      </div>
      {/* product - subcategory */}
      <div>
        <p className='mb-3 text-lg'>Product Subcategory</p>
        <select onChange={(e) => setSubCategory(e.target.value)} className='w-full px-3 py-2'>
          <option value="Topwear">Topwear</option>
          <option value="Bottomwear">Bottomwear</option>
          <option value="Winterwear">Winterwear</option>
        </select>
      </div>
      {/* product price */}
      <div>
        <p className='mb-3 text-lg'>Product Price</p>
        <input 
        className='w-full px-3 py-2 sm:w-[120px]' 
        type="number" 
        placeholder='20'
        value={price}
        onChange={(e) => setPrice(e.target.value)}/>
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

      <button className='py-2 px-3 mt-4 bg-dark text-white rounded-sm'>Add Product</button>

    </form>
  )
}

export default AddProducts
