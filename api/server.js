import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './user/auth/userRoutes.js';
import productRouter from './product/productRoutes.js';

dotenv.config();
const app = express();
connectCloudinary()

// URL credintials
const PORT = process.env.PORT 
const MONGO_URI = process.env.MONGODB_URL
const CLIENT_URL = process.env.CLIENT_URL;


/* initializing mongodb */
async function main() {
   await  mongoose.connect(MONGO_URI)
}
     main()
     .then(() => console.log('mongodb is connected'))
     .catch((error) => console.log(error));


/* Middlewares */
app.use(express.json({limit: "25mb"}))
app.use(express.urlencoded({limit: "25mb"}));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use(
     cors({
          origin : "http://localhost:5173",
          methods : ['GET', 'POST', 'PUT', 'DELETE'],
          allowedHeaders : [
               "Content-Type",
               "Authorization",
               "Cache-Control",
               "Expires",
               "Pragma"
          ],
          credentials : true
    })
)
app.use((err, req, res, next) => {
     console.log(err.stack);
     res.status(500).json({
         success: false,
         message: "Something went wrong!"
     })
})


/* Routes */
app.use('/api/auth', userRouter)
app.use('/api/shop', productRouter)



/* app listen */
app.listen(PORT, () => {
     console.log(`Server is listening on port: ${PORT}` );
})
