import { v2 as cloudinary } from 'cloudinary';
import productModel from '../models/productModel.js';

// add product 
const addProduct = async (req, res) => {
    try {
        const {name, description, price, oldPrice, category, subCategory, sizes, colors, bestseller, onSale, rating} = req.body;
        const image1 = req.files.image1 && req.files.image1[0]
        const image2 = req.files.image2 && req.files.image2[0]
        const image3 = req.files.image3 && req.files.image3[0]
        const image4 = req.files.image4 && req.files.image4[0]

        const images = [image1,image2,image3,image4].filter((item) => item != undefined);
        let imagesUrl = await Promise.all(
            images.map(async (item) => {
                let result = await cloudinary.uploader.upload(item.path,{resourse_type: 'image'});
                return result.secure_url
            })
        )
        const productData = {
            name, 
            description, 
            price: Number(price), 
            oldPrice: Number(oldPrice), 
            rating,
            category,          
            subCategory, 
            sizes : JSON.parse(sizes), 
            colors: JSON.parse(colors),
            bestseller: bestseller === "true" ? true : false,
            onSale: onSale === "true" ? true : false,
            image : imagesUrl,
            date: Date.now()
        }
        // console.log(productData)
        const product = new productModel(productData);
        await product.save()

        res.status(201).json({success: true, message:"Product added"})
    } catch (error) {
        console.error("Failed to add a new product", error );
        res.status(500).send({message : "Failed to add a new product"});
    }
}
// get all products
const listProduct = async (req, res) => {
    try {
        const products = await productModel.find({})
        res.status(201).json({success:true, products})

    } catch (error) {
        console.error("Error fetching products", error );
        res.status(500).send({message : "Error fetching products"});
    }
}
// get product by id product
const singleProduct = async (req, res) => {
    try {
        const { productId } = req.body

        const product = await productModel.findById(productId)
        console.log( product)
        res.status(201).json({success:true, product});

    } catch (error) {
        console.error("Error fetching product", error );
        res.status(500).send({message : "Failed to fetch product"});
    }
}
// update product update
const updateProduct = async (req, res) => {
    try {
        const { productId } = req.body
        const updatedProduct = await productModel.findByIdAndUpdate(productId, {...req.body}, {new: true})
        res.status(201).json({success:true, updatedProduct});

    } catch (error) {
        console.error("Error fetching product", error );
        res.status(500).send({message : "Failed to fetch product"});
    }
}
// remove product
const removeProduct = async (req, res) => {
    try {
        await productModel.findByIdAndDelete(req.body.id);
        res.json({success:true, message: "Product deleted successfull"})
    } catch (error) {
        console.error("Error deleting product", error );
        res.status(500).send({message : "Failed to delete the product"});
    }
}



export { addProduct, listProduct, removeProduct, singleProduct, updateProduct };

