import { NavLink } from "react-router-dom";
import add from '../assets/add_icon.png'
import order from '../assets/order_icon.png'
import profile from '../assets/profile_icon.png'
import dashboard from '../assets/dashboard_icon.png'

const sidebarLinks = [
  {path : "/", img: dashboard, title : "Dashboard"},
  {path : "/add", img: add, title : "Add Items"},
  {path : "/list", img: order, title : "List Items"},
  {path : "/orders", img: order, title : "Orders"},
  {path : "/profile", img: profile, title : "Profile"},
]



const Sidebar = () => {
  return (
    <div className='border-r-[1px] border-text-dark w-[18%] min-h-screen'>
      <div className="flex flex-col gap-6 pt-6 pl-[20%] ">
        {
          sidebarLinks.map((item, index)=> (
            <NavLink to={item.path} key={index} className="flex items-center gap-3  py-2"> 
            <img src={item.img} alt="" className="size-5"/>
            <p className="hidden md:block font-medium">{item.title}</p>
            </NavLink>
          ))
        }
        {/* <NavLink to="/" className="flex items-center gap-3  py-2"> 
        <img src={dashboard} alt="" className="size-5"/>
        <p className="hidden md:block font-medium">Dashboard</p>
        </NavLink>
        <NavLink to="/add" className="flex items-center gap-3  py-2"> 
        <img src={add} alt="" className="size-5"/>
        <p className="hidden md:block font-medium">Add Items</p>
        </NavLink>
        <NavLink to="/list" className="flex items-center gap-3  py-2"> 
        <img src={order} alt="" className="size-5"/>
        <p className="hidden md:block font-medium">List Items</p>
        </NavLink>
        <NavLink to="/orders" className="flex items-center gap-3  py-2"> 
        <img src={order} alt="" className="size-5"/>
        <p className="hidden md:block font-medium">Orders</p>
        </NavLink>
        <NavLink to="/profile" className="flex items-center gap-3  py-2"> 
        <img src={profile} alt="" className="size-5"/>
        <p className="hidden md:block font-medium">Profile</p>
        </NavLink> */}
      </div>
    </div>
  )
}

export default Sidebar
