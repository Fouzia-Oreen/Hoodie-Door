import mongoose from 'mongoose';

const AdminSchema = new mongoose.Schema({
    name : { type: String, required : true },
    email : { type: String, required : true, unique : true },
    image : String,
    profession: String,
    bio : { type : String, maxLength: 200} ,
    birthday : { type : Date, default : Date.now },
    role : String, 
},{minimize:false})

const adminModels = mongoose.models.admin || mongoose.model("Admin", AdminSchema);
export default adminModels;