import express from 'express';
import { addAdminProfile, updateAdminProfile } from '../controllers/adminController.js';
const adminRouter = express.Router()

/* user routes endpoints */
adminRouter.post('/profile', addAdminProfile );
adminRouter.put('/update-profile', updateAdminProfile );

export default adminRouter