 
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import image from '../../../assets/instagram-4.jpg';
import RatingStars from '../../../components/RatingStars';
import RelatedProducts from "../../../components/RelatedProducts";

const SingleProducts = () => {
    // const {id} = useParams()
    // console.log(id);
 

  return (
    <>
    <div className="bg-[#d1cfc5]">
    <section className="section__container">
      <div className='flex flex-col'>
      <h2 className="section__header capitalize">Single Shop Product</h2>
      <div className="section__subheader flex space-x-2">
        <span ><Link to="/">Home</Link></span><ChevronRight />
        <span ><Link to="/shop">Shop</Link></span><ChevronRight />
        <span>product name</span>
      </div>
      </div>
    </section>
    </div>
    {/* product */}
    <section className="section__container mt-8">
      <div className="flex flex-col md:flex-row gap-8">
      {/* product-image */}
        <div className="md:w-1/2 w-full bg-red-400">
        <img src={image} alt="image" className='h-auto w-full '/>
        </div>
        <div className="md:w-1/2 w-full">
        <h3 className='text-2xl font-semibold mb-4 text-text-dark'>Product Name</h3>
        <p>Product Description Lorem ipsum dolor sit.</p>
        <p><strong>Product Catagory : </strong>Product Catagory</p>
        <p><strong>Product Size : </strong>Product Size</p>
        <p><strong>Product Color : </strong>Product Color</p>
        <p><strong>Product Available : </strong>Product Available</p>
        <div className='flex gap-2 items-center'><strong>Rating</strong><RatingStars rating={'4'}/></div>
        <p className='text-xl mt-2 '><strong>$curr Price</strong> <s className='text-sm ml-2 text-text-light'> $ prev price</s></p>   
        <button className='mt-6 px-6 py-3 bg-accent text-white'> Add to Cart</button>
        </div>


      </div>
    </section>
    {/* display reviews */}
    <section className="section__container mt-8">
      Reviews
    </section>
    {/* relayed Products */}
    <section className="section__container mt-8">
    <RelatedProducts />
    </section>

    </>
  )
}

export default SingleProducts
