/* eslint-disable react-refresh/only-export-components */

import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import AddProducts from "./pages/AddProducts";
import List from "./pages/List";
import Orders from "./pages/Orders";
import Profile from "./pages/Profile";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const backendUrl = import.meta.env.VITE_BACKEND_URL;
export const currency = '$'

 
const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token')?localStorage.getItem('token') : "");
  useEffect(() => {
    localStorage.setItem('token', token)
  }, [token])
  
  return (
    <div className="h-screen">
      <ToastContainer />
      {
        token == '' ? <Login  setToken={setToken}/> : <>
        <Navbar setToken={setToken}/>
        <div className="flex w-full">
          <Sidebar />
          <div className="w-[70%] mx-auto ml-[max(5vw,25px)] my-8">
            <Routes>
              <Route path="/add" element={<AddProducts token={token} />} />
              <Route path="/list" element={<List token={token} />} />
              <Route path="/orders" element={<Orders token={token} />} />
              <Route path="/profile" element={<Profile token={token} />} />
            </Routes>
          </div>
        </div>
        </>
      }

    </div>
  )
}

export default App

