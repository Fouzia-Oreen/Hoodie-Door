import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';
import validator from 'validator';
import userModel from '../models/userModel.js';

// token for validating 
const createToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET_KEY)
}

// route for user - register
export const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        // checking if user with email exist
        const exists = await userModel.findOne({email});
        if (exists) {
            return res.status(500).json({
                        success: false,
                        message : "User with this email exists"
            })
        }
        // validate if the email & password is strong or not
        if (!validator.isEmail(email)) {
            return res.status(500).json({
                success: false,
                message : "Please enter a valid email"
            })
        }
        // if password is not strong
        if (password.length < 8) {
            return res.status(500).json({
                success: false,
                message : "Please enter a strong password"
            })
        }
        // hash the password for the new user
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)
        const newUser = new userModel({
            name, 
            email, 
            password:hashedPassword
        })
        const user = await newUser.save();
        // get the token from jwt
        const token = createToken(user._id)
        res.status(201).json({
            success: true,
            token,
            message : "Successfully Registered"
        })

    } catch (error) {
        console.error("Error Registering User", error);
        res.status(500).json({
            success: false,
            message : "Registeration unsuccessfull"
        })
    }
}

// route for user - login
export const loginUser = async (req, res) => {
   try {
    const {email, password} = req.body;
    // checking if user with email exist
    const user = await userModel.findOne({email});
    if (!user) {
        return res.status(500).json({
                    success: false,
                    message : "User doesn't exists"
                })
    }
    // if the user is matched wmwil
    const isMatch = await bcrypt.compare(password, user.password)
    if (isMatch) {
        const token = createToken(user._id);
        res.cookie('token', token, {
            httpOnly: true,
            secure : true,
            sameSite: "None"
        })
        res.status(201).json({
            success: true,
            token,
            message : "Login is successfull",
            // user: {
            //     _id:user._id,
            //     email:user.email,
            //     name:user.name,
            //     role: user.role,
            //     // profileImage: user.profileImage,
            //     // bio: user.bio,
            //     // profession: user.profession,
            //     createdAt: user.createdAt
            // }
        }) 
    } else {
        res.status(400).json({
            success: false,
            message : "Invalid Credentials"
        }) 
    }
   } catch (error) {
        console.error("Error Registering User", error);
        res.status(500).json({
            success: false,
            message : "Login unsuccessfull"
        })
   }
}

// admin login
export const adminLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
            const token = jwt.sign(email+password,process.env.JWT_SECRET_KEY);
            res.json({success: true, token})
        }else {
            res.json({success:false, message:"Invalid credentials"})
        }
    } catch (error) {
        console.error("Error admin login", error);
        res.status(500).json({
            success: false,
            message : "Error admin login"
        })
    }
}