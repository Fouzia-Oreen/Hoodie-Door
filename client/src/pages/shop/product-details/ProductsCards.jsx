/* eslint-disable react/prop-types */
import { ShoppingCart } from "lucide-react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import RatingStars from "../../../components/RatingStars.jsx";
import { addToCart } from "../../../redux/features/cart/CartSlice.js";

const ProductsCards = ({products}) => {
   const dispatch = useDispatch();
   const handleAddToCart = (product) => {
    dispatch(addToCart(product))
   }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {
        products.map((product, index) => (
            <div key={index} className="product__card">
                <div className="relative">
                    <Link to={`/shop/${product.id}`}>
                     <img src={product.image} alt="product-img" className="max-h-96 md:h-64 w0full object-cover hover:scale-105 transition-all duration-300"/>
                    </Link>
                    <div className="hover:block absolute top-3 right-3">
                        <button onClick={(e) => {
                            e.stopPropagation();
                            handleAddToCart(product)
                          }}>
                        <ShoppingCart className="bg-accent p-1.5 text-primary text-lg font-medium h-8 w-8"/>
                        </button>
                    </div>
                </div>
                {/* product description */}
                <div className="product__card__content">
                    <h4>{product.name}</h4>
                    <p>$ {product.price} {product.oldPrice ? <s>${product?.oldPrice}</s> : null }</p>
                    <RatingStars rating={product.rating} />
                </div>
            </div>
        ))
      }
    </div>
  )
}

export default ProductsCards
