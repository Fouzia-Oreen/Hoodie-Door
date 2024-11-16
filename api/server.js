import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import connectCloudinary from './config/cloudinary.js';
import reviewRouter from './review/reviewRoutes.js';
import connectDB from './config/mongoDB.js';
import userRoutes from './routers/userRoutes.js';
import productRoutes from './routers/productsRoutes.js';

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
app.get('/api', (req,res )=> {
 res.send("Api working")
})
//app.use('/api/auth', userRouter)
app.use('/api/user', userRoutes)
app.use('/api/product', productRoutes)
app.use('/api/reviews', reviewRouter)



/* app listen */
app.listen(PORT, () => {
     console.log(`Server is listening on port: ${PORT}` );
})
