import { Headset, MapPinCheck, Truck } from "lucide-react"

const PromoBanner = () => {
  return (
    <section className="section__container banner__container">
      <div className="banner__card">
        <span><Truck /></span>
        <h4>Free Delivery</h4>
        <p>Offer convenience and the ability to shop from anywhere, anytime.</p>
      </div>
      <div className="banner__card">
        <span><MapPinCheck /></span>
        <h4>Track Order</h4>
        <p>We have the best tracking service that helps you reach your product to exact location.</p>
      </div>      
      <div className="banner__card">
        <span><Headset /></span>
        <h4>Strong Support</h4>
        <p>Offer customer support services to assist customers with queries and issues.</p>
      </div>
    </section>
  )
}

export default PromoBanner
