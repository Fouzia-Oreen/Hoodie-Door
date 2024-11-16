import {v2 as cloudinary} from 'cloudinary'
import productModel from '../models/productModel.js';


// add product 
const addProduct = async (req, res) => {
    try {
        const {name, description, price, oldPrice, category, subCategory, color, rating, sizes, bestseller} = req.body;
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
            rating: Number(rating), 
            category, 
            subCategory, 
            color : JSON.parse(color), 
            sizes : JSON.parse(sizes), 
            bestseller: bestseller === "true" ? true : false,
            image : imagesUrl,
            date: Date.now()
        }
        console.log(productData)
        const product = new productModel(productData);
        await product.save()

        // ------- calculate reviews --------- //
        // const reviews = await Reviews.find({productId: savedProduct._id});
        // if (reviews.length > 0) {
        //     const totalRating = reviews.reduce((acc, review) => acc + review.rating, 0);
        //     const averageRating = totalRating / reviews.length;
        //     savedProduct.rating = averageRating;
        //     await savedProduct.save();
        // };

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
        // const {category, color, minPrice, maxPrice ,page = 1, limit = 10} = req.query;
        // let filter = {};
        // // filter by category
        // if (category && category != "all") {
        //     filter.category = category
        // }
        // // filter by color
        // if (color && color != "all") {
        //     filter.category = color
        // }
        // // filter by price
        // if (minPrice && maxPrice ) {
        //     const min = parseFloat(minPrice);
        //     const max = parseFloat(maxPrice);
        //     if (!isNaN(min) && !isNaN(max)) {
        //         filter.price = { $gte:min, $lte:max}
        //     }
        // }
        // // pages
        // const skip = (parseInt(page) - 1) * parseInt(limit);
        // const totalProducts = await productModel.countDocuments(filter);
        // const totalPages = Math.ceil(totalProducts / parseInt(limit))
        // const products = await productModel.find(filter).skip(skip).limit(parseInt(limit)).populate("author", "email").sort({ createdAt : -1});

        // res.status(201).send({products, totalPages, totalProducts});
        // console.log(products, totalPages, totalProducts)

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
        // if (!product) {
        //     res.status(404).send({message : "Product not found!"});
        // }
        // const reviews = await Reviews.find({productId}).populate('author', "email username");
        //res.status(201).send({product, reviews});
        res.status(201).json({success:true, product});

    } catch (error) {
        console.error("Error fetching product", error );
        res.status(500).send({message : "Failed to fetch product"});
    }
}
// single product update
const updateProduct = async (req, res) => {
    // try {
    //     const productId = req.params.id;
    //     const updatedProduct = await productModel.findByIdAndUpdate(productId, {...req.body}, {new: true})
    //     if (!updatedProduct) {
    //         return res.status(404).send({message: "Product not found"})
    //     }
    //     res.status(201).send({
    //                     message: "Product updated successfull", 
    //                     product: updatedProduct
    //                 })
    // } catch (error) {
    //     console.error("Error updating product", error );
    //     res.status(500).send({message : "Failed to update the product"});
    // }
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

// related-product
const getRelatedProduct = async (req, res) => {
    // try {
    //     const {id} = req.params;
    //     if (!id) {
    //         return res.status(404).send({message: "Product not found"})
    //     }
    //     const product = await productModel.findById(id);
    //     if (!product) {
    //         return res.status(404).send({message: "Product not found"})
    //     }
    //     const titleRegex = new RegExp(
    //         product.name
    //         .split(" ")
    //         .filter((word) => word.length > 1)
    //         .join("|"), 
    //     "i");
    //     const relatedProducts = await productModel.find({
    //         _id: {$ne: id}, //Exclude the current product
    //         $or: [
    //             {name : {$regex: titleRegex}}, // Match similar names
    //             {category: product.category}, // Match the same category
    //         ]
    //     });
    //     res.status(201).send(relatedProducts)
    // } catch (error) {
    //     console.error("Error fetching related products product", error );
    //     res.status(500).send({message : "Failed to fetch related products"});
    // }
}


export { addProduct, getRelatedProduct, listProduct, removeProduct, singleProduct, updateProduct };

