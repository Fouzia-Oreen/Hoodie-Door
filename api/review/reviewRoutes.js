import express from 'express';
import { postReview } from './reviewController.js';
const reviewRouter = express.Router();

// post a new review
reviewRouter.post("/post-review", postReview);

export default reviewRouter;