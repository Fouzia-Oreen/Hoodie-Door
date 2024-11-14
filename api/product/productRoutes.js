import express from 'express';
import verifyToken from '../user/middleware/verifyToken.js';
import { addProduct, getAllProduct, getProductById, getRelatedProduct, removeProduct, updateProduct } from './productController.js';
import verifyAdmin from '../user/middleware/verifyAdmin.js';
const productRouter = express.Router()

/* register endpoints */
// create or add product
productRouter.post('/add-product', addProduct );
// get or list all products
productRouter.get('/', getAllProduct );
// get single product by id
productRouter.get('/:id', getProductById)
// update a product
productRouter.patch('/update-product/:id',verifyToken, verifyAdmin, updateProduct)
// delete product
productRouter.delete('/:id', removeProduct)
// get related products
productRouter.get('/related/:id', getRelatedProduct)



export default productRouter
