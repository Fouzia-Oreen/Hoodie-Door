/* eslint-disable react/prop-types */
import { useEffect, useState, } from "react"
import { backendUrl, currency } from "../App";
import axios from "axios";
import { toast } from "react-toastify";
import { FilePenLine, Trash2 } from 'lucide-react';
import {useNavigate} from 'react-router-dom'

const List = ({token}) => {
  const [list, setList] = useState([]);
  const navigate = useNavigate()
  // fetch or get the product from product list
  const fetchList = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/product/list")
      if (response.data.success) {
        setList(response.data.products)
      }else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }
  // remove the product
  const removeProducts = async (id) => {
    try {
      const response = await axios.post(backendUrl + "/api/product/remove", {id}, {headers:{token}})
      if (response.data.success) {
        toast.success(response.data.message)
        await fetchList()
      }else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }
  const updateProducts = async (id) => {
    try {
      const response = await axios.post(backendUrl + "/api/product/update", {id}, {headers:{token}})
      navigate('/api/product/add')
      console.log(response)
      if (response.data.success) {
        toast.success(response.data.message)
        
      }else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  useEffect(() => {
    fetchList()
  }, [])
  
  return (
    <>
     <p className="mb-2 font-medium">All Products List</p> 
     <div className="flex flex-col gap-2">
      {/* list table title */}
      <div className="hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 text-sm bg-primary-light">
        <b>Image</b>
        <b>Name</b>
        <b>Category</b>
        <b>Price</b>
        <b className="text-center">Action</b>
        </div>
        {/* product list */}
        {
          list.map((item, index) => (
            <div key={index} className="grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center mb-2 px-2 py-1 text-sm ">
              <img className="w-12" src={item.image[0]} alt="" />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>{currency} {item.price}</p>
              <div className="flex m-auto gap-2">
              <p onClick={()=> updateProducts(item._id)} className="text-right md:text-center cursor-pointer bg-blue-200 text-teal-500 w-fit p-1.5 rounded-full "><FilePenLine className="size-5"/></p>
              <p onClick={()=> removeProducts(item._id)} className="text-right md:text-center cursor-pointer bg-red-200 text-red-500 w-fit p-1.5 rounded-full "><Trash2 className="size-5"/></p>
              </div>
            </div>
          ))
        }
     </div>
    </>
  )
}

export default List
