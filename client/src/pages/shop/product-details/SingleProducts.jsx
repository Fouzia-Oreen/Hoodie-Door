 import image from '../../../assets/instagram-3.jpg';
import { CommonProductPageTitle } from '../../../components/CommonUses';
import RatingStars from '../../../components/RatingStars';

const SingleProducts = () => {
 // const [imageState, setImageState] = useState('')
  return (
    <>
    {/* product title */}
    <CommonProductPageTitle title={'Single Shop Product'} page={'product name'}/>
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
          <img src={image} alt="image" className='h-auto w-full md:h-[400px] object-contain border-[1px] border-text-light'/>
        </div>
        <div className="md:w-1/2 w-full">
          <h3 className='text-2xl font-semibold mb-4 text-text-dark'>Product Name</h3>
          <p className='text-text-light mb-2'>Product Description Lorem ipsum dolor sit.</p>
          <p className='text-text-dark mb-1'><strong>Product Catagory : </strong>Product Catagory</p>
          <p className='text-text-dark mb-1'><strong>Product Size : </strong>Product Size</p>
          <p className='text-text-dark mb-1'><strong>Product Color : </strong>Product Color</p>
          <p className='text-text-dark mb-1'><strong>Product Available : </strong>Product Available</p>
          <div className='flex gap-2 items-center text-text-dark mb-4'>
            <strong>Rating</strong><RatingStars rating={'4'}/>
          </div>
          <div className='flex-start items-center justify-between flex-col md:flex-row'>
          <p className='text-xl mt-2 text-text-dark'><strong>$curr Price</strong> <s className='text-sm ml-2 text-text-light'> $ prev price</s></p>   
          {/* To-do add to cart botton */}
          <button className='mt-6 px-6 py-3 bg-accent text-white'> Add to Cart</button>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default SingleProducts
