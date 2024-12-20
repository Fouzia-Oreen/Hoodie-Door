import mongoose, { model } from 'mongoose';

const ProductSchema = new mongoose.Schema({
    name : { type: String,  required : true  },
    description : { type: String, required : true },
    price : { type: Number, required : true },
    oldPrice : { type: Number , required : true},
    colors : { type: Array },
    rating : { type: Number, default: 0 },    
    image : { type: Array, required : true },
    category : { type: String, required : true },
    subCategory : { type: String, required : true },
    sizes : { type: Array},
    date : { type: Number, required : true },
    bestseller : { type: Boolean },
    onSale : { type: Boolean },
});

const productModels = mongoose.models.product || mongoose.model("Product", ProductSchema)
export default productModels;