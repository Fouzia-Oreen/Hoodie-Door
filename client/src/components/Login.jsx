/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "../redux/features/auth/authApi";
import { setUser } from "../redux/features/auth/authSlice";

const Login = () => {
    const [message, setMessage] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()
    // from authApi
    const dispatch = useDispatch();
    const [loginUser, {isLoading: loginLoading}] = useLoginUserMutation()
  
    const handleLogin = async (e) => {
        e.preventDefault();
        const data = { email, password } 
        try {
          const response = await loginUser(data).unwrap();
          const {token, user} = response;
          dispatch(setUser({user}))
          navigate('/')
          
        } catch (error) {
          setMessage("Please provide a valid email & password")
        }
    }

  return (
    <section className="h-screen flex items-center justify-center ">
      <div className="border-[1px] border-text-light  p-8 mx-auto rounded-sm bg-primary-light">
        <h2 className="text-2xl font-semibold pt-5">Please Login</h2>
        <form 
        onSubmit={handleLogin} 
        className="space-y-3 max-w-sm mx-auto mt-8 flex flex-col">
          {/* email */}
            <label htmlFor="">Email</label>
            <input 
            required
            type="email" 
            id="email" 
            name="email" 
            placeholder="Enter your email..." 
            onChange={(e)=> setEmail(e.target.value)}
            className="border-[1px] border-text-light py-2 px-3 rounded-sm outline-none focus:none placeholder:opacity-40 placeholder:text-text-dark bg-primary-light" />
            <label htmlFor="">Password</label>
          {/* password */}
            <input 
            type="password" 
            id="password" 
            name="password" 
            placeholder="Enter your password..." 
            required
            onChange={(e)=> setPassword(e.target.value)}
            className="border-[1px] border-text-light py-2 px-3 rounded-sm focus:outline-none  placeholder:opacity-40 placeholder:text-text-dark bg-primary-light" />
            {
                message && <p className="text-red-600">{message}</p>
            }
            <button 
            className="bg-accent py-2 font-semibold border-[1px] border-text-dark">Login</button>
            <span className="text-sm flex gap-1">Don&apos;t have an account ?<Link to="/register" className="text-accent underline italic">Register</Link>here</span>
        </form>
      </div>
    </section>
  )
}

export default Login
