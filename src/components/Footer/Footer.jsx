import './Footer.css'
import { GrFacebookOption } from "react-icons/gr";
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import Informations from './Informations';

const Footer = () => {
  return (
    <footer className='containerFooter'>
        <div className="titleFooter">
            <h3>GREENMIND</h3>
            <p>We help you find your dream plant</p>
            <div className="SocialMedia">
                <button>
                    <GrFacebookOption />
                </button>
                <button>
                    <AiFillInstagram />
                </button>
                <button>
                    <BsTwitter/>
                </button>
            </div>
            <h4>2023 all Right Reserved Term of use GREENMIND</h4>
        </div>

        <div className="moreInformations">
            <Informations
                title= {"Information"}
                infoOne={"About"}
                infoTwo={"Product"}
                infoThree={"Blog"}
            />

            <Informations
                title= {"Company"}
                infoOne={"Community"}
                infoTwo={"Career"}
                infoThree={"Our story"}
            />

            <Informations
                title= {"Content"}
                infoOne={"Getting Started"}
                infoTwo={"Pricing"}
                infoThree={"Resources"}
            />
        </div>
    </footer>
  )
}

export default Footer