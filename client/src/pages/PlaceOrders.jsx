import { useState } from "react"
import { assets } from "../assets/images/assets"
import CartTotal from "../components/CartTotal"
import Title from "../components/Title"
import { useContext } from "react"
import { ShopContext } from "../context/ShopContext"

const PlaceOrders = () => {
  const [method, setMethod] = useState('cod')
  const {navigate} = useContext(ShopContext);

  return (
    <div className="flex flex-col sm:flex-row  gap-4 pt-5 sm:pt-14 min-h-[80vh] justify-evenly">
      {/* left side */}
     <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
      <div className="text-xl my-3">
        <Title text1={"Delivery"} text2={"Information"} />
      </div>
      <div className="flex gap-3">
        <input type="text" placeholder="First name" className="border-[1px] border-text-light py-1.5 px-3.5 placeholder:text-text-light outline-none w-full" />
        <input type="text" placeholder="Last name" className="border-[1px] border-text-light py-1.5 px-3.5 placeholder:text-text-light outline-none w-full" />
      </div>
      <input type="email" placeholder="Email address" className="border-[1px] border-text-light py-1.5 px-3.5 placeholder:text-text-light outline-none w-full" />
      <input type="text" placeholder="Street" className="border-[1px] 
      border-text-light py-1.5 px-3.5 placeholder:text-text-light outline-none w-full" />
      <div className="flex gap-3">
      <input type="text" placeholder="City" className="border-[1px] border-text-light py-1.5 px-3.5 placeholder:text-text-light outline-none w-full" />
      <input type="text" placeholder="State" className="border-[1px] border-text-light py-1.5 px-3.5 placeholder:text-text-light outline-none w-full" />
      </div>
      <div className="flex gap-3">
      <input type="number" placeholder="Zipcode" className="border-[1px] border-text-light py-1.5 px-3.5 placeholder:text-text-light outline-none w-full" />
      <input type="text" placeholder="Country" className="border-[1px] border-text-light py-1.5 px-3.5 placeholder:text-text-light outline-none w-full" />
      </div>
      <input type="number" placeholder="Phone" className="border-[1px] border-text-light py-1.5 px-3.5 placeholder:text-text-light outline-none w-full" />
     </div>
     {/* right side */}
     <div className="mt-8">
        <div className="mt-8 min-w-80">
          <CartTotal />
        </div>
        <div className="mt-12">
        <Title text1={"Payment"} text2={"Method"} />
        {/* payment method selection */}
        <div className="flex  flex-wrap gap-3 lg:flex-row">
        <div onClick={() => setMethod('stripe')} className="flex items-center gap-3 border-[1px] p-2 cursor-pointer border-text-light">
          <p className={`rounded-full min-w-3.5 h-3.5 border-[1px] border-text-light ${method === "stripe" ? "bg-green-400" : ""}`}></p>
            <img className="h-5 mx-4 w-fit" src={assets.stripe_logo} alt="" />
        </div>
        <div onClick={() => setMethod('razorpay')} className="flex items-center gap-3 border-[1px] p-2 cursor-pointer border-text-light">
          <p className={`rounded-full min-w-3.5 h-3.5 border-[1px] border-text-light ${method === "razorpay" ? "bg-green-400" : ""}`}> </p>
            <img className="h-5 mx-4 w-fit" src={assets.razorpay_logo} alt="" />
        </div>
        <div onClick={() => setMethod('cod')} className="flex items-center gap-3 border-[1px] p-2 cursor-pointer border-text-light">
          <p className={`rounded-full min-w-3.5 h-3.5 border-[1px] border-text-light ${method === "cod" ? "bg-green-400" : ""}`}></p>
          <p className="font-medium mx-4 text-text-dark">Cash On Delivery</p>
        </div>
        </div>
        <div className="w-full text-end mt-8">
          <button 
          className="btn" 
          onClick={() => navigate('/orders')}>Place Order</button>
        </div>
        </div>
     </div>
    </div>
  )
}

export default PlaceOrders
