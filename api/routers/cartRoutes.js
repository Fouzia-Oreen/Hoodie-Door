import express from 'express';
import { addToCart, getUserCart, updateCart } from '../controllers/cartControllers.js';
import authUser from '../middleware/authCart.js';

const cartRouter = express.Router()

/* cart routes endpoints */
cartRouter.post('/add-cart',authUser, addToCart );
cartRouter.post('/update-cart',authUser, updateCart );
cartRouter.post('/get-cart',authUser, getUserCart );


export default cartRouter