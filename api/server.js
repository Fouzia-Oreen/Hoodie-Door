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

const app = express();
const PORT = process.env.PORT || 5000
connectDB()
connectCloudinary()

// URL credintials
const CLIENT_URL = process.env.CLIENT_URL;

/* Middlewares */
app.use(express.json({limit: "25mb"}))
app.use(express.urlencoded({limit: "25mb"}));
app.use(cookieParser());
app.use(cors({
     origin : ["http://localhost:5174",
               "http://localhost:5173"],
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
app.use((err, req, res, next) => {
     console.log(err.stack);
     res.status(500).json({
         success: false,
         message: "Something went wrong!"
     })
})


/* Routes */
app.get('/api', (req,res )=> {
 res.send("Api working")
})
//app.use('/api/auth', userRouter)
app.use('/api/user', userRoutes)
app.use('/api/product', productRoutes)
app.use('/api/admin', adminRoutes)
app.use('/api/reviews', reviewRouter)




/* app listen */
app.listen(PORT, () => {
     console.log(`Server is listening on port: ${PORT}` );
})
