import express from 'express';
import { loginUser, registerUser } from '../../controllers/auth/authColtroller.js';
const router = express.Router()

// router.get((req,res) => {
//     res.status(200).json({
//         success: true,
//         message : "Successfully testing"
//     })
// })
router.post('/register', registerUser)
router.post('/login', loginUser)




export default router
