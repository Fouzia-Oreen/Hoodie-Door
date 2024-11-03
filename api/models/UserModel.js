import mongoose, { model } from 'mongoose'

const UserSchema = new mongoose.Schema({
    username : {
        type: String,
        required : true,
        unique : true
    },
    email : {
        type: String,
        required : true,
        unique : true
    },
    password : {
        type: String,
        required : true,
        unique : true
    },
    role : {
        type: String,
        default : "user"
    }
})

const User = mongoose.model("User", UserSchema)
export default User