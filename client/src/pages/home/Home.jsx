
import TrendingProducts from '../shop/product-details/TrendingProducts'
import Banner from './Banner'
import Category from './Category'
import Deals from './Deals'
import Featured from './Featured'
import PromoBanner from './PromoBanner'

const Home = () => {
  return (
    <>
     <Banner /> 
     <Category />
     <Featured />
     <TrendingProducts />
     <Deals />
     <PromoBanner />
    </>
  )
}

export default Home
