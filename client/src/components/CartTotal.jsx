import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";

const CartTotal = () => {
  const { delivery_fee, currency, tax_fee, getCartAmmount } = useContext(ShopContext);
  return (
    <div className="w-full">
      <div className="text2xl">
        <Title text1={"Cart"} text2={"Totals"} />
      </div>
      <div className="flex flex-col gap-2 mt-2 text-sm">
        <div className="flex justify-between">
            <p>Subtotal</p>
            <p>{currency}{getCartAmmount()}.00</p>
        </div>
        <hr/>
        <div className="flex justify-between">
            <p>Tax Fee</p>
            <p>{currency} {tax_fee}.00</p>
        </div>
        <hr/>
        <div className="flex justify-between">
            <p>Shipping Fee</p>
            <p>{currency}{delivery_fee}.00</p>
        </div>
        <hr className="bg-text-light h-[2px] w-full mt-2"/>
        <div className="flex justify-between mt-2">
            <b>Total</b>
            <b>{currency} {getCartAmmount() === 0 ? 0 : getCartAmmount() + delivery_fee + tax_fee}.00</b>
        </div>
      </div>
    </div>
  )
}

export default CartTotal
