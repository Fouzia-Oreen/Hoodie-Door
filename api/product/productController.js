import reviewModel from "../review/reviewModel.js";
import productModel from "./productModel.js"

// add product 
const addProduct = async (req, res) => {
    try {
        const newProduct = new productModel({...req.body})
        const savedProduct = await newProduct.save();
        // calculate reviews
        const reviews = await reviewModel.find({productId: savedProduct._id});
        if (reviews.length > 0) {
            const totalRating = reviews.reduce((acc, review) => acc + review.rating, 0);
            const averageRating = totalRating / reviews.length;
            savedProduct.rating = averageRating;
            await savedProduct.save();
        };

        res.status(201).send(savedProduct);
    } catch (error) {
        console.error("Failed to add a new product", error );
        res.status(500).send({message : "Failed to add a new product"});
    }
}
// get all products
const getAllProduct = async (req, res) => {
    try {
        const {category, color, minPrice, maxPrice ,page = 1, limit = 10} = req.query;
        let filter = {};
        // filter by category
        if (category && category != "all") {
            filter.category = category
        }
        // filter by color
        if (color && color != "all") {
            filter.category = color
        }
        // filter by price
        if (minPrice && maxPrice ) {
            const min = parseFloat(minPrice);
            const max = parseFloat(maxPrice);
            if (!isNaN(min) && !isNaN(max)) {
                filter.price = { $gte:min, $lte:max}
            }
        }
        // pages
        const skip = (parseInt(page) - 1) * parseInt(limit);
        const totalProducts = await productModel.countDocuments(filter);
        const totalPages = Math.ceil(totalProducts / parseInt(limit))
        const products = await productModel.find(filter).skip(skip).limit(parseInt(limit)).populate("author", "email").sort({ createdAt : -1});

        res.status(201).send({products, totalPages, totalProducts});
        // console.log(products, totalPages, totalProducts)
    } catch (error) {
        console.error("Error fetching products", error );
        res.status(500).send({message : "Error fetching products"});
    }
}
// get product by id product
const getProductById = async (req, res) => {
    try {
        const productId = req.params.id;
        const product = await productModel.findById(productId).populate('author', "email username");
        if (!product) {
            res.status(404).send({message : "Product not found!"});
        }
        const reviews = await reviewModel.find({productId}).populate('author', "email username");
        res.status(201).send({product, reviews});

    } catch (error) {
        console.error("Error fetching product", error );
        res.status(500).send({message : "Failed to fetch product"});
    }
}
// single product update
const updateProduct = async (req, res) => {
    try {
        const productId = req.params.id;
        const updatedProduct = await productModel.findByIdAndUpdate(productId, {...req.body}, {new: true})
        if (!updatedProduct) {
            return res.status(404).send({message: "Product not found"})
        }
        res.status(201).send({message: "Product updated successfull", product: updatedProduct})
    } catch (error) {
        console.error("Error updating product", error );
        res.status(500).send({message : "Failed to update the product"});
    }
}
// remove product
const removeProduct = async (req, res) => {
    try {
        const productId = req.params.id;
        const deletedProduct = await productModel.findByIdAndDelete(productId)
        if (!deletedProduct) {
            return res.status(404).send({message: "Product not found"})
        }
        // delete reviews of that product
        await reviewModel.deleteMany({productId: productId})
        res.status(201).send({message: "Product deleted successfull", product: deletedProduct})
    } catch (error) {
        console.error("Error deleting product", error );
        res.status(500).send({message : "Failed to delete the product"});
    }
}
// related-product
const getRelatedProduct = async (req, res) => {
    try {
        const {id} = req.params;
        if (!id) {
            return res.status(404).send({message: "Product not found"})
        }
        const product = await productModel.findById(id);
        if (!product) {
            return res.status(404).send({message: "Product not found"})
        }
        const titleRegex = new RegExp(
            product.name
            .split(" ")
            .filter((word) => word.length > 1)
            .join("|"), 
        "i");
        const relatedProducts = await productModel.find({
            _id: {$ne: id},
            $or: [
                {name : {$regex: titleRegex}},
                {category: product.category}
            ]
        });
        res.status(201).send(relatedProducts)
    } catch (error) {
        console.error("Error fetching related products product", error );
        res.status(500).send({message : "Failed to fetch related products"});
    }
}


export {addProduct, removeProduct, getProductById , updateProduct, getAllProduct, getRelatedProduct}