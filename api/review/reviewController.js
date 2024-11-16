//import productModel from "../product/productModel.js";
import reviewModel from "./reviewModel.js";

// post a review
const postReview = async (req, res) => {
    try {
        const {comment, rating, productId, userId} = req.body;
        if (!comment || !rating || !productId || !userId) {
            res.status(400).send({message : "All fields required"});
        }
        const existingReview = await reviewModel.findOne({productId, userId});
        if (existingReview) {
            // update review
            existingReview.cpmment = comment;
            existingReview.rating = rating;
            await existingReview.save()
        } else {
            // create a review
            const newReview = new reviewModel({
                comment, rating, productId, userId
            })
            await newReview.save();
        }
        // calculate the avarage rating
        const reviews = await reviewModel.findOne({productId});
        if (reviews.length > 0) {
            const totalRating = reviews.reduce((acc, review) => acc + review.rating, 0)
            const averageRating = totalRating / reviews.length;
            const product = await productModel.findById(productId);
            if (product) {
                product.rating = averageRating;
                await product.save({validateBeforeSave : false});
            }else {
                return res.status(404).send({message : "Products not found"})
            }
        }
        res.status(201).send({message : "Review process sucessfully", reviews: reviews})
    } catch (error) {
        console.error("Error posting review", error );
        res.status(500).send({message : "Failed to post review"});
    }
}

export {postReview}