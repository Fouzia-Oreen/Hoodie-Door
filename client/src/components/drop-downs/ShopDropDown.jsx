import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const shopDropDownMenu = [
    {
      label : "Mens", 
      path : "/mens"
    },
    {
      label : "Womens", 
      path : "/womens"
    },
    {
      label : "Accessories",
      path : "/accessories"
    },
]


const ShopDropDownMenu = () => {

    // dropdown for shop
    const [isDropDownOpen, setIsDropDownOpen] = useState(false);
    const handleDropDownToggle = () => {
        setIsDropDownOpen(!isDropDownOpen)
    }

    return (
        <>
            <li className='link cursor-pointer font-medium text-text-dark flex gap-2 ' onClick={handleDropDownToggle}>Collection
            {
            isDropDownOpen && (
                <div className="absolute left-30 mt-8 p-4 w-40 bg-[#D1CFC5] border-[1px] border-dark rounded-sm z-50">
                <ul className="space-y-4 p-2 text-sm text-text-dark">
                    {shopDropDownMenu.map((menu, index) => (
                    <li key={index}>
                        <NavLink 
                        onClick={() => setIsDropDownOpen(false)}
                        className="dropdrop-items" 
                        to={`/collection/${menu.path}`}>{menu.label}</NavLink>
                    </li>
                    ))}
                </ul>
                </div>
            )
            }<ChevronDown className='size-4 mt-1.5'/>
            </li>
        </>
    )
}

export default ShopDropDownMenu
