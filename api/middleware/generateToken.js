import jwt from 'jsonwebtoken';
import userModel from '../models/userModel.js';

const generateToken = async (userId) => {
    try {
        const user =  await userModel.findById(userId);
        if (!user) {
            throw new Error("User Not Found");            
        }
        const token = jwt.sign({userId:user._id}, process.env.JWT_SECRET_KEY, {expiresIn :"1h"});
        return token;
    } catch (error) { 
        console.error("Error fetching token", error);
    }
}

export default generateToken