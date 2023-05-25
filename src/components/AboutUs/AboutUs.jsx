import './AboutUs.css'
import { RiPlantLine } from "react-icons/ri";
import { FiPackage } from "react-icons/fi";
import { BsTelephoneOutbound } from "react-icons/bs";
import FrameAbout from './FrameAbout';

const AboutUs = () => {
  return (
    <div className='containerAbout'>
      <div className='titleAbout'>
        <h1>About Us</h1>
        <h2>Order now and appreciate the beauty of moment</h2>
      </div>
      <div className="frameContainer">
          <FrameAbout
            icon= {<RiPlantLine/>}
            title="Large Assortment"
            text ="we offer many different types of products with fewer variations in each category."
         />
          <FrameAbout
            icon= {<FiPackage/>}
            title="Fast & Free Shipping"
            text ="4-day or less delivery time, free shipping and an expedited delivery option."
          />
          <FrameAbout
            icon= {<BsTelephoneOutbound/>}
            title="24/7 Support"
            text ="answers to any business related inquiry 24/7 and in real-time."
          />
      </div> 
       
    </div>
  )
}

export default AboutUs