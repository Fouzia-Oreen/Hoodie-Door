/* eslint-disable react/prop-types */
import axios from 'axios';
import { useState } from "react";
import { backendUrl } from '../App';
import { toast } from 'react-toastify';

const Login = ({setToken}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const onSubmitHandler = async (e) => {
        try {
            e.preventDefault();
            const response = await axios.post(backendUrl+"/api/user/admin",{email, password});
            if (response.data.success) {
              setToken(response.data.token)
            }
            else {
              toast.error(response.data.massage)
            }
        } catch (error) {
            console.log(error);
            toast.error(error.massage)
        }

    }

  return (
    <section className="h-screen flex items-center justify-center section__container">
    <div className="border-[1px] border-text-light  p-8 mx-auto rounded-sm bg-[#D1CFC5] flex flex-col items-center">
      <h1 className="text-2xl font-semibold pt-5">Admin Panel</h1>
      <form onSubmit={onSubmitHandler} className="space-y-3 max-w-sm mx-auto mt-8 flex flex-col md:w-[450px]">
        <div className='flex flex-col gap-2'>
            <label className="font-medium ">Email</label>
            <input onChange={(e) => setEmail(e.target.value)} value={email} className="border-[1px] border-text-light py-2 px-3 rounded-sm outline-none focus:none placeholder:opacity-40 placeholder:text-text-dark bg-[#D1CFC5]" type="email" placeholder='your@gmail.com' required/>
        </div>
        <div className='flex flex-col gap-2'>
            <label className="font-medium ">Password</label>
            <input onChange={(e) => setPassword(e.target.value)} value={password} className="border-[1px] border-text-light py-2 px-3 rounded-sm outline-none focus:none placeholder:opacity-40 placeholder:text-text-dark bg-[#D1CFC5]" type="password" placeholder='*******************' required/>
        </div>
        <button className="bg-dark py-2 font-semibold text-accent text-xl rounded-sm" type='submit'>Login</button>
      </form>
    </div>
    </section>
  )
}

export default Login
