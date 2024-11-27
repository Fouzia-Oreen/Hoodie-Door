/* eslint-disable no-unused-vars */
import { useContext } from "react"
import { ShopContext } from "../context/ShopContext"
import { useSearchParams } from "react-router-dom"
import { useEffect } from "react"
import axios from "axios"
import {toast} from "react-toastify"


const VerifyPayment = () => {
    const {navigate, token, setCartItems , backendUrl} = useContext(ShopContext)
    const [searchParams, setSearchParams] = useSearchParams()
    const success = searchParams.get('success')
    const orderId = searchParams.get('orderId')

    const verifyPaments = async () => {
        try {
            if (!token) {
                return null
            }
            const response = await axios.post(backendUrl + '/api/order/verify-stripe', {success, orderId}, {headers: {token}})
            if (response.data.success) {
                setCartItems({})
                navigate('/orders')
            } else {
                navigate('/cart')
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }
    useEffect(() => {
        verifyPaments()
    }, [token])
    
  return (
    <div>
    </div>
  )
}

export default VerifyPayment
