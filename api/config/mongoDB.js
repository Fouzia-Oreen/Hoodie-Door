import mongoose from "mongoose";

const connectDatabase = async () => {
    mongoose.connection.on('connected', () => {
        console.log('Databese connected')
    })
    await  mongoose.connect(`${process.env.MONGO_URL}/hoodie-door`)
}

export default connectDatabase