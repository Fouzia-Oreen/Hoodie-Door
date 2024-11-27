/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react"
import { useState } from "react"
import axios from 'axios';
import {backendUrl, currency} from '../App'
import {toast} from 'react-toastify';
import parcel from '../assets/parcel_icon.svg'

const Orders = ({token}) => {
  const [orders, setOrders] = useState([])
  const fetchAllOrders = async () => {
    if (!token) {
      return null
    }
    try {
      const response = await axios.post(backendUrl + '/api/order/list', {}, {headers:{token}})
      if (response.data.success) {
        setOrders(response.data.orders)
      } else {
        toast.error(response.data.message); 
      }
    } catch (error) {
      toast.error(error.message); 
    }
  }

  const statusHandler = async (event, orderId) => {
    try {
      const response = await axios.post(backendUrl + '/api/order/status', {orderId, status:event.target.value}, {headers: {token}})
      if (response.data.success) {
        await fetchAllOrders()
      }
    } catch (error) {
      console.log(error)
      toast.error(response.error.message)
    }
  }

  useEffect(() => {
    fetchAllOrders()
  }, [token])
  
  return (
    <div>
      <h3 className='text-4xl'>Order page</h3>
      <div>
        {
          orders.map((order, index) => (
            <>
            <div key={index} className='grid grid-cols-1 sm-grid-cols-[0.5fr_2fr_1fr] lg:grid-cols-[0.5fr_2fr_1fr_1fr_1fr] gap-3 items-start border-[1px] border-text-light p-5 md:p-8 my-3 md:my-4 text-xs sm:text-sm '>
              <img src={parcel} alt="img" className="w-12"/>
              <div>      
              <div>
                {order.item.map((item, index) => {
                  if (index === order.items.length - 1) {
                    return <p className="py-0.5" key={index}>{item.name} X {item.quantity} <span>{item.size}</span></p>
                  } else {
                    return <p className="py-0.5" key={index}>{item.name} X {item.quantity} <span>{item.size}</span> , </p>
                  }
                })}
              </div>
              <p className="mt-3 mb-2 font-medium">{order.address.firstName + " "  + order.address.lastName}</p>
              <div>
                <p >{order.address.street}</p>
                <p >{order.address.city + ", " + order.address.state + ", " + order.address.country + ", " + order.address.zipcode}</p>
                <p >{order.address.phone}</p>
              </div>
              <div>
                <p className="text-sm sm-text-[15px]">Item : {order.items.length}</p>
                <p className="mt-3">Method : {order.paymentMethod}</p>
                <p>Payment : {order.payment ? "Done" : "Pending"}</p>
                <p>Date : {new Date(order.date).toLocaleString()}</p>
              </div>
              <p className="text-sm sm:text-[15px]">{currency} {order.amount}</p>
              <select onChange={(event) => statusHandler(event, order._id)} className="p-2 font-semibold" value={order.status}>
                <option value="Order Placed">Order Placed</option>
                <option value="Packing">Packing</option>
                <option value="Shipped">Shipped</option>
                <option value="Out for Delivery">Out for delivery</option>
                <option value="Delivered">Delivered</option>
                </select>
              </div>
            </div>
            </>
          ))
        }
      </div>
    </div>
  )
}

export default Orders
