import cookieParser from 'cookie-parser';
import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import connectCloudinary from './config/cloudinary.js';
import connectDB from './config/mongoDB.js';
import reviewRouter from './review/reviewRoutes.js';
import productRoutes from './routers/productsRoutes.js';
import userRoutes from './routers/userRoutes.js';
import adminRoutes from './routers/adminRoutes.js'
import cartRouter from './routers/cartRoutes.js';

// App config
const app = express();
const PORT = process.env.PORT || 5000
connectDB()
connectCloudinary()

/* Middlewares */
app.use(express.json({limit: "25mb"}))
app.use(express.urlencoded({limit: "25mb"}));
app.use(cookieParser());
app.use(cors({
     origin : [process.env.ADMIN_URL,
               process.env.CLIENT_URL],
     methods : ['GET', 'POST', 'PUT', 'DELETE'],
     allowedHeaders : [
                         "Content-Type",
                         "Authorization",
                         "Cache-Control",
                         "Expires",
                         "Pragma",
                         "Token"
                    ],
     credentials : true
}))



/* Api endpoints */
app.use('/api/user', userRoutes)
app.use('/api/product', productRoutes)
app.use('/api/cart', cartRouter)
app.use('/api/admin', adminRoutes)
app.use('/api/reviews', reviewRouter)


/* app listen */
app.listen(PORT, () => {
     console.log(`Server is listening on port: ${PORT}` );
})
