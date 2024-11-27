import express from 'express';
import {placeOrder, placeOrderStripe, placeOrderRazorpay, allOrders, userOrders, updateStatus, verifyStripe, verifyRazorpay} from '../controllers/orderController.js';
import adminAuth from '../middleware/adminAuth.js'
import authUser from '../middleware/authCart.js'

const orderRouter = express.Router()

// admin features
orderRouter.post('/list',adminAuth, allOrders)
orderRouter.post('/status',adminAuth, updateStatus)

// payment features
orderRouter.post('/place',authUser, placeOrder)
orderRouter.post('/stripe',authUser, placeOrderStripe)
orderRouter.post('/razorpay',authUser, placeOrderRazorpay)

// verify payment
orderRouter.post('/verify-stripe',authUser, verifyStripe)
orderRouter.post('/verify-razorpay',authUser, verifyRazorpay)
// user features
orderRouter.post('/userorders',authUser, userOrders)

export default orderRouter;