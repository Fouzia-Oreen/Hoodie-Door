/* eslint-disable react/prop-types */

export default function CommonTitle({title, desc}) {
  return (
    <div>
    <div className="bg-[#d1cfc5]">
    <section className="section__container ">
    <h2 className="section__header capitalize">{title}</h2>
    <p className="section__subheader">{desc}</p>
    </section>
    </div>
    </div>
  )
}
