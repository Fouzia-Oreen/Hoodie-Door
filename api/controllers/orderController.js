
import orderModels from "../models/orderModel.js"
import userModels from "../models/userModel.js"
import Stripe from "stripe";
import razorpay from 'razorpay'

// global variables
const currency = 'usd'
const deliveryCharge = 10
const taxFee = 3
const totalCharge = deliveryCharge + taxFee

// gateway initialized
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
const razorpayInstance = new razorpay({
    key_id : process.env.RAZORPAY_KEY_ID,
    key_secret : process.env.RAZORPAY_KEY_SECRET,
})

// placing orders using COD
const placeOrder = async (req, res) => {
    try {
        const {userId, items, amount, address} = req.body
        const orderData = {
            userId, 
            items, 
            address,
            amount, 
            paymentMethod: "COD", 
            pament: false,  
            date: Date.now()
        }
        const newOrder = new orderModels(orderData)
        await newOrder.save()

        // clear the cart data
        await userModels.findByIdAndUpdate(userId, {cartData:{}})
        res.json({success: true, message:"Order Palced"})

    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
    }
}

// placing orders using Stripe
const placeOrderStripe = async (req, res) => {
    try {
        const {userId, items, amount, address} = req.body
        const {origin } = req.headers
        const orderData = {
            userId, 
            items, 
            address,
            amount, 
            paymentMethod: "Stripe", 
            pament: false,  
            date: Date.now()
        }
        const newOrder = new orderModels(orderData)
        await newOrder.save()

        const line_items = items.map((item)=> ({
            price_data : {
                currency:currency,
                product_data: {
                    name: item.name
                },
                unit_amount: item.price * 100
            },
            quantity: item.quantity
        }))
        line_items.push({
            price_data : {
                currency:currency,
                product_data: {
                    name: "Delivery Charges"
                },
                unit_amount: totalCharge * 100
            },
            quantity: 1
        })
        const session = await stripe.checkout.sessions.create({
            success_url:`${origin}/verify?success=true&orderId=${newOrder._id}`,
            cancel_url:`${origin}/verify?success=false&orderId=${newOrder._id}`,
            line_items,
            mode: 'payment'
        })
        res.json({success:true, session_url:session.url})
    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
    }
}

// verify stripe
const verifyStripe = async (req, res) => {
    const { orderId, success, userId } = req.body
    try {
        if (success === true) {
            await orderModels.findByIdAndUpdate(orderId, {payment: true})
            await userModels.findByIdAndUpdate(userId, {cartData: {}})
            res.json({success:true})
        } else{
            await orderModels.findByIdAndDelete(orderId)
            res.json({success:false})
        }
    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
    }
}

// placing orders using Razorpay
const placeOrderRazorpay = async (req, res) => {
    try {
        const {userId, items, amount, address} = req.body
        const orderData = {
            userId, 
            items, 
            address,
            amount, 
            paymentMethod: "Razorpay", 
            pament: false,  
            date: Date.now()
        }
        const newOrder = new orderModels(orderData)
        await newOrder.save()
        const options = {
            amount : amount * 100,
            currency : currency.toUpperCase(),
            receipt: newOrder._id
        }
        await razorpayInstance.orders.create(options, (error, order) => {
            if (error) {
                console.log(error)
                return res,json({success:false, message:error})
            } 
            res.json({success:true, order})

        })
    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
    }
}

// verify razorpay 
const verifyRazorpay  = async (req, res) => {
    try {
        const {userId, razorpay_order_id} = req.body
        const orderInfo = await razorpayInstance.orders.fetch(razorpay_order_id)
        if(orderInfo.status === 'paid') {
            await orderModels.findByIdAndUpdate(orderInfo.receipt, {payment:true})
            await userModels.findByIdAndUpdate(userId, {cartData:{}})
            res.json({success:true, message:"Payment Successfull"})
        } else {
            res.json({success:false, message:"Payment Failed"})
        }
    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
    }
}

// all orders data for admin panel
const allOrders = async (req, res) => {
    try {
        const orders = await orderModels.find({})
        res.json({success:true, orders})
    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
    }
}

// user order data for frontend
const userOrders = async (req, res) => {
    try {
        const {userId} = req.body
        const orders = await orderModels.find({userId})
        res.json({success:true, orders})
    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
    }
}

// upadate order status from admin panel
const updateStatus = async (req, res) => {
    try {
        const { orderId , status} = req.body
        await orderModels.findByIdAndUpdate(orderId, {status})
        res.json({success: true, message:"Status Updated"})
    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
    }
}

export {placeOrder, placeOrderStripe,verifyStripe, placeOrderRazorpay, verifyRazorpay, allOrders, userOrders, updateStatus}