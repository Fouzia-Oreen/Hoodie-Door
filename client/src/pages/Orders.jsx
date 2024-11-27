/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react"
import { ShopContext } from "../context/ShopContext"
import Title from "../components/Title"
import axios from "axios"

const Orders = () => {
    const {backendUrl, token, currency} = useContext(ShopContext)
    const [orderData, setOrderData] = useState([])
    const loadOrderData = async () => {
      try {
        if (!token) {
          return null
        }
        const response = await axios.post(backendUrl + "/api/order/userorders", {}, {headers:{token}})
        if (response.data.success) {
          let allOrdersItem = []
          response.data.orders.map((order) => {
            order.items.map((item) => {
              item['status'] = order.status
              item['payment'] = order.payment
              item['paymentMethod'] = order.paymentMethod
              item['date'] = order.date
              allOrdersItem.push(item)
            })
          })
          setOrderData(allOrdersItem.reverse())
        }
      } catch (error) {
        console.log(error)
      }
    }

    useEffect(() => {
      loadOrderData()
    }, [token])
    

   return (
    <div className="pt-16">
      <div className="text-2xl my-3">
        <Title text1={"My"} text2={"Orders"} />
      </div>
      <div>
        {
            orderData.map((item, index) =>(
                <div key={index} className="py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex items-start gap-6 text-sm">
                        <img src={item.image[0]} alt="" className="w-16 sm:-20"/>
                        <div>
                            <p className="font-medium text-base">{item.name}</p>
                            <div className="flex items-center gap-3 mt-1">
                                <p className="font-medium">{currency}{item.price}</p>
                                <p>Quantity : {item.quantiry}</p>
                                <p>Size : {item.size}</p>
                            </div>
                            <p className="mt-1">Date : <span>{new Date(item.date).toDateString()}</span></p>
                            <p className="mt-1">Payment : <span>{item.paymentMethod}</span></p>
                        </div>
                    </div>
                    <div className="md:w-1/2 flex justify-between">
                    <div className="flex items-center gap-2">
                        <p className="min-w-2 h-2 rounded-full bg-green-500"></p>
                        <p className="text-sm">{item.status}</p>
                    </div>
                    <button onClick={loadOrderData} className="btn">Track Order</button>
                    </div>
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default Orders
