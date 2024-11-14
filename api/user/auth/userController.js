import bcrypt from "bcryptjs";
import validator from 'validator';
import  generateToken  from "../middleware/generateToken.js";
import User from './userModel.js';


// route for user - register
export const registerUser = async (req, res) => {
   
    try {
        const {username, email, password} = req.body;
        // checking if user with email exist
        const exists = await User.findOne({email});
        if (exists) {
            return res.status(500).json({
                        success: false,
                        message : "User with this email exists"
                    })
        }
        // if the email & password is strong 
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
        const newUser = new User({
            username, 
            email, 
            password:hashedPassword
        })
        const user = await newUser.save();
        // get the token from jwt
        const token = generateToken(user._id)
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
    const user = await User.findOne({email});
    if (!user) {
        return res.status(500).json({
                    success: false,
                    message : "User doesn't exists"
                })
    }
    // if the user is matched wmwil
    const isMatch = await bcrypt.compare(password, user.password)
    if (isMatch) {
        const token = await generateToken(user._id);
        res.cookie('token', token, {
            httpOnly: true,
            secure : true,
            sameSite: "None"
        })
        res.status(201).json({
            success: true,
            token,
            message : "Login is successfull",
            user: {
                _id:user._id,
                email:user.email,
                username:user.username,
                role: user.role,
                profileImage: user.profileImage,
                bio: user.bio,
                profession: user.profession,
                createdAt: user.createdAt
            }
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

// route for logout
export const logoutUser = async (req, res) => {
    res.clearCookie('token');
    res.status(200).send({
        message: "Successfully logged-out"
    })
}

// delete-user
export const deleteUser = async (req, res) => {
    try {
        const {id} = req.params;
        const user = await User.findByIdAndDelete(id);
        if (!user) {
            return res.status(404).send({
                message: "User not found"
            })
        }
        res.status(200).send({ message: "User deleted successfully" })
    } catch (error) {
        console.error("Error Deleting User", error);
        res.status(500).json({
            success: false,
            message : "Error Deleting User"
        }) 
    }
}

// get-all-user
export const getAllUser = async (req, res) => {
    try {
        const users = await User.find({}, 'id email role').sort({createdAt: -1});
        res.status(200).send(users)
    } catch (error) {
        console.error("Error Fetching User", error);
        res.status(500).json({
            success: false,
            message : "Error Fetching User"
        })
    }
}

// update user role
export const updateUserRole = async (req, res) => {
    try {
        const {id} = req.params;
        const {role} = req.body;
        const user = await User.findByIdAndUpdate(id, {role}, {new: true});
        if (!user) {
            return res.status(404).send({message : "User not found"})
        }
        res.status(200).send({message: "User role is updated successfully", user})
    } catch (error) {
        console.error("Error updating User Role", error);
        res.status(500).json({
            success: false,
            message : "Error updating User Role"
        })
    }
}

// update profile
export const updateUserProfile = async (req, res) => {
    try {
        const {userId, username, profileImage, bio, profession} = req.body;
        if (!userId) {
            return res.status(400).send({message : "User Id is required"})
        }
        const user = await User.findById(userId);
        if (!user) {
            return res.status(400).send({message : "User not found"})
        }
        // update profile
        if (username != undefined) user.username = username;
        if (profileImage != undefined) user.profileImage = profileImage;
        if (bio != undefined) user.bio = bio;
        if (profession != undefined) user.profession = profession;
        await user.save(); 
        res.status(200).send({message: "User Profile updated successfully", user : {
            _id:user._id,
            email:user.email,
            username:user.username,
            role: user.role,
            profileImage: user.profileImage,
            bio: user.bio,
            profession: user.profession,
            createdAt: user.createdAt
        }})

    } catch (error) {
        console.error("Error updating User Profile", error);
        res.status(500).json({
            success: false,
            message : "Error updating User Profile"
        })
    }
}