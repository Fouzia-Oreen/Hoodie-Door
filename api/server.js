import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import express from 'express';
import mongoose from 'mongoose';
import authRouter from './routes/auth/authRoutes.js';
const app = express()
dotenv.config();



// URL credintials
const PORT = process.env.PORT 
const MONGO_URI = "mongodb+srv://hoodieDoor:4kO9BviSIuVEZfln@cluster0.72avj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const Mongo_URI = process.env.MONGO_URL
const CLIENT_URL = process.env.CLIENT_URL;


mongoose.connect(MONGO_URI)
.then(() => console.log('mongodb is connected'))
.catch((error) => console.log(error));

app.use(cookieParser());
app.use(express.json())
app.use(
     cors({
          origin : process.env.CLIENT_URL,
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



// routes
app.use('/api/auth', authRouter)

// middleware
app.use((err, req, res, next) => {
     console.log(err.stack);
     res.status(500).json({
         success: false,
         message: "Something went wrong!"
     })
 })

app.listen(PORT, () => {
     console.log(`Server is listening on port: ${PORT}` );
})
