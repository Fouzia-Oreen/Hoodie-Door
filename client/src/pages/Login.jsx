/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
//import { useRegisterUserMutation } from "../redux/features/auth/authApi";
// import { useDispatch } from "react-redux";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";



const Login = () => {
  const [currentState, setCurrentState] = useState('Login');
  const { token, setToken, navigate, backendUrl } = useContext(ShopContext);
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const onSubmitHandler = async (e) => {
      e.preventDefault();
      try {
        if (currentState === "Sign Up") {
          const response = await axios.post(backendUrl+'/api/user/register',{name,email,password});
          if (response.data.success) {
            setToken(response.data.token)
            localStorage.setItem('token', response.data.token)
          }else {
            toast.error(response.data.message)
          }
        }else {
          const response = await axios.post(backendUrl+'/api/user/login',{email,password});
          if (response.data.success) {
            setToken(response.data.token)
            localStorage.setItem('token', response.data.token)
          }else{
            toast.error(response.data.message)
          }
        }
      } catch (error) {
        console.log(error);
        toast.error(error.message)
      }
  }
  useEffect(() => {
    if (token) {
      navigate('/')
    }
  }, [token])
  

  return (
    <section className="h-screen flex items-center justify-center ">
      <div className="border-[1px] border-text-light  p-8 mx-auto rounded-sm bg-[#D1CFC5]">
        <div className="inline-flex items-center gap-2">
        <h2 className="text-2xl font-semibold pt-5">Please {currentState}</h2>
        <hr className="h-[3px] w-12 bg-text-dark mt-6"/>
        </div>

        <form 
        onSubmit={onSubmitHandler} 
        className="space-y-3 max-w-sm mx-auto mt-8 flex flex-col md:w-[450px]">

          {/* name */}
            { currentState === 'Login' ? "" : 
            <>
            <label className="font-medium">Name</label>
            <input 
            required
            type="text" 
            id="name" 
            name="name" 
            placeholder="Enter your name..." 
            value={name}
            onChange={(e)=> setName(e.target.value)}
            className="border-[1px] border-text-light py-2 px-3 rounded-sm outline-none focus:none placeholder:opacity-40 placeholder:text-text-dark bg-[#D1CFC5]" />
            </>}
          {/* email */}
            <label className="font-medium ">Email</label>
            <input 
            required
            type="email" 
            id="email" 
            name="email" 
            placeholder="Enter your email..." 
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            className="border-[1px] border-text-light py-2 px-3 rounded-sm outline-none focus:none placeholder:opacity-40 placeholder:text-text-dark bg-[#D1CFC5]" />

          {/* password */}
            <label className="font-medium ">Password</label>
            <input 
            type="password" 
            id="password" 
            name="password" 
            placeholder="Enter your password..." 
            required
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
            className="border-[1px] border-text-light py-2 px-3 rounded-sm focus:outline-none  placeholder:opacity-40 placeholder:text-text-dark bg-[#D1CFC5]" />
            {
                message && <p className="text-red-600">{message}</p>
            }
            <button 
            className="bg-accent py-2 font-semibold border-[1px] border-text-dark">{currentState === 'Login' ? "Sign In" : "Sign Up"}</button>
            <div className="w-full flex justify-between text-sm gap-4">
              <p>Forgot your password</p>
              {
                currentState === 'Login' ? 
                <p onClick={() => setCurrentState('Sign Up')} 
                   className=" cursor-pointer text-accent underline italic">Create account
                </p> : 
                <p onClick={() => setCurrentState('Login')} 
                   className="text-accent underline italic cursor-pointer">Login here
                </p>
              }
            </div>
        </form>
      </div>
    </section>
  )
}

export default Login

