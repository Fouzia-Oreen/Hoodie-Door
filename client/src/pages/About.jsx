import { assets } from "../assets/images/assets"
import NewsLetter from "../components/NewsLetter"
import Title from "../components/Title"

const About = () => {
  return (
    <div className="section__container">
      <div className="text-2xl ">
        {/* title */}
        <Title text1={"About"} text2={"Us"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img src={assets.about_img} alt="img" className="w-full max-w-[450px]" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4">
        <p className="text-text-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nobis odit ullam animi reprehenderit numquam ab vel eos dolorem maiores? dolor sit amet consectetur adipisicing elit. </p>
        <p className="text-text-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nobis odit ullam animi reprehenderit numquam ab vel eos dolorem maiores? dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nobis odit ullam animi reprehenderit numquam </p>
        <b className="text-text-dark">Our Mission</b>
        <p className="text-text-dark">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nobis odit ullam animi reprehenderit numquam ab vel eos dolorem maiores? dolor sit amet consectetur  </p>
        </div>
      </div>
      <div className="text-2xl py-4">
      <Title text1={"Why"} text2={"Choose Us"} />
      </div>
      <div className="flex flex-col text-sm mb-20 md:flex-row">
        <div className="px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
        <b className="text-text-dark">Quality Assurance : </b>
        <p className="text-text-dark">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nobis odit ullam animi reprehenderit numquam ab vel eos dolorem maiores? dolor sit amet consectetur  </p>
        </div>
        <div className="px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
        <b className="text-text-dark">Convenience : </b>
        <p className="text-text-dark">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nobis odit ullam animi reprehenderit numquam ab vel eos dolorem maiores? dolor sit amet consectetur  </p>
        </div>
        <div className="px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
        <b className="text-text-dark">Exceptional Customer Service : </b>
        <p className="text-text-dark">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nobis odit ullam animi reprehenderit numquam ab vel eos dolorem maiores? dolor sit amet consectetur  </p>
        </div>
      </div>
      <NewsLetter />
    </div>
  )
}

export default About
