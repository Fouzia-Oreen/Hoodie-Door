/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { assets } from "../assets/images/assets";
import CartTotal from "../components/CartTotal";
import Title from "../components/Title";
import { ShopContext } from "../context/ShopContext";

const Cart = () => {
  const { products, currency, tax_fee, cartItems, updateQuantity, increaseQuantity, decreaseQuantity, navigate } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]); 


  useEffect(() => {
    const tempData = [];
    for (const items in cartItems) {
      for (const item in cartItems[items]) {         
          if (cartItems[items][item] > 0) {
            tempData.push({
              _id : items,
              size: item,
              quantity: cartItems[items][item] 
            })
          }          
      }       
  } 
  setCartData(tempData);
  },[cartItems]);

  const handleCheckout = () => {
    if (cartData.length > 0) {
      navigate('/place-order')
    } else {
      toast.error("Your cart is empty")
    }
  }

  return (
    <div className="section_container pt-14">
      <div className="text-2xl mb-3">
        <Title text1={"Your"} text2={"Cart"} />
      </div>
      <div>
        {
          cartData.map((item, index) => {
            const productData = products.find((product) => product._id === item._id)
            return (
              <div key={index} className="py-4 text-text-dark grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4">
                <div className="flex items-start gap-4">
                  <img src={productData.image[0]} alt="image" className="w-16 sm:w-20 border-[1px] border-text-light border-opacity-30"/>
                  <div>
                    <p className="sm:text-lg text-sm font-medium">{productData.name}</p>
                    <div className="flex items-center gap-5 mt-2">
                      <p>{currency}{productData.price}</p>
                      <p className="size-9 flex justify-center items-center bg-primary-light rounded-full font-medium">{item.size}</p>
                    </div>
                  </div>
                </div>
                {/* increment & decrement */}
                <div className="flex gap-2 items-center">
                  <button className="size-5 p-1 rounded-full bg-primary-light hover:bg-accent font-bold flex items-center justify-center"
                  onClick={()=> increaseQuantity(item._id,item.size,item.quantity)}
                  >+</button>
                  <span 
                  onChange={(e) => e.target.value == "" || e.target.value == '0' ? null : updateQuantity(item._id,item.size, Number(e.target.value))}>{item.quantity}</span>
                  <button
                  onClick={()=> decreaseQuantity(item._id,item.size,item.quantity)} 
                  className="size-5 p-1 rounded-full bg-primary-light hover:bg-accent font-bold flex items-center justify-center">-</button>
                </div>           
                <img 
                src={assets.bin_icon} alt="bin" 
                className="size-5 cursor-pointer mr-4" 
                onClick={() => updateQuantity(item._id, item.size, 0)}/>
              </div>
            )
          })
        }
      </div>
      <div className="flex justify-end my-20">
        <div className="w-full sm:w-[450px]">
          <CartTotal />
          <div className="w-full text-end mt-8">
            <button 
            onClick={() => handleCheckout()} 
            className="btn">Proceed to checkout</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
