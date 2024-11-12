import mongoose, { model } from 'mongoose';
import UserModel from '../user/auth/userModel.js'

const ProductSchema = new mongoose.Schema({
    name : { type: String,  required : true  },
    description : { type: String, required : true },
    price : { type: Number, required : true },
    oldPrice : { type: Number},
    color : { type: String },
    rating : { type: Number, default:0 },
    // image : { type: Array, required : true },
    image : { type: String, required : true },
    category : { type: String, required : true },
   // subCategory : { type: String, required : true },
    //sizes : { type: Array},
   // date : { type: Number, required : true },
    // bestseller : { type: Boolean },
    author: {type: mongoose.Schema.Types.ObjectId, ref: UserModel, required: true}
});

const productModel = mongoose.models.product || mongoose.model("product", ProductSchema);
export default productModel