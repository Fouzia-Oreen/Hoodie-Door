/* eslint-disable no-undef */
/* eslint-disable no-case-declarations */
import { useContext, useState } from "react"
import { assets } from "../assets/images/assets"
import CartTotal from "../components/CartTotal"
import Title from "../components/Title"
import { ShopContext } from "../context/ShopContext"
import axios from "axios"
import { toast } from "react-toastify"

const PlaceOrders = () => {
  const [method, setMethod] = useState('cod');
  const {navigate, backendUrl, token, cartItems, setCartItems, getCartAmount, delivery__fee, tax__fee, products} = useContext(ShopContext);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: ""
  })
  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData(data => ({...data,[name]:value}))
  }
  const initPay = (order) => {
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency : order.currency,
      name: "Order Payment",
      description: "Order Payment",
      order_id: order.id,
      receipt:order.reciept,
      handler: async (response) => {
        console.log(response)
        try {
          const {data} = await axios.post(backendUrl + '/api/order/verify-razorpay', response, {headers:{token}})
          if (data.success) {
            navigate('/orders')
            setCartItems({})
          }
        } catch (error) {
          console.log(error)
          toast.error(error)
        }
      }
    }
    const rzp = new window.Razorpay(options)
    rzp.open()
  }
  const onsubmitHandler = async (event) => {
    event.preventDefault()
    try {
      let orderItems = []
      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            const itemInfo = structuredClone(products.find(product => product._id === items))
            if (itemInfo) {
              itemInfo.size = item
              itemInfo.quantity = cartItems[items][item]
              orderItems.push(itemInfo)
            }
          }
        }
      }
      let orderData = {
        address : formData,
        items : orderItems,
        amount : getCartAmount() + delivery__fee + tax__fee,
      }
      switch (method) {
        // API calls for the COD
        case "cod":
          const response = await axios.post(backendUrl + "/api/order/place",orderData,{headers:{token}})
       
          if (response.data.success) {
            setCartItems({})
            navigate('/orders')
          }else {
            toast.error(response.data.message)
          }
          break;
        
          case "stripe":
            const responseStripe = await axios.post(backendUrl + "/api/order/stripe",orderData,{headers:{token}})
         
            if (responseStripe.data.success) {
              const {session_url} = responseStripe.data
              window,location.replace(session_url)
              setCartItems({})
              navigate('/orders')
            }else {
              toast.error(responseStripe.data.message)
            }
            break;

            case "razorpay":
              const responseRazorpay = await axios.post(backendUrl + "/api/order/razorpay",orderData,{headers:{token}})
           
              if (responseRazorpay.data.success) {
                initPay(responseRazorpay.data.order)
              }else {
                toast.error(responseRazorpay.data.message)
              }
              break;
        
        default: 
          break;
      }
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <form onSubmit={onsubmitHandler} className="flex flex-col sm:flex-row  gap-4 pt-5 sm:pt-14 min-h-[80vh] justify-evenly">
      {/* left side */}
     <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
      <div className="text-xl my-3">
        <Title text1={"Delivery"} text2={"Information"} />
      </div>
      <div className="flex gap-3">
        <input
        required 
        onChange={onChangeHandler} name="firstName" value={formData.firstName}
        type="text" 
        placeholder="First name" 
        className="border-[1px] border-text-light py-1.5 px-3.5 placeholder:text-text-light outline-none w-full" />
        <input
        required 
        onChange={onChangeHandler} name="lastName" value={formData.lastName}
        type="text" 
        placeholder="Last name"
        className="border-[1px] border-text-light py-1.5 px-3.5 placeholder:text-text-light outline-none w-full" />
      </div>
      <input
      required 
      onChange={onChangeHandler} name="email" value={formData.email}
      type="email" 
      placeholder="Email address" 
      className="border-[1px] border-text-light py-1.5 px-3.5 placeholder:text-text-light outline-none w-full" />
      <input
      required 
      onChange={onChangeHandler} name="street" value={formData.street}
      type="text" 
      placeholder="Street" 
      className="border-[1px] 
      border-text-light py-1.5 px-3.5 placeholder:text-text-light outline-none w-full" />

      <div className="flex gap-3">
      <input
      required 
      onChange={onChangeHandler} name="city" value={formData.city}
      type="text" 
      placeholder="City" 
      className="border-[1px] border-text-light py-1.5 px-3.5 placeholder:text-text-light outline-none w-full" />
      <input
      required 
      onChange={onChangeHandler} name="state" value={formData.state}
      type="text" 
      placeholder="State" 
      className="border-[1px] border-text-light py-1.5 px-3.5 placeholder:text-text-light outline-none w-full" />
      </div>

      <div className="flex gap-3">
      <input
      required 
      onChange={onChangeHandler} name="zipcode" value={formData.zipcode}
      type="number" 
      placeholder="Zipcode" 
      className="border-[1px] border-text-light py-1.5 px-3.5 placeholder:text-text-light outline-none w-full" />
      <input
      required 
      onChange={onChangeHandler} name="country" value={formData.country}
      type="text" 
      placeholder="Country" 
      className="border-[1px] border-text-light py-1.5 px-3.5 placeholder:text-text-light outline-none w-full" />
      </div>
      <input
      required 
      onChange={onChangeHandler} name="phone" value={formData.phone}
      type="number" 
      placeholder="Phone" 
      className="border-[1px] border-text-light py-1.5 px-3.5 placeholder:text-text-light outline-none w-full" />
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
            type="submit"
            >Place Order
          </button>
        </div>
        </div>
     </div>
    </form>
  )
}

export default PlaceOrders
