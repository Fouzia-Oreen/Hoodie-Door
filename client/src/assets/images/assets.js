import men from './mens.png'
import women from './womens.png'
import unisex from './unisex.png'
import couple from './couple.png'
import logo from './logo.png'
import cart_icon from './cart_icon.png'
import bin_icon from './bin_icon.png'
import dropdown_icon from './dropdown_icon.png'
import profile_icon from './profile_icon.png'
import search_icon from './search_icon.png'
import star_dull_icon from './star_dull_icon.png'
import star_icon from './star_icon.png'
import menu_icon from './menu_icon.png'
import about_img from './about_img.png'
import contact_img from './contact_img.png'
import razorpay_logo from './razorpay_logo.png'
import stripe_logo from './stripe_logo.png'
import cross_icon from './cross_icon.png'
import insta_1 from './instagram-1.jpg'
import insta_2 from './instagram-2.jpg'
import insta_3 from './instagram-3.jpg'
import insta_4 from './instagram-4.jpg'
import insta_5 from './instagram-5.jpg'
import insta_6 from './instagram-6.jpg'
import deal from './deal.png'
import card_1 from './card_1.png'
import card_2 from './card_2.png'
import card_3 from './card_3.png'



export const assets = {
    logo,
    men,
    women,
    unisex,
    couple,
    cart_icon,
    dropdown_icon,
    profile_icon,
    search_icon,
    star_dull_icon,
    star_icon,
    bin_icon,
    menu_icon,
    about_img,
    contact_img,
    razorpay_logo,
    stripe_logo,
    cross_icon,
    insta_1,
    insta_2,
    insta_3,
    insta_4,
    insta_5,
    insta_6,
    deal,
    card_1,
    card_2,
    card_3

}
// Categories : Men, Women, Unisex, Couple,
// SubCategories : Topwear, Bottomwear, Cap,
// Sizes : [ S, M, L, XL, XXL ]
// Colors ["#FFFFFF","#EBE1BE", "#FED533", "#F36B26", "#E7352B", "#E642A1", "#8D429F", "#1790C8", "#7BBA3C", "#825D41", "#777878","#111111"]

// demo product data 
export const products = [
    {
        _id: "hoodie_door01",
        name: "Men Tapered Fit Flat-Front Trousers",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 140,
        oldPrice: 150,
        image: ["image1", "image2", "image3", "image4"],
        category: "Men",
        subCategory: "Cap",
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["#FFFFFF", "#EBE1BE", "#777878", "#111111"],
        date: 1716627745448,
        bestseller: false,
        onSale: false,
        rating: 4.5,
    },
]