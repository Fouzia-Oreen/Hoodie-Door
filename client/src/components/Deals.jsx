import { assets } from '../assets/images/assets'

const Deals = () => {
  return (
    <div className='deals__container'>
      <div className='deals__image'>
        <img src={assets.deal} alt="deal-img" />
      </div>
      <div className="deals__content">
        <h5>Get Up To 20% Discount</h5>
        <h4>Deals Of The Month</h4>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est quos eius exercitationem quidem optio molestiae hic ut, dolore culpa esse corrupti voluptates? Et, eaque accusamus?</p>
        <div className='deals__countdown flex-wrap'>
            <div className='deals__countdown__card'>
                <h4>14</h4>
                <p>Days</p>
            </div>
            <div className='deals__countdown__card'>
                <h4>20</h4>
                <p>Hours</p>
            </div>
            <div className='deals__countdown__card'>
                <h4>15</h4>
                <p>Mins</p>
            </div>
            <div className='deals__countdown__card'>
                <h4>5</h4>
                <p>Sec</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Deals
