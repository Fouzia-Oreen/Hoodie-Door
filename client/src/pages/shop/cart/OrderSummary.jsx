import { useSelector } from "react-redux"

const OrderSummary = () => {
  const products = useSelector((store) => store.cart.products);
  const {tax, taxRate, totalPrice, grandTotal, selectedItems} = useSelector((store) => store.cart)
  return (
    <div className="mt-5 ">
      <h1 className="font-semibold text-xl">Order Summary</h1>
      <p className="mt-2 flex justify-between"><span>Selected Items : </span>{selectedItems}</p>
      <p className="mt-2 flex justify-between"><span>Total Price :</span> ${totalPrice.toFixed(2)}</p>
      <p className="mt-2 flex justify-between"><span>Total Price :</span> ${totalPrice.toFixed(2)}</p>
      <p className="mt-2 flex justify-between"><span>Tax ({taxRate * 100}%) : </span>   ${tax.toFixed(2)}</p>
      <hr className=" mt-4 border-text-light"/>
      <h3 className="mt-4 font-semibold flex justify-between"><span>GrandTotal :</span> ${grandTotal.toFixed(2)}</h3>
      
      <div className="flex justify-between items-center mt-8">
        <button className="btn">Clear Cart</button>
        <button className=" btn ">Checkout</button>
      </div>
    </div>
  )
}

export default OrderSummary
