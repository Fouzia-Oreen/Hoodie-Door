import { Locate, Mail, Phone } from "lucide-react"
import { Link } from "react-router-dom";
import image_1 from '../assets/instagram-1.jpg'
import image_2 from '../assets/instagram-3.jpg'
import image_3 from '../assets/instagram-5.jpg'
import image_4 from '../assets/instagram-4.jpg'
import image_5 from '../assets/instagram-2.jpg'
import image_6 from '../assets/instagram-6.jpg'


const Footer = () => {
  return (
    <>
    <footer className="bg-[#d1cfc5]">
    <div className="section__container footer__container">
      <div className="footer__col">
        <h4>Contact Info</h4>
        <p>
            <span><Locate /></span>
            123, London Bridge Street
        </p>
        <p>
            <span><Mail /></span>
            support@hoodiedoor.com
        </p>
        <p>
            <span><Phone /></span>
            (+123) 456 789 009 00
        </p>
      </div>
      <div className="footer__col">
        <h4>Company</h4>
        <Link to="/" >Home</Link>
        <Link to="/" >About</Link>
        <Link to="/" >Carrer</Link>
        <Link to="/" >Terms & Condition</Link>
        {/* <Link to="/" >Track Order</Link> */}
      </div>
      <div className="footer__col">
        <h4>Useful Links</h4>
        <Link to="/" >Help</Link>
        <Link to="/" >Track my Order</Link>
        <Link to="/" >Mens</Link>
        <Link to="/" >Womens</Link>
        <Link to="/" >Accessories</Link>
      </div>
      <div className="footer__col">
        <h4>Instagram</h4>
        <div className="instagram__grid">
            <img src={image_1} alt="insta-img" />
            <img src={image_2} alt="insta-img" />
            <img src={image_3} alt="insta-img" />
            <img src={image_4} alt="insta-img" />
            <img src={image_5} alt="insta-img" />
            <img src={image_6} alt="insta-img" />
        </div>
      </div>
    </div>
    </footer>
    <div className="footer__bar">copyright	&#169; CODOREEN. ALL right reserved</div>
    </>
  )
}

export default Footer
