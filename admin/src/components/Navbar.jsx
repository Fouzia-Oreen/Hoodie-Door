import { assets } from "../assets/assets";



export default function Navbar() {
    <>
    <div>
        <img className="w-[max(10%,80px)]" src={assets.logo} alt="logo" />
        <button className="btn">Logout</button>
    </div>
    </>
 
}


