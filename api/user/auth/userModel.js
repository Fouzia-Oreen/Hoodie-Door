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
    },
    profileImage : String,
    profession: String,
    bio : {
        type : String,
        maxLength: 200,
        profession: String
    },
    createdAt : {
        type : Date,
        default : Date.now
    },
    cartData: {
        type: Object, 
        default: {}
    }
},{minimize:false})

const UserModel = mongoose.models.user || mongoose.model("user", UserSchema);
export default UserModel