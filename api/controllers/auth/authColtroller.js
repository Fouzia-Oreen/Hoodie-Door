import bcryptjs from "bcryptjs";
import jwt from 'jsonwebtoken';
import User from '../../models/UserModel.js'

// register
export const registerUser = async (req, res) => {
    const {username, email, password} = req.body
    try {
        const hashedPassword = await bcryptjs.hash(password, 12)
        const newUser = new User({
            username, email, password:hashedPassword
        })
        await newUser.save()
        res.status(200).json({
            success: true,
            message : "Successfully Registered"
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message : "Registeration unsuccessfull"
        })
        
    }
    
}
// login
export const loginUser = async (req, res) => {
    const { email, password} = req.body
    try {
        res.status(200).json({
            success: true,
            message : "Successfully LoggedIn"
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message : "Login unsuccessfull"
        })
        
    }
    
}
// logout
// auth-middleware