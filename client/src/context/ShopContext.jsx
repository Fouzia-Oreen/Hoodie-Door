/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { toast } from 'react-toastify';
import { products } from '../assets/images/assets.js';

export const ShopContext = createContext();
const ShopContextProvider = (props) => {
    const currency = '$';
    const delivery_fee = 10;
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});

    const addToCart = async (itemId, size) => {
        if (!size) {
            toast.error("Select Product Size")
            return
        }
        let cartData = structuredClone(cartItems);
        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1
            }
            else {
                cartData[itemId][size] = 1
            }
        }else {
            cartData[itemId] = {}
            cartData[itemId][size] = 1
        }
        setCartItems(cartData)
    };

    const getCartCount = () => {
        let totalCount = 0;
        for (const items in cartItems) {
            for (const item in cartItems[items]) {
               try {
                if (cartItems[items][item] > 0) {
                    totalCount += cartItems[items][item]
                }
               } catch (error) {
                console.log(error)
               }             
            }       
        } return totalCount
    }
    
    const updateQuantity = async (itemId, size, quantity) => {
        let cartData = structuredClone(cartItems);
        cartData[itemId][size] = quantity;
        setCartItems(cartData)
    }

    const value = {
        products, 
        currency, 
        delivery_fee, 
        search, 
        setSearch,
        showSearch, 
        setShowSearch,
        cartItems,
        addToCart,
        getCartCount,
        updateQuantity
    }
    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;