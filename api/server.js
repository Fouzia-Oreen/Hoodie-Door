import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.require
const app = express()
const PORT = process.env.PORT;
const Mongodb = process.env.MONGO_URI

mongoose.connect(Mongodb)
.then(() => ("Mongodb connected"))
.catch((error) => console.log(error))

app.use(cookieParser());
app.use(express.json())
app.use(
     cors({
          origin : "http://localhost:5173/",
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

app.listen(PORT, () => {
     console.log(`Server is listening on port: ${PORT}`);
})
