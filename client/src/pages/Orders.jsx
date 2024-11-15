import { useContext } from "react"
import { ShopContext } from "../context/ShopContext"
import Title from "../components/Title"

const Orders = () => {
    const {products, currency} = useContext(ShopContext)
  return (
    <div className="pt-16">
      <div className="text-2xl my-3">
        <Title text1={"My"} text2={"Ordres"} />
      </div>
      <div>
        {
            products.slice(1, 4).map((item, index) =>(
                <div key={index} className="py-4 text-text-dark flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex items-start gap-6 text-sm">
                        <img src={item.image[0]} alt="" className="w-16 sm:-20"/>
                        <div>
                            <p className="font-medium text-base">{item.name}</p>
                            <div className="flex items-center gap-3 mt-2">
                                <p className="text-lg font-medium">{currency}{item.price}</p>
                                <p>Quantity : 1</p>
                                <p>Size : M</p>
                            </div>
                            <p className="mt-2">Date : <span>20, Jul, 2024</span></p>
                        </div>
                    </div>
                    <div className="md:w-1/2 flex justify-between">
                    <div className="flex items-center gap-2">
                        <p className="min-w-2 h-2 rounded-full bg-green-500"></p>
                        <p className="text-sm">Ready To Ship</p>
                    </div>
                    <button className="btn">Track Order</button>
                    </div>
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default Orders
