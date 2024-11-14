/* eslint-disable no-unused-vars */
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { CommonProductPageTitle } from '../../../components/CommonUses';
import RatingStars from '../../../components/RatingStars';
import { addToCart } from '../../../redux/features/cart/CartSlice.js';
import { useFetchProductByIdQuery } from '../../../redux/features/product/productApi.js';

const SingleProducts = () => {
  // const [imageState, setImageState] = useState('')
  const {id} = useParams();
  const dispatch = useDispatch();
  const {data, error, isLoading} = useFetchProductByIdQuery(id);
  const singleProduct = data?.product || {};
  console.log(singleProduct)
  // const productReviews = data?.reviews || [];
 //console.log(productReviews)
  // handle add to cart function
  const handleAddToCart = (product) => {
    dispatch(addToCart(product))
  }
  if (isLoading) return <p>Loading....</p>
  if (error)  return <p>Error showing products details</p>

  return (
    <>
    {/* product title */}
    <CommonProductPageTitle />
    {/* product */}
    <section className="section__container mt-8 ">
      <div className="flex flex-col md:flex-row gap-8 md:h-[400px]">
      {/* product-image */}
        <div className="md:w-1/2 w-full md:h-[400px] flex md:flex-row  flex-col-reverse gap-2">
        <div className='flex md:flex-col gap-2 justify-evenly'>
          {/* small images */}
          {/* smmall image toggle */}
          {/* 
           <div>
            {
            productImage.image.map((item, index) => (
              <img src={item} key={index} alt="small-image1" className='w-[24%] border-[1px] border-text-light' onClick={() => setImageState(item)}/>
            ))
            }
            </div>
            <div>
              <img src={imageState} alt="image" className='h-auto w-full md:h-[400px] object-contain border-[1px] border-text-light'/>
            </div>
          */}
          <img src="" alt="small-image1" className='h-[100px] border-[1px] border-text-light'/>
          <img src="" alt="small-image2" className='h-[100px]  border-[1px] border-text-light'/>
          <img src="" alt="small-image3" className='h-[100px]  border-[1px] border-text-light'/>
          <img src="" alt="small-image4" className='h-[100px]  border-[1px] border-text-light'/>
        </div>
          <img src={singleProduct?.image} alt="image" className='h-auto w-full md:h-[400px] object-contain border-[1px] border-text-light'/>
        </div>
        <div className="md:w-1/2 w-full">
          <h3 className='text-2xl font-semibold mb-4 text-text-dark'>{singleProduct?.name}</h3>
          <p className='text-text-light mb-2'>{singleProduct.description}</p>
          <p className='text-text-dark mb-1'><strong>Product Catagory : </strong>{singleProduct.category}</p>
          <p className='text-text-dark mb-1'><strong>Product Size : </strong>Product Size</p>
          <p className='text-text-dark mb-1'><strong>Product Color : </strong>{singleProduct.color}</p>
          <p className='text-text-dark mb-1'><strong>Product Available : </strong>Product Available</p>
          <div className='flex gap-2 items-center text-text-dark mb-4'>
            <strong>Rating</strong><RatingStars rating={singleProduct?.rating}/>
          </div>
          <div className='flex-start items-center justify-between flex-col md:flex-row'>
          <p className='text-xl mt-2 text-text-dark'>
            <strong>{singleProduct?.price}</strong>{singleProduct?.oldPrice && <s className='text-sm ml-2 text-text-light'>{singleProduct?.oldPrice}</s>}</p>   
          {/* To-do add to cart botton */}
          <button 
          onClick={(e) => {e.stopPropagation(); handleAddToCart(singleProduct)}}
          className='mt-6 px-6 py-3 bg-accent text-white'> Add to Cart</button>
          </div>
        </div>
      </div>
    </section>
    {/* client reviews */}
    {/* related produtcs */}
    </>
  )
}

export default SingleProducts;
