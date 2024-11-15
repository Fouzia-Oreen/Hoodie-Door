import { assets } from "../assets/images/assets"
import NewsLetter from "../components/NewsLetter"
import Title from "../components/Title"

const Contact = () => {
  return (
    <div className="section__container">
        <div className="text-2xl mb-12 ">
        {/* title */}
        <Title text1={"Contact"} text2={"Us"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-10 mb-28">
        <img src={assets.contact_img} alt="" className="w-full md:max-w-[480px]"/>
        <div className="flex flex-col justify-center gap-6 items-start">
          <p className="font-semibold text-xl">Our Store</p>
          <p className="text-text-light"> 54391 Williams Station <br/> Suite 310, Washington, </p>
          <p className="text-text-light">Tel : (415) 553-0423 <br/> Email : support@hoodiedoor.com</p>
          <p className="font-semibold text-xl"> Careers at HoodieDoor</p>
          <p className="text-text-light"> Learn more about our team & job openings </p>
          <button className="btn">Explore Jobs</button>
        </div>
      </div>
      <NewsLetter />
    </div>
  )
}

export default Contact
