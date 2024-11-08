import RelatedProducts from "../../components/RelatedProducts"
import ClientReviews from "../../components/Reviews"
import SingleProducts from "./product-details/SingleProducts"

const SingleProductPage = () => {
  return (
    <div>
      <div>

      </div>
      {/* product details */}
      <SingleProducts />
      {/* review or ratings */}
      <ClientReviews />
      {/* related products */}
      <RelatedProducts />
    </div>
  )
}

export default SingleProductPage
