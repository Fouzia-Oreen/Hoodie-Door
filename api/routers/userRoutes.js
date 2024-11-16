import express from 'express';
import { adminLogin, loginUser, registerUser } from '../controllers/userControllers.js';
const userRouter = express.Router()

/* user routes endpoints */
userRouter.post('/register', registerUser );
userRouter.post('/login', loginUser);
userRouter.post('/admin', adminLogin);
// userRouter.post('/logout', logoutUser);
// userRouter.delete('/users/:id', deleteUser);
// userRouter.get('/users', getAllUser);
// userRouter.put('/users/:id', updateUserRole);
// userRouter.patch('/edit-profile', updateUserProfile);

export default userRouter;