import express from 'express';
import { addProduct, listProduct, removeProduct, singleProduct, updateProduct } from '../controllers/productControllers.js';
import adminAuth from '../middleware/adminAuth.js';
import upload from '../middleware/multer.js';

const productRouter = express.Router()

// create or add product
productRouter.post('/add',adminAuth,upload.fields([{name:'image1', maxCount:1}, {name:'image2', maxCount:1},{name:'image3', maxCount:1},{name:'image4', maxCount:1}]), addProduct );
// get or list all products
productRouter.get('/list', listProduct );
// get single product 
productRouter.post('/single', singleProduct)
// delete product
productRouter.post('/remove',adminAuth, removeProduct)
// update product
productRouter.put('/update',adminAuth, updateProduct)


export default productRouter
