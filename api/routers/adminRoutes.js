import express from 'express';
import { addAdminProfile, updateProfile } from '../controllers/adminController.js';
const adminRouter = express.Router()

/* user routes endpoints */
adminRouter.post('/profile', addAdminProfile );
adminRouter.post('/update-profile', updateProfile );

export default adminRouter