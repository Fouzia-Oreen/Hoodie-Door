import { Locate, Mail, Phone } from "lucide-react";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/images/assets.js";
import { company, usefulLinks } from "../data/footer-data.js";


const Footer = () => {
  return (
    <>
    <footer className="bg-[#d1cfc5]">
    <div className="section__container footer__container">
      <div className="footer__col">
        <h4>Contact Info</h4>
        <p >
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
        {
          company.map((item) => (
            <NavLink key={item} to={item.link} >{item.title}</NavLink>
          ))
        }
      </div>
      <div className="footer__col">
        <h4>Useful Links</h4>
        {
          usefulLinks.map((item) => (
            <NavLink key={item} to={item.link} >{item.title}</NavLink>
          ))
        }
      </div>
      <div className="footer__col">
        <h4>Instagram</h4>
        <div className="instagram__grid">
            <img src={assets.insta_1} alt="insta-img" />
            <img src={assets.insta_2} alt="insta-img" />
            <img src={assets.insta_3} alt="insta-img" />
            <img src={assets.insta_4} alt="insta-img" />
            <img src={assets.insta_5} alt="insta-img" />
            <img src={assets.insta_6} alt="insta-img" />
        </div>
      </div>
    </div>
    </footer>
    <div className="footer__bar bg-text-dark text-primary-light">copyright	&#169; CODOREEN. ALL right reserved</div>
    </>
  )
}

export default Footer
