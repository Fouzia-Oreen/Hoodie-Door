/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterUserMutation } from "../redux/features/auth/authApi";
import { useDispatch } from "react-redux";

const Register = () => {
  const [message, setMessage] = useState('');
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [registerUser, {isLoading}] = useRegisterUserMutation();

  const handleRegister = async (e) => {
      e.preventDefault();
      const data = { username, email, password } 
      try {
        const response = await registerUser(data).unwrap();       
        navigate('/login')    
      } catch (error) {
        setMessage("Please provide a valid name, email & password")
      }
  }

  return (
    <section className="h-screen flex items-center justify-center ">
      <div className="border-[1px] border-text-light  p-8 mx-auto rounded-sm bg-primary-light">
        <h2 className="text-2xl font-semibold pt-5">Please Register</h2>
        <form 
        onSubmit={handleRegister} 
        className="space-y-3 max-w-sm mx-auto mt-8 flex flex-col">

          {/* name */}
            <label htmlFor="">Name</label>
            <input 
            required
            type="text" 
            id="name" 
            name="username" 
            placeholder="Enter your name..." 
            onChange={(e)=> setUserName(e.target.value)}
            className="border-[1px] border-text-light py-2 px-3 rounded-sm outline-none focus:none placeholder:opacity-40 placeholder:text-text-dark bg-primary-light" />
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

          {/* password */}
            <label htmlFor="">Password</label>
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
            <span className="text-sm flex gap-1"> Have an account ? Please<Link to="/login" className="text-accent underline italic">Login</Link>here</span>
        </form>
      </div>
    </section>
  )
}

export default Register
