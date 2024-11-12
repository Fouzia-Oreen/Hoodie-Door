import mongoose from 'mongoose';
import productModel from '../product/productModel.js';
import UserModel from '../user/auth/userModel.js';

const ReviewSchema = new mongoose.Schema({
    comment : { type: String,  required : true  },
    rating : { type: Number, required : true },
    userId : { type: mongoose.Schema.Types.ObjectId, ref: UserModel, required : true },
    productId : { type: mongoose.Schema.Types.ObjectId, ref: productModel, required : true },
}, {timestamps : true});

const reviewModel = mongoose.models.product || mongoose.model("review", ReviewSchema);
export default reviewModel