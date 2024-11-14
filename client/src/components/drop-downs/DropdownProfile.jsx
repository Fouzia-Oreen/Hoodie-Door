import { useSelector } from 'react-redux';
import { adminDropDownMenu, userDropDownMenu } from '../../data/user-data';
import avatarImg from '../../assets/user.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logout from '../Logout';

const DropdownProfile = () => {
    // show user if logged-in
    const {user} = useSelector((state) => state.auth);

    // dropdown for user-profile
    const [isDropDownOpen, setIsDropDownOpen] = useState(false);
    const handleDropDownToggle = () => {
        setIsDropDownOpen(!isDropDownOpen)
    }

    // toggle dropdown menu
    const dropDownMenu = user?.role === 'admin' ? [...adminDropDownMenu] : [...userDropDownMenu];

    return (
        <span>
        {
            user && user ? (<>
            <img 
            onClick={handleDropDownToggle}
            src={user?.profileImage || avatarImg} 
            alt="user-profile" 
            className="size-6 object-cover rounded-full cursor-pointer" />
            {
            isDropDownOpen && (
                <div className="absolute right-0 mt-3 p-4 w-48 bg-[#D1CFC5] border-[1px] border-dark rounded-sm z-50">
                <ul className="space-y-4 p-2 text-sm font-medium text-text-dark">
                    {dropDownMenu.map((menu, index) => (
                    <li key={index}>
                        <Link 
                        onClick={() => setIsDropDownOpen(false)}
                        className="dropdrop-items" 
                        to={menu.path}>{menu.label}</Link>
                    </li>
                    ))}
                    {/* logout */}
                    <li><Logout /></li>
                </ul>
                </div>
            )
            }
            </>) : (
            <Link to="login">
            <i className="ri-user-line"></i>
            </Link>)
        }

        </span>
    )
}

export default DropdownProfile
