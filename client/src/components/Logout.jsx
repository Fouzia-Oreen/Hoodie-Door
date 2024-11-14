// import { Link, useNavigate } from "react-router-dom";
// import { useLogoutUserMutation } from '../redux/features/auth/authApi';
// import { useDispatch } from 'react-redux';
// import { logout } from '../redux/features/auth/authSlice';

// const Logout = () => {
//     const dispatch = useDispatch();
//     // logout user function
//     const [logoutUser] = useLogoutUserMutation();
//     const navigate = useNavigate()
//     // handle-logout function
//     const handleLogout = async () => {
//         try {
//             await logoutUser().unwrap();
//             dispatch(logout());
//             navigate('/')
//         } catch (error) {
//         console.error("Failed to log out", error)
//         }
//     }

//   return (
//     <Link onClick={handleLogout} className="dropdrop-items">
//         Logout
//     </Link>
//   )
// }

// export default Logout
