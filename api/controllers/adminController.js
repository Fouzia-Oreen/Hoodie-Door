import {v2 as cloudinary} from 'cloudinary'
import adminModel from '../models/adminModel.js';


// add product 
const addAdminProfile = async (req, res) => {
    try {
        const {name, email, birthday, profession, bio} = req.body;
        const image = req.files.image && req.files.image[0]

        let imagesUrl = await Promise.all(
            image.map(async (item) => {
                let result = await cloudinary.uploader.upload(item.path,{resourse_type: 'image'});
                return result.secure_url
            })
        )
        const productData = {
            name, 
            email, 
            birthday: Number(birthday), 
            profession, 
            bio, 
            image : imagesUrl,

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

const updateProfile = async (req, res) => {}

export { addAdminProfile, updateProfile };
