import { Headset, MapPinCheck, Truck } from "lucide-react";
import { Link } from "react-router-dom";

const policyData = [
  { icon: <Truck />, title:"Easy Exchange", desc:"Offer convenience and the ability to shop from anywhere, anytime."},
  { icon: <MapPinCheck />, title:"Track Order", desc:"We have the best tracking service that helps you reach your product to exact location."},
  { icon: <Headset />, title:"Strong Support", desc:"Offer customer support services to assist customers with queries and issues."},
]

const OurPolicy = () => {
  return (
    <section className="section__container banner__container">
      {
        policyData.map((item) => (
          <>
          <Link to="/contact" className="banner__card">
            <span>{item.icon}</span>
            <h4>{item.title}</h4>
            <p>{item.desc}</p>
          </Link>
          </>
        ))
      }
    </section>
  )
}

export default OurPolicy
