import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import connectCloudinary from './config/cloudinary.js';
import connectDB from './config/mongoDB.js';
import cartRouter from './routers/cartRoutes.js';
import orderRouter from './routers/orderRoutes.js';
import productRoutes from './routers/productsRoutes.js';
import userRoutes from './routers/userRoutes.js';

// App config
const app = express();
const PORT = process.env.PORT || 5000
connectDB()
connectCloudinary()

/* Middlewares */
app.use(express.json())
app.use(cors())

/* Api endpoints */
app.use('/api/user', userRoutes)
app.use('/api/product', productRoutes)
app.use('/api/cart', cartRouter)
app.use('/api/order', orderRouter)

// testing app
app.get('/', (req, res) => res.send("API Working"))

/* app listen */
app.listen(PORT, () => {
     console.log(`Server is listening on port: ${PORT}` );
})
