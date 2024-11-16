import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    name : { type: String, required : true },
    email : { type: String, required : true, unique : true },
    password : { type: String, required : true },
    // role : { type: String, default : "user"},
    // profileImage : String,
    // profession: String,
    // bio : { type : String, maxLength: 200, profession: String },
    createdAt : { type : Date, default : Date.now },
    cartData: { type: Object,  default: {}}
},{minimize:false})

const userModels = mongoose.models.user || mongoose.model("User", UserSchema);
export default userModels;