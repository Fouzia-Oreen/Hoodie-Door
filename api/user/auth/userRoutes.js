import express from 'express';
import { deleteUser, getAllUser, loginUser, logoutUser, registerUser, updateUserProfile, updateUserRole } from '../../user/auth/userController.js';
const userRouter = express.Router()


/* register endpoints */
userRouter.post('/register', registerUser );
userRouter.post('/login', loginUser);
userRouter.post('/logout', logoutUser);
userRouter.delete('/users/:id', deleteUser);
userRouter.get('/users', getAllUser);
userRouter.put('/users/:id', updateUserRole);
userRouter.patch('/edit-profile', updateUserProfile);





export default userRouter
