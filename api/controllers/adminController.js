//import {v2 as cloudinary} from 'cloudinary'
import adminModel from '../models/adminModel.js';


// add product 
const addAdminProfile = async (req, res) => {
    try {
        const {name, email, birthday, profession, bio} = req.body;
        const image = req.files.image && req.files.image[0]

        // let result = await cloudinary.uploader.upload(item.path,{resourse_type: 'image'})
        // return result.secure_url
            
        
        const adminData = {
            name, 
            email, 
            birthday: Number(birthday), 
            profession, 
            bio, 
            image ,
        }
        console.log(adminData)
        const admin = new adminModel(adminData);
        await admin.save()

        res.status(201).json({success: true, message:"Admin added"})
    } catch (error) {
        console.error("Failed to add a new admin", error );
        res.status(500).send({message : "Failed to add a new admin"});
    }
}

const updateAdminProfile = async (req, res) => {
    const admin = await adminModel.findById(req.admin._id)
    if (admin) {
        admin.name = req.body.name || admin.name;
        admin.email = req.body.email || admin.email;
        if (req.body.password) {
            admin.password = req.body.password;
        }
        const updatedUser = await admin.save()
        res.json({
            _id: updatedAdmin._id,
            username: updatedAdmin.name,
            email: updatedAdmin.email,
            isAdmin: updatedAdmin.isAdmin,
        })
    } else {
        res.status(400)
        throw new Error("User Not Found");
    }
}

export { addAdminProfile, updateAdminProfile };



// update profile
// export const updateUserProfile = async (req, res) => {
//     try {
//         const {userId, username, profileImage, bio, profession} = req.body;
//         if (!userId) {
//             return res.status(400).send({message : "User Id is required"})
//         }
//         const user = await User.findById(userId);
//         if (!user) {
//             return res.status(400).send({message : "User not found"})
//         }
//         // update profile
//         if (username != undefined) user.username = username;
//         if (profileImage != undefined) user.profileImage = profileImage;
//         if (bio != undefined) user.bio = bio;
//         if (profession != undefined) user.profession = profession;
//         await user.save(); 
//         res.status(200).send({message: "User Profile updated successfully", user : {
//             _id:user._id,
//             email:user.email,
//             username:user.username,
//             role: user.role,
//             profileImage: user.profileImage,
//             bio: user.bio,
//             profession: user.profession,
//             createdAt: user.createdAt
//         }})

//     } catch (error) {
//         console.error("Error updating User Profile", error);
//         res.status(500).json({
//             success: false,
//             message : "Error updating User Profile"
//         })
//     }
// }

// export const adminLogin = async (req, res) => {
//     try {
//         const { email, password } = req.body;
//         if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
//             const token = jwt.sign(email+password,process.env.JWT_SECRET_KEY);
//             res.json({success: true, token})
//         }else {
//             res.json({success:false, message:"Invalid credentials"})
//         }
//     } catch (error) {
//         console.error("Error admin login", error);
//         res.status(500).json({
//             success: false,
//             message : "Error admin login"
//         })
//     }
// }