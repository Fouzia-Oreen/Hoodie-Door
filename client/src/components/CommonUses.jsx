/* eslint-disable react/prop-types */
import { ChevronRight } from "lucide-react"
import { Link } from "react-router-dom"

// common title
export const CommonProductPageTitle = ({title,  page }) => {
  return (
    <div className="bg-[#d1cfc5]">
    <section className="section__container">
      <div className='flex flex-col'>
      <h2 className="section__header capitalize">{title}</h2>
      <div className="section__subheader flex space-x-2">
        <span ><Link to='/'>home</Link></span><ChevronRight />
        <span ><Link to='/shop'>shop</Link></span><ChevronRight />
        <span>{page}</span>
      </div>
      </div>
    </section>
    </div>
  )
}

export const CommonTitle = ({title, desc}) => {
  return (
    <section className="section__container">
      <div className='flex flex-col'>
      <h2 className="section__header capitalize">{title}</h2>
      <p className="section__subheader mb-12">{desc}</p>
      </div>
    </section>
  )
}

// buttons 
/**
 * sign-up
 * sign-in
 * add-to-cart
 * view-more
 * load-more
 */