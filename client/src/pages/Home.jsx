import BestSeller from "../components/BestSeller"
import Category from "../components/Category"
import Deals from "../components/Deals"
import Featured from "../components/Featured"
import Hero from "../components/Hero"
import LatestCollection from "../components/LatestCollection"
import NewsLetter from "../components/NewsLetter"
import OurPolicy from "../components/OurPolicy"

const Home = () => {
  return (
    <div>
      <Hero />
      <Category />
      <Featured />
      <LatestCollection />
      <BestSeller />
      <Deals />
      <OurPolicy />
      <NewsLetter />
    </div>
  )
}

export default Home
